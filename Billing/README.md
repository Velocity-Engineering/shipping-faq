# Billing - Frequently Asked Questions

> Guide to Shipfast's billing system, billing modes, invoices, ledger events, and GST configuration

---

## Table of Contents
1. [Overview](#1-overview)
2. [Billing Modes](#2-billing-modes)
3. [Invoice Generation](#3-invoice-generation)
4. [Ledger Events & Charges](#4-ledger-events--charges)
5. [Charge Timing & RTO Delay](#5-charge-timing--rto-delay)
6. [GST & Tax Configuration](#6-gst--tax-configuration)
7. [Wallet & Balance](#7-wallet--balance)
8. [COD Settlements](#8-cod-settlements)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Overview

### Q: How does billing work in Shipfast?
**A:** Shipfast tracks all charges through **Ledger Events**. These events are aggregated into **Invoices** based on your billing cycle. Key components:

| Component | Description |
|-----------|-------------|
| **Ledger Events** | Individual charge/credit records for each transaction |
| **Invoices** | Consolidated bills generated per billing cycle |
| **Invoice Items** | Line items grouped by charge type (shipping, VAS, etc.) |
| **Wallet Balance** | Your prepaid balance for shipping charges |
| **Billing Cycle** | Configuration for billing frequency and mode |

---

## 2. Billing Modes

### Q: What billing modes are available?

**A:** Shipfast supports three billing modes:

| Mode | Description | Wallet Behavior |
|------|-------------|-----------------|
| **Prepaid** | Pre-fund wallet before shipping | Cannot go negative |
| **Postpaid** | Get invoiced at billing cycle end | Can go negative up to credit limit |
| **COD Offset** | COD settlements auto-offset invoices | Can go negative up to credit limit |

---

### Prepaid Mode

**Q: How does Prepaid mode work?**
**A:** 
- You must maintain a positive wallet balance to ship
- Charges are deducted from your wallet in real-time
- If wallet balance ≤ 0, you cannot create new shipments
- No credit limit - balance cannot go negative

**Q: When should I use Prepaid mode?**
**A:** Best for:
- New clients starting with Shipfast
- Small-volume shippers
- Clients who prefer no credit obligations

---

### Postpaid Mode

**Q: How does Postpaid mode work?**
**A:**
- You receive a **credit limit** based on your agreement
- Wallet balance can go negative up to the credit limit
- Invoices are generated at the end of each billing cycle
- Payment due within grace period (typically 7 days)

**Available Balance Calculation:**
```
Available Balance = Credit Limit + Wallet Balance
```

**Example:** Credit limit ₹50,000, Wallet balance -₹30,000
- Available balance = ₹50,000 + (-₹30,000) = ₹20,000

**Q: What happens if I exceed my credit limit?**
**A:** Shipping is blocked when `Wallet Balance < (-1 × Credit Limit)`. You must recharge or settle invoices to continue shipping.

---

### COD Offset Mode

**Q: How does COD Offset mode work?**
**A:**
- Hybrid of prepaid and postpaid
- COD settlements automatically offset your invoice charges
- When COD is settled, the amount is credited as a wallet recharge
- Reduces need for manual recharges if you have high COD volume

**Q: Is COD Offset suitable for my business?**
**A:** Best for:
- High-volume COD shippers (>50% COD orders)
- Businesses wanting automatic balance top-ups
- Reduced manual payment management

---

## 3. Invoice Generation

### Q: When are invoices generated?

**A:** Based on your billing frequency:

| Frequency | Invoice Generation Date |
|-----------|------------------------|
| **Monthly** | 1st of each month |
| **Fortnightly** | 1st and 16th of each month |
| **Weekly** | Configured day of the week |

---

### Q: What period does an invoice cover?

**A:**
- **Monthly (billing day 1st):** 1st to last day of previous month
- **Fortnightly:** 1st-15th OR 16th-end of month
- **Weekly:** Previous 7 days from billing day

---

### ⚠️ Critical: Invoice Charge Allocation

**Q: How are charges allocated to invoices?**

**A: Invoices include all charges incurred during the billing period, regardless of when the shipment was booked.**

**Example:**
- Shipment booked in **January**, forward charges applied in January
- RTO happens in **February**, RTO charges applied in February
- **January Invoice** → Contains only forward charges
- **February Invoice** → Contains only RTO charges

This ensures each invoice reflects charges for the period they were actually incurred.

---

### Q: What's included in an invoice?

**A:** Invoice items are grouped by charge type:

| Item Type | Description |
|-----------|-------------|
| **Default** | Standard shipping charges (forward + RTO) |
| **VAS** | Value Added Services (WhatsApp, AI Calls, RTO Risk) |
| **Early COD** | Early COD processing fees |
| **Weight Discrepancy** | Extra charges due to weight mismatch |
| **Platform Fee** | Platform usage charges |
| **Others** | Miscellaneous charges |

---

### Q: How is the invoice amount calculated?

**A:**
```
Invoice Amount = Gross Amount + Total Tax
Gross Amount = Sum of all (Debit - Credit) for each item type
Total Tax = CGST + SGST (intra-state) OR IGST (inter-state)
```

---

## 4. Ledger Events & Charges

### Q: What are Ledger Events?

**A:** Ledger events are individual transaction records for every charge or credit. Each event contains:
- **Event Type:** Type of charge (shipment_delivered, rto_debit, vas, etc.)
- **Transaction Type:** debit, credit, hold_debit, hold_credit
- **Amount:** Charge amount (with GST where applicable)
- **Balance:** Running wallet balance after transaction
- **Status:** pending or billed

---

### Q: What are the common ledger event types?

**A:**

| Event Type | Description | Transaction |
|------------|-------------|-------------|
| `shipment_delivered` | Forward shipping charge | Debit |
| `shipment_rto_debit` | RTO shipping charge | Debit |
| `shipment_cod_debit` | COD handling charge | Debit |
| `weight_discrepancy_charge_deducted` | Weight mismatch charge | Debit |
| `early_cod` | Early COD fee | Debit |
| `vas` | VAS charges (WhatsApp, AI, etc.) | Debit |
| `wallet_recharge` | Wallet top-up | Credit |
| `shipment_credit` | Shipping charge reversal | Credit |
| `credit_note` | Credit note issued | Credit |

---

### Q: Which charges are taxable?

**A:**

| Charge Type | Taxable | GST Rate |
|-------------|---------|----------|
| Shipping charges (forward/RTO) | No | 0% |
| Weight discrepancy | Yes | 18% |
| VAS charges | Yes | 18% |
| Early COD | Yes | 18% |
| Platform fee | Yes | 18% |
| QC charges | Yes | 18% |

---

## 5. Charge Timing & RTO Delay

### Q: When are different charges applied?

**A:**

| Charge Type | When Applied |
|-------------|--------------|
| **Forward charges** | Immediately when shipment is delivered |
| **COD charges** | Immediately when COD shipment is delivered |
| **VAS charges** | Immediately when service is executed (WhatsApp sent, call completed) |
| **Weight discrepancy** | When carrier reports weight difference |
| **RTO charges** | **72 hours after RTO event** (see below) |

---

### ⚠️ Critical: RTO 72-Hour Delay

**Q: Why are RTO charges delayed by 72 hours?**

**A: RTO charges are applied 72 hours after receiving the RTO event from the carrier (3PL) to avoid billing errors.**

**Reason:**
- Carriers sometimes incorrectly mark shipments as RTO
- The 72-hour buffer allows time for status corrections
- If the RTO is reversed within 72 hours, no charge is applied

**Timeline:**
```
RTO Event Received → 72-hour Hold → RTO Charge Applied
        ↓                              ↓
   Hold Debit created           Actual Debit created
```

**Q: What if an RTO is marked incorrectly?**
**A:** If the carrier corrects the status within 72 hours:
- The hold is released
- No RTO charge is applied
- Forward charge remains as-is

---

### Q: When are WhatsApp charges billed?

**A: WhatsApp charges are only billed for successfully sent messages.**

- Message sent successfully → Charge applied
- Message failed to send → No charge
- Each retry (if enabled) is charged separately when successful

---

## 6. GST & Tax Configuration

### Q: How do I configure GST for my account?

**A:** Shipfast supports two GST modes:

| Mode | Description |
|------|-------------|
| **Central Billing** | Single GSTIN for all shipments |
| **State-Based Billing** | Multiple GSTINs, one per state |

---

### Q: How does Central Billing work?

**A:**
- One GSTIN registered for your business
- All invoices use this single GSTIN
- Tax calculation:
  - **Same state as your GSTIN:** CGST (9%) + SGST (9%)
  - **Different state:** IGST (18%)

---

### Q: How does State-Based Billing work?

**A:**
- Register separate GSTINs for each state you operate in
- Each GSTIN links to a specific state and billing address
- Separate invoices generated per state
- Shipping charges go to the warehouse's state invoice
- VAS and platform fees go to primary GSTIN invoice

**Q: When should I use State-Based Billing?**
**A:** Required when:
- You have registered GSTINs in multiple states
- You need state-wise invoice breakdowns for compliance
- Your warehouses operate across multiple states

---

### Q: What validations apply to GSTIN?

**A:**
- GSTIN format must be valid (e.g., 29ABCDE1234F1Z5)
- First 2 digits must match the state code
- Billing address ZIP must belong to the selected state
- Only one GSTIN per state per client

---

## 7. Wallet & Balance

### Q: How do I check my wallet balance?

**A:** Go to **Finance → Wallet** in your dashboard to see:
- Current wallet balance
- Recent transactions
- Recharge history

---

### Q: How do I recharge my wallet?

**A:** Multiple payment methods supported:

| Method | Description |
|--------|-------------|
| **Online Payment** | Razorpay, Cashfree (instant) |
| **NEFT/Bank Transfer** | Manual with UTR tracking |
| **Credit Note** | Applied from issued credit notes |
| **COD Offset** | Automatic from COD settlements |

---

### Q: What happens when my balance is low?

**A:**

| Billing Mode | Low Balance Behavior |
|--------------|---------------------|
| **Prepaid** | Cannot ship if balance ≤ 0 |
| **Postpaid** | Can continue until credit limit exhausted |
| **COD Offset** | Can continue until credit limit exhausted |

**Best Practice:** Set up low-balance alerts to avoid shipping disruptions.

---

### Q: Do overdue invoices affect my shipping?

**A:** Yes. If you have overdue invoices exceeding ₹100, shipping is blocked until payment is made.

---

## 8. COD Settlements

### Q: How does COD settlement work?

**A:**
1. COD shipment delivered → COD Remittance created (pending)
2. Settlement date arrives → COD Settlement created
3. Deductions applied (TDS, chargebacks, etc.)
4. Net amount transferred to your bank OR offset against wallet

---

### Q: What deductions can apply to COD settlements?

**A:**

| Deduction Type | Description |
|----------------|-------------|
| **Invoice Offset** | Outstanding invoice amounts |
| **TDS** | Tax deducted at source |
| **Chargebacks** | Customer disputes |
| **Commission** | Applicable fees |
| **Adjustments** | Manual adjustments |

---

### Q: How does Early COD work?

**A:**
- Opt for faster COD settlement (before standard cycle)
- A percentage fee is charged on the settlement amount
- Fee is added as a ledger event and included in invoice

---

## 9. Troubleshooting

### Q: My invoice amount seems incorrect

**A:** Check these common causes:

| Issue | Explanation |
|-------|-------------|
| **RTO not included** | RTO charges appear in the month they occurred, not shipment month |
| **Pending charges** | Some charges may still be in "pending" status |
| **Credit notes** | Check if credit notes were applied |
| **Tax calculation** | Verify GST mode (central vs state-based) |

---

### Q: Why can't I ship even with positive balance?

**A:** Possible reasons:

| Reason | Solution |
|--------|----------|
| **Overdue invoices > ₹100** | Pay outstanding invoices |
| **Account inactive** | Contact support |
| **Credit limit exhausted (postpaid)** | Recharge or wait for COD settlement |

---

### Q: I was charged for a cancelled shipment

**A:**
- If cancelled before pickup: No forward charge applied
- If cancelled after pickup: Forward charge applies
- If RTO: RTO charge applies 72 hours after RTO event
- Contact support with AWB for charge reversal if incorrectly applied

---

### Q: My GST is showing incorrectly on invoice

**A:** Check:
1. Your GSTIN is correctly registered in Settings → GST
2. State code in GSTIN matches your registered state
3. Billing address ZIP code is correct
4. For state-based billing, check if shipment state matches GSTIN state

---

## Quick Reference

### Billing Mode Comparison

| Feature | Prepaid | Postpaid | COD Offset |
|---------|---------|----------|------------|
| Pre-funding required | ✅ Yes | ❌ No | ❌ No |
| Credit limit | ❌ No | ✅ Yes | ✅ Yes |
| Negative balance allowed | ❌ No | ✅ Yes | ✅ Yes |
| Invoiced billing | ❌ No | ✅ Yes | ✅ Yes |
| COD auto-offset | ❌ No | ❌ No | ✅ Yes |
| Best for | Low volume | Established clients | High COD volume |

### Charge Timing Summary

| Charge Type | Timing |
|-------------|--------|
| Forward shipping | Immediate on delivery |
| COD handling | Immediate on delivery |
| RTO shipping | **72 hours after RTO event** |
| VAS (WhatsApp) | On successful send only |
| VAS (AI Call) | On call completion |
| Weight discrepancy | On carrier report |
| Early COD | On COD settlement |

### Invoice Generation Schedule

| Frequency | Generation Date | Period Covered |
|-----------|-----------------|----------------|
| Monthly | 1st | Previous full month |
| Fortnightly | 1st | 16th-end of previous month |
| Fortnightly | 16th | 1st-15th of current month |
| Weekly | Configured day | Previous 7 days |

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Shipfast dashboard
- **Account Manager:** Contact your dedicated account manager for billing queries

Our support team is happy to help!
