---
sidebar_position: 1
title: Tracking & Order Status
description: Track shipments, understand status updates, resolve tracking issues, and manage order synchronization.
---

# Tracking & Order Status - Frequently Asked Questions

> Track your shipments, understand statuses, and resolve sync issues

---

## Table of Contents
1. [Tracking Shipments](#1-tracking-shipments)
   - [Where can I see pickup date/time?](#q-where-can-i-see-the-pickup-date-and-time-for-a-shipment)
   - [Where can I see delivery date/time?](#q-where-can-i-see-the-delivery-date-and-time-for-a-shipment)
   - [Where can I see out-for-delivery time?](#q-where-can-i-see-when-a-shipment-went-out-for-delivery)
   - [How do I see the full shipment timeline?](#q-how-do-i-see-the-full-event-history--timeline-for-a-shipment)
   - [How long does pickup take after manifesting?](#q-how-long-after-manifesting-does-carrier-pickup-happen)
2. [Shipment Status Glossary](#2-shipment-status-glossary)
3. [NDR Reasons & Resolution](#3-ndr-reasons--resolution)
4. [Tracking Not Updating](#4-tracking-not-updating)
5. [Order Synchronization](#5-order-synchronization)
6. [Customer-Facing Tracking](#6-customer-facing-tracking)
7. [Common Issues](#7-common-issues)

---

## 1. Tracking Shipments

### Q: How do I track a shipment in Velocity?
**A:**
1. Go to **Orders** or **Shipments** in the dashboard
2. Search by Order ID, AWB number, or customer name
3. Click the order to open the details drawer
4. View the **Tracking Timeline** on the right-hand side

---

### Q: How do I track using an AWB number?
**A:** Use the search bar at the top of the Orders or Shipments page and enter the AWB number directly. You can also enter it on the carrier's own tracking website.

---

### Q: Where can I see the pickup date and time for a shipment?
**A:** There are two ways:

**On the dashboard:**
1. Go to **Orders** or **Shipments**
2. Search for the order by ID or AWB number
3. Click the order to open the details drawer
4. Scroll to the **Tracking Timeline** — the **"Picked Up"** event shows the exact date and time the carrier scanned and collected the package

**Via the Shipping Copilot:**
Ask directly — for example: *"When was order #12345 picked up?"* or *"Show me pickup details for AWB 4059812345678"* — the Copilot will retrieve the shipment timeline and show you the pickup timestamp.

> **Note:** The pickup timestamp reflects when the carrier scanned the package at collection. If a pickup has not happened yet, the status will show **"Pickup Pending"** or **"Manifested"** — no timestamp will be available until the carrier completes the scan.

---

### Q: Where can I see the delivery date and time for a shipment?
**A:**
1. Go to **Orders** or **Shipments** and open the order
2. In the **Tracking Timeline**, look for the **"Delivered"** event — it shows the exact date and time of delivery
3. You can also ask the Copilot: *"When was order #12345 delivered?"*

> If the shipment has not been delivered yet, no timestamp will be shown — the current status will say **"Out for Delivery"** or **"In Transit"**.

---

### Q: Where can I see when a shipment went out for delivery?
**A:**
1. Open the order details and scroll to the **Tracking Timeline**
2. Look for the **"Out for Delivery"** event — it shows the date and time the delivery agent started their route

You can also ask the Copilot: *"When did order #12345 go out for delivery?"*

---

### Q: How do I see the full event history / timeline for a shipment?
**A:**
1. Go to **Orders** or **Shipments** and click on the order
2. The **Tracking Timeline** panel on the right shows every milestone in chronological order: Manifested → Picked Up → In Transit → Out for Delivery → Delivered (and any NDR or RTO events)
3. Each event includes a timestamp and the carrier's last-known location

For more granular carrier scan events (hub scans, location updates between milestones), check the carrier's own tracking website using the AWB number.

---

### Q: How long after manifesting does carrier pickup happen?
**A:** Pickup timing depends on your carrier and warehouse location:
- Carriers typically do **1–2 pickup runs per day**
- If you manifest before the carrier's daily cut-off time, pickup usually happens the same day
- If you manifest after the cut-off, pickup happens the next business day
- Cut-off times vary by carrier (typically 12:00–14:00 for same-day pickup)

If there is no pickup after **24 hours**, contact support with the AWB number.

---

### Q: Can I track multiple shipments at once?
**A:** Yes — go to **Reports** and download a bulk shipment report. It includes tracking status for all shipments in the selected date range. The API also supports bulk tracking queries.

---

## 2. Shipment Status Glossary

### Forward Shipment Statuses

| Status | Meaning | What to Do |
|--------|---------|-----------|
| **Order Created** | In Velocity, not yet manifested | Manifest the order to generate an AWB |
| **Processing** | Shipment request sent, awaiting AWB | Wait — usually resolves in &lt;5 min |
| **Manifested** | AWB assigned, confirmed with carrier | Nothing — await pickup |
| **Pickup Pending** | Awaiting carrier collection | Ensure package is ready |
| **Picked Up** | Carrier has collected the package | Nothing — in transit |
| **In Transit** | Moving through carrier network | Normal — no action needed |
| **Out for Delivery** | With delivery agent today | Ensure someone can receive it |
| **Delivered** | Successfully delivered ✓ | Order complete |
| **Undelivered** | Delivery attempt failed | Check NDR Panel for reason + action |
| **Delivery Exception** | Unusual issue during delivery | Contact support |

### Return / RTO Statuses

| Status | Meaning | What to Do |
|--------|---------|-----------|
| **RTO Initiated** | Return process started | Await return |
| **RTO In Transit** | Package returning to your warehouse | Nothing — await arrival |
| **RTO Out for Delivery** | Return being delivered to your warehouse | Ensure someone can receive it |
| **RTO Delivered** | Package returned to your warehouse ✓ | Update your inventory |
| **RTO Undelivered** | Return delivery to warehouse failed | Contact carrier/support |

### Special Statuses

| Status | Meaning | What to Do |
|--------|---------|-----------|
| **Lost** | Carrier has lost the shipment | Raise a claim via support |
| **Damaged** | Package reported damaged | Raise a claim via support |
| **Cancelled** | Shipment cancelled before pickup | No charge if before pickup |
| **On Hold** | Shipment paused | Contact support |

---

## 3. NDR Reasons & Resolution

### Q: What does an NDR mean and how do I resolve it?

| NDR Reason | Meaning | Recommended Action |
|------------|---------|-------------------|
| **Customer Not Available** | No one home at delivery time | Request reattempt with preferred time slot |
| **Wrong Address** | Delivery address is incorrect | Provide corrected address to carrier |
| **Customer Refused** | Customer refused to accept the package | Confirm customer intent; reattempt or initiate RTO |
| **Phone Unreachable** | Can't reach customer | Update correct phone number |
| **Shipment Damaged** | Package arrived damaged | Raise claim; inspect before accepting |
| **Fake Attempt** | Carrier did not actually attempt delivery | Escalate through support to the carrier |

---

## 4. Tracking Not Updating

### Q: My shipment has been "In Transit" for several days with no updates. What should I do?
**A:**
1. **Check time elapsed** — Inter-city surface shipments can take 5–7 days; air shipments 1–3 days
2. **Check the carrier's website** directly with the AWB number
3. **Check the NDR Panel** — the shipment may have had a failed attempt not yet synced to Velocity
4. Wait 24 hours — tracking updates can lag by a few hours
5. Contact support if stuck >48 hours — always include the AWB number

---

### Q: Tracking shows "Picked Up" but the package hasn't been collected yet.
**A:** Carriers sometimes scan pickups in batch or pre-update statuses. If the physical pickup genuinely hasn't happened after the expected window, contact support and we'll follow up with the carrier.

---

### Q: Why is the tracking in Velocity different from what the carrier's website shows?
**A:** Velocity syncs tracking updates from carriers periodically — there can be a lag of 15–60 minutes. If the discrepancy is more than a few hours, contact support with the AWB number.

---

### Q: A shipment has had no update for over 5 days. Could it be lost?
**A:**
1. First verify on the carrier's own website — hub processing can cause blackout periods
2. If no update for >5 days, raise a support ticket — Velocity will initiate a trace with the carrier
3. If the carrier confirms the shipment is lost, we'll help you file a claim

---

## 5. Order Synchronization

### Q: My Shopify orders are not syncing to Velocity. What should I check?
**A:**
1. **Settings → Integrations → Shopify** — verify the integration status is active (green)
2. Check **sync settings** — which order statuses trigger a sync?
3. Confirm orders were placed **after** the integration was connected (retroactive sync may need a manual trigger)
4. Re-authenticate the integration if it was recently disrupted
5. Contact support if orders are still not syncing after checking the above

---

### Q: Orders are syncing but with wrong details (address, amount, etc.)
**A:** Velocity syncs exactly what the store sends. Check the order in your Shopify/WooCommerce admin first. If the store data is correct but Velocity shows wrong data, contact support with the Order ID.

---

### Q: I manifested an order in Velocity but Shopify still shows it as unfulfilled.
**A:**
1. Go to **Settings → Integrations → Shopify** and verify **"Push fulfillment status to Shopify"** is enabled
2. Fulfillment updates are pushed when a shipment is manifested — check Shopify's activity log
3. If the update isn't reflecting after 30 minutes, contact support

---

### Q: My WooCommerce integration stopped syncing orders after working fine initially.
**A:** Common causes:
- WooCommerce API credentials were regenerated
- Hosting provider updated security settings
- Plugin update required reconfiguration

Go to **Settings → Integrations → WooCommerce** and re-authenticate. Contact support if the issue persists.

---

### Q: Can I import orders manually if sync isn't working?
**A:** Yes:
1. **Manual entry** — Create orders one by one in Velocity
2. **CSV upload** — Go to **Orders → Bulk Upload**
3. **API** — Use the Velocity API to push orders programmatically

---

## 6. Customer-Facing Tracking

### Q: How do my customers track their orders?
**A:** Customers can track via:
- **AWB number** on the carrier's website
- **WhatsApp notifications** (if VAS is enabled) — Velocity sends automatic status updates at key milestones
- **[Branded tracking page](/features/branded-tracking-page)** — A fully customized page at your own subdomain with your logo, social links, and banners; configure it yourself under **Settings → Communication → Branded Tracking Page**

---

### Q: What WhatsApp tracking notifications does Velocity send automatically?
**A:** With VAS enabled, customers receive messages at:
- Shipment created / picked up
- Out for delivery
- Delivered
- Failed delivery (NDR)

See [VAS FAQ](/vas) for setup details.

---

## 7. Common Issues

### Q: My order shows "Manifested" but the carrier hasn't picked it up yet.
**A:**
- Carriers typically do 1–2 pickups per day — check the cut-off time for your carrier
- If manifested after the carrier's daily cut-off, pickup happens the next business day
- If no pickup after 24 hours, contact support with the AWB number

---

### Q: A shipment shows "Delivered" but the customer says they didn't receive it.
**A:**
1. Check the tracking timeline for delivery date, time, and any agent notes
2. Request **Proof of Delivery (POD)** via support — we'll obtain it from the carrier
3. If the address was correct and delivery is confirmed by POD, you may need to file a claim

---

### Q: Can I cancel a shipment after manifesting?
**A:**
- **Before pickup** — Yes, cancel from the Order details page. No charge.
- **After pickup / in transit** — Cannot be cancelled; request RTO initiation instead

---

### Q: The carrier has physically picked up my package but the status still shows "Ready for Pickup". What's happening?

**A:** There is typically a lag between the carrier physically collecting the package and the status updating in Velocity. Here is what to expect:

| Time since physical pickup | Expected status |
|---------------------------|----------------|
| 0 – 30 minutes | May still show Ready for Pickup |
| 30 – 120 minutes | Should update to Picked Up |
| > 2 hours | Status should definitely have updated |

If the status has not changed to **Picked Up** after 2–3 hours:
1. Confirm the carrier ran their daily pickup route to your location — check if other shipments from the same batch have updated
2. Verify the AWB on the **carrier's own tracking website** — if it shows as picked up there, the update will sync to Velocity within the normal window
3. If the carrier's site also shows "Ready for Pickup" after 3+ hours, the carrier may not have scanned the package at collection — contact support with the AWB number so we can follow up with the carrier

> **This is different from** the scenario where tracking shows "Picked Up" but the package hasn't physically moved — that is a carrier pre-scan issue. This question addresses the reverse.

---

## Quick Reference: Carrier Tracking Websites

| Carrier | Tracking Website |
|---------|-----------------|
| Delhivery | delhivery.com |
| BlueDart | bluedart.com |
| DTDC | dtdc.com |
| Xpressbees | xpressbees.com |
| Shadowfax | shadowfax.in |
| Ekart | ekartlogistics.com |

---

## Need Help?

- **Email:** support.shipping@velocity.in
- **Live Chat:** Click the chat icon in your dashboard

Always include the **AWB number** or **Order ID** for faster resolution.
