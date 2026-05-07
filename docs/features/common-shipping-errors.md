---
sidebar_position: 6
title: Common Shipping Errors
description: Understanding and resolving common shipping errors from carrier integrations.
---

# Common Shipping Errors

> Understanding carrier error messages and how to resolve them

When creating shipments, you may encounter errors from our carrier partners (3PL providers). This guide explains the most common errors and how to fix them, helping you resolve issues quickly without needing to contact support.

---

## Table of Contents
1. [Serviceability Errors](#1-serviceability-errors)
2. [Address Validation Errors](#2-address-validation-errors)
3. [Contact Number Errors](#3-contact-number-errors)
4. [Weight & Dimension Errors](#4-weight--dimension-errors)
5. [COD & Payment Errors](#5-cod--payment-errors)
6. [Duplicate Order Errors](#6-duplicate-order-errors)
7. [Warehouse & Pickup Errors](#7-warehouse--pickup-errors)
8. [System & Technical Errors](#8-system--technical-errors)
9. [Quick Resolution Guide](#9-quick-resolution-guide)

---

## 1. Serviceability Errors

These errors occur when the carrier cannot service a particular pincode or route.

### Destination Not Serviceable

| Error Message | Meaning |
|---------------|---------|
| `Destination 689582 is not servicable for requested Product` | The carrier does not deliver to this pincode for the selected service type |
| `Invalid Delivery Pincode. Pincode 400078 is not serviceble` | The delivery pincode is not in the carrier's serviceable area |
| `Delivery Pincode(110017) Not Servicable` | Same as above - pincode not covered |
| `Drop pincode not serviceable` | Destination pincode is outside carrier coverage |
| `Drop Pincode is Not Serviceable` | Same as above |
| `Service is not available in this area (Chunchagatta)` | The specific locality is not serviceable |
| `No offerings found for the given request. Either it is out of coverage or dimensions or weight are not supported` | Either the destination is not serviceable OR the package specs exceed limits |

**How to Fix:**
- Check pincode serviceability in **Tools > Pincode Serviceability** before creating orders
- Try a different carrier that services the destination
- For B2C shipments, verify COD serviceability separately as it may differ from prepaid

---

### Pickup/Origin Not Serviceable

| Error Message | Meaning |
|---------------|---------|
| `Invalid Pickup Pincode. Pickup pincode 722202 is not serviceable` | Carrier doesn't pick up from this pincode |
| `Pickup pincode not serviceable` | Same as above |
| `No vendor has pickup serviceability` | No carrier available for pickup from this location |

**How to Fix:**
- Verify your warehouse pincode is serviceable by the carrier
- Contact your account manager to enable additional pickup locations

---

### Return Location Not Serviceable

| Error Message | Meaning |
|---------------|---------|
| `No Serviceability for RETURN_LOCATION` | The RTO address pincode is not serviceable |
| `Invalid Return Pincode. Return Pincode 411013 is not serviceable` | Carrier cannot deliver returns to this pincode |
| `RTO pincode not serviceable` | Same as above |
| `RTO address not provided` | Return address is missing from the shipment |

**How to Fix:**
- Ensure your RTO/return warehouse pincode is serviceable
- Update your warehouse settings with a valid return address

---

### Embargo Errors

| Error Message | Meaning |
|---------------|---------|
| `Temporary Embargo is placed for the Destination pin code` | Carrier has temporarily suspended service to this area (weather, civil unrest, etc.) |
| `Permanent embargo is placed for the Destination pin code` | Carrier has permanently blocked this pincode |

**How to Fix:**
- **Temporary embargo**: Wait and retry after 24-48 hours, or use a different carrier
- **Permanent embargo**: Use an alternative carrier for this destination

---

### Service Type Errors

| Error Message | Meaning |
|---------------|---------|
| `B2C COD bookings are not allowed for the destination pincode 786153` | COD is not available for B2C shipments to this pincode |
| `SERVICE TYPE 'B2C PRIORITY' NOT APPLICABLE FOR THIS PINCODE PAIR` | The selected service level is not available for this route |
| `Special destination not enabled. Please update your settings to proceed.` | Special delivery zones require account-level enablement |

**How to Fix:**
- Switch to prepaid mode if COD is not available
- Try standard service instead of priority/express
- Contact your account manager to enable special destinations

---

### Route Configuration Errors

| Error Message | Meaning |
|---------------|---------|
| `Route Master Configuration not found for the postal 395010 to 400054 for user_id VT` | No shipping route configured between origin and destination |
| `Serviceability failure` | General serviceability check failed |

**How to Fix:**
- Verify both pickup and delivery pincodes are correct
- Contact support if you believe this route should be serviceable

---

## 2. Address Validation Errors

These errors occur when address fields have invalid data or formatting issues.

### Address Length Errors

| Error Message | Meaning |
|---------------|---------|
| `services[0].serviceDetails[0].serviceData.source.address.addressLine1: Address exceeds maximum allowed length - 255` | Address line is too long (max 255 characters) |
| `The remaining characters are insufficient after removing non-ASCII characters for Destination Address Line 1` | Address becomes too short after removing special characters |
| `Drop City length should be less than or equal to 50 char` | City name exceeds 50 characters |
| `Drop Name length should be less than or equal to 100 char` | Customer name exceeds 100 characters |
| `1 validation error detected: Value at 'shipTo.city' failed to satisfy constraint: Member must have length less than or equal to 50` | City field too long |

**How to Fix:**
- Shorten address lines to under 255 characters
- Split long addresses across Address Line 1 and Address Line 2
- Abbreviate city names if necessary (e.g., "Thiruvananthapuram" → "Trivandrum")

---

### Missing Address Fields

| Error Message | Meaning |
|---------------|---------|
| `Cnee Address is blank` | Consignee (customer) address is empty |
| `ConsigneeAddress1 can't be empty` | First line of address is required |
| `Attention name is blank` | Recipient name is missing |
| `consignee name not provided` | Customer name is missing |
| `Drop State Not Provided` | State field is empty |

**How to Fix:**
- Ensure all required address fields are filled: Name, Address Line 1, City, State, Pincode
- Validate order data before manifesting

---

### Invalid Characters

| Error Message | Meaning |
|---------------|---------|
| `Invalid character in ConsigneeAddress3` | Address contains unsupported special characters |
| `ItemIdentifier contains non ISO-8859 characters` | Product identifiers have invalid characters |
| `Invalid Consignee Name` | Name contains invalid characters or format |
| `invalid consignee name provided` | Same as above |

**How to Fix:**
- Remove special characters (emojis, non-English scripts in some cases)
- Use only alphanumeric characters, spaces, and basic punctuation
- Avoid copying text from PDFs or formatted documents that may include hidden characters

---

## 3. Contact Number Errors

Phone number validation is strict across carriers. These are very common errors.

### Missing Phone Number

| Error Message | Meaning |
|---------------|---------|
| `No phone number provided.` | Phone number field is empty |
| `consignee contact no. (Mobile / Telephone / Masked) not provided` | No contact number for customer |
| `Customer Contact number is Required` | Phone is mandatory |
| `Receiver Phone Number is Mandatory` | Same as above |
| `destination.address.primaryContactNumber : Contact number is empty or null` | Phone number is null/empty |

**How to Fix:**
- Always provide a valid 10-digit mobile number
- Ensure phone number field is not blank in your order data

---

### Invalid Phone Number Format

| Error Message | Meaning |
|---------------|---------|
| `Delivery Mobile length must be 10 digits` | Phone number is not exactly 10 digits |
| `Invalid consignee mobile no. length must be between 10 to 15 digits` | Phone number length is incorrect |
| `Drop mobile or Landline number is invalid` | Number format is wrong |
| `Incorrect phone number(s) for order SHIIAQLB7ATWT` | Phone validation failed |
| `Customer contact is not valid` | General phone validation error |
| `Between Customer No and Virtual No, Only one of the no. can be null at a given point in time` | Phone number configuration issue |

**How to Fix:**
- Use exactly 10 digits for Indian mobile numbers (no country code, no spaces)
- Remove any prefixes like +91, 0, or 91
- Ensure the number contains only digits

---

### Invalid Email

| Error Message | Meaning |
|---------------|---------|
| `Drop EmailID is invalid` | Email address format is incorrect |

**How to Fix:**
- Verify email format (e.g., user@domain.com)
- Leave email blank if not available (it's usually optional)

---

## 4. Weight & Dimension Errors

Carriers have strict limits on package weight and dimensions.

### Weight Errors

| Error Message | Meaning |
|---------------|---------|
| `Shipment weight exceeds max allowed value - 20` | Package exceeds 20 kg limit |
| `For Destination Pincode 243601 Shipments weight can not be greater than 10` | Route-specific weight limit (10 kg) |
| `Total items weight is greater than the package weight` | Sum of item weights exceeds declared package weight |
| `Weight cannot be blank` | Weight field is empty |
| `Minimum allowed value for Shipment weight is- 0.001` | Weight must be greater than 0 |

**How to Fix:**
- Check carrier weight limits before shipping (typically 20-30 kg for standard, lower for some routes)
- For heavy shipments, use surface/cargo services
- Ensure declared weight matches actual weight

---

### Dimension Errors

| Error Message | Meaning |
|---------------|---------|
| `Largest value of dimension exceeds max allowed value - 75.0, Second largest value of dimension exceeds max allowed value - 55.0` | Package dimensions exceed carrier limits |
| `Second largest value of dimension exceeds max allowed value - 55.0` | One dimension is too large |

**How to Fix:**
- Check carrier dimension limits (typically max 75cm × 55cm × 35cm for standard)
- For oversized packages, contact your account manager for special handling
- Consider splitting into multiple packages if possible

---

## 5. COD & Payment Errors

Cash on Delivery shipments have specific validation requirements.

### COD Amount Errors

| Error Message | Meaning |
|---------------|---------|
| `COD amount missing for COD/Cash package` | COD order without amount specified |
| `Collectable Amount can not be zero for COD/DOD/DODFOD` | COD amount must be greater than zero |
| `CollectibleAmount Should be minimum 1 rupee for COD order type` | Minimum COD is ₹1 |
| `COD/FOD Amount should be in range of 0 to 20000!` | COD amount exceeds ₹20,000 limit |
| `Container cannot have Zero or less than Zero Value for CollectOnDelivery` | Invalid COD value |
| `For zero COD/FOD amount, COD/FOD In favour of and COD/FOD Mode should be blank` | Configuration mismatch for prepaid orders |

**How to Fix:**
- Ensure COD amount is between ₹1 and ₹20,000 (or carrier-specific limit)
- For prepaid orders, set COD amount to 0 and payment mode to "Prepaid"
- Verify COD amount matches order total

---

### Invalid Value Format

| Error Message | Meaning |
|---------------|---------|
| `Invalid format of the DeclaredValue field` | Declared value has invalid format (non-numeric) |

**How to Fix:**
- Use numeric values only (no currency symbols or commas)
- Declared value should be a positive number

---

## 6. Duplicate Order Errors

These occur when trying to create shipments that already exist.

| Error Message | Meaning |
|---------------|---------|
| `Duplicate order id` | This order ID was already manifested |
| `Shipment already exists with the same merchant reference Id or vendor tracking Id` | AWB/tracking ID already used |
| `Duplicate waybill` | Waybill number already exists |

**How to Fix:**
- Check if the order was already successfully manifested
- Use unique order IDs for each shipment
- If retrying a failed order, ensure the previous attempt didn't partially succeed

---

## 7. Warehouse & Pickup Errors

Issues related to warehouse configuration and pickup setup.

### Warehouse Not Configured

| Error Message | Meaning |
|---------------|---------|
| `Warehouse not registered with Delhivery` | Your warehouse needs to be registered with the carrier |
| `Client-Warehouse is not active` | Warehouse is disabled or inactive |
| `client is not active` | Your account with the carrier is inactive |

**How to Fix:**
- Ensure warehouse is registered in **Settings > Warehouses**
- Verify carrier-specific warehouse codes are configured
- Contact support if your account shows as inactive

---

### Waybill/AWB Errors

| Error Message | Meaning |
|---------------|---------|
| `Unable to consume waybill I81219054 for SHIPFAST SPL SURFACE` | AWB number is invalid or exhausted |
| `Unable to consume waybill 77769729575 for Velocity SE, Hint: Check if the right client is specified` | Wrong client/account mapping |

**How to Fix:**
- Verify AWB series is active and has available numbers
- Contact support if AWB pool is exhausted
- Check carrier account mapping is correct

---

### Authentication Errors

| Error Message | Meaning |
|---------------|---------|
| `Delhivery token is required for this operation` | Carrier credentials missing |
| `The incoming token has expired` | API authentication token expired |
| `Token refresh failed` | Unable to refresh carrier credentials |

**How to Fix:**
- These are usually temporary - retry after a few minutes
- If persistent, contact support to verify carrier credentials

---

## 8. System & Technical Errors

These are typically temporary issues that resolve on retry.

### Timeout Errors

| Error Message | Meaning |
|---------------|---------|
| `timeout of 30000ms exceeded` | Carrier API took too long to respond |
| `Endpoint request timed out` | Same as above |
| `read ECONNRESET` | Connection was reset |
| `504` | Gateway timeout |

**How to Fix:**
- Wait 2-3 minutes and retry
- If persistent, the carrier may be experiencing issues
- Check Velocity status page for any ongoing incidents

---

### Internal Errors

| Error Message | Meaning |
|---------------|---------|
| `We encountered an internal error. Please try again.` | Carrier internal error |
| `Something went wrong` | Generic error |
| `Operation failed` | Unspecified failure |
| `Request failed` | API request failed |
| `Unable to process request.` | Processing error |
| `In Process. Please try after some time.` | Request is queued |
| `[object Object]` | Malformed error response |

**How to Fix:**
- Retry after 5-10 minutes
- If the error persists for more than 30 minutes, contact support

---

### Carrier API Issues

| Error Message | Meaning |
|---------------|---------|
| `The HTTP service located at https://api-c2pc-bluedart.dhl.com/... is unavailable` | Carrier API is down |
| `You exceeded your quota for the requested resource.` | Rate limit exceeded |
| `Invalid response from Pikndel` | Carrier returned unexpected response |
| `not master` | Database/cluster issue at carrier end |

**How to Fix:**
- These are carrier-side issues - retry after 15-30 minutes
- If urgent, try an alternative carrier

---

### Data Processing Errors

| Error Message | Meaning |
|---------------|---------|
| `Package creation API error. Package might be saved. Error message is Expecting ',' delimiter` | JSON parsing error - order may have partially saved |
| `Crashing while saving package... Shipment restricted based on historical delivery outcomes. Package might have been partially saved.` | Historical delivery issues to this address |
| `Cannot read properties of null (reading 'getFullAddress')` | Missing address data |
| `Exception encountered from Promise Engine Cause: [Address Id creation failed]` | Address processing failed |
| `There is some error in create shipment request. Please contact oncall team.` | General shipment creation error |

**How to Fix:**
- Check if the shipment was partially created before retrying
- Review order data for any missing or malformed fields
- Contact support with the full error message if unresolved

---

### Product/Item Errors

| Error Message | Meaning |
|---------------|---------|
| `Product details is Required` | Item/product information is missing |
| `Items list is missing or empty in Shipment` | No items in the order |

**How to Fix:**
- Ensure at least one item/product is included in the order
- Verify product details (name, SKU, quantity) are populated

---

## 9. Quick Resolution Guide

### Before You Contact Support

1. **Check the error category** above and try the suggested fix
2. **Retry after 5 minutes** for timeout/technical errors
3. **Verify your data** - most errors are due to invalid input
4. **Check serviceability** in Tools > Pincode Serviceability
5. **Review order details** for missing or invalid fields

### Most Common Fixes

| Issue | Quick Fix |
|-------|-----------|
| Pincode not serviceable | Try different carrier or service type |
| Phone number invalid | Use exactly 10 digits, no prefix |
| Address too long | Split across Address Line 1 and 2 |
| COD amount error | Ensure amount is ₹1 to ₹20,000 |
| Duplicate order | Check if already manifested |
| Timeout | Wait 5 mins and retry |

### When to Contact Support

Contact support if:
- Error persists after 3+ retries over 30 minutes
- You see "contact support" in the error message
- Account/warehouse/credential issues
- Partial shipment creation errors

**Include in your support request:**
- Full error message
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
