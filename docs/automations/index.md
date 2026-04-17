---
sidebar_position: 1
title: Automations Overview
description: Learn about Velocity Shipping's Automations that help you automatically communicate with customers to improve delivery success rates.
---

# Automations FAQ

Welcome to the Automations FAQ section. Velocity Shipping's Automations help you automatically communicate with your customers at key moments in the shipping journey using:
- **WhatsApp messages** - Instant, high-engagement communication
- **AI Voice Calls** - Intelligent conversations powered by Vani AI

## Available Automation Types

### 1. Order Confirmation Automation
Automatically verify orders and customer details before shipping to reduce cancellations and RTO.

**[View Order Confirmation FAQs](./order-confirmation)**

### 2. NDR Management Automation
Automatically connect with customers when a delivery fails to get resolution faster and improve reattempt success.

**[View NDR Management FAQs](./ndr-management)**

---

## General FAQs

### Getting Started

#### Q: How do I enable Automations?
**A:** Navigate to **Settings > Automations** in your Velocity Shipping dashboard. You'll see toggles for Order Confirmation and NDR Management automations. Click the toggle to enable the automation you want to use.

#### Q: Are Automations available to all users?
**A:** Automations are available as Value Added Services (VAS). You can activate them from the Settings page. New accounts often receive a free trial period to experience the benefits.

#### Q: Who can enable or disable Automations?
**A:** Only admin users can activate or deactivate VAS services including Automations. Child users have view-only access and will see a prompt saying "You don't have permission to make changes. Please contact your admin."

---

### How Automations Work

#### Q: What is the automation workflow?
**A:** The automation follows this sequence:
1. **WhatsApp Message** - Sent first for instant engagement
2. **AI Voice Call** - If no response to WhatsApp within the configured wait time
3. **Retry Logic** - Automatic retries based on your settings
4. **Ops Escalation** - Optional manual calling by ops team if automated attempts fail

#### Q: What happens if the customer doesn't respond to WhatsApp?
**A:** If there's no response within the configured wait time (default: 30 minutes), the system automatically initiates an AI voice call to reach the customer.

#### Q: How many retry attempts are made?
**A:** By default, the system makes up to 3 retry attempts with 30-minute intervals between each attempt. You can configure these settings based on your needs.

#### Q: What time does the AI make calls?
**A:** AI calls are made only during business hours to respect your customers' time. The default calling window is **8:00 AM to 8:00 PM**. Calls outside this window are queued for the next available slot.

---

### WhatsApp Communication

#### Q: How does WhatsApp automation work?
**A:** When automation is triggered, the system sends a WhatsApp message to the customer using approved templates. The message includes order details and interactive options for the customer to respond.

#### Q: Can I track WhatsApp message status?
**A:** Yes. You can see the delivery status of each WhatsApp message:
- **Sent** - Message sent to WhatsApp
- **Delivered** - Message delivered to customer's phone
- **Read** - Customer has read the message
- **Failed** - Message delivery failed

#### Q: Can customers update their address via WhatsApp?
**A:** Yes. If address update is enabled in your automation settings, customers can provide a new address directly through the WhatsApp conversation.

---

### AI Voice Calls

#### Q: What is Vani AI?
**A:** Vani AI is Velocity Shipping's intelligent voice agent that sounds natural and can have real conversations with your customers. It can confirm orders, collect address updates, understand delivery preferences, and handle common queries.

#### Q: What languages does the AI support?
**A:** Vani AI supports multiple Indian languages and can understand regional accents. The agent adapts to the customer's preferred language during the conversation.

#### Q: Can I customize the AI agent?
**A:** Yes. You can configure:
- Agent name and voice (male/female)
- Greeting message
- Conversation prompts and goals
- What information to collect

#### Q: How do I listen to call recordings?
**A:** Call recordings are available in the AI Agents History section. Click on any order/shipment to view call details including recordings, transcripts, and AI-extracted information.

---

