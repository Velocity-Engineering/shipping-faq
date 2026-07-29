---
sidebar_position: 1
title: Shopify Integration
description: Connect and manage your Shopify store with Velocity Shipping.
---

# Shopify Integration - Frequently Asked Questions

> Your complete guide to connecting Shopify with Velocity Shipping

---

## Table of Contents
1. [Getting Started](#1-getting-started)
2. [Orders](#2-orders)
3. [Order Status Updates](#3-order-status-updates)
4. [Tags](#4-tags)
5. [Returns](#5-returns)
6. [Payments & Pricing](#6-payments--pricing)
7. [Labels & Shipping Documents](#7-labels--shipping-documents)
8. [Common Issues & Solutions](#8-common-issues--solutions)
9. [Settings & Configuration](#9-settings--configuration)
10. [All Configuration Options Explained](#10-all-configuration-options-explained)

---

## 1. Getting Started

### Q: Can I disconnect my Shopify store myself?
**A:** No. Shopify store disconnection cannot be done by the user directly. To disconnect your Shopify store from Velocity Shipping, please contact your **Key Account Manager (KAM)** or reach out to the **Shipping Support team**. They will assist you with the disconnection process.

---

### Q: How does Shopify connect with Velocity Shipping?
**A:** Once you connect your Shopify store to Velocity Shipping:
- Your Shopify orders automatically appear in Velocity Shipping
- When you ship orders through Velocity Shipping, the tracking info is sent back to Shopify
- Your customers can track their orders from Shopify

It's a two-way sync that keeps everything updated automatically!

---

### Q: What information comes from my Shopify store?
**A:** We bring over everything you need to ship orders:

- **Order details** - Order number, date, customer email
- **Customer address** - Full shipping address and phone number
- **Products** - Item names, quantities, SKUs, weights
- **Payment info** - Whether it's prepaid or Cash on Delivery (COD)
- **Discounts** - Any discounts applied to the order
- **Tags** - Tags you've added in Shopify (if enabled)

---

### Q: What information goes back to Shopify?
**A:** We keep your Shopify store updated with:

- **Tracking number** - So customers can track their package
- **Delivery status** - "In Transit", "Out for Delivery", "Delivered", etc.
- **Tags** - Tags added in Velocity Shipping (if enabled)
- **RTO updates** - If a package is being returned to you

---

### Q: How far back are historical orders synced?
**A:** We sync orders from the **last 30 days** when you first connect. Orders older than 30 days that are already fulfilled won't be imported.

If you need to process older orders, you can create them manually or use the bulk upload feature.

---

## 2. Orders

### Q: Why isn't my Shopify order showing in Velocity Shipping?
**A:** Here are the common reasons:

1. **Order is already fulfilled** - We don't import orders that are already marked as shipped in Shopify
2. **Order is cancelled** - Cancelled orders are not imported
3. **Order is too old** - Orders older than 30 days that are already fulfilled won't appear
4. **Order status setting** - Check if your "Pull Order Status" setting matches the order's status in Shopify
5. **Order is a draft** - Draft orders in Shopify are not pulled into Velocity. Only confirmed (non-draft) orders are synced. See below for more details.

**What to do:** Go to Integrations → Shopify → Check your "Pull Order Statuses" setting

---

### Q: My order is a Shopify draft order — will it sync to Velocity?
**A:** No. Velocity does **not** pull Shopify draft orders. Only confirmed orders (i.e., orders that have been placed by a customer or converted from draft) are synced to Velocity.

**There are no plans to support draft order syncing in the future.**

If you need to ship a draft order, complete the order in Shopify first (convert it to a confirmed order) and it will then sync to Velocity automatically.

---

### Q: Can I edit an order after it's imported from Shopify?
**A:** Yes, with some limitations:

| What you can edit | When you can edit it |
|-------------------|----------------------|
| Customer address | Until the order is delivered or returned |
| COD amount | Only if "Allow Order Updates" is turned on |
| Order items | Only if "Allow Order Updates" is turned on |
| Tags | Anytime |

**Important:** Once "Allow Order Updates" is enabled:
- Changes you make in Velocity Shipping will NOT sync back to Shopify
- Changes made in Shopify will NOT override your Velocity Shipping changes

**Note:** Once an order is delivered or returned, you cannot make changes.

---

### Q: What happens if I cancel an order in Shopify?
**A:** It depends on the shipping status:

- **Not yet shipped:** The order is automatically cancelled in Velocity Shipping
- **Already shipped:** The order stays active (since it's already on the way), but a "cancelled in Shopify" tag is added

---

### Q: Why does my order show as "Externally Fulfilled"?
**A:** This means the order was marked as shipped directly in Shopify (not through Velocity Shipping). This can happen if:
- Someone fulfilled the order manually in Shopify
- Another app marked the order as shipped
- The order was partially shipped elsewhere

---

### Q: Will changes I make in Shopify update in Velocity Shipping?
**A:** It depends:

- **Before shipment:** Yes, changes sync automatically
- **After shipment (AWB assigned):** No, changes stop syncing once the order is shipped
- **If "Allow Order Updates" is ON:** No, Shopify changes won't override your Velocity Shipping data

---

## 3. Order Status Updates

### Q: When does my Shopify order status get updated?
**A:** We update your Shopify store at these key moments:

| Velocity Shipping Status | What shows in Shopify |
|-----------------|-----------------------|
| Ready to Ship | "Ready for Pickup" |
| Picked Up / In Transit | "In Transit" |
| Out for Delivery | "Out for Delivery" |
| Delivered | "Delivered" |
| Delivery Failed (NDR) | "Attempted Delivery" |
| Returning to You (RTO) | Order note added (if enabled) |

---

### Q: Can I choose when to mark orders as "Fulfilled" in Shopify?
**A:** Yes! You have three options for when Shopify shows the order as fulfilled:

| Option | When it happens |
|--------|-----------------|
| **SHIPPED** (default) | As soon as you book the shipment |
| **IN_TRANSIT** | When the courier picks up the package |
| **DELIVERED** | Only after successful delivery |

**How to change:** Go to Integrations → Shopify → Edit Config → "Push Fulfillment Status"

---

### Q: Can I customize what status shows in Shopify at each stage?
**A:** Yes! You can map each Velocity Shipping stage to any Shopify status:

| Velocity Shipping Stage | Available Shopify Options |
|----------------|---------------------------|
| Ready to Ship | READY_FOR_PICKUP, IN_TRANSIT, CONFIRMED, etc. |
| In Transit | IN_TRANSIT, OUT_FOR_DELIVERY, etc. |
| Out for Delivery | OUT_FOR_DELIVERY, IN_TRANSIT, etc. |
| Delivered | DELIVERED, CONFIRMED, etc. |
| NDR (Delivery Failed) | ATTEMPTED_DELIVERY, FAILURE, etc. |

**How to change:** Go to Integrations → Shopify → Edit Config → "Push Delivery Statuses"

---

### Q: Why isn't my order status updating in Shopify?
**A:** Check these common causes:

1. **Setting is turned off** - Verify your push settings in Shopify config
2. **Order already fulfilled** - Can't update orders that are already marked as delivered in Shopify
3. **Temporary issue** - Sometimes there's a brief delay; try refreshing after a few minutes
4. **Connection issue** - Re-check your Shopify integration in Settings

---

### Q: What tracking link do my customers see?
**A:** Your customers will see a Velocity tracking link:
```
https://track.velocity.in/[tracking-number]
```
This link shows real-time tracking updates for their package.

---

## 4. Tags

### Q: What tags does Velocity Shipping automatically add?
**A:** If you enable tag syncing, we can automatically add these tags:

**RTO Tags** (when "RTO Tags" is ON):
- `RTO initiated via Velocity Shipping` - Package is being returned to you
- `RTO delivered via Velocity Shipping` - Returned package reached you

**Return Tags** (when "Return Tags" is ON):
- `Return initiated via Velocity Shipping` - Customer return started
- `Return picked up via Velocity Shipping` - Return package collected
- `Return delivered via Velocity Shipping` - Return reached your warehouse

**AI Agent Tags** (when "Sync AI Agent Tags" is ON):
- `Order_confirmed` - Customer confirmed the order
- `Address_modification_requested` - Customer asked to change address
- `Cancellation_requested` - Customer requested cancellation
- `Prepaid_converted` - COD converted to prepaid

---

### Q: How do I enable tag syncing?
**A:**
1. Go to **Integrations → Shopify → Your Store → Edit**
2. Turn on the tags you want:
   - **"Sync Tags"** - Two-way tag sync between Velocity Shipping and Shopify
   - **"RTO Tags"** - Automatically tag RTO orders
   - **"Return Tags"** - Automatically tag return orders

---

### Q: Can I add tags to multiple orders at once?
**A:** Yes! Use our Bulk Tags feature:
1. Select the orders you want to tag
2. Click "Bulk Actions" → "Add Tags"
3. Enter your tag name
4. Click Submit

The tags will sync to Shopify automatically (if Sync Tags is ON).

---

### Q: Why are my tags appearing twice?
**A:** This usually happens when "Sync Tags" is enabled. Tags go Shopify → Velocity Shipping → back to Shopify.

**Solution:** This is normal behavior for two-way sync. If you only want one direction, contact support for advanced configuration.

---

## 5. Returns

### Q: How do returns work with Shopify?
**A:** When a customer requests a return in Shopify:

1. The return request appears in Velocity Shipping
2. You approve or decline it in either system
3. If approved, you can book a return pickup
4. Once picked up, tracking is shared with the customer
5. When returned, both systems are updated

---

### Q: What return reasons are supported?
**A:** We map return reasons to Shopify's categories:

| Customer's Reason | Shows in Shopify as |
|-------------------|---------------------|
| Quality not as expected | Not as Described |
| Item doesn't fit | Not as Described |
| Item is damaged | Defective |
| Received wrong item | Wrong Item |
| Changed my mind | Unwanted |
| Other reasons | Other |

---

## 6. Payments & Pricing

### Q: How does Velocity Shipping know if an order is COD or Prepaid?
**A:** We check the payment status in Shopify:
- **Paid** = Prepaid order
- **Unpaid/Pending** = Cash on Delivery (COD)

If this isn't working correctly for your store, you can set up custom payment mapping in settings.

---

### Q: Why are my orders showing the wrong payment method?
**A:** Your Shopify store might use custom payment names. Here's how to fix it:

1. Go to **Integrations → Shopify → Edit Config**
2. Enable "COD/Prepaid Identification"
3. Enter your COD payment method names (comma-separated)
   - Example: `cash_on_delivery, cod, pay_later`

---

### Q: Can I change the COD amount for Shopify orders?
**A:** Yes, if you enable this feature:

1. Go to **Integrations → Shopify → Edit Config**
2. Enable **"Allow Order Updates"**
3. Now you can modify the COD amount before shipping

**When to use this:** If you offer phone discounts or accept partial payments during order confirmation.

**Important:** Once enabled, Shopify won't override your manually set COD amounts.

---

### Q: Does Velocity Shipping update Shopify when COD is collected?
**A:** Yes! When **"Push Paid Status for COD Orders"** is enabled:
- After COD is collected and remitted to you
- The order's payment status in Shopify changes to "Paid"
- This helps you track which COD orders have been settled

---

### Q: How are discounts handled?
**A:** We respect all discounts from Shopify:

- **Coupon codes** - Applied to the order total
- **Item-level discounts** - Applied to specific products (like Buy-One-Get-One)
- **Automatic discounts** - Applied by Shopify rules

When you clone and edit orders, discounts adjust proportionally.

---

## 7. Labels & Shipping Documents

### Q: How are shipping labels generated?
**A:** Labels work differently depending on the carrier:

| Carrier Type | How Labels Work |
|--------------|-----------------|
| **Most carriers** | Labels are generated by Velocity Shipping and fully customizable |
| **ATS (Amazon Transportation Service)** | Labels are provided by Amazon and have limited customization |

For **most carriers**, Velocity Shipping generates the labels, so you have full control over customization.

For **ATS**, Amazon sends their own labels through their APIs with limited customization options.

---

### Q: Can I customize what appears on my shipping labels?
**A:** Yes, for most carriers! Go to **Settings → Invoicing & Label** to customize:

- Show/hide seller GST number
- Show/hide product prices
- Add your logo
- Change address formatting
- And more

**Important:**
- These settings only apply to **labels generated by Velocity Shipping**
- **ATS (Amazon) labels** have limited customization as they're generated by Amazon
- Changes apply to **new shipments only** - existing labels are not affected

---

### Q: How long are labels stored in the system?
**A:** Labels are automatically removed from our system:
- **After the shipment is delivered**, OR
- **Within 90 days of manifestation**, whichever comes first

If you need labels for record-keeping, download and save them before delivery or within 90 days.

---

## 8. Common Issues & Solutions

### Q: My orders stopped syncing. What do I do?
**A:** Try these steps:

1. **Check connection:** Go to Integrations → Shopify and verify the connection is active
2. **Re-authorize:** If needed, disconnect and reconnect your Shopify store
3. **Check order status:** Make sure orders match your "Pull Order Status" setting
4. **Contact support:** If issues persist, reach out to us

---

### Q: Order details in Velocity Shipping don't match Shopify?
**A:** This can happen if:
- The order was updated in Shopify after it was imported
- The shipment has already been picked up (changes stop syncing)
- "Allow Order Updates" is enabled (Shopify changes won't override)

**What to do:** For unshipped orders, the next Shopify update will sync changes. For shipped orders, you may need to manually update details.

---

### Q: Some product details are missing?
**A:** Check these in Shopify:

1. **Product has SKU** - Products need SKUs to sync correctly
2. **Product is active** - Archived products may not sync
3. **Weights are set** - Missing weights can cause issues

---

## 9. Settings & Configuration

### Q: Where do I find Shopify settings?
**A:** Go to **Integrations → Shopify → Your Store → Edit**

Here you can configure:
- When to mark orders as fulfilled
- What status to show at each delivery stage
- Tag sync options
- COD settings
- Brand name and logo
- And more

---

### Q: What are the recommended settings for most stores?
**A:** Here's a good starting point:

| Setting | Recommended Value | Why |
|---------|-------------------|-----|
| Push Fulfillment Status | SHIPPED | Customers see tracking early |
| Sync Tags | On | Keep tags in sync |
| RTO Tags | On | Track returns easily |
| Push Paid Status for COD | On | Track COD settlements |
| Allow Order Updates | Off | Prevent accidental changes |

Adjust based on your specific needs!

---

### Q: Can I have different settings for multiple Shopify stores?
**A:** Yes! Each connected Shopify store has its own settings. Go to:

**Integrations → Shopify → Select Store → Edit**

You can customize everything per store.

---

## 10. All Configuration Options Explained

Here's a complete guide to every setting you can configure:

---

### General Information

#### Communication Brand Name
**What it does:** Sets the brand name used in customer communications (SMS, WhatsApp, emails).

**When to use:** If your Shopify store name is different from your brand name, set this so customers recognize your messages.

#### Brand Logo
**What it does:** Upload your brand logo for customer-facing communications.

**Requirements:** Image must be less than 2MB.

---

### Push Fulfillment Status

#### When to mark as "Fulfilled"
**What it does:** Controls when Shopify shows the order as fulfilled/shipped.

| Option | Description |
|--------|-------------|
| **SHIPPED** (default) | Mark fulfilled when shipment is created |
| **IN_TRANSIT** | Mark fulfilled when courier picks up |
| **DELIVERED** | Mark fulfilled only after delivery |

**Recommendation:** Use "SHIPPED" so customers get tracking info immediately.

---

### Push Delivery Statuses

These settings control what status appears in Shopify at each shipping stage.

| Stage | Default | Description |
|-------|---------|-------------|
| Ready to Ship | READY_FOR_PICKUP | Status shown when shipment created |
| In Transit | IN_TRANSIT | Status shown when package is on the way |
| Out for Delivery | OUT_FOR_DELIVERY | Status shown when out for delivery |
| Delivered | DELIVERED | Status shown when delivered |
| NDR | ATTEMPTED_DELIVERY | Status shown when delivery failed |

---

### Push Order Tags

#### RTO Tags
**Default:** Off
**What it does:** Automatically adds tags when orders go to RTO.

**Tags added:**
- `RTO initiated via Velocity Shipping`
- `RTO delivered via Velocity Shipping`

#### Return Tags
**Default:** Off
**What it does:** Automatically adds tags when return shipments are created.

**Tags added:**
- `Return initiated via Velocity Shipping`
- `Return picked up via Velocity Shipping`
- `Return delivered via Velocity Shipping`

---

### Sync Settings

#### Sync Tags
**Default:** Off
**What it does:** Two-way sync of tags between Velocity Shipping and Shopify.

#### Sync RTO Status to Notes
**Default:** Off
**What it does:** Adds RTO status updates as notes on the Shopify order.

---

### Payment Settings

#### Push Paid Status for COD Orders
**Default:** On
**What it does:** Automatically updates Shopify payment status to "Paid" after COD is collected and remitted.

---

### Order Update Settings

#### Allow Order Updates
**Default:** Off
**What it does:** Allows you to edit COD amount and order items directly in Velocity Shipping.

**Important side effects:**
- You can edit COD amount and order items
- Your edits will NOT sync back to Shopify
- Future Shopify updates will NOT override your changes

---

## Quick Reference

### All Settings at a Glance

| Setting | Default | Category |
|---------|---------|----------|
| Push Fulfillment Status | SHIPPED | Status Updates |
| RTO Tags | Off | Tags |
| Return Tags | Off | Tags |
| Sync Tags | Off | Tags |
| Sync RTO Status to Notes | Off | Notes |
| Push Paid Status for COD | On | Payments |
| Allow Order Updates | Off | Editing |

### What Syncs Where?

| Data | Direction |
|------|-----------|
| Orders | Shopify → Velocity Shipping |
| Products | Shopify → Velocity Shipping |
| Tracking & Status | Velocity Shipping → Shopify |
| Tags | Both ways (if enabled) |
| Returns | Both ways |
| COD Payment Status | Velocity Shipping → Shopify (if enabled) |

### Common Issues - Quick Fixes

| Problem | Solution |
|---------|----------|
| Orders not appearing | Check order isn't already fulfilled/cancelled |
| Status not updating | Check "Push" settings in config |
| Wrong payment method | Set up custom COD mapping |
| Duplicate tags | Normal with two-way sync enabled |
| Old orders missing | Orders >30 days + fulfilled are skipped |
| Can't edit COD amount | Enable "Allow Order Updates" |

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard
