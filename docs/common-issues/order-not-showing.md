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
2. [Sync settings to check](#2-sync-settings-to-check)
3. [Shopify-specific issues](#3-shopify-specific-issues)
4. [WooCommerce-specific issues](#4-woocommerce-specific-issues)
5. [Manually importing orders](#5-manually-importing-orders)

---

## 1. Order Placed in Store But Not in Velocity

### Q: I received an order in Shopify / WooCommerce but it's not appearing in Velocity. Why?

**A:** The most common reasons are:

| Reason | What to Do |
|--------|-----------|
| Integration is inactive or disconnected | Go to **Settings → Integrations** and check the connection status |
| Order was placed before the integration was connected | Orders created before the integration was set up do not sync retroactively by default |
| Order status doesn't match your sync trigger | Only orders in specific statuses (e.g., "Paid") are synced — check your sync settings |
| Integration credentials have expired or been regenerated | Re-authenticate the integration |

---

### Q: The integration shows as active but the order still hasn't appeared. What else should I check?

**A:**
1. **Check sync settings** — Go to **Settings → Integrations → [Your Store]** and verify which order statuses trigger a sync
2. **Check the order status** in your store — if it's in "Draft" or "Pending Payment", it may not meet the sync criteria
3. **Wait a few minutes** — sync can take up to 5 minutes for new orders
4. **Look at integration logs** if available in settings — they may show why a specific order was skipped
5. If nothing helps, contact support with the store Order ID so we can trace what happened

---

## 2. Sync Settings to Check

### Q: How do I verify my integration sync settings?

**A:**
1. Go to **Settings → Integrations**
2. Click on the relevant store integration (Shopify / WooCommerce)
3. Review:
   - **Integration Status** — should be active (green)
   - **Sync Trigger** — which order statuses cause a sync (e.g., "Paid", "Processing")
   - **Last Synced At** — when the last successful sync happened

If the integration status is red or shows an error, re-authenticate by reconnecting the store.

---

## 3. Shopify-Specific Issues

### Q: My Shopify integration was working, then suddenly stopped syncing new orders.

**A:** Common causes for Shopify sync breaking:

| Cause | Fix |
|-------|-----|
| Shopify API credentials expired | Go to **Settings → Integrations → Shopify** and reconnect |
| Velocity app was uninstalled from Shopify | Reinstall the app from the Shopify App Store |
| Shopify store is on pause mode | Resume the store and re-trigger sync |

---

### Q: I re-authenticated the Shopify integration. Will past orders now sync?

**A:** Re-authentication restores the connection for new orders going forward. Orders that were missed during the downtime will not automatically backfill. You can import them manually — see [Section 5](#5-manually-importing-orders).

---

### Q: I manifested an order in Velocity but Shopify still shows it as "Unfulfilled".

**A:**
1. Go to **Settings → Integrations → Shopify**
2. Verify that **"Push fulfillment status to Shopify"** is enabled
3. Fulfillment updates are pushed when a shipment is manifested — check Shopify's activity log for the order
4. If the update isn't reflecting after 30 minutes, contact support with the Order ID

---

## 4. WooCommerce-Specific Issues

### Q: My WooCommerce integration stopped syncing orders after working fine initially.

**A:** Common causes:

| Cause | Fix |
|-------|-----|
| WooCommerce API credentials were regenerated | Go to **Settings → Integrations → WooCommerce** and re-authenticate with new credentials |
| Hosting provider changed security settings | Re-authenticate; contact your hosting provider if issues persist |
| WooCommerce plugin was updated and requires reconfiguration | Reconnect the integration from Settings |

---

### Q: Orders are syncing but with wrong details (address, amount, etc.).

**A:** Velocity syncs exactly what the store sends. First check the order in your WooCommerce admin. If the store data is correct but Velocity shows wrong data, contact support with the Order ID.

---

## 5. Manually Importing Orders

### Q: The sync is broken or I need to bring in older orders. Can I add them manually?

**A:** Yes, there are three ways to get orders into Velocity without waiting for an automatic sync:

| Method | How |
|--------|-----|
| **Manual entry** | Go to **Orders → Create Order** and fill in details |
| **CSV bulk upload** | Go to **Orders → Bulk Upload** and upload a filled template |
| **API** | Use the Velocity API to push orders programmatically — see the API docs |

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your Velocity Shipping dashboard

Always include your **store Order ID** and the **store name** for faster resolution.
