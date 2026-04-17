---
sidebar_position: 1
title: Carrier Integrations
description: Guide to logistics partner integrations, supported features, and carrier-specific capabilities.
---

# Carrier Integrations - Frequently Asked Questions

> Guide to logistics partner integrations, supported features, and carrier-specific capabilities

---

## Table of Contents
1. [Integrated Carriers](#1-integrated-carriers)
2. [Feature Support by Carrier](#2-feature-support-by-carrier)
3. [Separate RTO Address](#3-separate-rto-address)
4. [Service Types](#4-service-types)
5. [Post-Booking Operations](#5-post-booking-operations)
6. [QC on Returns](#6-qc-on-returns)
7. [Common Questions](#7-common-questions)

---

## 1. Integrated Carriers

### Q: Which carriers are integrated with Velocity Shipping?

**A:** Velocity Shipping integrates with major logistics partners in India:

| Carrier | Coverage | Best For |
|---------|----------|----------|
| **Delhivery** | Pan-India | High volume, wide coverage |
| **BlueDart** | Pan-India | Express & premium shipments |
| **DTDC** | Pan-India | Cost-effective nationwide delivery |
| **Ekart** | Pan-India | E-commerce shipments |
| **Xpressbees** | Pan-India | Flexible options |
| **Shadowfax** | Metro & Tier-1 cities | Quick commerce, same-day |
| **Pikndel** | Select cities | Hyperlocal, on-demand delivery |
| **Blitz** | Metro cities | Quick commerce, rapid delivery |
| **Urbanebolt** | Select regions | Regional coverage |
| **Amazon (ATS)** | Amazon sellers | Marketplace integration |

---

## 2. Feature Support by Carrier

### Q: What features does each carrier support?

**A:** Here's a comparison of key features:

| Feature | Delhivery | BlueDart | DTDC | Ekart | Xpressbees | Shadowfax | Pikndel | Blitz | Urbanebolt |
|---------|-----------|----------|------|-------|------------|-----------|---------|-------|------------|
| **Forward Shipping** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **COD** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **Prepaid** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **Reverse Pickup** | Yes | Yes | No | Yes | Yes | Yes | No | Yes | Yes |
| **Separate RTO Address** | Yes | Yes | No | Yes | Yes | Yes | No | No | No |
| **Surface (Road)** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **Air (Express)** | Yes | Yes | Yes | Yes | Yes | Yes | No | No | Yes |
| **Same-Day (SDD)** | Yes | No | No | Yes | No | Yes | Yes | Yes | No |
| **Next-Day (NDD)** | Yes | No | No | Yes | No | Yes | No | No | No |
| **Reattempt via API** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **Address Update** | Yes | Yes | No | Yes | No | No | No | No | No |
| **COD to Prepaid** | Yes | No | No | Yes | No | Yes | Yes | No | Yes |
| **QC on Returns** | Yes | No | No | No | No | Yes | No | No | No |
| **OTP Delivery** | Yes | Yes | No | No | No | No | No | No | No |

**Note:** Feature availability may vary based on your specific carrier agreement and account configuration.

---

## 3. Separate RTO Address

### Important: Not All Carriers Support Different RTO Address

**Q: Can I have a different RTO (return) address from my pickup address?**

**A:** This depends on the carrier:

| Carrier | Separate RTO Address Support |
|---------|------------------------------|
| **Delhivery** | Yes - Full support |
| **BlueDart** | Yes - Full support |
| **Xpressbees** | Yes - Full support |
| **Shadowfax** | Yes - Full support |
| **Ekart** | Yes - Full support |
| **DTDC** | No - RTO goes to pickup address |
| **Pikndel** | No - RTO goes to pickup address |
| **Blitz** | No - RTO goes to pickup address |
| **Urbanebolt** | No - RTO goes to pickup address |

---

### Q: What does "RTO goes to pickup address" mean?

**A:** For carriers like DTDC, Pikndel, Blitz, and Urbanebolt:
- When a shipment is returned (RTO), it will be delivered to the **same warehouse** from where it was picked up
- You cannot specify a different return warehouse
- If you need returns to go to a central RTO facility, you'll need to use a carrier that supports separate RTO addresses

---

### Q: I need different pickup and RTO addresses. Which carriers should I use?

**A:** Use any of these carriers:
- **Delhivery** - Most popular choice with wide coverage
- **BlueDart** - Good for premium/express shipments
- **Xpressbees** - Good coverage and flexible
- **Shadowfax** - Best for metro cities
- **Ekart** - Good for e-commerce shipments

Configure your RTO warehouse in **Settings - Warehouses** and mark it as the default RTO location.

---

## 4. Service Types

### Q: What's the difference between Surface and Air shipping?

**A:**

| Service Type | Speed | Cost | Best For |
|--------------|-------|------|----------|
| **Surface (Road)** | 3-7 days | Lower | Non-urgent, cost-conscious |
| **Air (Express)** | 1-3 days | Higher | Time-sensitive, premium |
| **Same-Day (SDD)** | Same day | Premium | Urgent, metro areas |
| **Next-Day (NDD)** | Next day | Premium | Fast delivery needs |

---

### Q: Which carriers support Same-Day and Next-Day delivery?

**A:**

| Service | Delhivery | Ekart | Shadowfax | Pikndel | Blitz | Others |
|---------|-----------|-------|-----------|---------|-------|--------|
| **Same-Day (SDD)** | Yes | Yes | Yes | Yes | Yes | No |
| **Next-Day (NDD)** | Yes | Yes | Yes | No | No | No |

**Note:** SDD and NDD are typically available only in metro and tier-1 cities. Pikndel and Blitz specialize in hyperlocal same-day deliveries.

---

## 5. Post-Booking Operations

### Q: What can I do after a shipment is booked?

**A:** Post-booking operations vary by carrier:

| Operation | Description | Supported Carriers |
|-----------|-------------|-------------------|
| **Cancel** | Cancel before pickup | All carriers |
| **Reattempt** | Request re-delivery after failed attempt | All carriers |
| **RTO Request** | Manually initiate return | All carriers |
| **Address Update** | Change delivery address | Delhivery, BlueDart, Ekart |
| **Phone Update** | Change customer phone | Delhivery, BlueDart |
| **COD to Prepaid** | Convert payment mode | Delhivery, Ekart, Shadowfax, Pikndel, Urbanebolt |

---

### Q: Can I update the delivery address after booking?

**A:** Only some carriers support this:

| Carrier | Address Update | Notes |
|---------|----------------|-------|
| **Delhivery** | Yes | Via landmark update API |
| **BlueDart** | Yes | Via alternate instruction |
| **Ekart** | Yes | Customer details update |
| **DTDC** | No | Must cancel and rebook |
| **Xpressbees** | No | Must cancel and rebook |
| **Shadowfax** | No | Must cancel and rebook |
| **Pikndel** | No | Must cancel and rebook |
| **Blitz** | No | Must cancel and rebook |
| **Urbanebolt** | No | Must cancel and rebook |

---

### Q: Can I change COD to Prepaid after booking?

**A:** Some carriers support this:

| Carrier | COD to Prepaid | Notes |
|---------|---------------|-------|
| **Delhivery** | Yes | Via payment mode API |
| **Ekart** | Yes | Via update request |
| **Shadowfax** | Yes | Sets COD to 0 |
| **Pikndel** | Yes | Via update API |
| **Urbanebolt** | Yes | Via update API |
| **BlueDart** | No | Not supported |
| **DTDC** | No | Not supported |
| **Xpressbees** | No | Not supported |
| **Blitz** | No | Not supported |

---

## 6. QC on Returns

### Q: What is QC (Quality Check) on returns?

**A:** QC allows the carrier's delivery agent to verify the returned product before accepting it. This helps:
- Ensure the correct product is being returned
- Check product condition
- Verify quantity matches

---

### Q: Which carriers support QC on returns?

**A:**

| Carrier | QC Support | Notes |
|---------|------------|-------|
| **Delhivery** | Yes | Custom QC parameters supported |
| **Shadowfax** | Yes | QC rules with images |
| **BlueDart** | No | No QC integration |
| **Ekart** | No | Basic returns only |
| **Xpressbees** | No | No QC integration |
| **DTDC** | No | No returns supported |
| **Pikndel** | No | No QC integration |
| **Blitz** | No | No QC integration |
| **Urbanebolt** | No | No QC integration |

---

### Q: How do I set up QC parameters?

**A:** If your carrier supports QC:
1. Define QC questions for each product category
2. Include images for reference
3. Set required vs optional checks
4. Configure pass/fail criteria

Contact your account manager to enable QC on returns.

---

## 7. Common Questions

### Q: Why did my shipment fail with one carrier but succeed with another?

**A:** Common reasons:

| Reason | Description |
|--------|-------------|
| **Pincode not serviceable** | Carrier doesn't serve that area |
| **Weight limit exceeded** | Carrier's max weight limit reached |
| **COD not available** | Carrier doesn't support COD for that pincode |
| **Service type mismatch** | Requested service (SDD/NDD) not available |
| **Temporary block** | Pincode temporarily blocked (weather, etc.) |

Velocity Shipping automatically tries the next carrier when one fails (up to 3 attempts by default).

---

### Q: How do I check which carriers serve a specific pincode?

**A:** Go to **Settings - Serviceability** and enter the pincode to see:
- Which carriers can deliver there
- Available service types (Surface, Air, SDD, NDD)
- COD availability
- Expected delivery time

---

### Q: Can I use my own carrier account (BYOC)?

**A:** Yes! Bring Your Own Carrier (BYOC) allows you to:
- Use your existing carrier contracts
- Get your negotiated rates
- Maintain carrier relationships

Contact your account manager to set up BYOC integration.

---

### Q: How do I enable or disable a carrier?

**A:** Go to **Settings - Carriers** to:
- Enable/disable carriers
- Set carrier as Regular or High Performance mode
- Configure carrier-specific settings

---

### Q: Why is tracking not updating for my shipment?

**A:** Tracking updates depend on carrier APIs:
- Most carriers push updates in real-time
- Some carriers have delays (15-30 mins)
- Check carrier's system status if delays persist
- Contact support if tracking is stuck for >24 hours

---

## Quick Reference

### Carrier Feature Matrix

| Carrier | RTO Address | Reverse | Address Update | COD to Prepaid | QC |
|---------|-------------|---------|----------------|-------------|-----|
| Delhivery | Yes | Yes | Yes | Yes | Yes |
| BlueDart | Yes | Yes | Yes | No | No |
| Xpressbees | Yes | Yes | No | No | No |
| Shadowfax | Yes | Yes | No | Yes | Yes |
| Ekart | Yes | Yes | Yes | Yes | No |
| DTDC | No | No | No | No | No |
| Pikndel | No | No | No | Yes | No |
| Blitz | No | Yes | No | No | No |
| Urbanebolt | No | Yes | No | Yes | No |

### Choosing the Right Carrier

| Your Need | Recommended Carriers |
|-----------|---------------------|
| Wide coverage + separate RTO | Delhivery, BlueDart, Xpressbees, Ekart |
| Budget-friendly | DTDC, Xpressbees |
| Same-day delivery | Shadowfax, Delhivery, Pikndel, Blitz |
| Premium/express | BlueDart |
| QC on returns | Delhivery, Shadowfax |
| COD conversion | Delhivery, Ekart, Shadowfax, Pikndel |
| Hyperlocal/quick commerce | Pikndel, Blitz, Shadowfax |

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your dashboard
- **Account Manager:** For carrier-specific configurations

We're here to help you choose the right carriers!
