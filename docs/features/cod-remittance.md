---
sidebar_position: 3
title: COD Remittance
description: Learn how Cash on Delivery (COD) remittance works, settlement cycles, deductions, and Early COD options in Velocity Shipping.
---

# COD Remittance FAQ

This guide covers everything you need to know about COD (Cash on Delivery) remittance in Velocity Shipping, including how settlements work, deduction types, and Early COD options.

---

## Table of Contents

1. [Understanding COD Remittance](#1-understanding-cod-remittance)
2. [Settlement Cycle & Timeline](#2-settlement-cycle--timeline)
3. [Deductions](#3-deductions)
4. [Early COD](#4-early-cod)
5. [Viewing Your Remittance](#5-viewing-your-remittance)
6. [Troubleshooting Common Issues](#6-troubleshooting-common-issues)
7. [Best Practices](#7-best-practices)

---

## 1. Understanding COD Remittance

### What is COD Remittance?

COD Remittance is the process by which cash collected from your customers on delivery is settled back to your bank account. When a customer pays cash to the delivery partner, that amount (minus any applicable deductions) is transferred to you according to your settlement cycle.

### How does the COD Remittance flow work?

1. **Collection**: Customer pays cash to the delivery partner upon receiving the shipment
2. **Billing**: Once the shipment is marked as delivered, the COD amount is recorded and scheduled for settlement
3. **Grouping**: Multiple COD amounts are grouped together based on your settlement cycle
4. **Deductions Applied**: Any applicable deductions (invoices, refunds, etc.) are subtracted
5. **Settlement**: The final amount is transferred to your registered bank account
6. **Confirmation**: You receive a notification with settlement details including UTR number

### What information is tracked for each remittance?

Each settlement includes:
- Settlement ID and date
- Total COD amount collected
- Deductions breakdown
- Final settlement amount
- UTR (Unique Transaction Reference) number
- List of all shipments included

---

## 2. Settlement Cycle & Timeline

### When will I receive my COD money?

Your COD settlement depends on two factors:

1. **Days After Delivery**: The number of days after a shipment is delivered before it becomes eligible for settlement (typically T+3 or T+5)
2. **Settlement Frequency**: How often settlements are processed (daily, weekly, or on specific days)

**Example**: If your configuration is T+3 with weekly settlements on Monday, Wednesday, and Friday:
- A shipment delivered on Monday would be eligible from Thursday
- It would be included in Friday's settlement

### What settlement frequencies are available?

| Frequency | Description |
|-----------|-------------|
| **Daily** | Settlement processed every day |
| **Weekly** | Settlement on specific days (e.g., Mon, Wed, Fri) |
| **Monthly** | Settlement on specific dates each month |

### How do I check my settlement configuration?

1. Go to **Billing** in the left sidebar
2. Click on the **COD Remittance** tab
3. Your settlement configuration is displayed at the top:
   - Days after delivery (e.g., "T+3")
   - Settlement cycle (e.g., "Weekly - Monday, Wednesday, Friday")

### What is the "Next Cycle COD" amount?

This shows the total COD amount scheduled for your upcoming settlement, along with the expected settlement date.

---

## 3. Deductions

### What deductions can be applied to my COD settlement?

Several types of deductions may be applied to your settlement:

| Deduction Type | Description | Auto-Applied? |
|----------------|-------------|---------------|
| **Shipping Charges** | Freight and handling fees for delivered shipments | Yes |
| **Negative Wallet Balance** | If your wallet has a negative balance, it's recovered from COD | Yes |
| **Outstanding Invoices** | Unpaid invoices are settled from COD | Yes |
| **COD Offset** | Prepaid credit balance used to offset charges | Yes |
| **Buyer Refunds** | Refunds for rejected/returned COD orders | Manual approval |

### How are deductions prioritized?

Deductions are applied in priority order:
1. Primary automated deductions (shipping charges)
2. Hold amounts (if any disputes are pending)
3. Wallet balance recovery
4. Invoice settlements
5. Customer refunds

### Can deductions exceed my COD amount?

Deductions are capped at your available COD balance. If deductions exceed your COD, the remaining amount is carried forward as a negative balance to be recovered in future settlements.

### Where can I see the deduction breakdown?

1. Go to **Billing** > **COD Remittance**
2. Click on any settlement record
3. Download the **Settlement Report** (CSV) to see:
   - Individual shipment details
   - COD amounts per shipment
   - Deductions applied
   - Net settlement amount

---

## 4. Early COD

### What is Early COD?

Early COD is an optional service that accelerates your settlement cycle, allowing you to receive COD payments faster than the standard timeline. Instead of waiting T+3 or T+5 days, you can get settlements sooner.

### How much does Early COD cost?

Early COD charges are calculated as a percentage of your settlement amount, plus applicable GST. The exact percentage varies based on your account configuration.

### How do I enable Early COD?

1. Go to **Billing** > **COD Remittance**
2. Look for the **Early COD** section
3. Click **Enable Early COD**
4. Review the charges and terms
5. Confirm to activate

### Can I disable Early COD later?

Yes, you can disable Early COD at any time from the same settings page. Changes take effect from your next settlement cycle.

---

## 5. Viewing Your Remittance

### How do I access my COD remittance dashboard?

1. Go to **Billing** in the left sidebar
2. Click on the **COD Remittance** tab

### What information is shown on the dashboard?

The dashboard displays:

**Insight Cards:**
- **Next Cycle COD**: Amount and date of upcoming settlement
- **Last Cycle COD**: Amount and date of most recent settlement
- **Total Pending Remittance**: Unremitted COD amount
- **Total COD Remitted**: All-time settled amount
- **Total COD Deductions**: All-time deductions

**Settlement History Table:**
- Settlement ID
- Settlement Date
- UTR Number
- COD Amount Remitted
- Total Deductions
- Status

### How do I download a settlement report?

1. Go to **Billing** > **COD Remittance**
2. Find the settlement you want to review
3. Click the **Download** button next to that settlement
4. A CSV file will be generated with complete shipment-level details

### What's included in the settlement report?

The CSV report includes:
- Delivery Date
- Courier Partner
- Order ID
- AWB (Tracking Number)
- COD Amount
- Product SKUs
- Store Name
- Brand
- Remittance Date
- UTR Number
- Remarks

---

## 6. Troubleshooting Common Issues

### My shipment was delivered but COD is not showing

| Possible Cause | Solution |
|----------------|----------|
| Within settlement window | Wait for T+X days to pass |
| Shipment not marked delivered | Check shipment status in Orders |
| External carrier used | COD remittance is only available for Velocity-integrated carriers |

### My settlement amount seems incorrect

1. Download the settlement report
2. Verify the deductions applied
3. Check if any invoices were settled
4. Review if Early COD charges were applied
5. Contact support if discrepancy persists

### Settlement failed or showing as "Failed" status

Common reasons:
- Bank account not verified/active
- Incorrect bank details
- Bank server issues

**Solution**: Verify your bank account details in Settings > Bank Accounts and ensure your primary account is active and approved.

### I didn't receive the settlement notification

1. Check your registered phone number is correct
2. Verify WhatsApp is enabled for notifications
3. Check spam/promotional folders for email notifications
4. Review the settlement in your dashboard directly

### Deductions are higher than expected

Review the deduction breakdown:
1. Check for outstanding invoices that were auto-settled
2. Review if wallet balance was negative
3. Check for any pending buyer refunds
4. Download the detailed settlement report for itemized view

---

## 7. Best Practices

### For Faster Settlements

1. **Enable Early COD** if cash flow is a priority for your business
2. **Keep wallet balance positive** to avoid deductions eating into COD
3. **Settle invoices promptly** to keep your COD amounts intact
4. **Verify bank account** is active and approved before settlement dates

### For Accurate Tracking

1. **Download settlement reports** monthly for your accounting records
2. **Reconcile COD amounts** with your order management system
3. **Monitor the dashboard** regularly to track pending remittances
4. **Keep records** of UTR numbers for bank reconciliation

### For Avoiding Issues

1. **Use integrated carriers** - External carriers don't support COD remittance
2. **Maintain accurate bank details** - Update immediately if bank details change
3. **Monitor deductions** - Review settlement reports to understand what's being deducted
4. **Respond to refund requests** - Pending buyer refunds may be held from settlements

---

## Need Help?

If you couldn't find your answer here:
- **Email**: support@velocity.in
- **Chat**: Use the chat widget in your Velocity Shipping dashboard
- **Help Center**: Visit our help center for more guides
