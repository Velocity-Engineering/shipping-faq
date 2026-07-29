---
sidebar_position: 1
title: Partner Integrations
description: Guide to integrating Velocity Shipping with OMS/WMS partners like Clickpost, Pragma, Unicommerce, Vinculum, and EasyEcom.
---

# Partner Integrations - Frequently Asked Questions

> Guide to integrating Velocity Shipping with OMS/WMS partners like Clickpost, Pragma, Unicommerce, Vinculum, and EasyEcom

---

## Table of Contents
1. [Overview](#1-overview)
2. [Important Information](#2-important-information)
3. [Clickpost](#3-clickpost)
4. [Pragma](#4-pragma)
5. [Unicommerce](#5-unicommerce)
6. [Vinculum](#6-vinculum)
7. [EasyEcom](#7-easyecom)
8. [Common Questions](#8-common-questions)

---

## 1. Overview

### Q: What are Partner Integrations?
**A:** Partner integrations allow you to connect Velocity Shipping with Order Management Systems (OMS) or Warehouse Management Systems (WMS) like Clickpost, Pragma, Unicommerce, Vinculum, and EasyEcom. These partners send orders to Velocity Shipping for shipping and fulfillment.

### Q: How is this different from Shopify/WooCommerce?
**A:**
- **Shopify/WooCommerce**: Direct integration where Velocity Shipping connects to your store
- **Partner Integrations**: Your OMS/WMS partner acts as the middleman, sending orders to Velocity Shipping via API

---

## 2. Important Information

### Critical: Upstream Updates to Sales Channels

**Q: Will Velocity Shipping update my Shopify/WooCommerce store when using partner integrations?**

**A: No.** When you use a partner integration (Clickpost, Pragma, Unicommerce, etc.):

- **Updating your sales channel (Shopify, WooCommerce, etc.) is the partner's responsibility**
- Since orders are sent by partners, Velocity Shipping does not have direct access to push updates to your store
- Tracking updates, fulfillment status, and delivery notifications go to the partner system
- The partner is responsible for syncing these updates back to your sales channels

**What this means for you:**
- Configure your partner system to sync updates to Shopify/WooCommerce
- Check with your partner's support if store updates aren't working
- Velocity Shipping only communicates with the partner, not directly with your store

---

### Q: What data does Velocity Shipping send back to partners?
**A:** Velocity Shipping provides partners with:
- **AWB/Tracking number** - When shipment is created
- **Shipping label** - PDF label for printing
- **Tracking status** - Real-time shipment updates
- **Delivery confirmation** - POD when delivered

---

## 3. Clickpost

### Q: What features does Clickpost integration support?
**A:**

| Feature | Supported |
|---------|:---------:|
| Create Shipment (Generate AWB) | Yes |
| Cancel Shipment | Yes |
| Track Shipment | Yes |
| NDR Updates (Reattempt/RTO) | Yes |
| Returns | No |
| Serviceability Check | No |

### Q: How do I set up Clickpost integration?
**A:**
1. Get your Velocity Shipping API credentials from your account manager
2. Configure Velocity Shipping as a carrier in your Clickpost dashboard
3. Map the required fields as per Clickpost's carrier setup
4. Test with a sample order

### Q: How do I handle NDR (failed deliveries) with Clickpost?
**A:** Clickpost can send NDR action requests (reattempt delivery, return to origin) directly to Velocity Shipping via the NDR Update API.

---

## 4. Pragma

### Q: What features does Pragma integration support?
**A:**

| Feature | Supported |
|---------|:---------:|
| Create Shipment (Generate Waybill) | Yes |
| Cancel Shipment | Yes |
| Track Shipment | Yes |
| Serviceability Check | Yes |
| Reattempt Delivery | Yes |
| Returns | No |

### Q: How do I authenticate with Pragma?
**A:**
1. Use your Velocity Shipping login credentials
2. Call the authentication endpoint to get a token
3. Token is valid for 24 hours
4. Include the token in subsequent API requests

### Q: Can I check serviceability before creating a shipment?
**A:** Yes! Pragma integration supports serviceability checks. You can verify if a pincode is serviceable and whether COD is available before creating the shipment.

### Q: Can I request reattempt delivery through Pragma?
**A:** Yes. Pragma supports reattempt delivery requests with optional address modifications.

---

## 5. Unicommerce

### Q: What features does Unicommerce integration support?
**A:**

| Feature | Supported |
|---------|:---------:|
| Create Shipment (Generate Waybill) | Yes |
| Cancel Shipment | Yes |
| Track Shipment (Waybill Details) | Yes |
| Manifest Generation | No |
| Returns | No |
| Serviceability Check | No |

### Q: How do I authenticate with Unicommerce?
**A:**
1. Use your Velocity Shipping login credentials
2. Call the authentication endpoint to get a token
3. Token is valid for 24 hours
4. Include the token in the Authorization header

### Q: Is manifest generation supported?
**A:** No, manifest generation is not currently supported through the Unicommerce integration. You can generate manifests directly from the Velocity Shipping dashboard.

---

## 6. Vinculum

### Q: What features does Vinculum integration support?
**A:**

| Feature | Supported |
|---------|:---------:|
| Create Shipment (Generate Waybill) | Yes |
| Cancel Shipment | Yes |
| Track Shipment | Yes |
| Returns | No |
| Serviceability Check | No |

### Q: How is Vinculum different from Unicommerce?
**A:** Vinculum uses the same underlying integration as Unicommerce but with Vinculum-specific authentication and API endpoints. The features and behavior are similar.

### Q: How do I authenticate with Vinculum?
**A:**
1. Use your Velocity Shipping login credentials
2. Call the authentication endpoint to get a token
3. Token is valid for 24 hours
4. Include the token in subsequent API requests

---

## 7. EasyEcom

### Q: What features does EasyEcom integration support?
**A:**

| Feature | Supported |
|---------|:---------:|
| Create Shipment | Yes |
| Cancel Shipment | Yes |
| Push Tracking to EasyEcom | Yes (if enabled) |
| Returns | No |
| Track Shipment API | No |

### Q: How is EasyEcom authentication different?
**A:** EasyEcom uses warehouse-based authentication:
1. Provide your Velocity Shipping credentials + warehouse token
2. Optionally provide your EasyEcom API token for tracking push
3. Each warehouse can have its own configuration

### Q: Can Velocity Shipping push tracking updates to EasyEcom?
**A:** Yes! If you provide your EasyEcom API token during setup, Velocity Shipping can automatically push tracking updates back to EasyEcom. This must be enabled per warehouse.

**To enable:**
1. Provide your EasyEcom API token (email, password, location_key)
2. Enable `push_tracking` in your warehouse configuration
3. Tracking updates will be pushed automatically

### Q: What if I don't enable tracking push?
**A:** If tracking push is not enabled, you can still poll Velocity Shipping for tracking updates and update EasyEcom manually or through your own integration.

### Q: Tracking is not being pushed to EasyEcom for some warehouses even though `push_tracking` is supposed to be enabled. What should I check?
**A:** If `push_tracking` is `null` or not set for a warehouse, Velocity will not push tracking updates to EasyEcom for orders from that warehouse — even if other warehouses are configured correctly.

**Fix:** Go to EasyEcom integration settings and re-enter the **username** and **password** for the affected warehouse. Once saved, the `push_tracking` flag will be set and tracking updates will be pushed for future shipments.

Note: This only affects future shipments. Existing shipments where tracking was not pushed will need to be updated manually in EasyEcom.

### Q: EasyEcom is returning the error "Order already exists with active shipments for company carrier id XXXXXX". What does this mean?
**A:** This error appears when a shipment AWB was **created directly on Velocity's dashboard**, bypassing EasyEcom entirely. When EasyEcom then attempts to create the shipment through its own API flow, it finds an active shipment already exists on Velocity and fails.

**Consequences:**
- EasyEcom never registered the AWB, so it won't push fulfillment or tracking updates to Shopify (or any other upstream channel) for these orders
- Velocity's tracking processor will attempt to push tracking updates to EasyEcom but EasyEcom will reject them with HTTP 400 ("Unable to find the AWB")

**Resolution:**
- For existing AWBs: manually mark fulfillment in Shopify, or work with the EasyEcom team to register the AWB on their side
- Going forward: shipments for orders that need upstream updates to Shopify or other channels **must be created through EasyEcom**, not directly on Velocity's dashboard — otherwise the integration chain is broken by design

### Q: CloudWatch shows repeated errors "EasyEcom updateTrackingStatus failed: 400 – Unable to find the AWB {awb}". What's happening?
**A:** EasyEcom does not have a record of that AWB in its system. This happens when the shipment was created directly on Velocity (not through EasyEcom), so EasyEcom never registered it.

Velocity's `ee-tracking-processor` Lambda (log group: `/aws/lambda/ee-tracking-processor-prod-ee-tracking-processor`) pushes tracking updates via SQS (`easy-ecom-push-tracking-queue`). When EasyEcom rejects the AWB with HTTP 400, SQS retries, causing the errors to stack.

**Resolution:** Ask the client to coordinate with the EasyEcom support team to register the AWB, or acknowledge that tracking for this AWB won't be pushed to EasyEcom. If the AWB was cancelled, the errors will stop once SQS exhausts its retry attempts.

---

## 8. Common Questions

### Q: Can I use multiple partner integrations simultaneously?
**A:** Yes, you can have orders coming from different partners. Each order is tagged with its source channel (Clickpost, Pragma, Unicommerce, etc.).

### Q: What happens if a shipment creation fails?
**A:** The partner receives an error response with:
- Error status code
- Detailed error message
- Specific field that caused the error (if validation failure)

Common failure reasons:
- Invalid pincode (not serviceable)
- Missing required fields
- Invalid warehouse token
- Duplicate order

### Q: Can I edit orders created through partners?
**A:** Limited editing is available through the Velocity Shipping dashboard:
- Address changes (before pickup)
- COD amount changes (in some cases)

However, these changes may not sync back to the partner system automatically.

### Q: How do I troubleshoot integration issues?
**A:**
1. **Check authentication** - Ensure your token is valid and not expired
2. **Verify payload** - Make sure all required fields are provided
3. **Check serviceability** - Confirm the pincode is serviceable
4. **Review error messages** - API responses include detailed error information
5. **Contact support** - Reach out if issues persist

### Q: What are the rate limits for partner APIs?
**A:** Contact your account manager for specific rate limit details based on your plan.

---

## Feature Comparison

| Feature | Clickpost | Pragma | Unicommerce | Vinculum | EasyEcom |
|---------|:---------:|:------:|:-----------:|:--------:|:--------:|
| Create Shipment | Yes | Yes | Yes | Yes | Yes |
| Cancel Shipment | Yes | Yes | Yes | Yes | Yes |
| Track Shipment | Yes | Yes | Yes | Yes | No |
| Serviceability | No | Yes | No | No | No |
| NDR Updates | Yes | Yes* | No | No | No |
| Push Tracking | No | No | No | No | Yes |
| Returns | No | No | No | No | No |

*Pragma supports reattempt delivery requests

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard
- **Partner Support:** Contact your OMS/WMS partner for integration-specific issues

Our support team is happy to help!
