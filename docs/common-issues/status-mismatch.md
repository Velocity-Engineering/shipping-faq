---
sidebar_position: 6
title: Status Mismatch
description: Why the shipment status in Velocity may differ from what the carrier shows, what your store shows, or what your customer sees — and how to resolve it.
---

# Status Mismatch

> Why the status in Velocity may differ from the carrier's website, your store, or your customer's view

---

## Table of Contents
1. [How status updates work in Velocity](#1-how-status-updates-work-in-velocity)
2. [Velocity vs carrier website](#2-velocity-vs-carrier-website)
3. [Velocity vs Shopify / WooCommerce](#3-velocity-vs-shopify--woocommerce)
4. [Customer-facing status vs Velocity](#4-customer-facing-status-vs-velocity)
5. [Delivered in Velocity but customer says not received](#5-delivered-in-velocity-but-customer-says-not-received)

---

## 1. How Status Updates Work in Velocity

### Q: How does Velocity get shipment status updates from carriers?

**A:** Velocity maintains a status mapping with each carrier (3PL). When a carrier sends a status event, it is mapped to the corresponding Velocity status and updated on your order.

Status updates happen **asynchronously** — they should reflect in Velocity within **15 minutes** of the carrier event occurring.

---

### Q: The status in Velocity doesn't match what the carrier is showing. What should I do?

**A:** If you notice a consistent mismatch between a carrier's status and what Velocity shows — beyond the normal 15-minute lag — please **raise it with our support team**. Velocity's status mapping with the carrier may need to be reviewed or corrected.

Include:
- AWB number
- The status shown in Velocity
- The status shown on the carrier's website
- How long the mismatch has been present

---

## 2. Velocity vs Carrier Website

### Q: The carrier's website shows a newer status than Velocity. How long should I wait?

**A:** Status updates typically appear in Velocity within **15 minutes** of the carrier event. If the carrier's website shows an event that Velocity doesn't:
- Wait up to 15–30 minutes for the sync to catch up
- If Velocity still hasn't updated after that, contact support with the AWB number and the event visible on the carrier's website

---

## 3. Velocity vs Shopify / WooCommerce

### Q: Velocity shows the order as shipped/manifested but Shopify still shows it as "Unfulfilled".

**A:**
1. Go to **Settings → Integrations → Shopify**
2. Verify that **"Push fulfillment status to Shopify"** is enabled
3. Fulfillment status is pushed to Shopify when a shipment is manifested
4. If the update hasn't arrived in Shopify after 30 minutes, contact support with the Order ID

---

### Q: WooCommerce shows a different order status than Velocity. What should I check?

**A:**
1. Go to **Settings → Integrations → WooCommerce**
2. Review the **status mapping configuration** — the mapping between Velocity statuses and WooCommerce statuses may be set differently than expected
3. Re-authenticate the integration if it was recently disrupted
4. Contact support with the Order ID if the mismatch persists

---

## 4. Customer-Facing Status vs Velocity

### Q: My customer sees a different status than what Velocity shows. Why?

**A:** Customers may be checking via:
- **Carrier's own tracking website** — which may be slightly ahead of Velocity by up to 15 minutes
- **WhatsApp notifications from Velocity VAS** — these are sent at specific milestones (created, out for delivery, delivered, NDR) and don't reflect every scan in between
- **Branded tracking page** — which pulls from Velocity's data and will reflect the same status as your dashboard

---

## 5. Delivered in Velocity but Customer Says Not Received

### Q: Velocity shows "Delivered" but the customer says they never received the package.

**A:**
1. Check the **Tracking Timeline** in Order details — look for delivery date, time, and any agent notes
2. Request **Proof of Delivery (POD)** via support — we'll obtain it from the carrier. POD typically includes delivery time, recipient name/signature, and sometimes a photo
3. If the POD confirms delivery to the correct address and the customer still disputes it, a formal claim investigation may be needed — contact support to initiate this

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your Velocity Shipping dashboard

When reporting a status mismatch, always include:
- **AWB number**
- **What Velocity shows** vs **what the carrier / store / customer sees**
- **Timestamp** of the discrepancy
