---
sidebar_position: 4
title: Invoicing / Payment / COD Remittance
description: Common issues with invoices, wallet payments not reflecting, and COD settlements — causes and fixes.
---

# Invoicing / Payment / COD Remittance

> Common questions about invoices, payments, and COD settlement issues

For a full reference on how billing works in Velocity, see the [Billing & Payments](/billing) guide and the [COD Remittance](/features/cod-remittance) guide. This page focuses on the most common issues sellers encounter.

---

## Table of Contents
1. [Invoice issues](#1-invoice-issues)
2. [Payment / wallet issues](#2-payment--wallet-issues)
3. [COD remittance issues](#3-cod-remittance-issues)
4. [Shipping blocked due to billing](#4-shipping-blocked-due-to-billing)

---

## 1. Invoice Issues

### Q: My invoice amount seems higher than expected. What should I check?

**A:** The most common reasons for an unexpected invoice amount:

| Cause | Explanation |
|-------|-------------|
| **RTO charges** | RTO charges appear in the invoice for the month when the RTO happened, not when the order was originally placed — a January order that RTOs in February shows up in the February invoice |
| **Weight discrepancy charges** | If a carrier reported higher actual weight than what you declared, the difference is billed |
| **VAS charges** | WhatsApp message and AI call charges from automations are included in your invoice |
| **Early COD fee** | If you opted into Early COD, the fee is deducted from your settlement and may appear in billing |

**How to investigate:**
1. Go to **Payments → Ledger** for a line-by-line view of all debits and credits
2. Each entry shows the charge type, amount, and associated shipment or order
3. If a charge still seems incorrect after reviewing, contact support with the ledger entry reference

---

### Q: I haven't received my invoice. When should invoices arrive?

**A:**

| Billing Cycle | Invoice Date |
|---------------|--------------|
| Monthly | 1st of each month |
| Fortnightly | 1st and 16th of each month |

Invoices are available in **Payments → Invoices**. You can download them as PDF. If your invoice date has passed and you can't find it, check your billing cycle in Settings and contact support if it's missing.

---

### Q: I was charged for a shipment that I cancelled. Is that correct?

**A:**

| When Cancelled | Charge Applied? |
|----------------|----------------|
| Before carrier pickup | No charge |
| After carrier pickup / in transit | Forward shipping charge applies (carrier already collected it) |
| After RTO | RTO charge applies 72 hours after the RTO event |

If you believe a charge was applied incorrectly, contact support with the AWB number.

---

## 2. Payment / Wallet Issues

### Q: I added money to my wallet but the balance hasn't updated. What should I do?

**A:** Expected update timelines:

| Payment Method | Expected Update |
|----------------|----------------|
| Online (Razorpay / Cashfree) | Instant — if not updated within 5 minutes, contact support |
| NEFT / Bank Transfer | 1–2 business days — share your UTR number with support to expedite |
| Credit Note | Instant — contact support if not reflecting |

If payment is confirmed by your bank but not reflected after the above timeline, email support@velocity.in with: payment screenshot, amount, date, and UTR/transaction reference.

---

### Q: My online payment failed but money was deducted from my bank account.

**A:**
1. Wait 30 minutes — most failed transactions are auto-refunded by the payment gateway
2. Check your bank app for a pending refund
3. If no refund after 3 business days, contact support with:
   - Transaction ID (from the payment page or bank statement)
   - Amount and date
   - Bank account / UPI / card used

---

### Q: An unexpected amount was deducted from my wallet. How do I investigate?

**A:**
1. Go to **Payments → Ledger** for a line-by-line history of all wallet movements
2. Common unexpected debits:
   - **Weight discrepancy** — carrier reported higher actual weight than declared
   - **RTO charge** — applied 72 hours after an RTO event, may appear days after the original delivery failed
   - **VAS charges** — WhatsApp / AI call charges from Automations
3. If a deduction still seems wrong, contact support with the ledger entry reference

---

## 3. COD Remittance Issues

### Q: My shipment was delivered but the COD amount isn't showing in my remittance dashboard.

**A:**

| Possible Cause | What to Do |
|----------------|-----------|
| Within settlement window | Wait for T+3 or T+5 days (per your configuration) to pass |
| Shipment not yet marked Delivered in the system | Check shipment status in Orders — carrier update may be delayed |
| External carrier (not integrated) | COD remittance is only available for Velocity-integrated carriers |

Check **Payments → COD Remittance → Next Cycle COD** to see the amount scheduled for your next settlement and its expected date.

---

### Q: My COD settlement amount is lower than expected. What could have been deducted?

**A:** Deductions are applied in this order:

1. Shipping charges for delivered shipments
2. Wallet balance recovery (if wallet went negative)
3. Outstanding invoice settlement
4. Buyer refunds (if any were approved)
5. Early COD fee (if Early COD is enabled)

**To see the exact breakdown:**
1. Go to **Payments → COD Remittance**
2. Click on the settlement in question
3. Download the **Settlement Report (CSV)** — it has shipment-level detail including all deductions

---

### Q: My COD settlement failed and shows as "Failed" status.

**A:** Common causes:
- Bank account is not verified or inactive
- Bank details are incorrect

**Fix:** Go to **Settings → Bank Accounts**, verify your primary bank account is correct and marked as active/approved. If details need updating, contact support — bank account changes typically require verification.

---

### Q: I haven't received a settlement notification.

**A:**
1. Check your registered phone number is correct
2. Verify WhatsApp notifications are enabled (if you use VAS)
3. Check spam/promotional folders for email notifications
4. You can always view settlements directly in **Payments → COD Remittance**

---

### Q: How do I know when my next COD settlement will happen?

**A:**
1. Go to **Payments → COD Remittance**
2. The **Next Cycle COD** card shows the scheduled amount and expected settlement date
3. Your settlement configuration (T+X days, weekly/monthly frequency) is displayed at the top of that page

---

## 4. Shipping Blocked Due to Billing

### Q: I have wallet balance but can't create shipments. Why?

**A:** Balance alone isn't always enough. Check these:

| Cause | How to Fix |
|-------|-----------|
| Overdue invoice > ₹100 | Pay the outstanding invoice in **Payments → Invoices** |
| Credit limit exhausted (postpaid) | Make a payment to restore credit headroom |
| Account verification pending | Contact your KAM |
| COD offset balance insufficient | Wait for COD settlement or recharge wallet manually |

---

### Q: How do I avoid shipments being blocked due to low balance?

**A:** Go to **Settings → Notifications** (or **Payments → Wallet Settings**) to configure a low-balance alert threshold. You'll receive an email/SMS when your wallet drops below that amount, giving you time to top up before shipping is disrupted.

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your Velocity Shipping dashboard
- **Account Manager:** For billing-specific queries and credit limit requests

For payment and billing issues, always include the **invoice number**, **UTR/transaction reference**, or **settlement ID** to help our team locate the record quickly.
