---
sidebar_position: 5
title: Common Shipping Errors
description: Understanding and resolving common shipping errors from carrier integrations.
---

# Common Shipping Errors

> Understanding carrier error messages and how to resolve them

When creating shipments, you may encounter errors from our carrier partners (3PL providers). This guide explains the most common errors and how to fix them, helping you resolve issues quickly without needing to contact support.

> **Note:** Velocity now shows standardised, user-friendly error messages instead of raw carrier error strings. The error messages listed under **"Error on Velocity"** are what you'll see in the Manifest Attempts tab and order status. Some less common errors may still appear as raw carrier messages — these are listed separately.

---

## Table of Contents
1. [How to View Shipping Errors](#1-how-to-view-shipping-errors)
2. [Serviceability Errors](#2-serviceability-errors)
3. [Address Validation Errors](#3-address-validation-errors)
4. [Contact Number Errors](#4-contact-number-errors)
5. [Weight & Dimension Errors](#5-weight--dimension-errors)
6. [COD & Payment Errors](#6-cod--payment-errors)
7. [Duplicate Order Errors](#7-duplicate-order-errors)
8. [Warehouse & Pickup Errors](#8-warehouse--pickup-errors)
9. [System & Technical Errors](#9-system--technical-errors)
10. [Self-Diagnosing Carrier Selection Issues](#10-self-diagnosing-carrier-selection-issues)
11. [Quick Resolution Guide](#11-quick-resolution-guide)

---

## 1. How to View Shipping Errors

### Manifest Attempts Tab

To view detailed error information for any shipment, check the **Manifest Attempts** tab in the Order details drawer:

1. Go to **Orders** and click on the order you want to investigate
2. In the Order details drawer, click on the **Manifest Attempts** tab
3. View all carrier attempts and their results

### Why Check Manifest Attempts?

When you create a shipment, Velocity automatically tries **up to 3 carriers** based on your shipping rules (in priority order). If the first carrier fails, we attempt the next one, and so on.

**This means:**
- Your shipment may be manifested with your 2nd or 3rd priority carrier if the 1st one failed
- The Manifest Attempts tab shows **all attempts** - successful and failed
- You can see the **error message** from each carrier that failed

### Common Scenario

> "Why wasn't my shipment assigned to Carrier A as per my shipping rules?"

Check the Manifest Attempts tab. You might see:

| Carrier | Eligibility | Reason | Booking attempt |
|---------|-------------|--------|-----------------|
| Carrier A | Not eligible | COD not supported by this carrier | Not attempted |
| Carrier B | Eligible | — | Failed — Delivery location is not serviceable |
| Carrier C | Eligible | — | Success |

This shows that Carrier A was ruled out before booking (COD not supported), Carrier B was tried but the carrier's system rejected it, and the shipment was manifested with Carrier C (your 3rd priority).

### What You'll Find in Manifest Attempts

- **Carrier name** — Every carrier that was evaluated for this shipment
- **Eligibility** — Whether the carrier met all requirements (serviceable pincode, supported payment mode, weight within limits, etc.) before a booking was attempted
- **Reason** — If a carrier was not eligible, a plain-language explanation of why (e.g., "COD not supported by this carrier")
- **Status** — The result of the booking attempt: Success, Failed, or Not Attempted (if ruled out as ineligible)
- **Error message** — The error from the carrier's system, if a booking was attempted and rejected
- **Timestamp** — When each evaluation or booking attempt occurred
- **AWB number** — The tracking number assigned (if the booking succeeded)

Use the eligibility reason and error messages from failed attempts, then refer to the sections below to understand what went wrong.

---

## 2. Serviceability Errors

These errors occur when the carrier cannot service a particular pincode or route.

> **⚠ Serviceability is Dynamic:** The serviceability information shown in **Tools > Pincode Serviceability** or in reports may not always reflect real-time carrier availability. Carrier serviceability is highly dynamic and can change frequently due to operational constraints, capacity limits, or temporary restrictions.
>
> A pincode may show as "serviceable" in the serviceability check tool but still fail during actual manifestation. Always check the **Manifest Attempts** tab for the actual error from the carrier.

### Destination Not Serviceable

| Error on Velocity | Meaning |
|---|---|
| `Delivery location is not serviceable by this carrier` | The carrier does not deliver to this destination pincode or area |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `No offerings found for the given request. Either it is out of coverage or dimensions or weight are not supported` | Either the destination is not serviceable OR the package specs exceed limits |

**How to Fix:**
- Check pincode serviceability in **Tools > Pincode Serviceability** as a general guide, but be aware it may not reflect real-time status
- Try a different carrier that services the destination
- For B2C shipments, verify COD serviceability separately as it may differ from prepaid
- If the issue persists, try again after some time as carrier serviceability may change

---

### Pickup/Origin Not Serviceable

| Error on Velocity | Meaning |
|---|---|
| `Pickup location is not serviceable by this carrier` | The carrier does not pick up from your warehouse pincode |

**How to Fix:**
- Verify your warehouse pincode is serviceable by the carrier
- Contact your account manager to enable additional pickup locations

---

### Return Location Not Serviceable

| Error Message | Meaning |
|---|---|
| `No Serviceability for RETURN_LOCATION` | The RTO address pincode is not serviceable |
| `RTO pincode not serviceable` | Same as above |
| `RTO address not provided` | Return address is missing from the shipment |

**How to Fix:**
- Ensure your RTO/return warehouse pincode is serviceable
- Update your warehouse settings with a valid return address

---

### Route Not Serviceable / Embargo

| Error on Velocity | Meaning |
|---|---|
| `This route is not serviceable` | The carrier has suspended or blocked service on this pickup-to-delivery route — temporarily (embargo, capacity) or permanently |

**How to Fix:**
- **Temporary restriction**: Wait and retry after 24-48 hours, or use a different carrier
- **Permanent block**: Use an alternative carrier for this destination
- Verify both pickup and delivery pincodes are correct

---

### Warehouse Not Activated

| Error on Velocity | Meaning |
|---|---|
| `Warehouse not activated. Please contact support team to get your warehouse activated` | No shipping route is configured between your origin and destination; warehouse setup is incomplete with this carrier |

**How to Fix:**
- **Raise a support ticket** — Velocity will activate the warehouse configuration with the carrier

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `Serviceability failure` | General serviceability check failed |

---

## 3. Address Validation Errors

These errors occur when address fields have invalid data or formatting issues.

### Address Issues

| Error on Velocity | Meaning |
|---|---|
| `Delivery/Pickup address is incomplete or contains unsupported characters` | Address field is empty, too long, or contains invalid characters |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `Address exceeds maximum allowed length - 255` | Address line is too long (max 255 characters) |
| `Drop City length should be less than or equal to 50 char` | City name exceeds 50 characters |
| `Drop Name length should be less than or equal to 100 char` | Customer name exceeds 100 characters |
| `ConsigneeAddress1 can't be empty` | First line of address is required |
| `Drop State Not Provided` | State field is empty |
| `ItemIdentifier contains non ISO-8859 characters` | Product identifiers have invalid characters |

**How to Fix:**
- Ensure all required address fields are filled: Name, Address Line 1, City, State, Pincode
- Shorten address lines to under 255 characters; split long addresses across Address Line 1 and 2
- Abbreviate city names if necessary (e.g., "Thiruvananthapuram" → "Trivandrum")
- Remove special characters (emojis, non-English scripts in some cases)
- Use only alphanumeric characters, spaces, and basic punctuation
- Avoid copying text from PDFs or formatted documents that may include hidden characters

---

### Customer Name Issues

| Error on Velocity | Meaning |
|---|---|
| `Customer name is missing or contains unsupported characters` | Consignee name is empty or contains invalid characters |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `Invalid Consignee Name` | Name contains invalid characters or format |
| `invalid consignee name provided` | Same as above |

**How to Fix:**
- Ensure customer name is provided and uses only standard characters
- Avoid special symbols, emojis, or non-ASCII characters in names

---

## 4. Contact Number Errors

Phone number validation is strict across carriers. These are very common errors.

| Error on Velocity | Meaning |
|---|---|
| `Invalid consignee phone number. Please use correct 10 digit phone number` | Phone number is missing, the wrong length, or has an invalid format |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `Drop EmailID is invalid` | Email address format is incorrect |

**How to Fix:**
- Always provide a valid 10-digit mobile number
- Remove any prefixes like +91, 0, or 91
- Ensure the number contains only digits
- Verify email format (e.g., user@domain.com) — leave blank if not available (it's usually optional)

---

## 5. Weight & Dimension Errors

Carriers have strict limits on package weight and dimensions.

### Weight Errors

| Error on Velocity | Meaning |
|---|---|
| `Package weight is invalid or out of the allowed range` | Weight is missing, zero, or outside the carrier's allowed range |
| `Total items weight exceeds package weight` | Sum of item weights exceeds the declared package weight |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `Shipment weight exceeds max allowed value - [MAX_WEIGHT]` | Package exceeds carrier's weight limit |
| `For Destination Pincode [PINCODE] Shipments weight can not be greater than [MAX_WEIGHT]` | Route-specific weight limit exceeded |
| `Total items weight is greater than the package weight` | Sum of item weights exceeds declared package weight |

**How to Fix:**
- Check carrier weight limits before shipping (typically 20-30 kg for standard, lower for some routes)
- For heavy shipments, use surface/cargo services
- Ensure declared weight matches actual weight

---

### Dimension Errors

| Error Message | Meaning |
|---|---|
| `Largest value of dimension exceeds max allowed value - [MAX_CM]` | Package dimensions exceed carrier limits |
| `Second largest value of dimension exceeds max allowed value - [MAX_CM]` | One dimension is too large |

**How to Fix:**
- Check carrier dimension limits (typically max 75cm × 55cm × 35cm for standard)
- For oversized packages, contact your account manager for special handling
- Consider splitting into multiple packages if possible

---

## 6. COD & Payment Errors

Cash on Delivery shipments have specific validation requirements.

| Error on Velocity | Meaning |
|---|---|
| `COD Orders not allowed on this destination` | COD is not available for B2C shipments to this pincode |
| `COD amount is invalid or missing` | COD order has no amount specified, or the amount is zero |
| `COD amount is invalid or out of the allowed range` | COD amount exceeds the carrier's limit |
| `COD configuration is invalid. Please check COD settings` | Payment mode configuration mismatch (e.g., COD mode set for a prepaid order) |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `Invalid format of the DeclaredValue field` | Declared value has invalid format (non-numeric) |

**How to Fix:**
- Ensure COD amount is between ₹1 and the carrier limit (typically ₹20,000 - ₹50,000)
- For prepaid orders, set COD amount to 0 and payment mode to "Prepaid"
- Verify COD amount matches order total
- Use numeric values only for declared value (no currency symbols or commas)

---

## 7. Duplicate Order Errors

These occur when trying to create shipments that already exist.

| Error on Velocity | Meaning |
|---|---|
| `This order has already been booked with the carrier` | An order with the same reference ID or tracking ID already exists at the carrier |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `Duplicate waybill` | Waybill number already exists |

**How to Fix:**
- Check if the order was already successfully manifested
- Use unique order IDs for each shipment
- If retrying a failed order, ensure the previous attempt didn't partially succeed

---

## 8. Warehouse & Pickup Errors

Issues related to warehouse configuration and pickup setup.

> **Note:** Warehouse and pickup errors are typically configuration issues on **Velocity's side**. If you encounter any of the errors below, please **raise a support ticket** and our team will resolve it for you.

### Warehouse Not Configured

| Error Message | Meaning |
|---|---|
| `Warehouse not registered with [CARRIER_NAME]` | Your warehouse needs to be registered with the carrier |
| `Client-Warehouse is not active` | Warehouse is disabled or inactive |
| `client is not active` | Your account with the carrier is inactive |

**How to Fix:**
- **Raise a support ticket** - Velocity will register/activate your warehouse with the carrier
- Include your warehouse name and the carrier name in the ticket

---

### Waybill/AWB & Authentication Errors

| Error on Velocity | Meaning |
|---|---|
| `Something went wrong at carrier end. Please contact technical support` | AWB pool is exhausted, carrier credentials have expired, or there is an account mapping issue |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `[CARRIER] token is required for this operation` | Carrier credentials are missing from Velocity's configuration |

**How to Fix:**
- These may resolve automatically — retry after a few minutes
- If persistent, **raise a support ticket** — Velocity will replenish the AWB pool or refresh the carrier credentials
- Include the carrier name and error message in the ticket

---

### Carrier Operational Block (Order Not Assigned to Preferred Carrier)

**Q: My shipping rule sets Carrier X as the top priority, but orders keep going to a different carrier. The Manifest Attempts tab shows Carrier X failed — yet the pincode appears serviceable. Why?**

**A:** This can happen when a carrier has placed an **operational block** on pickups from your location or account at the carrier's end. This is distinct from a serviceability issue — the carrier's system may accept the pincode query, but their operations team has independently blocked pickup dispatch.

Common causes include:
- Carrier capacity constraints at their sorting hub
- Pending account setup or KYC with the carrier
- A billing hold placed by the carrier on your account
- Regional operational restrictions on the carrier side

**What to do:**
- The block is managed at the carrier's end and cannot be lifted from the Velocity dashboard
- **Raise a support ticket** or contact the Velocity OPs team — they will coordinate with the carrier to resolve the block
- As an immediate workaround, adjust your courier rules to use an alternative carrier while the block is active

---

## 9. System & Technical Errors

These are typically temporary issues that resolve on retry.

### Courier API Unavailable

| Error on Velocity | Meaning |
|---|---|
| `Courier Partner API Services are not available. Please try again later.` | Carrier API is timing out or temporarily unavailable |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `read ECONNRESET` | Connection was reset |
| `504` | Gateway timeout |

**How to Fix:**
- Wait 2-3 minutes and retry
- If persistent, the carrier may be experiencing issues
- Check Velocity status page for any ongoing incidents

---

### Carrier-Side Errors

| Error on Velocity | Meaning |
|---|---|
| `Something went wrong at carrier end. Please contact technical support` | The carrier returned an unrecoverable error — Velocity support needs to investigate |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `We encountered an internal error. Please try again.` | Carrier internal error |
| `Request failed` | API request failed |
| `[object Object]` | Malformed error response from carrier |
| `The HTTP service located at [CARRIER_URL] is unavailable` | Carrier API is down |
| `not master` | Database/cluster issue at carrier end |

**How to Fix:**
- Retry after 5-10 minutes
- If the error persists for more than 30 minutes, contact support

---

### Data Processing Errors

| Error Message | Meaning |
|---|---|
| `Package creation API error. Package might be saved. Please contact support.` | Order may have partially saved |
| `Cannot read properties of null (reading 'getFullAddress')` | Missing address data |
| `Exception encountered from Promise Engine Cause: [Address Id creation failed]` | Address processing failed |
| `There is some error in create shipment request. Please contact oncall team.` | General shipment creation error |

**How to Fix:**
- Check if the shipment was partially created before retrying
- Review order data for any missing or malformed fields
- Contact support with the full error message if unresolved

---

### Product/Item Errors

| Error on Velocity | Meaning |
|---|---|
| `Package weight is invalid or out of the allowed range` | Item/product information is missing — carrier requires product details to process the shipment |

**Errors that may still appear as raw carrier messages:**

| Error Message | Meaning |
|---|---|
| `Items list is missing or empty in Shipment` | No items in the order |

**How to Fix:**
- Ensure at least one item/product is included in the order
- Verify product details (name, SKU, quantity) are populated

---

## 10. Self-Diagnosing Carrier Selection Issues

Use this step-by-step guide when a carrier you expected wasn't used for your shipment.

### Step 1: Open the shipment and go to Manifest Attempts

Open the order in your Velocity dashboard and click the **Manifest Attempts** tab.

### Step 2: Find the carrier you expected

Locate the carrier in the list. Every carrier that was evaluated — whether attempted or not — is shown here.

### Step 3: Check the eligibility column

| What you see | What it means |
|--------------|---------------|
| **Not eligible** | The carrier was ruled out before any booking was attempted. Read the reason column for a plain-language explanation. |
| **Eligible** | The carrier qualified but was either attempted (check the booking status) or a different eligible carrier was selected by your rule. |

### Step 4: Act on the reason

**If the carrier shows "Not eligible":**

| Reason shown | What to do |
|---|---|
| COD not supported by this carrier | Switch to a carrier that supports COD for this destination, or use prepaid |
| Pincode not serviceable | Enable a carrier that covers this delivery pincode in your shipping rules |
| Carrier disabled | Go to Shipping Rules → Courier Selection and re-enable the carrier |
| Weight out of range | Check the carrier's weight limits in your rate card and use a carrier that supports this weight |

**If the carrier shows "Eligible" but wasn't selected:**

Your rule's mode (Cheapest, Fastest, Recommended) evaluated all eligible carriers and picked a different one that scored better. To lock in a specific carrier, switch your rule to **Custom mode** and set your preferred carrier order explicitly.

**If the carrier shows "Eligible" but the booking failed:**

The carrier's system rejected the booking attempt. Look at the error message shown and use sections 2–9 above to resolve it. Velocity automatically tries the next carrier when this happens.

### Step 5: If you still can't explain the behaviour

Contact support with:
- The order ID
- The carrier you expected
- What you see in the Manifest Attempts tab (eligibility status + reason/error)

---

## 11. Quick Resolution Guide

### Before You Contact Support

1. **Check the Manifest Attempts tab** in Order details to see all carrier attempts and errors
2. **Check the error category** above and try the suggested fix
3. **Retry after 5 minutes** for timeout/technical errors
4. **Verify your data** - most errors are due to invalid input
5. **Check serviceability** in Tools > Pincode Serviceability (note: this may not reflect real-time carrier status)
6. **Review order details** for missing or invalid fields

### Most Common Fixes

| Issue | Quick Fix |
|-------|-----------|
| Delivery location not serviceable | Try different carrier or service type |
| Pickup location not serviceable | Verify warehouse pincode; contact account manager |
| Route not serviceable | Check for temporary embargo; try alternative carrier |
| Phone number invalid | Use exactly 10 digits, no prefix |
| Address incomplete or invalid characters | Check all address fields; remove special characters |
| Customer name issue | Ensure name uses only standard characters |
| COD amount error | Ensure amount is ₹1 to carrier limit |
| Duplicate order | Check if already manifested |
| Courier API unavailable | Wait 5 mins and retry |
| Wrong carrier assigned | Check Manifest Attempts tab for errors from preferred carrier |
| Carrier not assigning despite rules | Carrier may have an operational block — raise a support ticket |
| Warehouse/AWB errors | Raise support ticket - Velocity will fix |

### When to Contact Support

Contact support if:
- **Warehouse or pickup errors** - These are Velocity's responsibility to fix
- **Carrier operational block** - OPs team must coordinate with the carrier to lift the block
- Error persists after 3+ retries over 30 minutes
- You see "contact support" in the error message
- Account/credential issues
- Partial shipment creation errors

**Include in your support request:**
- Full error message (from Manifest Attempts tab)
- Order ID / AWB number
- Timestamp of the error
- Steps you've already tried

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard
- **Account Manager:** Contact your dedicated account manager

Our support team is available to help resolve shipping issues quickly!
