---
sidebar_position: 1
title: Order Not Showing
description: Why orders placed in your store may not appear in Velocity Shipping, and how to fix sync issues.
---

# Order Not Showing

> Why an order placed in your store may not appear in Velocity, and how to resolve it

---

## Table of Contents
1. [Order placed in store but not in Velocity](#1-order-placed-in-store-but-not-in-velocity)
2. [Checking bulk historic order fetch](#2-checking-bulk-historic-order-fetch)
3. [Orders we don't sync](#3-orders-we-dont-sync)
4. [Configuring which orders to pull](#4-configuring-which-orders-to-pull)
5. [Shopify-specific issues](#5-shopify-specific-issues)
6. [WooCommerce-specific issues](#6-woocommerce-specific-issues)
7. [Manually importing orders](#7-manually-importing-orders)

---

## 1. Order Placed in Store But Not in Velocity

### Q: I received an order in Shopify / WooCommerce but it's not appearing in Velocity. Why?

**A:** Orders from Shopify and WooCommerce should appear in Velocity within a minute of being placed. If an order isn't showing up, the most common reasons are:

| Reason | What to Do |
|--------|-----------|
| Integration is inactive or disconnected | Go to **Settings → Integrations** and check the connection status |
| Order is older than 7 days and the store was recently connected | When a new store is connected, Velocity automatically fetches orders from the **last 7 days**. Orders older than 7 days at the time of connection are not imported |
| Order status doesn't match your sync configuration | You can configure which statuses to pull — check your settings (see [Section 4](#4-configuring-which-orders-to-pull)) |
| Integration credentials have expired or been regenerated | Re-authenticate the integration |

---

### Q: The integration shows as active but the order still hasn't appeared after a minute. What else should I check?

**A:**
1. **Check your sync configuration** — Go to **Settings → Integrations → [Your Store]** and verify which order statuses trigger a sync
2. **Re-authenticate** the integration if it was recently disrupted
3. Contact support with the store Order ID if the order still doesn't appear — our team can trace what happened

---

## 2. Checking Bulk Historic Order Fetch

### Q: I recently connected Shopify / WooCommerce. Which past orders will Velocity import?

**A:** When a new store is connected, Velocity **automatically fetches orders from the last 7 days**. No manual trigger is needed — the fetch starts as soon as the integration is set up.

Orders older than 7 days at the time of connection are not imported.

:::note
There is no option to manually trigger a bulk order fetch. The only manual operation available in Bulk Operations is an **HSN fetch** (for product HSN code data). Order syncing beyond the automatic 7-day window requires manual import — see [Section 7](#7-manually-importing-orders).
:::

### Q: How do I check if the automatic historic fetch completed successfully?

**A:**
1. Go to **Settings → Integrations**
2. Find your store and click on it
3. Click **Bulk Operations**
4. You'll see the status of the historic order fetch — whether it's in progress, completed, or failed
5. If it failed, the reason will be shown — use that to diagnose the issue

---

## 3. Orders We Don't Sync

### Q: Are there any types of orders that Velocity won't pull from Shopify or WooCommerce?

**A:** Yes. Velocity does **not** fetch orders that are already fulfilled at the time of sync. If an order was marked as fulfilled in your store before the integration was connected (or before the bulk fetch ran), it will not be imported into Velocity.

---

## 4. Configuring Which Orders to Pull

### Q: Can I control which orders get pulled from my store?

**A:** Yes. For both Shopify and WooCommerce, you can configure which order statuses Velocity syncs. For example, you can choose to skip cancelled orders.

To check or update this:
1. Go to **Settings → Integrations**
2. Click on your store
3. Review the **order status sync configuration**

:::note
Changes to your sync configuration apply only to **new orders** from that point forward. Orders that were already skipped due to the previous configuration will not be retroactively imported.
:::

---

## 5. Shopify-Specific Issues

### Q: My Shopify integration was working, then suddenly stopped syncing new orders.

**A:** Common causes:

| Cause | Fix |
|-------|-----|
| Shopify API credentials expired or changed | Go to **Settings → Integrations → Shopify** and reconnect |
| Integration was recently disrupted | Re-authenticate from the integration settings page |

---

### Q: I manifested an order in Velocity but Shopify still shows it as "Unfulfilled".

**A:**
1. Go to **Settings → Integrations → Shopify**
2. Verify that **"Push fulfillment status to Shopify"** is enabled
3. Fulfillment updates are pushed when a shipment is manifested — check Shopify for the order
4. If the update isn't reflecting after 30 minutes, contact support with the Order ID

---

## 6. WooCommerce-Specific Issues

### Q: My WooCommerce integration stopped syncing orders after working fine initially.

**A:** Common causes:

| Cause | Fix |
|-------|-----|
| WooCommerce API credentials were regenerated | Go to **Settings → Integrations → WooCommerce** and re-authenticate with the new credentials |
| Hosting provider updated security settings | Re-authenticate; contact your hosting provider if issues persist |
| WooCommerce plugin was updated and requires reconfiguration | Reconnect the integration from Settings |

---

### Q: Orders are syncing but with wrong details (address, amount, etc.).

**A:** Velocity syncs exactly what the store sends. First check the order in your WooCommerce admin. If the store data is correct but Velocity shows wrong data, contact support with the Order ID.

---

## 7. Manually Importing Orders

### Q: Can I add orders into Velocity without waiting for an automatic sync?

**A:** Yes, there are three ways:

| Method | How |
|--------|-----|
| **Manual entry** | Go to **Orders → Create Order** and fill in the details |
| **CSV bulk upload** | Go to **Orders → Bulk Upload** and upload a filled template |
| **API** | Use the Velocity API to push orders programmatically — see the API docs |

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your Velocity Shipping dashboard

Always include your **store Order ID** and the **store name** for faster resolution.
