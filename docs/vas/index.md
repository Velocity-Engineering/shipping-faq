---
sidebar_position: 1
title: Value Added Services (VAS)
description: Guide to Velocity Shipping's Value Added Services pricing, billing, and service descriptions.
---

# Value Added Services (VAS) - Frequently Asked Questions

> Guide to Velocity Shipping's Value Added Services pricing, billing, and service descriptions

---

## Table of Contents
1. [Overview](#1-overview)
2. [Important Billing Information](#2-important-billing-information)
3. [Service Descriptions & Pricing](#3-service-descriptions--pricing)
4. [Free Trial & Credits](#4-free-trial--credits)
5. [Billing Details](#5-billing-details)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. Overview

### Q: What are Value Added Services (VAS)?
**A:** VAS are additional services that help you reduce RTO, improve delivery success, and enhance customer communication. They include:

| Service | Description | Billing Basis |
|---------|-------------|---------------|
| **Order & Address Confirmation** | Automated confirmation via WhatsApp & AI calls | Per message + Per minute |
| **NDR Management** | Automated handling of failed deliveries | Per message + Per minute |
| **WhatsApp Communications** | Automated messages at key milestones | Per message sent |
| **AI Calling** | AI-powered calls to customers | Per minute (pulse-based) |
| **RTO Risk Score** | Prediction of return likelihood | Per API call |
| **Early COD** | Faster COD remittance | % of settlement |
| **Open Box Delivery** | Agent opens package in front of customer for inspection | Per shipment |
| **Exchange** | Swap a delivered item for a replacement in one logistics flow | Per exchange order |

### Q: How do I enable VAS for my account?
**A:** Contact your account manager or reach out to support@velocity.in to enable VAS services. Each service can be enabled independently.

---

## 2. Important Billing Information

### Critical: How Pricing Works

**Q: When is the price of a service (WhatsApp, AI Call) calculated?**

**A: The price is calculated when the automation is triggered, NOT when the service is actually executed.**

This means:
- When an order is created and triggers an automation, the price at that moment is locked in
- Even if the WhatsApp message or AI call happens hours later, the original price applies
- This ensures consistent billing regardless of processing delays

---

### Q: What happens when prices are updated?

**A: Price changes only apply to future orders, not retrospectively.**

- If your WhatsApp price changes from Rs. 1.50 to Rs. 2.00
- Orders already in the automation pipeline will be charged at Rs. 1.50
- Only new orders (triggered after the price change) will be charged Rs. 2.00
- This applies to all VAS services: WhatsApp, AI Calls, RTO Risk, etc.

---

### Critical: Wallet Balance Requirement

**Q: What happens if I don't have enough balance when automation triggers?**

**A: If your wallet balance is insufficient at the time of automation trigger:**

- **The automation fails immediately**
- **It cannot be retried for that order**
- The order will not receive automated confirmation calls or messages
- You'll need to handle such orders manually

**Best Practice:** Always maintain sufficient wallet balance to avoid automation failures. Set up low-balance alerts to get notified before running out of credits.

---

## 3. Service Descriptions & Pricing

### WhatsApp Communications

**Q: What WhatsApp messages does Velocity Shipping send?**
**A:** Various templates based on shipment status:

| Template | When Sent |
|----------|-----------|
| Order Confirmation | When order is created (if automation enabled) |
| Order Placed | Order acknowledgment |
| Shipment Shipped | When shipment is created |
| Picked Up | When carrier picks up |
| Out for Delivery | On delivery day |
| Delivered | Successful delivery |
| Undelivered (NDR) | Failed delivery attempt |
| COD to Prepaid Link | Payment link for COD conversion |

**Q: When am I charged for WhatsApp messages?**
**A:** You're charged only when the message is **successfully sent** (sent_at timestamp received from WhatsApp/Meta). Failed messages are not charged.

---

### AI Calling

**Q: How is AI Call pricing calculated?**
**A:** AI calls are charged per minute using pulse-based billing:

- **Pulse**: Billing increment (e.g., 30 seconds)
- **Price per minute**: Your contracted rate
- **Total charge**: (Call duration rounded up to next pulse) x (Price per minute / 60 x Pulse)

**Example:** 45-second call with 30-second pulse at Rs. 2/minute:
- Charged seconds: 60 (rounded up to next pulse)
- Charge: Rs. 2.00

**Q: Am I charged for failed/rejected calls?**
**A:** No. You're only charged for completed calls with a recorded duration.

---

### RTO Risk Score

**Q: What is RTO Risk Score?**
**A:** A prediction of how likely an order is to be returned to origin (RTO). Orders are classified as:
- **Low Risk** - Likely to be delivered successfully
- **Medium Risk** - Some chance of RTO
- **High Risk** - High likelihood of RTO

**Q: How is RTO Risk calculated?**
**A:** Using multiple signals:
- **Address validity** - Is the address complete and valid?
- **Clean address** - Standardized/corrected address
- **Historical data** - Customer's past order behavior
- **Pin code patterns** - Delivery success rates in the area

**Q: When am I charged for RTO Risk?**
**A:** You're charged when the RTO Risk API successfully returns a score. If the API call fails, you're not charged.

---

### Open Box Delivery

**Q: What is Open Box Delivery?**
**A:** Open Box Delivery is a premium delivery service where the delivery agent opens the package in front of the customer at the time of delivery. This allows the customer to:
- Inspect the product before accepting
- Verify it matches what was ordered
- Reject the shipment on the spot if the item is damaged, incorrect, or unsatisfactory

This service significantly reduces post-delivery disputes and return rates by ensuring customer satisfaction at the point of delivery.

**Q: How do I enable Open Box Delivery?**
**A:** Open Box Delivery is a VAS offering. Contact your **Key Account Manager (KAM)** or the Support team to enable this for your account. Not all carriers support Open Box Delivery — your KAM can advise on carrier availability.

**Q: How is Open Box Delivery billed?**
**A:** Open Box Delivery is charged as an additional fee per shipment. Your specific rate is defined in your VAS contract. For pricing details, check your Velocity Shipping dashboard or contact your account manager.

**Q: What happens if the customer rejects the shipment on open box inspection?**
**A:** If the customer rejects the shipment during open box inspection, the shipment is treated as an RTO (Return to Origin) and returned to your warehouse. The rejection reason is captured and available in the order details.

---

### Exchange

**Q: What is the Exchange service?**
**A:** Exchange allows customers to swap a delivered product for a different variant, size, color, or an entirely different item in a single logistics flow. Instead of a two-step return + new order, an exchange shipment:
- Picks up the original item from the customer
- Delivers the replacement item in the same trip (or a coordinated subsequent trip)

This reduces turnaround time and improves customer experience compared to a standard return + re-order.

**Q: How does Exchange work on Velocity Shipping?**
**A:** The exchange flow typically works as follows:
1. An exchange request is created (manually or via your storefront/integration)
2. A reverse pickup is scheduled to collect the original item
3. A forward shipment is created for the replacement item
4. Both legs are tracked in Velocity Shipping under the exchange order

For the exact exchange workflow available on your account, check the **Exchange** section in your Velocity Shipping dashboard or contact your KAM.

**Q: Which carriers support Exchange?**
**A:** Exchange support varies by carrier. Contact your **Key Account Manager (KAM)** or the Support team to check which carriers in your account support exchange shipments.

**Q: How is Exchange billed?**
**A:** Exchange shipments are billed as per your contracted rates for both the reverse and forward legs. Additional VAS charges may apply depending on the configuration. Check your Velocity Shipping dashboard for billing details or reach out to your account manager.

---

### Early COD

**Q: What is Early COD?**
**A:** A service that provides faster COD remittance. Instead of waiting for the standard remittance cycle, you receive your COD funds earlier for a small fee.

**Q: How is Early COD charged?**
**A:** As a percentage of the settlement amount:
- Your contracted fee percentage (e.g., 1.5%)
- Applied when COD settlement is processed
- Deducted from the settlement amount

---

## 4. Free Trial & Credits

### Q: Do I get charged during free trial?
**A:** No, during free trial:
- Services are free up to the trial limits
- Free credits are deducted instead of wallet balance
- Once trial ends or credits exhausted, regular billing applies

### Q: What happens when free credits run out?
**A:**
- Services stop unless you explicitly opted in
- Regular pricing applies after free credits are exhausted
- Top up your wallet to avoid service interruption

### Q: How do I check my remaining free credits?
**A:** View your free credit balance in the VAS settings section of your dashboard, or contact your account manager.

---

## 5. Billing Details

### Q: How do I check my VAS charges?
**A:**
1. Go to **Payments - Invoices** in your dashboard
2. View itemized VAS charges
3. Download detailed billing reports

### Q: What's included in the VAS itemized bill?
**A:**
- Order/Shipment ID
- Service type (WhatsApp, AI Call, RTO Risk, etc.)
- Charge amount
- Timestamp
- Status (success/failed)

### Key Billing Rules Summary

| Rule | Details |
|------|---------|
| Price lock-in | At automation trigger time |
| Price updates | Future orders only, not retrospective |
| Balance check | At automation trigger, fails if insufficient |
| Retry billing | Each retry is a separate charge |
| Failed services | Not charged (WA not sent, API failed, call not answered) |

### Ledger Event Types

| Service | Event Type | Description |
|---------|------------|-------------|
| RTO Risk | `rto_risk_service_charge` | Per successful API call |
| AI Call | `ai_call_service_charge` | Standalone AI call charges |
| OC Automation (WA) | `oc_automation_wa_service_charge` | WhatsApp in Order Confirmation |
| OC Automation (AI) | `oc_automation_ai_call_service_charge` | AI call in Order Confirmation |
| NDR Automation (WA) | `ndr_automation_wa_service_charge` | WhatsApp in NDR Management |
| NDR Automation (AI) | `ndr_automation_ai_call_service_charge` | AI call in NDR Management |
| General WhatsApp | `wa_communication_service_charge` | Other WhatsApp messages |
| Early COD | `early_cod_charge` | % of COD settlement |

---

## 6. Troubleshooting

### Q: Why wasn't I charged for a service?
**A:** Services are not charged when:
- WhatsApp message failed to send
- AI call was not answered or rejected
- RTO Risk API call failed
- You're still in free trial with credits remaining

### Q: Why was I charged more than expected for AI calls?
**A:** Remember pulse-based billing:
- A 31-second call with 30-second pulse is charged for 60 seconds
- Each retry call is charged separately
- Check your pulse setting in VAS configuration

### Q: My balance was deducted but service didn't work?
**A:** Contact support with:
- Order/Shipment ID
- Service type
- Timestamp

Our team will investigate and refund if service failed.

---

### Q: Automation triggered but the customer wasn't contacted at all. What happened?

**A:** Check these in order:
1. **Wallet balance at trigger time** — If balance was insufficient when the automation triggered, it fails silently and cannot be retried for that order
2. **Phone number format** — Customer phone must be a valid 10-digit Indian mobile; WhatsApp must be active on that number
3. **Automation enabled** — Go to Settings → Automations and confirm the automation is toggled on
4. **Order type filter** — Check if the automation is configured for COD only, prepaid only, or both
5. **Business hours** — AI calls are only made 8:00 AM–8:00 PM; calls triggered outside this window are queued for the next slot

---

### Q: The automation ran but outcomes aren't showing anywhere. Where do I find results?

**A:** Automation results appear in:
- **Order details drawer** → Automation tab (right side panel)
- **AI Agents** section in the main navigation
- **NDR Panel** for NDR-related automation outcomes
- **Downloadable report** from Orders → Download (includes Final Outcome, WhatsApp Status, AI Call Output, Modified Address fields)

---

### Q: Why am I being charged for automations on orders I later cancelled?

**A:** The charge is locked in when the automation **triggers** (at order creation or NDR event), not when the call/message is actually sent. If an order was cancelled after the automation triggered but before execution, the trigger cost may still apply. Contact support with the Order ID if you believe a charge is incorrect.

---

### Q: Some orders show "Ineligible" for WhatsApp/AI Call. Why?

**A:** "Ineligible" means the automation service is not activated for those shipments. Possible reasons:
- The account hasn't subscribed to that specific automation (NDR/OC)
- The specific channel (WhatsApp or AI Call) is not enabled in settings
- The order type doesn't match the automation filter (e.g., automation set to COD only but order is prepaid)

---

## Quick Reference

### VAS Services Summary

| Service | Trigger | Billing Basis | Charged When |
|---------|---------|---------------|--------------| 
| Order Confirmation (WA) | Order created | Per message | Message sent successfully |
| Order Confirmation (AI) | After WA wait time | Per minute (pulse-based) | Call completed |
| NDR Management (WA) | Delivery failed | Per message | Message sent successfully |
| NDR Management (AI) | After WA wait time | Per minute (pulse-based) | Call completed |
| Standalone AI Call | Manual trigger | Per minute (pulse-based) | Call completed |
| RTO Risk Score | Order created | Per API call | API returns score |
| Early COD | Settlement processed | % of settlement | Settlement completed |
| General WhatsApp | Various events | Per message | Message sent successfully |

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard
- **Account Manager:** Contact your dedicated account manager for VAS configuration

**Related FAQs:**
- For automation flow details (retry logic, calling hours, etc.), see the [Automations FAQ](/automations)

Our support team is happy to help!
