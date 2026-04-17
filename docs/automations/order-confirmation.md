---
sidebar_position: 2
title: Order Confirmation
description: Learn how Order Confirmation Automation helps verify orders and customer details before shipping to reduce RTO.
---

# Order Confirmation Automation FAQ

Order Confirmation Automation helps you verify orders and customer details **before shipping** to reduce fake orders, incorrect addresses, and RTO (Return to Origin).

---

## Overview

### Q: What is Order Confirmation Automation?
**A:** Order Confirmation Automation automatically reaches out to customers as soon as an order is placed to:
- Confirm the order is genuine
- Verify the delivery address is correct
- Capture any address corrections
- Identify orders that should be cancelled before shipping
- Optionally offer COD to Prepaid conversion with discounts

### Q: When does the automation trigger?
**A:** The automation triggers when a new order is created. You can configure it to run for:
- COD orders only
- Prepaid orders only
- Both COD and prepaid orders
- Orders excluding specific tags

### Q: What are the benefits of Order Confirmation?
**A:** Key benefits include:
- **Reduce RTO by up to 25%** - Detect low-intent or fake COD orders before shipping
- **Improve address accuracy** - Capture address corrections before the shipment goes out
- **Lower manual effort** - Automate the order verification process
- **Better customer experience** - Customers appreciate proactive communication

---

## Configuration

### Q: How do I enable Order Confirmation Automation?
**A:**
1. Go to **Settings > Automations** in your Velocity Shipping dashboard
2. Find the **Order Confirmation** section
3. Toggle the automation **ON**
4. Configure your preferences (order types, channels, etc.)
5. Save your settings

### Q: Can I choose which orders get automation?
**A:** Yes. You can configure the automation to run for:
- **COD orders only** - Most common, as COD orders have higher RTO risk
- **Prepaid orders only** - For address verification
- **Both** - Maximum coverage
- **Exclude by tags** - Skip orders with specific Shopify tags

### Q: How do I configure WhatsApp vs AI Calling?
**A:** In the automation settings, you can independently enable or disable:
- **WhatsApp Automation** - Toggle on/off, configure address update option and retries
- **AI Calling Automation** - Toggle on/off, configure wait time and retry settings

### Q: Can I set up retry rules?
**A:** Yes. For each channel, you can configure:
- **Retry count** - How many times to retry (default: 3)
- **Retry interval** - Time between retries in minutes (default: 30)
- **Wait time** - Time to wait before moving to AI call after WhatsApp (default: 30 minutes)

---

## COD to Prepaid Conversion

### Q: What is COD to Prepaid conversion?
**A:** This feature allows you to offer customers a discount to convert their COD order to prepaid payment during the order confirmation call. This helps:
- Reduce COD handling costs
- Lower RTO rates (prepaid orders have lower RTO)
- Improve cash flow

### Q: How does COD to Prepaid conversion work?
**A:**
1. Enable the "Include COD to Prepaid Pitch" option in your automation settings
2. Set the discount percentage (e.g., 10% off for prepaid)
3. During the AI call, the agent offers the customer the discount
4. If the customer agrees, they receive a payment link via WhatsApp
5. Once payment is complete, the order is converted to prepaid

### Q: How does the customer pay after agreeing?
**A:** After the customer agrees to convert:
1. A payment link is sent via WhatsApp
2. The customer clicks and pays through a secure payment page
3. Once payment is confirmed, the order is automatically updated to prepaid
4. The shipment proceeds with the new payment mode

### Q: What if payment fails after COD to Prepaid agreement?
**A:** If the payment fails or the customer doesn't complete payment within 48 hours, the payment link expires automatically. The order remains as COD and ships normally.

### Q: What happens if the carrier doesn't support COD to Prepaid?
**A:** Some carriers like Bluedart don't support changing payment modes. For shipments with such carriers, the COD to Prepaid pitch is automatically skipped, and the call proceeds with standard order confirmation only.

