---
sidebar_position: 3
title: Upstream Updates
description: Why tracking updates from carriers may be delayed, how Velocity syncs carrier data, and what to do when updates are stuck.
---

# Upstream Updates

> Why tracking updates from carriers may be delayed and what to do about it

"Upstream updates" refers to tracking and status events that originate from the carrier and flow into Velocity. When a shipment doesn't update in Velocity even though something has happened on the carrier's end, it's typically an upstream sync issue.

---

## Table of Contents
1. [How carrier updates flow into Velocity](#1-how-carrier-updates-flow-into-velocity)
2. [Tracking not updating](#2-tracking-not-updating)
3. [Shipment stuck in a status for days](#3-shipment-stuck-in-a-status-for-days)
4. [When to escalate to support](#4-when-to-escalate-to-support)

---

## 1. How Carrier Updates Flow into Velocity

### Q: How does Velocity get tracking updates from carriers?

**A:** Velocity syncs tracking events from carriers in two ways:

| Sync Method | Description | Typical Lag |
|-------------|-------------|-------------|
| **Webhook / Push** | Carrier sends events to Velocity in real-time | Near real-time (seconds to minutes) |
| **Polling** | Velocity periodically fetches updates from the carrier | 15–60 minutes |

Most carriers use a mix of both. The lag you see depends on which method the carrier uses for a given event type.

---

### Q: Which carriers have longer update lags?

**A:** The update frequency varies by carrier and event type. As a general guide:
- **Most events** (Out for Delivery, Delivered, NDR) arrive within 15–60 minutes
- **Some carriers** batch their updates, so you may see a gap of 1–2 hours
- **Hub transit scans** in particular can be infrequent — a shipment can go 12–24 hours without an update while inside a hub, which is normal

When in doubt, cross-check directly on the carrier's tracking website using the AWB number.

---

## 2. Tracking Not Updating

### Q: My shipment shows "In Transit" but hasn't had a new update in 24+ hours. What should I do?

**A:**
1. **Check time elapsed** — Surface (road) shipments can take 5–7 days; air shipments 1–3 days. Hub processing can create 24-hour blackout windows with no scans, even when the shipment is moving normally
2. **Check the carrier's website directly** — go to [Carrier Tracking Sites](/tracking#quick-reference-carrier-tracking-websites) and enter the AWB number to see if the carrier's own system has more recent events
3. **Check the NDR Panel** — the shipment may have had a failed delivery attempt that hasn't synced to Velocity yet
4. **Wait 1–2 hours** — if the carrier's site shows a recent event, it will sync to Velocity shortly
5. **Contact support** if the carrier's website also shows no update for >48 hours — we'll initiate a trace with the carrier

---

### Q: The carrier's website shows a recent event but Velocity hasn't updated yet. How long should I wait?

**A:** If the carrier's website shows an event that Velocity doesn't, wait up to 60 minutes for it to sync. If Velocity still hasn't updated after 60 minutes, contact support with the AWB number and the event you're seeing on the carrier's website.

---

### Q: Tracking shows "Picked Up" but the carrier hasn't physically collected the package yet.

**A:** Carriers sometimes pre-scan pickups in batch or upload scans before the physical collection happens. If the pickup genuinely hasn't occurred after the expected window (typically same day or next morning):
1. Confirm the package was ready at pickup time
2. Contact support — we'll follow up with the carrier to arrange pickup

---

### Q: My shipment just went out for delivery but the status hasn't updated in Velocity.

**A:** "Out for Delivery" events typically come in during the morning when the carrier loads their delivery runs. If you don't see it in Velocity but expect the shipment to be delivered today:
1. Check the carrier's website directly
2. Wait 30–60 minutes for the event to sync
3. Delivery confirmation ("Delivered") usually comes within 2 hours of the actual delivery

---

## 3. Shipment Stuck in a Status for Days

### Q: My shipment has been "In Transit" for 5+ days with no update. Could it be lost?

**A:**
1. First verify on the **carrier's own website** — hub processing can cause extended gaps in tracking
2. If the carrier's website also shows no update for more than 5 days, raise a support ticket — Velocity will initiate a trace with the carrier
3. If the carrier confirms the shipment is lost, Velocity will help you file a claim

---

### Q: My shipment has been "Out for Delivery" for more than 24 hours. What's happening?

**A:** A shipment stuck at "Out for Delivery" for more than 24 hours usually means:
- The delivery was attempted but failed (the NDR event may not have synced yet)
- The carrier did not actually attempt delivery (a "fake attempt")

**What to do:**
1. Check the **NDR Panel** in your Velocity dashboard — a failed attempt may already be recorded there
2. If the NDR Panel shows an attempt, take action based on the NDR reason (reattempt, update address, etc.)
3. If nothing is in the NDR Panel and it's been >24 hours, raise a support ticket — we'll escalate to the carrier to investigate

---

### Q: A shipment was showing RTO, but now it seems stuck in RTO transit. What's normal?

**A:** RTO transit timelines are similar to forward delivery — allow 3–7 days for the return to reach your warehouse, depending on the carrier and route. Check the carrier's website for scan activity. If no updates for >5 days, contact support.

---

## 4. When to Escalate to Support

| Situation | When to Contact Support |
|-----------|------------------------|
| No tracking update in Velocity | After 60 minutes if carrier's site has the event |
| Carrier's site also shows no update | After 48 hours of no scan activity |
| Shipment stuck "In Transit" | After 5+ days with no carrier-side scan |
| Stuck "Out for Delivery" | After 24+ hours |
| Suspected fake delivery attempt | Immediately — escalate through support to the carrier |
| Possible lost shipment | After 5+ days with no carrier-side scan |

**Always include:**
- AWB number
- Last known tracking event (date, time, location)
- What the carrier's own website shows

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your Velocity Shipping dashboard

Always provide the **AWB number** when reaching out — it's the fastest way for our team to look up the shipment.
