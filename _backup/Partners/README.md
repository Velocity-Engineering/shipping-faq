# Partner Integrations - Frequently Asked Questions

> Guide to integrating Shipfast with OMS/WMS partners like Clickpost, Pragma, Unicommerce, Vinculum, and EasyEcom

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
**A:** Partner integrations allow you to connect Shipfast with Order Management Systems (OMS) or Warehouse Management Systems (WMS) like Clickpost, Pragma, Unicommerce, Vinculum, and EasyEcom. These partners send orders to Shipfast for shipping and fulfillment.

### Q: How is this different from Shopify/WooCommerce?
**A:** 
- **Shopify/WooCommerce**: Direct integration where Shipfast connects to your store
- **Partner Integrations**: Your OMS/WMS partner acts as the middleman, sending orders to Shipfast via API

---

## 2. Important Information

### ⚠️ Critical: Upstream Updates to Sales Channels

**Q: Will Shipfast update my Shopify/WooCommerce store when using partner integrations?**

**A: No.** When you use a partner integration (Clickpost, Pragma, Unicommerce, etc.):

- **Updating your sales channel (Shopify, WooCommerce, etc.) is the partner's responsibility**
- Since orders are sent by partners, Shipfast does not have direct access to push updates to your store
- Tracking updates, fulfillment status, and delivery notifications go to the partner system
- The partner is responsible for syncing these updates back to your sales channels

**What this means for you:**
- Configure your partner system to sync updates to Shopify/WooCommerce
- Check with your partner's support if store updates aren't working
- Shipfast only communicates with the partner, not directly with your store

---

### Q: What data does Shipfast send back to partners?
**A:** Shipfast provides partners with:
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
| Create Shipment (Generate AWB) | ✅ |
| Cancel Shipment | ✅ |
| Track Shipment | ✅ |
| NDR Updates (Reattempt/RTO) | ✅ |
| Returns | ❌ |
| Serviceability Check | ❌ |

### Q: How do I set up Clickpost integration?
**A:**
1. Get your Shipfast API credentials from your account manager
2. Configure Shipfast as a carrier in your Clickpost dashboard
3. Map the required fields as per Clickpost's carrier setup
4. Test with a sample order

### Q: How do I handle NDR (failed deliveries) with Clickpost?
**A:** Clickpost can send NDR action requests (reattempt delivery, return to origin) directly to Shipfast via the NDR Update API.

---

## 4. Pragma

### Q: What features does Pragma integration support?
**A:**

| Feature | Supported |
|---------|:---------:|
| Create Shipment (Generate Waybill) | ✅ |
| Cancel Shipment | ✅ |
| Track Shipment | ✅ |
| Serviceability Check | ✅ |
| Reattempt Delivery | ✅ |
| Returns | ❌ |

### Q: How do I authenticate with Pragma?
**A:**
1. Use your Shipfast login credentials
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
| Create Shipment (Generate Waybill) | ✅ |
| Cancel Shipment | ✅ |
| Track Shipment (Waybill Details) | ✅ |
| Manifest Generation | ❌ |
| Returns | ❌ |
| Serviceability Check | ❌ |

### Q: How do I authenticate with Unicommerce?
**A:**
1. Use your Shipfast login credentials
2. Call the authentication endpoint to get a token
3. Token is valid for 24 hours
4. Include the token in the Authorization header

### Q: Is manifest generation supported?
**A:** No, manifest generation is not currently supported through the Unicommerce integration. You can generate manifests directly from the Shipfast dashboard.

---

## 6. Vinculum

### Q: What features does Vinculum integration support?
**A:**

| Feature | Supported |
|---------|:---------:|
| Create Shipment (Generate Waybill) | ✅ |
| Cancel Shipment | ✅ |
| Track Shipment | ✅ |
| Returns | ❌ |
| Serviceability Check | ❌ |

### Q: How is Vinculum different from Unicommerce?
**A:** Vinculum uses the same underlying integration as Unicommerce but with Vinculum-specific authentication and API endpoints. The features and behavior are similar.

### Q: How do I authenticate with Vinculum?
**A:**
1. Use your Shipfast login credentials
2. Call the authentication endpoint to get a token
3. Token is valid for 24 hours
4. Include the token in subsequent API requests

---

## 7. EasyEcom

### Q: What features does EasyEcom integration support?
**A:**

| Feature | Supported |
|---------|:---------:|
| Create Shipment | ✅ |
| Cancel Shipment | ✅ |
| Push Tracking to EasyEcom | ✅ (if enabled) |
| Returns | ❌ |
| Track Shipment API | ❌ |

### Q: How is EasyEcom authentication different?
**A:** EasyEcom uses warehouse-based authentication:
1. Provide your Shipfast credentials + warehouse token
2. Optionally provide your EasyEcom API token for tracking push
3. Each warehouse can have its own configuration

### Q: Can Shipfast push tracking updates to EasyEcom?
**A:** Yes! If you provide your EasyEcom API token during setup, Shipfast can automatically push tracking updates back to EasyEcom. This must be enabled per warehouse.

**To enable:**
1. Provide your EasyEcom API token (email, password, location_key)
2. Enable `push_tracking` in your warehouse configuration
3. Tracking updates will be pushed automatically

### Q: What if I don't enable tracking push?
**A:** If tracking push is not enabled, you can still poll Shipfast for tracking updates and update EasyEcom manually or through your own integration.

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
**A:** Limited editing is available through the Shipfast dashboard:
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
| Create Shipment | ✅ | ✅ | ✅ | ✅ | ✅ |
| Cancel Shipment | ✅ | ✅ | ✅ | ✅ | ✅ |
| Track Shipment | ✅ | ✅ | ✅ | ✅ | ❌ |
| Serviceability | ❌ | ✅ | ❌ | ❌ | ❌ |
| NDR Updates | ✅ | ✅* | ❌ | ❌ | ❌ |
| Push Tracking | ❌ | ❌ | ❌ | ❌ | ✅ |
| Returns | ❌ | ❌ | ❌ | ❌ | ❌ |

*Pragma supports reattempt delivery requests

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Shipfast dashboard
- **Partner Support:** Contact your OMS/WMS partner for integration-specific issues

Our support team is happy to help!
