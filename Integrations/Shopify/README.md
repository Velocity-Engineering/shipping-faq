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
| COD amount | Only if "Allow COD Amount Edit" is turned on |
| Tags | Anytime |
| Products/Quantity | Clone the order and modify the copy |

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
| Returning to You (RTO) | Order note added |

---

### Q: Can I choose when to mark orders as "Fulfilled" in Shopify?
**A:** Yes! You can choose when Shopify shows the order as fulfilled:

- **At Shipment Creation** - As soon as you book the shipment
- **At Pickup** - When the courier picks up the package
- **At Delivery** - Only after successful delivery

**How to change:** Go to Integrations → Shopify → Edit Config → "Push Fulfillment Status"

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

**Shipping Tags:**
- `RTO initiated via Shipfast` - Package is being returned to you
- `RTO delivered via Shipfast` - Returned package reached you

**Return Tags:**
- `Return initiated via Shipfast` - Customer return started
- `Return picked up via Shipfast` - Return package collected
- `Return delivered via Shipfast` - Return reached your warehouse

**AI Agent Tags (if enabled):**
- `Order_confirmed` - Customer confirmed the order
- `Address_modification_requested` - Customer asked to change address
- `Cancellation_requested` - Customer requested cancellation
- `Prepaid_converted` - COD converted to prepaid

---

### Q: How do I enable tag syncing?
**A:** 
1. Go to **Integrations → Shopify → Your Store → Edit**
2. Turn on the tags you want:
   - "Sync Tags to Shopify" - Send Shipfast tags to Shopify
   - "Sync Tags from Shopify" - Bring Shopify tags to Shipfast
   - "Sync RTO Tags" / "Sync Return Tags" - Specific tag types

---

### Q: Can I add tags to multiple orders at once?
**A:** Yes! Use our Bulk Tags feature:
1. Select the orders you want to tag
2. Click "Bulk Actions" → "Add Tags"
3. Enter your tag name
4. Click Submit

The tags will sync to Shopify automatically.

---

### Q: Why are my tags appearing twice?
**A:** This usually happens when both sync directions are enabled. Tags go Shopify → Shipfast → back to Shopify.

**Solution:** Enable only one direction:
- Either "Sync Tags TO Shopify" 
- OR "Sync Tags FROM Shopify" 
- Not both

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
2. Enable "Allow COD Amount Edit"
3. Now you can modify the COD amount before shipping

**When to use this:** If you offer phone discounts or accept partial payments during order confirmation.

**Important:** Once enabled, Shopify won't override your manually set COD amounts.

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

## 8. Settings & Configuration

### Q: Where do I find Shopify settings?
**A:** Go to **Integrations → Shopify → Your Store → Edit**

Here you can configure:
- Which orders to import
- When to update Shopify status
- Tag sync options
- COD settings
- And more

---

### Q: What are the recommended settings for most stores?
**A:** Here's a good starting point:

| Setting | Recommended Value |
|---------|-------------------|
| Pull Order Status | Unfulfilled |
| Push Fulfillment Status | Shipped (at creation) |
| Sync Tags to Shopify | On |
| Sync RTO Tags | On |
| COD Settlement Sync | On |

Adjust based on your specific needs!

---

### Q: Can I have different settings for multiple Shopify stores?
**A:** Yes! Each connected Shopify store has its own settings. Go to:

**Integrations → Shopify → Select Store → Edit**

You can customize everything per store.

---

## Quick Reference

### What Syncs Where?

| Data | Direction |
|------|-----------|
| Orders | Shopify → Shipfast |
| Products | Shopify → Shipfast |
| Tracking & Status | Shipfast → Shopify |
| Tags | Both ways (if enabled) |
| Returns | Both ways |

### Common Issues - Quick Fixes

| Problem | Solution |
|---------|----------|
| Orders not appearing | Check "Pull Order Status" setting |
| Status not updating | Check "Push" settings in config |
| Wrong payment method | Set up custom COD mapping |
| Duplicate tags | Enable only one sync direction |
| Old orders missing | Orders >30 days + fulfilled are skipped |

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Shipfast dashboard
- **Help Center:** Visit our help center for more guides

Our support team is happy to help!
