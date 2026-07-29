---
sidebar_position: 3
title: Upstream Updates
description: How Velocity pushes order and shipment status updates to your store integrations and partners, and how to fix it when updates aren't going through.
---

# Upstream Updates

> How Velocity pushes status updates to your store (Shopify, WooCommerce) and logistics partners — and what to do when updates aren't reaching them

"Upstream updates" refers to Velocity pushing shipment and order status changes back to your connected platforms — Shopify, WooCommerce, and third-party partners like Easyecom, Unicommerce, Clickpost, etc.

---

## Table of Contents
1. [Shopify upstream updates](#1-shopify-upstream-updates)
2. [WooCommerce upstream updates](#2-woocommerce-upstream-updates)
3. [Other partner integrations](#3-other-partner-integrations)

---

## 1. Shopify Upstream Updates

### Q: What gets updated in Shopify when a shipment is created or status changes?

**A:** Velocity can push updates back to Shopify based on your configuration. You can control:
- What gets synced (e.g., whether to sync order tags)
- Which Velocity statuses map to which Shopify statuses

Check your upstream configuration at **Settings → Integrations → Shopify**.

---

### Q: Shopify doesn't have an RTO status. How does that work?

**A:** Shopify has no native RTO order status. However, you can enable Velocity to sync RTO status updates to Shopify as **order notes**. This way, when a shipment enters RTO, a note is added to the Shopify order with the RTO status — giving your team visibility without requiring a custom status.

This setting can be enabled from the Shopify integration configuration page.

---

### Q: My status mapping between Velocity and Shopify seems off. Where do I configure it?

**A:** You can map Velocity's shipment statuses to corresponding Shopify statuses. Go to **Settings → Integrations → Shopify** and review the status mapping configuration. If the mapping doesn't look right, update it there.

---

### Q: Velocity shows the order as shipped but Shopify still shows it as "Unfulfilled".

**A:**
1. Go to **Settings → Integrations → Shopify**
2. Verify that **"Push fulfillment status to Shopify"** is enabled
3. Fulfillment updates are pushed when a shipment is manifested
4. If the update isn't reflecting after 30 minutes, contact support with the Order ID

---

## 2. WooCommerce Upstream Updates

### Q: What does Velocity update in WooCommerce?

**A:** Velocity updates the **order status** in WooCommerce when your shipment status changes. You can also configure the status mapping between Velocity and WooCommerce — go to **Settings → Integrations → WooCommerce** to review this.

:::note
Velocity only updates the native WooCommerce order status. If you are using a **custom plugin** that has its own order statuses or fulfillment fields, those will **not** be updated by Velocity. Only the core WooCommerce order status is affected.
:::

---

### Q: Velocity has never pushed any upstream update to my WooCommerce store. What should I check first?

**A:** If upstream updates have never worked on any order — not just a single order — the most likely cause is a **firewall or network restriction** on your WooCommerce server. Velocity needs to be able to reach your WooCommerce store to push updates.

Check with your hosting provider or server administrator to ensure that Velocity's outbound requests are not being blocked by a firewall or security plugin (e.g., Wordfence).

---

### Q: My status mapping between Velocity and WooCommerce seems off. Where do I configure it?

**A:** Go to **Settings → Integrations → WooCommerce** and review the status mapping configuration. You can map Velocity statuses to WooCommerce statuses to ensure the right status is set on orders when shipments are updated.

---

## 3. Other Partner Integrations

### Q: Upstream updates aren't reaching Easyecom / Unicommerce / Clickpost / other OMS-WMS partners.

**A:** For integrations with third-party OMS/WMS platforms like Easyecom, Unicommerce, Clickpost, and others, upstream configuration is managed jointly with the partner. If updates aren't flowing:

- Reach out to your **partner POC** at the respective platform
- They will help diagnose whether the issue is on their side or in the integration configuration

Velocity's support team can assist if you need to coordinate from the Velocity side.

---

### Q: EasyEcom is not pushing fulfillment status to Shopify even though shipments are manifested on Velocity.

**A:** This is almost always caused by one of two scenarios:

**Scenario 1: Shipment was created directly on Velocity (bypassing EasyEcom)**

When AWBs are created directly on Velocity's dashboard instead of through EasyEcom, EasyEcom has no record of those shipments. Since EasyEcom never created or tracked the AWB, it cannot push fulfillment or tracking updates to Shopify — regardless of your integration settings.

Signs of this: EasyEcom logs show "Order already exists with active shipments" when it tries to process the same order, or Velocity's tracking processor logs show "Unable to find the AWB" errors from EasyEcom.

Resolution: Manually fulfil the affected orders in Shopify. Going forward, all orders that need Shopify fulfillment updates must be shipped **through EasyEcom**, not directly on Velocity.

**Scenario 2: `push_tracking` is not configured for the warehouse**

If the EasyEcom integration credentials (`push_tracking`) are null or missing for a warehouse, Velocity won't push tracking updates to EasyEcom — so EasyEcom can't pass them to Shopify.

Resolution: Re-enter the EasyEcom **username and password** in the EasyEcom integration settings for the affected warehouse. This re-activates `push_tracking` for future shipments from that warehouse.

> See also: [EasyEcom integration details](/partners#7-easyecom)

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your Velocity Shipping dashboard