### Outcomes and Reporting

#### Q: What outcomes can automation capture?
**A:** Automations can capture:
- **Confirmed** - Customer confirmed the order/reattempt
- **Address Change** - Customer provided a new address
- **Cancellation** - Customer requested cancellation
- **Reattempt Requested** - Customer wants reattempt delivery
- **Not Contactable** - Could not reach the customer

#### Q: Where can I see automation results?
**A:** Automation results are visible in multiple places:
- Order details page (right-side drawer)
- AI Agents tab in the Orders section
- Downloadable reports from the Orders page
- NDR Panel in Ops dashboard

#### Q: Can I filter orders by automation outcomes?
**A:** Yes. Use the filters on the Orders page to filter by automation outcomes. You can filter by:
- WhatsApp Status
- AI Call Status
- Outcome type (Confirmed, Address Change, Cancelled, etc.)

#### Q: How do I download automation reports?
**A:** Go to the Orders page and click the download button. The report includes automation-related fields such as:
- Final Outcome
- WhatsApp Status and Sent Time
- AI Call Output
- Modified Address (if any)
- AI Conversation Link

---

### Pricing

#### Q: How much do Automations cost?
**A:** Pricing varies based on the service:
- **WhatsApp messages:** Starting at Rs. 0.50 per message*
- **AI Voice Calls:** Starting at Rs. 4.50 per minute*

*Prices exclusive of GST. Your specific rates may vary based on your negotiated pricing.

#### Q: Is there a free trial?
**A:** Yes. New accounts typically receive free credits to try out automation services. Check your Settings page to see available free credits or trial period.

#### Q: Where can I see automation charges?
**A:** Automation charges appear in your billing statement under VAS charges. You can see detailed breakdowns in the Invoices section.

---

### Troubleshooting

#### Q: Why is automation not triggering for some orders?
**A:** Check the following:
1. **Service Status** - Ensure the automation is enabled in Settings
2. **Order Type Filter** - Check if your automation is configured for COD only, prepaid only, or both
3. **Tag Exclusions** - Some orders might be excluded based on tags
4. **Subscription Status** - Ensure your VAS subscription is active

#### Q: Why are some shipments showing "Ineligible" for WhatsApp/AI Call?
**A:** "Ineligible" means the automation service is not activated for those shipments. This could be because:
- The client hasn't subscribed to NDR automation
- The specific mode (WhatsApp/AI Call) is not enabled
- The order type doesn't match the automation filter

#### Q: Customer didn't receive the WhatsApp message. What do I do?
**A:** Check the following:
1. Verify the phone number is correct and has WhatsApp
2. Check the WhatsApp status in the automation details
3. If status shows "Failed", the customer may have blocked business messages
4. Contact support if the issue persists

#### Q: The AI call says "Not Contactable". What does this mean?
**A:** "Not Contactable" means the AI could not reach the customer after all retry attempts. This could be because:
- Phone was switched off
- Customer didn't answer
- Call was rejected
- Invalid phone number

---

### Best Practices

#### Q: How can I maximize automation success?
**A:** Follow these best practices:
1. **Verify phone numbers** - Ensure accurate customer phone numbers at order creation
2. **Use brand name** - Set up your brand name in settings for personalized communication
3. **Enable both channels** - Use both WhatsApp and AI calling for best results
4. **Monitor outcomes** - Regularly review automation outcomes and address issues

#### Q: Should I use WhatsApp, AI Calls, or both?
**A:** We recommend using both channels:
- **WhatsApp** is great for quick, non-intrusive communication
- **AI Calls** are effective when immediate response is needed or WhatsApp doesn't work
- Using both maximizes your chances of reaching the customer

---

## Related Topics

- [Order Confirmation Automation](./order-confirmation) - Detailed FAQs on order verification
- [NDR Management Automation](./ndr-management) - Detailed FAQs on NDR handling
- [Value Added Services](/vas) - Overview of all VAS offerings

---

## Need Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard
