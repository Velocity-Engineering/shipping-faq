---
sidebar_position: 4
title: Weight Discrepancies
description: Understand weight discrepancies, how charges are calculated, and how to dispute incorrect weight measurements in Velocity Shipping.
---

# Weight Discrepancies FAQ

This guide covers everything you need to know about weight discrepancies in Velocity Shipping, including how they occur, how to view and manage them, and the dispute process.

---

## Table of Contents

1. [Understanding Weight Discrepancies](#1-understanding-weight-discrepancies)
2. [How Charges Are Calculated](#2-how-charges-are-calculated)
3. [Viewing Weight Discrepancies](#3-viewing-weight-discrepancies)
4. [Accepting Discrepancies](#4-accepting-discrepancies)
5. [Disputing Weight Discrepancies](#5-disputing-weight-discrepancies)
6. [Escalation Process](#6-escalation-process)
7. [Timelines & Auto-Acceptance](#7-timelines--auto-acceptance)
8. [Troubleshooting Common Issues](#8-troubleshooting-common-issues)
9. [Best Practices](#9-best-practices)

---

## 1. Understanding Weight Discrepancies

### What is a weight discrepancy?

A weight discrepancy occurs when the weight measured by the courier at their sorting facility differs from the weight you declared when creating the shipment. If the courier's measurement is higher, you may be charged additional shipping fees based on the difference.

### Why do weight discrepancies happen?

Common reasons include:

| Reason | Description |
|--------|-------------|
| **Incorrect declaration** | Weight entered during order creation was lower than actual |
| **Volumetric weight** | Package dimensions result in higher volumetric weight |
| **Packaging materials** | Weight of boxes, bubble wrap, fillers not accounted for |
| **Measurement variance** | Slight differences between weighing scales |
| **Dimensional rounding** | Courier's dimension measurement differs from yours |

### What is volumetric weight?

Volumetric weight (also called dimensional weight) is calculated from your package dimensions:

```
Volumetric Weight = (Length × Width × Height) / 5000
```

Where dimensions are in centimeters and result is in kilograms.

**The chargeable weight is the higher of:**
- Dead weight (actual weight on scale)
- Volumetric weight (calculated from dimensions)

### What measurements does the courier capture?

At the sorting facility, the courier typically captures:
- **Dead weight**: Actual weight on their scale
- **Dimensions**: Length, width, and height of the package
- **Sorter images**: Photographs showing the package on the scale with dimensions

---

## 2. How Charges Are Calculated

### How is the additional charge calculated?

1. **Your declared weight** is converted to a weight slab (e.g., 0-500g, 500g-1kg)
2. **Courier's measured weight** is converted to a weight slab
3. **Difference in shipping cost** between the two slabs = Additional charges

### What are weight slabs?

Carriers charge based on weight slabs, not exact weights. For example:
- 0-500g: ₹50
- 501g-1000g: ₹75
- 1001g-1500g: ₹100

If you declared 400g (₹50 slab) but the courier measured 600g (₹75 slab), the additional charge is ₹25.

### Are there separate charges for forward and RTO shipments?

Yes. If a shipment goes through Return to Origin (RTO), additional charges may apply:
- **Forward charges**: Based on weight difference for delivery attempt
- **RTO charges**: Based on weight difference for return journey

Both are shown separately in the charge breakdown.

### What if the weight discrepancy results in zero additional charges?

If the measured weight still falls within the same weight slab as your declared weight, there's no additional charge, and no discrepancy is raised.

---

## 3. Viewing Weight Discrepancies

### How do I access weight discrepancies?

1. Go to **Discrepancies** in the left sidebar
2. You'll see tabs organizing discrepancies by status

### What tabs are available?

| Tab | Description |
|-----|-------------|
| **New Discrepancies** | Recently raised, awaiting your action |
| **Auto Accepted** | Discrepancies auto-accepted after 10 days |
| **Auto Disputed** | Discrepancies automatically disputed by the system based on evidence |
| **All Discrepancies** | Complete history of all discrepancies |

### What information is shown for each discrepancy?

- **AWB/Tracking Number**: Shipment identifier
- **Order ID**: Your order reference
- **Applied Weight**: Weight you declared
- **Courier Weight**: Weight measured by courier
- **Excess Weight**: Difference between the two
- **Additional Charges**: Extra amount to be charged
- **Status**: Current state of the discrepancy
- **Raised Date**: When the discrepancy was created

### How do I filter discrepancies?

Available filters:
- **Date Range**: Last 7/30/60/90 days or custom range
- **Excess Weight**: Up to 0.5kg, 0.5-1kg, 1-2kg, more than 2kg
- **Ageing**: Less than 2 days, 2-4 days, 4-6 days, more than 6 days
- **Status**: Raised, Approved, Disputed, Rejected, etc.
- **SKU**: Filter by product
- **Warehouse**: Filter by pickup warehouse

### How do I view package images and measurements?

1. Click on any discrepancy to open details
2. Click **View Images** to see:
   - Package on weighing scale
   - Dimension measurements
   - Label close-up (if available)

---

## 4. Accepting Discrepancies

### When should I accept a weight discrepancy?

Accept a discrepancy when:
- You acknowledge the courier's measurement is correct
- You want to resolve it quickly without dispute
- The additional charge is small and not worth contesting

### How do I accept a weight discrepancy?

**Single discrepancy:**
1. Go to **Discrepancies** > **New Discrepancies**
2. Find the discrepancy
3. Click **Accept**
4. Confirm in the modal

**Multiple discrepancies (bulk accept):**
1. Select multiple discrepancies using checkboxes
2. Click **Bulk Accept**
3. Confirm the action

### What happens after I accept?

- Status changes to **Approved**
- Additional charges are deducted from your wallet/account
- The discrepancy is moved to resolved state
- A ledger entry is created for the charge

---

## 5. Disputing Weight Discrepancies

### When should I dispute a weight discrepancy?

Dispute when you believe:
- The courier's measurement is incorrect
- Your declared weight was accurate
- Package dimensions were measured incorrectly
- There's an issue with the sorter images

### How do I raise a dispute?

1. Go to **Discrepancies** > **New Discrepancies**
2. Click on the discrepancy
3. Click **Raise Dispute**
4. Select a **dispute reason**
5. Upload supporting **images** (recommended)
6. Submit the dispute

### What dispute reasons are available?

- Incorrect weight measurement
- Incorrect dimension measurement
- Package damaged/spillage
- Wrong package scanned
- Image quality issues

### What images should I upload for disputes?

For the best chance of dispute approval, upload clear images showing:

| Image Type | What to Show |
|------------|--------------|
| **Weight** | Product on your weighing scale with readable display |
| **Length** | Package with measuring tape/scale showing length |
| **Width** | Package with measuring tape/scale showing width |
| **Height** | Package with measuring tape/scale showing height |
| **Label** | Shipping label clearly visible with AWB |

### Can I dispute multiple discrepancies at once?

Yes, using bulk dispute:
1. Select multiple discrepancies
2. Click **Bulk Challenge**
3. Enter a common dispute reason
4. Upload supporting images
5. Submit

Note: Bulk disputes use the same reason and images for all selected items.

### What happens after I dispute?

- Status changes to **Challenged**
- Your dispute is reviewed by the courier
- You'll be notified of the outcome
- Timeline: Typically 2-3 business days

### What are the possible outcomes?

| Outcome | What Happens |
|---------|--------------|
| **Challenge Approved** | Dispute accepted, no charges applied |
| **Rejected** | Dispute denied, you can escalate or accept charges |

---

## 6. Escalation Process

### When can I escalate?

You can escalate only after your initial dispute is **Rejected**.

### How do I escalate a rejected dispute?

1. Go to the rejected discrepancy
2. Click **Escalate**
3. Provide an **escalation reason** (required)
4. Upload additional **supporting images** if available
5. Submit the escalation

### Who handles escalations?

Escalations are reviewed by Velocity Shipping's operations team, who will assess the evidence and make a final decision.

### What are the possible escalation outcomes?

| Outcome | What Happens |
|---------|--------------|
| **Escalation Approved** | Escalation successful, charges reversed |
| **Escalation Rejected** | Final decision, charges are applied |

### Can I escalate multiple times?

No, each discrepancy can only be escalated once. The escalation decision is final.

---

## 7. Timelines & Auto-Acceptance

### How long do I have to dispute?

You have **10 days** from when the discrepancy is raised to take action (accept or dispute).

### What happens if I don't take action?

If you don't accept or dispute within 10 days:
- The discrepancy is **auto-accepted**
- Charges are automatically applied to your account
- Status changes to **Auto Approved**

### Will I be reminded before auto-acceptance?

Yes, you'll receive a reminder notification **2 days before** the auto-acceptance deadline for any pending discrepancies.

### What are the SLAs for dispute resolution?

| Stage | Timeline |
|-------|----------|
| **Initial Dispute** | 72 hours (3 days) for response |
| **Escalation** | 72 hours (3 days) for final decision |

### Can I dispute after auto-acceptance?

No, once a discrepancy is auto-accepted, the decision is final and cannot be disputed.

---

## 8. Troubleshooting Common Issues

### Discrepancy raised but I declared correct weight

**Steps to resolve:**
1. Check if volumetric weight exceeds dead weight
2. Review the sorter images for accuracy
3. If measurement appears wrong, raise a dispute with your evidence

### Dispute was rejected but I'm confident the weight is correct

**Options:**
1. Escalate with additional evidence
2. Provide clearer images showing weight and dimensions
3. Include images of the product packaging for reference

### Charges seem too high for the weight difference

**Check:**
1. Weight slab boundaries (small increase can jump to next slab)
2. Whether RTO charges are included
3. Whether volumetric weight triggered the difference

### I can't see the sorter images

**Possible reasons:**
- Images are being loaded (wait a moment)
- Carrier didn't capture images for this shipment
- Technical issue (contact support)

### Bulk dispute not working

**Requirements:**
- All selected discrepancies must be in "Raised" status
- Cannot have been previously disputed
- Same reason and images will apply to all

### My dispute was auto-rejected

**This can happen if:**
- Evidence images don't support your claim
- AI analysis detected inconsistencies
- Submitted images are unclear or unreadable

### My integration sent 501g but I'm billed at the 1kg rate — is this a billing error?

**A:** No — this is expected carrier billing behavior. Carriers charge by **weight slabs**, not exact weights. The most common slab boundary for express services is:

| Slab | Example rate |
|------|-------------|
| 0–500g | ₹50 |
| 501g–1000g | ₹75 |
| 1001g–1500g | ₹100 |

A declared weight of **501g** falls in the 501g–1kg slab and is billed at that slab's rate — even if it is just 1g over the 500g boundary. This is not a Velocity billing error; it is standard carrier pricing.

**What to check:**
- Verify the exact weight value your integration is sending to Velocity (Unicommerce, WMS, ERP, etc.)
- If the actual product weight is ≤500g, correct the weight in your integration's product catalog
- If the weight is genuinely 501g or above, the 1kg slab charge is correct
- Use the **Discrepancies** section only when the carrier's measured weight differs from what Velocity declared — not to contest the weight your own integration sent

---

## 9. Best Practices

### For Preventing Discrepancies

1. **Weigh packages accurately** using a calibrated scale
2. **Include packaging weight** (boxes, tape, fillers) in your declaration
3. **Measure dimensions correctly** (length × width × height)
4. **Calculate volumetric weight** and declare the higher value
5. **Use consistent packaging** to predict weights better
6. **Take photos** of packages on scale before shipping

### For Handling Discrepancies

1. **Review quickly** - Don't wait until auto-acceptance deadline
2. **Check images first** - Verify if courier measurement looks correct
3. **Accept if valid** - Don't dispute clearly correct measurements
4. **Provide good evidence** - Clear, well-lit photos with readable measurements
5. **Respond promptly** to rejections if you want to escalate

### For Monitoring Trends

1. **Review discrepancies weekly** to identify patterns
2. **Check by warehouse** - Some packing stations may have scale issues
3. **Check by product** - Certain products may consistently have issues
4. **Update product weights** in your catalog if consistently wrong
5. **Train packing staff** on accurate weighing procedures

### For Financial Planning

1. **Budget for discrepancies** - Some variance is normal
2. **Monitor additional charges** in your billing reports
3. **Factor weight tolerance** into pricing decisions
4. **Track dispute success rate** to improve processes

---

## Common Weight Discrepancy Statuses

| Status | Meaning | Action Available |
|--------|---------|------------------|
| **Raised** | New discrepancy, awaiting action | Accept or Dispute |
| **Challenged** | Dispute submitted, under review | Wait for outcome |
| **Auto Challenged** | System auto-disputed | Wait for outcome |
| **Challenge Approved** | Dispute accepted | None (resolved) |
| **Rejected** | Dispute denied | Escalate or Accept |
| **Escalated** | Escalation submitted | Wait for outcome |
| **Escalation Approved** | Escalation successful | None (resolved) |
| **Escalation Rejected** | Escalation denied | None (charges applied) |
| **Approved** | You accepted the charges | None (resolved) |
| **Auto Approved** | Auto-accepted after 10 days | None (charges applied) |

---

## Need Help?

If you couldn't find your answer here:
- **Email**: support@velocity.in
- **Chat**: Use the chat widget in your Velocity Shipping dashboard
- **Help Center**: Visit our help center for more guides
