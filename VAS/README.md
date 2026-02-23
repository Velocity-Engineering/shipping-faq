# Value Added Services (VAS) - Frequently Asked Questions

> Guide to Shipfast's Value Added Services including AI Calling, WhatsApp Communications, RTO Risk, and Early COD

---

## Table of Contents
1. [Overview](#1-overview)
2. [Important Billing Information](#2-important-billing-information)
3. [Order & Address Confirmation](#3-order--address-confirmation)
4. [NDR Management](#4-ndr-management)
5. [WhatsApp Communications](#5-whatsapp-communications)
6. [AI Calling](#6-ai-calling)
7. [RTO Risk Score](#7-rto-risk-score)
8. [Early COD](#8-early-cod)
9. [Pricing & Billing](#9-pricing--billing)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Overview

### Q: What are Value Added Services (VAS)?
**A:** VAS are additional services that help you reduce RTO, improve delivery success, and enhance customer communication. They include:

| Service | Description |
|---------|-------------|
| **Order & Address Confirmation** | Automated confirmation of orders via WhatsApp & AI calls |
| **NDR Management** | Automated handling of failed deliveries |
| **WhatsApp Communications** | Automated messages at key shipment milestones |
| **AI Calling** | AI-powered calls to customers for confirmation/resolution |
| **RTO Risk Score** | Prediction of return-to-origin likelihood |
| **Early COD** | Faster COD remittance with a small fee |

### Q: How do I enable VAS for my account?
**A:** Contact your account manager or reach out to support@velocity.in to enable VAS services. Each service can be enabled independently.

---

## 2. Important Billing Information

### ⚠️ Critical: How Pricing Works

**Q: When is the price of a service (WhatsApp, AI Call) calculated?**

**A: The price is calculated when the automation is triggered, NOT when the service is actually executed.**

This means:
- When an order is created and triggers the Order Confirmation automation, the price at that moment is locked in
- Even if the WhatsApp message or AI call happens hours later, the original price applies
- This ensures consistent billing regardless of processing delays

---

### Q: What happens when prices are updated?

**A: Price changes only apply to future orders, not retrospectively.**

- If your WhatsApp price changes from ₹1.50 to ₹2.00
- Orders already in the automation pipeline will be charged at ₹1.50
- Only new orders (triggered after the price change) will be charged ₹2.00
- This applies to all VAS services: WhatsApp, AI Calls, RTO Risk, etc.

---

### ⚠️ Critical: Wallet Balance Requirement

**Q: What happens if I don't have enough balance when automation triggers?**

**A: If your wallet balance is insufficient at the time of automation trigger:**

- **The automation fails immediately**
- **It cannot be retried for that order**
- The order will not receive automated confirmation calls or messages
- You'll need to handle such orders manually

**Best Practice:** Always maintain sufficient wallet balance to avoid automation failures. Set up low-balance alerts to get notified before running out of credits.

---

## 3. Order & Address Confirmation

### Q: What is Order & Address Confirmation?
**A:** An automated workflow that confirms orders with customers via:
1. **WhatsApp message** - Sent first, asking customer to confirm order details
2. **AI Call** - If no response to WhatsApp, an AI-powered call is made
3. **Manual Escalation** - If AI call fails, escalated to your ops team

### Q: What can customers do during confirmation?
**A:** Customers can:
- **Confirm** the order
- **Request address change** - Provide updated delivery address
- **Cancel** the order
- **Convert to Prepaid** - Pay online instead of COD

### Q: Can I configure which orders get automated confirmation?
**A:** Yes! You can configure:
- **Order types**: COD only, Prepaid only, or both
- **Exclude tags**: Skip orders with specific tags
- **Bulk orders**: Bulk-fetched orders are automatically excluded

### Q: What is the automation flow?
**A:**
```
Order Created
    ↓
WhatsApp Message Sent
    ↓ (wait time configurable)
AI Call (if no response)
    ↓ (retries configurable)
Manual Calling (if AI fails)
    ↓
Completed/Failed
```

### Q: Can I enable only WhatsApp without AI calling?
**A:** Yes, each channel can be enabled/disabled independently in your automation settings.

---

## 4. NDR Management

### Q: What is NDR Management?
**A:** Automated handling of Non-Delivery Reports (failed delivery attempts). When a delivery fails, the system:
1. Sends WhatsApp message asking customer for action
2. Makes AI call if no response
3. Escalates to ops team if needed

### Q: What actions can customers take for NDR?
**A:**
- **Reattempt delivery** - Request another delivery attempt
- **Provide new address** - Update delivery address
- **Schedule delivery** - Choose a preferred delivery time
- **Cancel/RTO** - Return the package to sender

### Q: When does NDR automation trigger?
**A:** When a shipment status changes to "Need Attention" (delivery attempt failed).

---

## 5. WhatsApp Communications

### Q: What WhatsApp messages does Shipfast send?
**A:** Various templates based on shipment status:

| Template | When Sent |
|----------|----------|
| Order Confirmation | When order is created (if automation enabled) |
| Order Placed | Order acknowledgment |
| Shipment Shipped | When shipment is created |
| Picked Up | When carrier picks up |
| In Transit | Package on the way |
| Out for Delivery | On delivery day |
| Arriving Early | Earlier than expected |
| Delivery Delayed | When delays occur |
| Delivered | Successful delivery |
| Undelivered (NDR) | Failed delivery attempt |
| Return Initiated | Return started |
| Return Picked Up | Return collected |
| COD to Prepaid Link | Payment link for COD conversion |

### Q: When am I charged for WhatsApp messages?
**A:** You're charged only when the message is **successfully sent** (sent_at timestamp received from WhatsApp/Meta). Failed messages are not charged.

### Q: Can I retry WhatsApp messages?
**A:** Yes, if enabled in your automation config:
- Configure retry count (e.g., 2 retries)
- Retries happen after a delay (e.g., 4 hours)
- Each successful send is charged separately

---

## 6. AI Calling

### Q: How does AI Calling work?
**A:** 
1. System places an automated call to customer
2. AI agent converses naturally with the customer
3. AI captures customer's intent (confirm, cancel, address change, etc.)
4. System updates order/shipment based on response
5. Call transcript is saved for reference

### Q: How is AI Call pricing calculated?
**A:** AI calls are charged per minute (or per pulse):
- **Pulse**: Billing increment (e.g., 30 seconds)
- **Price per minute**: Your contracted rate
- **Total charge**: (Call duration / Pulse) × (Price per minute / 60 × Pulse)

**Example:** 45-second call with 30-second pulse at ₹2/minute:
- Charged seconds: 60 (rounded up to next pulse)
- Charge: ₹2.00

### Q: What happens if the customer doesn't answer?
**A:** 
- Call is marked as "rejected" or "failed"
- If auto-retry is enabled, system retries after configured interval
- After max retries, escalates to manual calling

### Q: Can I configure retry settings?
**A:** Yes:
- **Retry count**: How many times to retry (e.g., 3)
- **Retry interval**: Minutes between retries (e.g., 30 minutes)
- **Calling hours**: Start and end time for calls (e.g., 9 AM - 8 PM)

### Q: What if call duration is very short?
**A:** Calls under 15 seconds without goal achievement are considered incomplete and may trigger a retry.

---

## 7. RTO Risk Score

### Q: What is RTO Risk Score?
**A:** A prediction of how likely an order is to be returned to origin (RTO). Orders are classified as:
- **Low Risk** - Likely to be delivered successfully
- **Medium Risk** - Some chance of RTO
- **High Risk** - High likelihood of RTO

### Q: How is RTO Risk calculated?
**A:** Using multiple signals:
- **Address validity** - Is the address complete and valid?
- **Clean address** - Standardized/corrected address
- **Historical data** - Customer's past order behavior
- **Pin code patterns** - Delivery success rates in the area

### Q: When am I charged for RTO Risk?
**A:** You're charged when the RTO Risk API successfully returns a score. If the API call fails, you're not charged.

### Q: Can I enable RTO Risk only for COD orders?
**A:** Yes, you can configure RTO Risk to run only for COD orders in your settings.

### Q: How do I use RTO Risk scores?
**A:** Use them to:
- Prioritize confirmations for high-risk orders
- Require prepaid conversion for high-risk COD orders
- Focus ops attention on risky shipments

---

## 8. Early COD

### Q: What is Early COD?
**A:** A service that provides faster COD remittance. Instead of waiting for the standard remittance cycle, you receive your COD funds earlier for a small fee.

### Q: How is Early COD charged?
**A:** As a percentage of the settlement amount:
- Your contracted fee percentage (e.g., 1.5%)
- Applied when COD settlement is processed
- Deducted from the settlement amount

### Q: When is Early COD fee charged?
**A:** When the COD settlement status changes to "Settled" - the fee is calculated and added to your ledger.

---

## 9. Pricing & Billing

### Q: How do I check my VAS charges?
**A:** 
1. Go to **Finance → Billing** in your dashboard
2. View itemized VAS charges
3. Download detailed billing reports

### Q: What's included in the VAS itemized bill?
**A:**
- Order/Shipment ID
- Service type (WhatsApp, AI Call, RTO Risk, etc.)
- Charge amount
- Timestamp
- Status (success/failed)

### Q: Do I get charged during free trial?
**A:** No, during free trial:
- Services are free up to the trial limits
- Free credits are deducted instead of wallet balance
- Once trial ends or credits exhausted, regular billing applies

### Q: What happens when free credits run out?
**A:**
- Services continue if you have wallet balance
- Regular pricing applies after free credits are exhausted
- Top up your wallet to avoid service interruption

---

## 10. Troubleshooting

### Q: Why didn't my order receive automated confirmation?
**A:** Check these common causes:

| Issue | Solution |
|-------|----------|
| Insufficient balance | Top up your wallet |
| Service not enabled | Contact support to enable |
| Order type excluded | Check COD/Prepaid config |
| Tag exclusion | Check excluded tags list |
| Bulk order | Bulk-fetched orders are skipped |

### Q: Why was my AI call not placed?
**A:** Possible reasons:
- WhatsApp automation completed successfully (no call needed)
- Outside calling hours
- No phone number on order
- Insufficient credits
- AI calling disabled in config

### Q: My WhatsApp message shows as sent but customer didn't receive it?
**A:** Possible causes:
- Customer's WhatsApp is inactive
- Phone number is not on WhatsApp
- Customer blocked business messages
- Network issues on customer's end

### Q: How do I view automation status for an order?
**A:** 
1. Open the order in your dashboard
2. Check the "Automation" or "Activity" section
3. View the flow: WhatsApp → AI Calling → Manual → Completed/Failed

### Q: Can I manually trigger automation for an order?
**A:** Currently, automation is triggered automatically based on order events. Contact support for manual intervention needs.

---

## Quick Reference

### VAS Services Summary

| Service | Trigger | Billing Basis |
|---------|---------|---------------|
| Order Confirmation (WA) | Order created | Per message sent |
| Order Confirmation (AI) | After WA wait time | Per minute (pulse-based) |
| NDR Management (WA) | Delivery failed | Per message sent |
| NDR Management (AI) | After WA wait time | Per minute (pulse-based) |
| RTO Risk Score | Order created | Per API call |
| Early COD | Settlement processed | % of settlement |

### Key Billing Rules

| Rule | Details |
|------|--------|
| Price lock-in | At automation trigger time |
| Price updates | Future orders only, not retrospective |
| Balance check | At automation trigger, fails if insufficient |
| Retry billing | Each retry is a separate charge |
| Failed services | Not charged (WA not sent, API failed) |

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Shipfast dashboard
- **Account Manager:** Contact your dedicated account manager for VAS configuration

Our support team is happy to help!
