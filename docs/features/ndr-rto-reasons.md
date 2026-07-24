---
sidebar_position: 8
title: NDR, NPR and RTO Reason Mapping
description: How Velocity standardizes carrier reason codes into NDR, NPR, and RTO reason categories — and what determines the reason shown on a shipment.
---

# NDR, NPR and RTO Reason Mapping - FAQ

> Understand how delivery failure reasons, pickup failure reasons, and return-to-origin reasons are determined for every shipment.

---

## Table of Contents
1. [Overview](#1-overview)
2. [NDR Reason](#2-ndr-reason)
3. [NPR Reason](#3-npr-reason)
4. [RTO Reason](#4-rto-reason)
5. [Troubleshooting](#5-troubleshooting)

---

## 1. Overview

### Q: What are NDR, NPR and RTO reasons?
**A:**

| Term | What it means |
|------|--------------|
| **NDR** (Non-Delivery Report) | A failed forward delivery attempt — e.g., customer not available, wrong address |
| **NPR** (Non-Pickup Report) | A failed pickup attempt — the carrier could not collect the shipment from your warehouse |
| **RTO** (Return to Origin) | The shipment is being returned to your warehouse — the RTO reason records why |

Each of these gets a **standardized reason category** on the shipment, mapped from the raw text the carrier sends. These categories power dashboards, NDR management automations, and downloadable reports.

### Q: Why does Velocity show a "reason category" instead of the carrier's raw text?
**A:** Each carrier uses different language for the same situation (e.g., "Customer Refused" vs "Consignee not available to accept" vs "Door closed"). Velocity maps all of these to a consistent set of reason categories so you can filter, report, and automate across carriers uniformly.

---

## 2. NDR Reason

### Q: How is the NDR reason determined?
**A:** When a carrier reports a failed delivery attempt (`ndr_raised` status), Velocity extracts the carrier's reason text and maps it to a standardized NDR reason category.

The mapping works as follows:
1. **Exact match** — the carrier's reason text is checked against a known mapping table
2. **Substring match** — if no exact match, the longest matching keyword is used
3. **Default** — if no match is found, the reason is recorded as `other`

### Q: Which reason text does Velocity use for the mapping?
**A:** This varies slightly by carrier:
- **Delhivery**: the full event description is used directly for mapping
- **Other carriers**: a dedicated reason code field in the carrier's webhook is used first; the description is the fallback

### Q: What happens when a shipment has multiple NDR events?
**A:** Each new NDR event **overwrites** the previous NDR reason stored on the shipment. The shipment always reflects the most recent NDR reason.

---

## 3. NPR Reason

### Q: How is the NPR (pickup failure) reason determined?
**A:** When a carrier reports a failed pickup attempt (`not_picked` status), Velocity maps the carrier's reason text through a separate NPR reason category mapping — using the same exact-match → substring-match → default logic as NDR.

The NPR reason is stored independently from the NDR reason on the shipment.

### Q: Is the NPR reason mapping the same as the NDR mapping?
**A:** No — NPR uses its own category mapping table, which reflects pickup-specific failure modes (e.g., package not ready, warehouse closed). NDR reasons relate to delivery failures, which are different situations.

---

## 4. RTO Reason

### Q: How is the RTO reason determined?
**A:** When a carrier reports an RTO event, Velocity determines the RTO reason using the following priority chain:

1. **Carrier's RTO reason** — the carrier's reason text for the RTO event is mapped through the RTO reason category table (same exact-match → substring-match logic). If this produces a valid, non-generic reason, it is used.
2. **NDR reason from the same event** — if the RTO event's own reason maps to `other` or is blank, Velocity checks whether the triggering tracking event has its own NDR category set (some carriers report an NDR-type reason alongside the RTO status).
3. **Last NDR reason on the shipment** — if neither of the above yields a useful reason, Velocity falls back to the most recent NDR reason already recorded on the shipment.

### Q: Why does my shipment's RTO reason look like an NDR reason?
**A:** This is expected behavior. When a carrier initiates an RTO without sending a specific RTO-level reason, Velocity automatically uses the most recent NDR reason for that shipment. This gives you a meaningful signal (e.g., "Customer Not Available") rather than showing a blank or generic `other`.

### Q: Can the RTO reason be overwritten later?
**A:** The RTO reason is set the first time a valid (non-`other`) reason is determined. Subsequent RTO-status events can refine it only if the current value is still `other` or blank — a confirmed reason is not overwritten by a worse one.

### Q: Which carrier events trigger RTO reason assignment?
**A:** For most carriers, the RTO reason is set on the `rto_initiated` event. For **Delhivery**, it is also set on `rto_in_transit` events, since Delhivery often carries the reason at that stage instead.

---

## 5. Troubleshooting

### Q: The NDR/RTO reason shows as "other" — what does that mean?
**A:** `other` means Velocity could not match the carrier's reason text to any known category. This can happen when:
- The carrier sends a new or unusual reason string not yet in Velocity's mapping table
- The reason field in the carrier's webhook was blank

If you see this frequently for a specific carrier, contact support@velocity.in — we can add the missing mapping.

### Q: The NDR reason on a shipment changed after an RTO event. Is that correct?
**A:** The NDR reason on the shipment is updated with each new NDR event. The RTO reason is a separate field and is updated independently. If you see the NDR reason change, it means another NDR event arrived after the previous one.

### Q: Can I see the raw reason text the carrier sent, not just the mapped category?
**A:** Yes — open the **Order Details** drawer, go to the **Tracking Timeline**, and click on any individual tracking event. The raw event description from the carrier is visible there. The reason category displayed at the shipment level is the mapped version.

---

## Need Help?

- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard

Always include the **AWB number** when reporting reason mapping issues — it helps our team look up the raw carrier event.
