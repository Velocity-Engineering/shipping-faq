---
sidebar_position: 6
title: Status Mismatch
description: Why the shipment status in Velocity may differ from what the carrier shows, what your store shows, or what your customer sees — and how to resolve it.
---

# Status Mismatch

> Why the status in Velocity may differ from the carrier's website, your store, or your customer's view

---

## Table of Contents
1. [Velocity vs carrier website](#1-velocity-vs-carrier-website)
2. [Velocity vs Shopify / WooCommerce](#2-velocity-vs-shopify--woocommerce)
3. [Customer-facing status vs Velocity](#3-customer-facing-status-vs-velocity)
4. [Delivered in Velocity but customer says not received](#4-delivered-in-velocity-but-customer-says-not-received)
5. [RTO status discrepancies](#5-rto-status-discrepancies)

---

## 1. Velocity vs Carrier Website

### Q: The carrier's website shows a newer status than Velocity. Why?

**A:** Velocity syncs tracking events from carriers periodically — there is typically a lag of **15–60 minutes** before a new carrier event appears in Velocity. This is normal.

If the carrier's website shows an event that Velocity doesn't:
- Wait up to 60 minutes for the sync to catch up
- If Velocity still hasn't updated after 60 minutes, contact support with the AWB number and the event visible on the carrier's website

---

### Q: The carrier's website shows a completely different status than Velocity — not just a timing lag. What's happening?

**A:** This can happen when:

| Scenario | What It Means |
|----------|--------------|
| Carrier reversed a status (e.g., changed "Delivered" back to "In Transit") | Carrier corrections can take time to propagate; Velocity may show the older event until the correction syncs |
| Multiple AWBs exist for the same order | Velocity may be tracking a different AWB — check the AWB shown in Velocity against the one you're checking on the carrier's site |
| Shipment was re-manifested with a different carrier | The original carrier's AWB is no longer active — check the current AWB in Order details |

If the mismatch persists for more than a few hours, contact support with the AWB number and screenshots of both statuses.

---

### Q: Velocity shows "Manifested" but the carrier's website says the AWB doesn't exist yet. Why?

**A:** There's a brief window after manifestation where the carrier's system hasn't yet activated the AWB for tracking. This usually resolves within 30–60 minutes of the AWB being generated. If the carrier's site still shows no record after 2 hours, raise a support ticket.

---

## 2. Velocity vs Shopify / WooCommerce

### Q: Velocity shows the order as shipped/manifested but Shopify still shows it as "Unfulfilled".

**A:**
1. Go to **Settings → Integrations → Shopify**
2. Verify that **"Push fulfillment status to Shopify"** is enabled
3. Fulfillment status is pushed to Shopify when a shipment is manifested — check Shopify's order activity log to see if a fulfillment was attempted
4. If the update hasn't arrived in Shopify after 30 minutes, contact support with the Order ID

---

### Q: Shopify shows the order as "Fulfilled" but Velocity shows it as "Order Created" (not manifested).

**A:** This usually means the fulfillment was marked manually in Shopify (not triggered by Velocity). The order may not have been manifested through Velocity yet. To manifest it:
1. Find the order in Velocity's Orders page
2. Create a shipment from the order details drawer

---

### Q: WooCommerce order status and Velocity order status are out of sync.

**A:** Velocity and WooCommerce sync bidirectionally — Velocity pulls new orders from WooCommerce and pushes fulfillment updates back. Mismatches typically happen when:
- The integration was briefly disconnected (missed an update)
- A status was changed manually in one system without the other knowing

For a specific order that's out of sync, the safest fix is to manually update the status in the system that's lagging. If the integration is consistently out of sync, check the integration health at **Settings → Integrations → WooCommerce** and re-authenticate if needed.

---

## 3. Customer-Facing Status vs Velocity

### Q: My customer sees a different status than what Velocity shows. Why?

**A:** Customers may be checking via:
- **Carrier's own tracking website** — which may be ahead or behind Velocity by 15–60 minutes
- **WhatsApp notifications from Velocity VAS** — these are sent at specific milestones (created, out for delivery, delivered, NDR) and don't reflect every scan in between
- **A branded tracking page** — which pulls from Velocity's data and will reflect the same status as your dashboard

If a customer reports a significant status difference (e.g., they were told "Delivered" but didn't receive it), see [Section 4](#4-delivered-in-velocity-but-customer-says-not-received) below.

---

### Q: The customer received a "Delivered" WhatsApp message but the order hasn't arrived yet.

**A:** Two possibilities:
1. **Carrier marked it delivered prematurely** — go to [Section 4](#4-delivered-in-velocity-but-customer-says-not-received)
2. **Delivered to wrong person or location** — request Proof of Delivery (POD) from support to verify

---

## 4. Delivered in Velocity but Customer Says Not Received

### Q: Velocity shows "Delivered" but the customer says they never received the package.

**A:**
1. Check the **Tracking Timeline** in Order details — look for delivery date, time, and any agent notes
2. Request **Proof of Delivery (POD)** via support — we'll obtain it from the carrier. POD typically includes delivery time, recipient name/signature, and sometimes a photo
3. If the POD confirms delivery to the correct address and the customer still disputes it, a formal claim investigation may be needed — contact support to initiate this

---

### Q: How long does it take to get a Proof of Delivery (POD)?

**A:** POD turnaround depends on the carrier. Most carriers provide it within 24–48 hours of the request. Contact support with the AWB number to request POD — our team will follow up with the carrier directly.

---

## 5. RTO Status Discrepancies

### Q: The carrier's website shows the shipment as RTO delivered to my warehouse, but Velocity still shows "RTO In Transit".

**A:** RTO delivery events can lag in Velocity by 30–60 minutes. If the carrier's website clearly shows RTO delivered and Velocity hasn't updated after 2 hours, contact support with the AWB number.

---

### Q: Velocity shows "RTO Initiated" but the carrier's website shows it's already been returned. What should I do?

**A:** The sync should catch up within 60 minutes. If Velocity still shows an outdated RTO status after that window, contact support. Note that RTO charges are applied **72 hours after the RTO event** — the status sync lag does not affect when charges are applied (charges are based on the event timestamp from the carrier, not when it appears in Velocity).

---

### Q: The shipment was cancelled before pickup but now shows as RTO. Why?

**A:** This occasionally happens when:
- The carrier picked up the shipment before the cancellation was processed
- The cancellation request reached the carrier after the pickup scan

In this case, the carrier treats it as a return. Contact support with the AWB number — our team will confirm what happened and advise on next steps. Note: if pickup already occurred, a forward shipping charge may apply.

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your Velocity Shipping dashboard

When reporting a status mismatch, always include:
- **AWB number**
- **What Velocity shows** vs **what the carrier / store / customer sees**
- **Timestamp** of the discrepancy
