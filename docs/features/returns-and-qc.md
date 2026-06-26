---
sidebar_position: 7
title: Returns & QC
description: How to manage reverse shipments, quality checks, and return workflows in Velocity Shipping.
---

# Returns & QC - Frequently Asked Questions

> Managing return shipments, quality checks, and reverse logistics

---

## Table of Contents
1. [Types of Returns](#1-types-of-returns)
2. [Initiating a Return](#2-initiating-a-return)
3. [Quality Check (QC) on Returns](#3-quality-check-qc-on-returns)
4. [Tracking Returns](#4-tracking-returns)
5. [Common Issues](#5-common-issues)

---

## 1. Types of Returns

### Q: What are the different types of returns?

| Return Type | What It Means | Who Initiates |
|-------------|--------------|--------------|
| **RTO (Return to Origin)** | Undelivered forward shipment sent back to seller | Carrier (auto) or seller (manual) |
| **Reverse Pickup** | Customer returns a delivered item | Seller initiates via Velocity |
| **QC Return** | Return with quality inspection before acceptance | Seller configures QC parameters |

---

### Q: What is the difference between RTO and Reverse Pickup?
**A:**
- **RTO** — The forward shipment was never delivered; the carrier sends it back automatically or on request
- **Reverse Pickup** — The customer received the item and wants to return it; you create a separate return shipment from the customer's location to your warehouse

---

## 2. Initiating a Return

### Q: How do I initiate a Reverse Pickup (customer return)?
**A:**
1. Go to **Orders** and find the delivered order
2. Click **Create Reverse Shipment** (or **Initiate Return**)
3. Select the pickup address (customer's address) and the return warehouse
4. Choose the carrier — only carriers supporting Reverse Pickup are shown
5. Manifest the return — a new AWB is generated

---

### Q: Which carriers support Reverse Pickup?

| Carrier | Reverse Pickup |
|---------|---------------|
| Delhivery | Yes |
| BlueDart | Yes |
| Xpressbees | Yes |
| Ekart | Yes |
| Shadowfax | Yes |
| Blitz | Yes |
| Urbanebolt | Yes |
| DTDC | No |
| Pikndel | No |

---

### Q: Can the return go to a different address than the original pickup warehouse?
**A:** Yes. When creating a reverse shipment, you can select any active warehouse as the return destination.

---

### Q: How do I manually initiate an RTO for a shipment still in transit?
**A:**
1. Open the shipment in **Orders** or **Shipments**
2. Click **Request RTO**
3. Confirm the action

Note: Not all carriers support mid-transit RTO requests. If the option isn't available, contact support.

---

## 3. Quality Check (QC) on Returns

### Q: What is QC on returns?
**A:** QC allows the carrier's delivery agent to inspect the returned product at the customer's location before accepting it. This helps verify:
- The correct product is being returned
- Product condition meets your acceptance criteria
- Quantity matches what was ordered

If the return fails QC, the carrier rejects it at the customer's doorstep — preventing fraudulent or damaged returns from reaching your warehouse.

---

### Q: Which carriers support QC on returns?

| Carrier | QC Support | Notes |
|---------|------------|-------|
| **Delhivery** | Yes | Custom QC parameters + reference images |
| **Shadowfax** | Yes | QC rules with images |
| BlueDart | No | — |
| Ekart | No | Basic returns only |
| Xpressbees | No | — |
| DTDC | No | — |
| Others | No | — |

---

### Q: How do I set up QC parameters?
**A:**
1. Define QC questions per product category (e.g., "Is the box sealed?", "Are all items present?")
2. Attach reference images for the delivery agent
3. Set checks as required vs optional
4. Configure pass/fail thresholds

Contact your account manager to enable and configure QC on returns.

---

### Q: What happens if a return fails QC?
**A:** The carrier's agent:
1. Rejects the return at the customer's location
2. Marks it as "QC Failed" in the system
3. Notifies you with failure details and images (where supported)

The return shipment is cancelled and does not proceed to your warehouse.

---

### Q: Am I charged for a reverse shipment where QC fails?
**A:** Typically yes — the carrier has dispatched an agent for the pickup attempt. Exact charges vary by carrier. Check your rate card or contact your account manager.

---

## 4. Tracking Returns

### Q: How do I track a reverse shipment?
**A:** Reverse shipments have their own AWB number. Track them in **Shipments** exactly like forward shipments. The return status flow:

```
Reverse Pickup Scheduled
        ↓
Picked Up from Customer
        ↓
In Transit (returning to warehouse)
        ↓
RTO / Reverse Delivered to Your Warehouse ✓
```

---

### Q: What does "RTO Delivered" mean?
**A:** The returned package has been delivered to your warehouse. Update your inventory accordingly.

---

## 5. Common Issues

### Q: I requested a reverse pickup but the carrier isn't collecting.
**A:**
1. Confirm the carrier services the customer's pincode for reverse pickup — check Tools → Serviceability
2. Verify the customer's address and phone number in the shipment are correct
3. Ensure the pickup was scheduled (check shipment status)
4. If 24 hours have passed with no collection, contact support with the AWB number

---

### Q: The customer received the wrong or damaged item. What's the process?
**A:**
1. Create a **Reverse Pickup** shipment to collect the incorrect item
2. Once returned and inspected, ship the correct replacement as a new forward shipment
3. If the damage was caused during forward delivery, contact support to raise a carrier claim

---

### Q: Can I track QC check results?
**A:** Yes. QC results (pass/fail, agent notes, images) are available in the shipment details drawer under the **QC** tab for carriers that support it (Delhivery, Shadowfax).

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your dashboard
- **Account Manager:** To enable QC on returns or configure reverse logistics

Include the **AWB number** in all return-related support queries.
