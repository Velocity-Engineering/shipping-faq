---
sidebar_position: 2
title: WooCommerce Integration
description: Connect and manage your WooCommerce store with Velocity Shipping.
---

# WooCommerce Integration - Frequently Asked Questions

> Your complete guide to connecting WooCommerce with Velocity Shipping

---

## Table of Contents
1. [Getting Started](#1-getting-started)
2. [Orders](#2-orders)
3. [Order Status Updates](#3-order-status-updates)
4. [Payments & COD](#4-payments--cod)
5. [Products & Inventory](#5-products--inventory)
6. [Labels & Shipping Documents](#6-labels--shipping-documents)
7. [Common Issues & Solutions](#7-common-issues--solutions)
8. [Settings & Configuration](#8-settings--configuration)
9. [All Configuration Options Explained](#9-all-configuration-options-explained)

---

## 1. Getting Started

### Q: How does WooCommerce connect with Velocity Shipping?
**A:** Once you connect your WooCommerce store to Velocity Shipping:
- Your WooCommerce orders automatically appear in Velocity Shipping
- When you ship orders through Velocity Shipping, the status is updated back in WooCommerce
- Your customers can see their order status on your website

It's a two-way sync that keeps everything updated automatically!

---

### Q: What information comes from my WooCommerce store?
**A:** We bring over everything you need to ship orders:

- **Order details** - Order number, date, total amount
- **Customer address** - Shipping and billing address, phone, email
- **Products** - Item names, quantities, SKUs, weights, dimensions
- **Payment info** - Whether it's prepaid or Cash on Delivery (COD)
- **Discounts** - Any discounts applied to the order
- **Tax information** - Tax lines and rates

---

### Q: What information goes back to WooCommerce?
**A:** We keep your WooCommerce store updated with:

- **Order status** - "Processing", "Completed", "Cancelled"
- **Address updates** - If you change the shipping address in Velocity Shipping

---

### Q: How far back are historical orders synced?
**A:** We sync orders from the **last 5 days** when you first connect. Orders older than 5 days won't be imported automatically.

If you need to process older orders, you can create them manually or use the bulk upload feature.

---

### Q: What's different between WooCommerce and Shopify integration?
**A:** Key differences:

| Feature | WooCommerce | Shopify |
|---------|-------------|---------|
| Historical sync | Last 5 days | Last 30 days |
| Status updates | Processing/Completed/Cancelled | Fulfillment events (multiple stages) |
| Tag sync | Not available | Available |
| Payment mapping | Fully customizable | Based on financial status |

---

## 2. Orders

### Q: Why isn't my WooCommerce order showing in Velocity Shipping?
**A:** Here are the common reasons:

1. **Order status doesn't match** - Check if your "Pull Order Statuses" setting includes the order's status
2. **Order is too old** - Orders older than 5 days may not import
3. **Order status is excluded** - "Completed" or "Cancelled" orders are not imported by default
4. **Order already exists** - Duplicate orders won't be created

**What to do:** Go to Integrations → WooCommerce → Check your "Pull Order Statuses" setting

---

### Q: Which WooCommerce order statuses are imported by default?
**A:** By default, we import orders with these statuses:
- **Pending** - Payment pending
- **On-hold** - Awaiting payment confirmation
- **Processing** - Payment received, awaiting fulfillment

You can customize this in your configuration.

---

### Q: Can I edit an order after it's imported from WooCommerce?
**A:** Yes, with some limitations:

| What you can edit | When you can edit it |
|-------------------|----------------------|
| Customer address | Until the order is delivered or returned |
| COD amount | Only if "Allow Order Updates" is turned on |
| Order items | Only if "Allow Order Updates" is turned on |

**Important:** Once "Allow Order Updates" is enabled:
- Changes you make in Velocity Shipping will NOT sync back to WooCommerce
- Changes made in WooCommerce will NOT override your Velocity Shipping changes

---

### Q: What happens if I cancel an order in WooCommerce?
**A:** It depends on the shipping status:

- **Not yet shipped:** The order is automatically cancelled in Velocity Shipping
- **Already shipped:** The order stays active, but a "Order cancelled(Woocommerce)" tag is added

---

### Q: What happens when an order is marked as "Completed" in WooCommerce?
**A:** If an order status changes to "Completed" or "Refunded" in WooCommerce:
- The shipment in Velocity Shipping moves to "Externally Fulfilled"
- This indicates the order was fulfilled outside of Velocity Shipping

---

### Q: Will changes I make in WooCommerce update in Velocity Shipping?
**A:** It depends:

- **Before shipment:** Yes, changes sync automatically (address, items, amount)
- **After shipment (AWB assigned):** Limited - only a tag is added noting the change
- **If "Allow Order Updates" is ON:** No, WooCommerce changes won't override your Velocity Shipping data

---

## 3. Order Status Updates

### Q: When does Velocity Shipping update the order status in WooCommerce?
**A:** We update your WooCommerce store at these key moments:

| Velocity Shipping Status | WooCommerce Status |
|-----------------|---------------------|
| Ready to Ship | "Processing" (default) |
| Delivered | "Completed" (default) |
| Cancelled | "Cancelled" (default) |

---

### Q: Can I customize which status is set in WooCommerce?
**A:** Yes! You can set custom WooCommerce statuses for each stage:

- **Ready to Ship** → Your custom status (default: "processing")
- **Delivered** → Your custom status (default: "completed")
- **Cancelled** → Your custom status (default: "cancelled")

**How to change:** Go to Integrations → WooCommerce → Edit Config → "Push Order Statuses"

---

### Q: Why isn't my order status updating in WooCommerce?
**A:** Check these common causes:

1. **Setting is empty** - Make sure you have statuses configured in "Push Order Statuses"
2. **Invalid status name** - The status must exist in your WooCommerce store
3. **Connection issue** - Re-check your WooCommerce integration in Settings
4. **Order not found** - The order may have been deleted in WooCommerce

---

### Q: Does WooCommerce support tracking updates like Shopify?
**A:** WooCommerce integration is simpler than Shopify:
- We update the **order status** (Processing, Completed, Cancelled)
- We do NOT send fulfillment events or tracking details directly
- For tracking, customers use the Velocity tracking link

If you need tracking in WooCommerce, consider using a tracking plugin that reads order notes.

---

## 4. Payments & COD

### Q: How does Velocity Shipping know if an order is COD or Prepaid?
**A:** We check the **payment method** in WooCommerce:
- If payment method is in your "COD Payment Methods" list → COD
- Otherwise → Prepaid

**Default COD methods:** `cod`, `bacs`

---

### Q: Why are my orders showing the wrong payment method?
**A:** Your WooCommerce store might use different payment method codes. Here's how to fix it:

1. Go to **Integrations → WooCommerce → Edit Config**
2. Find "COD Payment Methods"
3. Enter your COD payment method codes (comma-separated)
   - Example: `cod, bacs, cheque, pay_later`

**Tip:** Check your WooCommerce payment settings to find the exact payment method codes.

---

### Q: What is "bacs" payment method?
**A:** "bacs" stands for **Bank Account Clearing System** - it's WooCommerce's code for bank transfer payments. By default, we treat it as COD because:
- Payment is not received at checkout
- You collect payment later (similar to COD)

If your bank transfer orders are prepaid, remove "bacs" from your COD payment methods list.

---

### Q: Can I change the COD amount for WooCommerce orders?
**A:** Yes, if you enable this feature:

1. Go to **Integrations → WooCommerce → Edit Config**
2. Enable **"Allow Order Updates"**
3. Now you can modify the COD amount before shipping

**Important:** Once enabled, WooCommerce won't override your manually set COD amounts.

---

### Q: How are discounts handled?
**A:** We respect all discounts from WooCommerce:

- **Coupon codes** - Applied to the order total
- **Discount total** - Imported as total_discounts
- When you edit orders, discounts adjust proportionally

---

## 5. Products & Inventory

### Q: Are product weights imported from WooCommerce?
**A:** Yes! We import:
- **Product weight** - From the product/variation settings
- **Dimensions** - Length, width, height (if available)

If weight is missing in WooCommerce, the order may show 0 weight in Velocity Shipping.

---

### Q: What happens with variable products (variations)?
**A:** We handle variations properly:
- Each variation is tracked separately
- Variation ID is used to identify the specific product
- SKU, price, and weight are imported per variation

---

### Q: What if a product doesn't have a variation ID?
**A:** If a product has no variation (simple product):
- We use a placeholder variant ID of "0"
- The product still imports correctly
- SKU and other details are preserved

---

## 6. Labels & Shipping Documents

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
- **ATS (Amazon) labels** have limited customization
- Changes apply to **new shipments only**

---

### Q: How long are labels stored in the system?
**A:** Labels are automatically removed from our system:
- **After the shipment is delivered**, OR
- **Within 60 days of manifestation**, whichever comes first

If you need labels for record-keeping, download and save them before delivery or within 60 days.

---

## 7. Common Issues & Solutions

### Q: My orders stopped syncing. What do I do?
**A:** Try these steps:

1. **Check connection:** Go to Integrations → WooCommerce and verify the connection is active
2. **Check API keys:** Your WooCommerce REST API keys may have expired
3. **Check order status:** Make sure orders match your "Pull Order Status" setting
4. **Check site URL:** Your WooCommerce site URL must be accessible
5. **Contact support:** If issues persist, reach out to us

---

### Q: Order details in Velocity Shipping don't match WooCommerce?
**A:** This can happen if:
- The order was updated in WooCommerce after it was imported
- The shipment has already been picked up (changes stop syncing fully)
- "Allow Order Updates" is enabled (WooCommerce changes won't override)

**What happens:** A tag like "Order updated(Woocommerce)" is added instead of updating the order.

---

### Q: Address shows as empty or incomplete?
**A:** We check shipping address first, then billing address:
- If shipping address is blank → We use billing address
- If both are blank → Address fields will be empty

**Fix in WooCommerce:** Make sure orders have complete shipping or billing addresses.

---

### Q: Tax is not showing correctly?
**A:** We handle taxes based on your WooCommerce tax settings:
- **Prices include tax:** Tax is calculated and separated from the price
- **Prices exclude tax:** Tax is added on top of the price

We import tax lines with rate codes and percentages from your WooCommerce tax settings.

---

### Q: Getting "externally fulfilled" for orders I didn't ship?
**A:** This happens when:
- Someone changed the order status to "Completed" or "Refunded" directly in WooCommerce
- Another plugin marked the order as complete
- The order was fulfilled through another channel

**What to do:** Check your WooCommerce order history to see what changed the status.

---

## 8. Settings & Configuration

### Q: Where do I find WooCommerce settings?
**A:** Go to **Integrations → WooCommerce → Your Store → Edit**

Here you can configure:
- Which order statuses to import
- Which payment methods are COD
- What status to set when shipping/delivering
- Whether to allow order edits
- Brand name and logo

---

### Q: What are the recommended settings for most stores?
**A:** Here's a good starting point:

| Setting | Recommended Value |
|---------|-------------------|
| Pull Create Statuses | pending, on-hold, processing |
| Pull Cancel Statuses | cancelled, trash |
| Pull Externally Fulfilled | completed, refunded |
| COD Payment Methods | cod, bacs |
| Push Ready to Ship | processing |
| Push Delivered | completed |
| Push Cancelled | cancelled |
| Allow Order Updates | Off |

Adjust based on your specific needs!

---

### Q: Can I have different settings for multiple WooCommerce stores?
**A:** Yes! Each connected WooCommerce store has its own settings. Go to:

**Integrations → WooCommerce → Select Store → Edit**

You can customize everything per store.

---

### Q: What custom order statuses can I use?
**A:** You can use any order status that exists in your WooCommerce store, including:
- Default statuses: pending, processing, on-hold, completed, cancelled, refunded, failed, trash
- Custom statuses: Any status added by plugins (e.g., "awaiting-shipment", "shipped", "delivered")

Just enter the status **slug** (not the display name) in your configuration.

---

## 9. All Configuration Options Explained

Here's a complete guide to every setting you can configure:

---

### General Information

#### Communication Brand Name
**What it does:** Sets the brand name used in customer communications (SMS, WhatsApp, emails).

**When to use:** If your WooCommerce store name is different from your brand name.

#### Brand Logo
**What it does:** Upload your brand logo for customer-facing communications.

**Requirements:** Image must be less than 2MB.

---

### Pull Order Statuses

These settings control which WooCommerce orders are imported into Velocity Shipping.

#### Create (Import)
**Default:** `pending, on-hold, processing`

**What it does:** Orders with these statuses are imported into Velocity Shipping for processing.

#### Cancel
**Default:** `cancelled, trash`

**What it does:** When an order's status changes to one of these, it's cancelled in Velocity Shipping.

#### Externally Fulfilled
**Default:** `completed, refunded`

**What it does:** When an order's status changes to one of these, the shipment is marked as "Externally Fulfilled".

---

### Payment Status Mapping

#### COD Payment Methods
**Default:** `cod, bacs`

**What it does:** Orders using these payment methods are treated as Cash on Delivery (COD). All other payment methods are treated as Prepaid.

**How to find your payment method codes:**
1. Go to WooCommerce → Settings → Payments
2. Click on each payment method
3. The slug/ID is your payment method code

**Common values:**
- `cod` - Cash on Delivery
- `bacs` - Bank transfer
- `cheque` - Cheque payment
- `paypal` - PayPal (usually prepaid)
- `stripe` - Stripe (usually prepaid)

---

### Push Order Statuses

These settings control what status is set in WooCommerce when shipment status changes.

| Stage | Default | Description |
|-------|---------|-------------|
| Ready to Ship | `processing` | When shipment is created |
| Delivered | `completed` | When shipment is delivered |
| Cancelled | `cancelled` | When shipment is cancelled |

---

### Order Update Settings

#### Allow Order Updates
**Default:** Off

**What it does:** Allows you to edit COD amount and order items directly in Velocity Shipping.

**Important side effects:**
- You can edit COD amount and order items
- Your edits will NOT sync back to WooCommerce
- Future WooCommerce updates will NOT override your changes
- Changes will only add tags instead of updating the order

---

## Quick Reference

### All Settings at a Glance

| Setting | Default | Category |
|---------|---------|----------|
| Pull Create Statuses | pending, on-hold, processing | Order Import |
| Pull Cancel Statuses | cancelled, trash | Order Import |
| Pull Externally Fulfilled | completed, refunded | Order Import |
| COD Payment Methods | cod, bacs | Payment |
| Push Ready to Ship | processing | Status Updates |
| Push Delivered | completed | Status Updates |
| Push Cancelled | cancelled | Status Updates |
| Allow Order Updates | Off | Editing |

### What Syncs Where?

| Data | Direction |
|------|-----------|
| Orders | WooCommerce → Velocity Shipping |
| Products | WooCommerce → Velocity Shipping |
| Order Status | Velocity Shipping → WooCommerce |
| Address Changes | Velocity Shipping → WooCommerce |

### WooCommerce vs Shopify Comparison

| Feature | WooCommerce | Shopify |
|---------|-------------|---------|
| Historical orders | 5 days | 30 days |
| Tracking events | No (status only) | Yes (multiple events) |
| Tag sync | No | Yes |
| RTO notes | No | Yes |
| COD paid sync | No | Yes |

### Common Issues - Quick Fixes

| Problem | Solution |
|---------|----------|
| Orders not appearing | Check "Pull Create Statuses" setting |
| Wrong payment method | Update "COD Payment Methods" list |
| Status not updating | Check "Push" statuses are valid |
| Can't edit COD amount | Enable "Allow Order Updates" |
| Getting "externally fulfilled" | Someone marked order complete in WooCommerce |
| Address not imported | Check shipping/billing address in WooCommerce |

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard
