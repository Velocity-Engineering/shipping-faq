---
sidebar_position: 2
title: Courier Not Visible
description: Why no courier options appear when creating a shipment, and how to resolve carrier visibility issues.
---

# Courier Not Visible

> Why no courier options show up when creating a shipment, and what to do about it

---

## Table of Contents
1. [Check your shipping rules](#1-check-your-shipping-rules)
2. [Check carrier serviceability](#2-check-carrier-serviceability)
3. [Use the Tools section to see eligible couriers](#3-use-the-tools-section-to-see-eligible-couriers)
4. [High Performance Pincode setting](#4-high-performance-pincode-setting)
5. [COD-specific visibility issues](#5-cod-specific-visibility-issues)

---

## 1. Check Your Shipping Rules

### Q: No couriers are showing when I try to create a shipment. Where do I start?

**A:** The first place to check is your Shipping Rules configuration:

1. Go to **Shipping Rules** in your dashboard
2. Verify that at least one carrier is enabled
3. Check the **priority order** of your rules — a rule that doesn't match the order's attributes (weight, pincode, store, etc.) won't surface any couriers
4. Make sure the rule covering your order's profile is correctly set up

If no shipping rule matches the order you're trying to ship, no couriers will appear.

---

### Q: I have shipping rules set up and carriers enabled, but couriers still don't show. What else should I check?

**A:** Go to **Shipping Rules → Courier Selection** and confirm:
- The carrier is toggled on (not disabled)
- The carrier is set to the correct mode (Regular vs High Performance — see [Section 4](#4-high-performance-pincode-setting))

---

## 2. Check Carrier Serviceability

### Q: The courier I expected isn't showing up for a particular pincode. Could it be a serviceability issue?

**A:** Yes. A carrier won't appear if it doesn't service the destination pincode. You can download a **serviceability report** from the dashboard to see which carriers cover which pincodes.

Common serviceability reasons a carrier won't show:

| Reason | What It Means |
|--------|--------------|
| Pincode not in carrier's coverage | The carrier doesn't deliver to this destination |
| Temporary embargo | Carrier has temporarily suspended service (weather, operational constraints, etc.) |
| Service type unavailable | The requested service (e.g., SDD, NDD) isn't available for this route — not all carriers support all service types |

For more on serviceability errors at shipment creation, see [Shipping Errors](./shipping-errors#2-serviceability-errors).

---

## 3. Use the Tools Section to See Eligible Couriers

### Q: How can I check which couriers are eligible for a specific shipment before creating it?

**A:** Use the **Tools** section in your Velocity dashboard:

1. Go to **Tools**
2. Enter the shipment details:
   - Pickup pincode
   - Destination pincode
   - Weight
   - Payment mode (COD or Prepaid)
3. The tool will show you the list of eligible couriers for that combination

This is the most accurate way to diagnose why a specific courier isn't appearing — it applies your account's actual carrier configuration and serviceability data.

---

## 4. High Performance Pincode Setting

### Q: A carrier is enabled in my rules but it's still not showing up for certain pincodes. Could the High Performance setting be the cause?

**A:** Yes. In Shipping Rules, you can configure a carrier in **High Performance** mode. When a carrier is set to High Performance, it is only offered for shipments going to pincodes within its High Performance Pincode list.

If the destination pincode you're shipping to is **not** in the carrier's High Performance Pincode set, that carrier won't appear — even if it's enabled.

**How to fix:**
- Go to **Shipping Rules → Courier Selection** and check how the carrier is configured
- Switch the carrier from High Performance to **Regular** mode if you want it to appear for all serviceable pincodes
- Or verify that the destination pincode is included in the High Performance Pincode list for that carrier

---

## 5. COD-Specific Visibility Issues

### Q: Couriers appear when I select Prepaid but disappear when I switch to COD.

**A:** Not all carriers support COD for all pincodes. COD availability is more restricted than prepaid — some pincodes are COD-disabled by carriers even if they're serviceable for prepaid.

**What to do:**
1. Use the **Tools** section (see [Section 3](#3-use-the-tools-section-to-see-eligible-couriers)) with COD selected to see which couriers, if any, are eligible
2. If no carrier offers COD for this pincode, the only option is to ship prepaid
3. For routes where COD is important to your business, contact your account manager

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your Velocity Shipping dashboard
- **Account Manager:** For carrier enablement or configuration changes

Include the **destination pincode**, **order weight**, and **payment mode** (COD/Prepaid) when contacting support for faster diagnosis.