### Q: Where can I see COD to Prepaid conversions?
**A:** Orders that agreed to prepaid conversion are tagged with **"Prepaid Agreed"**. Once payment is complete, this changes to **"Prepaid Converted"**. You can filter orders by these tags.

---

## Outcomes and Tags

### Q: What outcomes can Order Confirmation capture?
**A:** The automation captures these outcomes:
- **Confirmed** - Customer confirmed the order is correct
- **Address Change** - Customer provided a corrected address
- **Cancelled** - Customer requested order cancellation
- **Prepaid Agreed** - Customer agreed to convert to prepaid (if COD to Prepaid is enabled)
- **Not Confirmed** - Customer didn't confirm the order
- **Not Contactable** - Could not reach the customer

### Q: How do I see automation outcomes for an order?
**A:**
1. Go to the **Orders** page
2. Click on any order to open the details drawer
3. Look for the **Automations** tab
4. You'll see the complete automation history including WhatsApp status, AI call outcomes, and any address modifications

### Q: What tags are added to orders?
**A:** Based on automation outcomes, these tags may be added:
- **Order Confirmed** - Order was confirmed
- **Address Updated** - Address was modified
- **Cancellation Requested** - Customer requested cancellation
- **Prepaid Agreed** - Customer agreed to prepaid conversion
- **Prepaid Converted** - Prepaid payment completed
- **Not Contactable** - Customer could not be reached

### Q: Can I filter orders by automation outcomes?
**A:** Yes. Use the filters on the Orders page to filter by:
- **Automation Final Outcome** - Confirmed, Address Change, Cancelled, etc.
- **WhatsApp Status** - Sent, Delivered, Read, or Ineligible
- **AI Call Status** - Completed, Not Answered, or Ineligible
- **Shopify Tags** - Filter by automation-generated tags

---

## Address Updates

### Q: Can customers update their address during automation?
**A:** Yes. If you enable the "Address Update" option in settings, customers can:
- Provide a corrected address via WhatsApp
- Dictate a new address during the AI call
- The system captures and stores the modified address

### Q: Where can I see the updated address?
**A:** The modified address is visible in:
- Order details drawer under the Automations tab
- Downloadable order reports (Modified Address column)
- AI Agents report download

### Q: Is the address automatically updated in the shipment?
**A:** When a customer provides a modified address, it's captured and associated with the order. The updated address is used when the shipment is created or can be applied to existing shipments through the order management workflow.

---

## WhatsApp Flow

### Q: What message does the customer receive via WhatsApp?
**A:** The customer receives a personalized WhatsApp message with:
- Your brand name
- Order details (order ID, items ordered)
- Delivery address for confirmation
- Interactive buttons to confirm, update address, or cancel

### Q: Can customers respond via WhatsApp?
**A:** Yes. Customers can interact with the WhatsApp message to:
- Confirm their order
- Indicate they want to change the address
- Request cancellation
- The system captures their response automatically

### Q: What if WhatsApp delivery fails?
**A:** If the WhatsApp message fails to deliver, the system:
1. Records the failure
2. Automatically moves to AI calling (if enabled)
3. You can see failed messages in the automation history

---

## AI Voice Call Flow

### Q: What happens during the AI call?
**A:** The AI agent (Vani):
1. Greets the customer by name
2. Confirms the order details
3. Verifies the delivery address
4. Asks if any changes are needed
5. Captures the customer's response
6. Optionally offers COD to Prepaid conversion (if enabled)

### Q: What goals does the AI try to achieve?
**A:** The AI call captures these goal values:
- **order_status** - Confirmed or Not Confirmed
- **address_status** - Verified or Updated
- **prepaid_conversion** - Agreed or Declined (if COD to Prepaid is enabled)

### Q: How do I access call recordings?
**A:**
1. Go to the order details
2. Open the Automations or AI Agents History tab
3. Click on the call entry to access:
   - Call recording
   - Full transcript
   - AI-generated summary
   - Extracted data

