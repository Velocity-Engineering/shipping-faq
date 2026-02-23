# Shopify Integration - Frequently Asked Questions

> Your complete guide to connecting Shopify with Shipfast

---

## Table of Contents
1. [Getting Started](#1-getting-started)
2. [Orders](#2-orders)
3. [Order Status Updates](#3-order-status-updates)
4. [Tags](#4-tags)
5. [Returns](#5-returns)
6. [Payments & Pricing](#6-payments--pricing)
7. [Common Issues & Solutions](#7-common-issues--solutions)
8. [Settings & Configuration](#8-settings--configuration)
9. [All Configuration Options Explained](#9-all-configuration-options-explained)

---

## 1. Getting Started

### Q: How does Shopify connect with Shipfast?
**A:** Once you connect your Shopify store to Shipfast:
- Your Shopify orders automatically appear in Shipfast
- When you ship orders through Shipfast, the tracking info is sent back to Shopify
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
- **Tags** - Tags added in Shipfast (if enabled)
- **RTO updates** - If a package is being returned to you

---

### Q: How far back are historical orders synced?
**A:** We sync orders from the **last 30 days** when you first connect. Orders older than 30 days that are already fulfilled won't be imported.

If you need to process older orders, you can create them manually or use the bulk upload feature.

---

## 2. Orders

### Q: Why isn't my Shopify order showing in Shipfast?
**A:** Here are the common reasons:

1. **Order is already fulfilled** - We don't import orders that are already marked as shipped in Shopify
2. **Order is cancelled** - Cancelled orders are not imported
3. **Order is too old** - Orders older than 30 days that are already fulfilled won't appear
4. **Order status setting** - Check if your "Pull Order Status" setting matches the order's status in Shopify

**What to do:** Go to Integrations → Shopify → Check your "Pull Order Statuses" setting

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
- Changes you make in Shipfast will NOT sync back to Shopify
- Changes made in Shopify will NOT override your Shipfast changes

**Note:** Once an order is delivered or returned, you cannot make changes.

---

### Q: What happens if I cancel an order in Shopify?
**A:** It depends on the shipping status:

- **Not yet shipped:** The order is automatically cancelled in Shipfast
- **Already shipped:** The order stays active (since it's already on the way), but a "cancelled in Shopify" tag is added

---

### Q: Why does my order show as "Externally Fulfilled"?
**A:** This means the order was marked as shipped directly in Shopify (not through Shipfast). This can happen if:
- Someone fulfilled the order manually in Shopify
- Another app marked the order as shipped
- The order was partially shipped elsewhere

---

### Q: Will changes I make in Shopify update in Shipfast?
**A:** It depends:

- **Before shipment:** Yes, changes sync automatically
- **After shipment (AWB assigned):** No, changes stop syncing once the order is shipped
- **If "Allow Order Updates" is ON:** No, Shopify changes won't override your Shipfast data

---

## 3. Order Status Updates

### Q: When does my Shopify order status get updated?
**A:** We update your Shopify store at these key moments:

| Shipfast Status | What shows in Shopify |
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
**A:** Yes! You can map each Shipfast stage to any Shopify status:

| Shipfast Stage | Available Shopify Options |
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

### Q: What tags does Shipfast automatically add?
**A:** If you enable tag syncing, we can automatically add these tags:

**RTO Tags** (when "RTO Tags" is ON):
- `RTO initiated via Shipfast` - Package is being returned to you
- `RTO delivered via Shipfast` - Returned package reached you

**Return Tags** (when "Return Tags" is ON):
- `Return initiated via Shipfast` - Customer return started
- `Return picked up via Shipfast` - Return package collected
- `Return delivered via Shipfast` - Return reached your warehouse

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
   - **"Sync Tags"** - Two-way tag sync between Shipfast and Shopify
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
**A:** This usually happens when "Sync Tags" is enabled. Tags go Shopify → Shipfast → back to Shopify.

**Solution:** This is normal behavior for two-way sync. If you only want one direction, contact support for advanced configuration.

---

## 5. Returns

### Q: How do returns work with Shopify?
**A:** When a customer requests a return in Shopify:

1. The return request appears in Shipfast
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

### Q: How does Shipfast know if an order is COD or Prepaid?
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

### Q: Does Shipfast update Shopify when COD is collected?
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

## 7. Common Issues & Solutions

### Q: My orders stopped syncing. What do I do?
**A:** Try these steps:

1. **Check connection:** Go to Integrations → Shopify and verify the connection is active
2. **Re-authorize:** If needed, disconnect and reconnect your Shopify store
3. **Check order status:** Make sure orders match your "Pull Order Status" setting
4. **Contact support:** If issues persist, reach out to us

---

### Q: Order details in Shipfast don't match Shopify?
**A:** This can happen if:
- The order was updated in Shopify after it was imported
- The shipment has already been picked up (changes stop syncing)
- "Allow Order Updates" is enabled (Shopify changes won't override)

**What to do:** For unshipped orders, the next Shopify update will sync changes. For shipped orders, you may need to manually update details.

---

### Q: The EDD (Estimated Delivery Date) widget looks wrong?
**A:** Make sure you're using the latest widget version. The correct format shows:
> "Estimated date of delivery is 4th September"

Contact support if you need help updating your widget.

---

### Q: Some product details are missing?
**A:** Check these in Shopify:

1. **Product has SKU** - Products need SKUs to sync correctly
2. **Product is active** - Archived products may not sync
3. **Weights are set** - Missing weights can cause issues

---

### Q: Will my integration continue if I disconnect it?
**A:** If you disconnect:
- **New orders** will stop syncing to Shipfast
- **Existing orders** in Shipfast will continue to update Shopify with status changes

To fully stop all syncing, you need to disconnect the integration.

---

## 8. Settings & Configuration

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

### Q: Do settings changes apply to old orders?
**A:** No, configuration changes only apply to **new orders going forward**. Existing orders keep their original settings.

---

## 9. All Configuration Options Explained

Here's a complete guide to every setting you can configure:

---

### General Information

#### Communication Brand Name
**What it does:** Sets the brand name used in customer communications (SMS, WhatsApp, emails).

**When to use:** If your Shopify store name is different from your brand name, set this so customers recognize your messages.

**Example:** Store is "johns-store.myshopify.com" but brand is "John's Fashion" - set brand name to "John's Fashion"

---

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

#### Ready to Ship
**Default:** READY_FOR_PICKUP  
**What it does:** Status shown when you create a shipment but courier hasn't picked up yet.

#### In Transit  
**Default:** IN_TRANSIT  
**What it does:** Status shown when package is on the way.

#### Out for Delivery
**Default:** OUT_FOR_DELIVERY  
**What it does:** Status shown when package is out for delivery to customer.

#### Delivered
**Default:** DELIVERED  
**What it does:** Status shown when package is successfully delivered.

#### NDR (Non-Delivery Report)
**Default:** ATTEMPTED_DELIVERY  
**What it does:** Status shown when delivery was attempted but failed.

**Available options for all stages:**
- READY_FOR_PICKUP
- IN_TRANSIT
- OUT_FOR_DELIVERY
- DELIVERED
- ATTEMPTED_DELIVERY
- FAILURE
- CONFIRMED
- LABEL_PURCHASED
- LABEL_PRINTED

---

### Push Order Tags

#### RTO Tags
**Default:** Off  
**What it does:** Automatically adds tags when orders go to RTO (Return to Origin).

**Tags added:**
- `RTO initiated via Shipfast` - When RTO starts
- `RTO delivered via Shipfast` - When RTO package reaches you

**When to enable:** If you want to easily filter and track RTO orders in Shopify.

---

#### Return Tags
**Default:** Off  
**What it does:** Automatically adds tags when return shipments are created.

**Tags added:**
- `Return initiated via Shipfast` - When return is created
- `Return picked up via Shipfast` - When return is picked
- `Return delivered via Shipfast` - When return reaches warehouse

**When to enable:** If you want to track customer-initiated returns in Shopify.

---

### Sync Settings

#### Sync Tags
**Default:** Off  
**What it does:** Two-way sync of tags between Shipfast and Shopify.

- Tags added in Shipfast → appear in Shopify
- Tags added in Shopify → appear in Shipfast

**When to enable:** If you use tags to organize orders and want them synced across both platforms.

---

#### Sync RTO Status to Notes
**Default:** Off  
**What it does:** Adds RTO status updates as notes on the Shopify order.

**Example notes:**
- "RTO Initiated on 15 Feb 2026 10:30 AM"
- "RTO In Transit on 16 Feb 2026 2:00 PM"
- "RTO Delivered on 18 Feb 2026 11:00 AM"

**When to enable:** If you want a complete RTO timeline visible directly in Shopify order notes.

---

### Payment Settings

#### Push Paid Status for COD Orders
**Default:** On  
**What it does:** Automatically updates Shopify payment status to "Paid" after COD is collected and remitted.

**When it updates:** After the order is delivered AND COD amount is remitted to you.

**When to enable:** Always recommended - helps track which COD orders are settled.

---

### Order Update Settings

#### Allow Order Updates
**Default:** Off  
**What it does:** Allows you to edit COD amount and order items directly in Shipfast.

**Important side effects:**
- ✅ You can edit COD amount in Shipfast
- ✅ You can edit order items in Shipfast
- ❌ Your edits will NOT sync back to Shopify
- ❌ Future Shopify updates will NOT override your Shipfast changes

**When to enable:** 
- If you confirm orders by phone and need to adjust amounts
- If customers request changes after ordering
- If you offer discounts during confirmation calls

**When to keep off:**
- If you want Shopify to always be the source of truth
- If you don't need to manually adjust order amounts

---

## Quick Reference

### All Settings at a Glance

| Setting | Default | Category |
|---------|---------|----------|
| Push Fulfillment Status | SHIPPED | Status Updates |
| Ready to Ship Status | READY_FOR_PICKUP | Status Updates |
| In Transit Status | IN_TRANSIT | Status Updates |
| Out for Delivery Status | OUT_FOR_DELIVERY | Status Updates |
| Delivered Status | DELIVERED | Status Updates |
| NDR Status | ATTEMPTED_DELIVERY | Status Updates |
| RTO Tags | Off | Tags |
| Return Tags | Off | Tags |
| Sync Tags | Off | Tags |
| Sync RTO Status to Notes | Off | Notes |
| Push Paid Status for COD | On | Payments |
| Allow Order Updates | Off | Editing |

### What Syncs Where?

| Data | Direction |
|------|-----------|
| Orders | Shopify → Shipfast |
| Products | Shopify → Shipfast |
| Tracking & Status | Shipfast → Shopify |
| Tags | Both ways (if enabled) |
| Returns | Both ways |
| COD Payment Status | Shipfast → Shopify (if enabled) |

### Common Issues - Quick Fixes

| Problem | Solution |
|---------|----------|
| Orders not appearing | Check order isn't already fulfilled/cancelled |
| Status not updating | Check "Push" settings in config |
| Wrong payment method | Set up custom COD mapping |
| Duplicate tags | Normal with two-way sync enabled |
| Old orders missing | Orders >30 days + fulfilled are skipped |
| Can't edit COD amount | Enable "Allow Order Updates" |
| Shopify changes not syncing | Disable "Allow Order Updates" or order already shipped |

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Shipfast dashboard
- **Help Center:** Visit our help center for more guides

Our support team is happy to help!
