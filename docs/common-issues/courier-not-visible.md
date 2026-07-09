---
sidebar_position: 2
title: Courier Not Visible
description: Why no courier options appear when creating a shipment, and how to resolve carrier visibility issues.
---

# Courier Not Visible

> Why no courier options show up when creating a shipment, and what to do about it

---

## Table of Contents
1. [No couriers showing at all](#1-no-couriers-showing-at-all)
2. [No couriers for a specific pincode](#2-no-couriers-for-a-specific-pincode)
3. [Expected courier is missing](#3-expected-courier-is-missing)
4. [COD-specific visibility issues](#4-cod-specific-visibility-issues)
5. [Checking serviceability](#5-checking-serviceability)

---

## 1. No Couriers Showing at All

### Q: I'm trying to create a shipment but no courier options appear at all. What could be causing this?

**A:** When no couriers appear for any order, it usually points to an account-level issue:

| Cause | How to Fix |
|-------|-----------|
| Wallet balance is zero or negative (prepaid billing) | Go to **Payments → Wallet** and recharge |
| Overdue invoice has paused shipping | Go to **Payments → Invoices** and clear the outstanding invoice |
| Credit limit exhausted (postpaid billing) | Make a payment to restore credit headroom |
| No shipping rules configured | Go to **Shipping Rules** and set up carrier selection rules |
| No carriers enabled on your account | Go to **Shipping Rules → Courier Selection** and enable at least one carrier |

---

### Q: My wallet has balance and invoices are clear, but couriers still don't appear.

**A:**
1. Check **Shipping Rules → Courier Selection** — ensure at least one carrier is enabled and not disabled
2. Verify that your **warehouse is configured** in Settings → Warehouses
3. If you recently changed your account plan or carrier contracts, contact your account manager — a carrier may need to be re-enabled at the account level
4. Contact support if nothing above resolves it

---

## 2. No Couriers for a Specific Pincode

### Q: Couriers appear for most orders but not for a specific pincode. Why?

**A:** This is a serviceability issue. The most common reasons:

| Reason | What It Means |
|--------|--------------|
| Pincode not serviceable by any carrier | The destination is outside all carrier coverage areas |
| All carriers have a temporary embargo on the pincode | Carriers have suspended service temporarily (weather, civil unrest, etc.) |
| COD not available for the pincode | Prepaid works but COD doesn't for this route |
| Package weight/dimensions exceed all carrier limits | The order specs fall outside what any carrier can accept |

---

### Q: A pincode showed as serviceable in the Tools check, but no courier appears when I try to ship. Why?

**A:** Serviceability data in **Tools → Pincode Serviceability** is not always real-time. Carrier serviceability is dynamic and can change at any time due to operational constraints, route capacity, or temporary restrictions. The rate/carrier selection screen reflects live availability — it is more accurate than the serviceability tool.

If no courier appears:
1. Try again after 30–60 minutes — temporary blocks sometimes lift quickly
2. Try a different service type (e.g., Surface instead of Express)
3. Try a different carrier if you have multiple enabled
4. Contact support if the issue persists beyond a few hours

---

## 3. Expected Courier is Missing

### Q: I can see some couriers but not the one I expected to be there. Why?

**A:** A specific carrier may be absent because:

| Reason | How to Fix |
|--------|-----------|
| Carrier is disabled in Shipping Rules | Go to **Shipping Rules → Courier Selection** and enable it |
| Carrier doesn't service this pincode | Check carrier coverage in Tools → Serviceability |
| Carrier weight/dimension limit exceeded | Reduce package weight or try a carrier with higher limits |
| Carrier has a temporary embargo on this pincode | Retry later or use an alternative carrier |
| Service type you need isn't supported by that carrier | Not all carriers support SDD/NDD — see [Carrier Integrations](/carrier-integrations) |
| Your BYOC contract with that carrier has lapsed | Contact your account manager |

---

### Q: A carrier used to show up but has disappeared recently.

**A:** Most likely one of these happened:
- The carrier was auto-disabled due to a configuration issue — check **Shipping Rules → Courier Selection**
- Your carrier credentials (for BYOC) need refreshing — raise a support ticket
- The carrier temporarily suspended service for your route — retry later

---

## 4. COD-Specific Visibility Issues

### Q: Couriers appear when I select Prepaid but disappear when I switch to COD.

**A:** Not all carriers support COD for all pincodes. COD availability is more restricted than prepaid:
- Some pincodes are COD-disabled by carriers even if they're serviceable for prepaid
- Some carriers have lower COD limits for certain routes

**What to do:**
1. Check if the destination pincode supports COD via **Tools → Pincode Serviceability**
2. If no carrier offers COD for this pincode, the only option is to ship prepaid
3. For routes where COD is critical to your business, contact your account manager to explore BYOC options

---

## 5. Checking Serviceability

### Q: How do I check which couriers serve a specific pincode?

**A:**
1. Go to **Tools → Serviceability** (or **Tools → Pincode Serviceability**)
2. Enter the destination pincode
3. The tool shows:
   - Which carriers can deliver there
   - Available service types (Surface, Air, SDD, NDD)
   - COD availability per carrier

**Important:** This tool shows general serviceability. Real-time carrier availability at the moment of booking may differ — always treat the actual shipment creation screen as the source of truth.

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your Velocity Shipping dashboard
- **Account Manager:** For carrier enablement or BYOC configuration

Include the **destination pincode**, **order weight**, and **payment mode** (COD/Prepaid) when contacting support for faster diagnosis.