### Q: Can I see what the customer said?
**A:** Yes. Each AI call includes:
- **Full transcript** - Complete conversation text
- **Summary** - AI-generated call summary
- **Extracted data** - Key information extracted (address changes, preferences, etc.)

---

## Reporting

### Q: What reports are available for Order Confirmation?
**A:** You can download reports from the Orders page that include:
- Automation Final Outcome
- WhatsApp Status and Sent Time
- AI Call Status and Output
- Modified Address (if any)
- AI Conversation Link (to recording)

### Q: Where can I see Order Confirmation metrics?
**A:** You can track Order Confirmation metrics in:
- **AI Agents Dashboard** - Shows confirmation rates, address changes, cancellations
- **Analytics section** - Overall automation performance
- **Downloadable reports** - Detailed order-level data

### Q: How do I measure the impact of Order Confirmation?
**A:** Track these key metrics:
- **Confirmation Rate** - % of orders confirmed
- **Address Correction Rate** - % of orders with address updates
- **Cancellation Rate** - % of orders cancelled before shipping
- **RTO Reduction** - Compare RTO rates before and after enabling automation

---

## Integration with Other Features

### Q: Does Order Confirmation work with Shopify tags?
**A:** Yes. Order Confirmation automation:
- Can exclude orders based on Shopify tags
- Adds outcome-based tags to orders (Confirmed, Address Updated, etc.)
- Tags are synced back to Shopify for your reference

### Q: How does this work with RTO Score?
**A:** Order Confirmation and RTO Score complement each other:
- **RTO Score** identifies high-risk orders
- **Order Confirmation** proactively verifies these orders
- Together, they significantly reduce RTO rates

### Q: Does this affect my WhatsApp communication settings?
**A:** Order Confirmation automation is separate from general WhatsApp communication (shipment status updates). You can have:
- Order Confirmation automation enabled
- Regular shipment updates enabled
- Both running independently

---

## Troubleshooting

### Q: Orders are not getting automation. Why?
**A:** Check these common causes:
1. **Automation not enabled** - Verify it's turned on in Settings > Automations
2. **Order type filter** - Check if your orders match the COD/Prepaid filter
3. **Tag exclusions** - See if orders have excluded tags
4. **VAS subscription** - Ensure your subscription is active

### Q: Why is AI calling not happening after WhatsApp?
**A:** AI calling triggers only after the configured wait time (default: 30 minutes). Also check:
- AI Calling is enabled in settings
- Calling hours (8 AM - 8 PM by default)
- Customer phone number is valid

### Q: Address was captured but shipment shows old address?
**A:** Address updates are captured and stored with the order. If you need to update an existing shipment, you may need to:
- Edit the shipment manually with the new address
- Or cancel and recreate the shipment with the correct address

### Q: Customer says they didn't receive any call/message?
**A:** Verify the following:
1. Check the phone number is correct
2. Review automation history for the order
3. Check WhatsApp status (might have failed)
4. Check AI call status (might be outside calling hours)

---

## Best Practices

### Q: When should I enable Order Confirmation?
**A:** We recommend enabling Order Confirmation if you:
- Have high RTO rates, especially on COD orders
- Frequently face incorrect address issues
- Want to reduce fake or low-intent orders
- Want to convert more COD orders to prepaid

### Q: What's the recommended configuration?
**A:** For best results:
- Enable both WhatsApp and AI Calling
- Set reasonable wait times (30-60 minutes)
- Enable address updates
- Consider COD to Prepaid for COD-heavy businesses
- Run for COD orders at minimum

### Q: How can I improve confirmation rates?
**A:** Tips to improve confirmation:
- Ensure accurate phone numbers at checkout
- Use your brand name for recognition
- Run automation during business hours
- Monitor and follow up on "Not Contactable" orders

---

## Need Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard

[Back to Automations Overview](./)
