---
sidebar_position: 6
---

# Reverse Pickup Shipment API

Creates and manifests a reverse (return) pickup shipment.

**Method:** `POST`
**Endpoint:** `/custom/api/v1/reverse-order-orchestration`

## Request Fields

### Order Details

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| order_id | string | Yes | Unique per return | ORDER-49 |
| order_date | string | Yes | YYYY-MM-DD HH:mm | 2018-05-08 12:23 |
| carrier_id | string | Optional | Leave blank for automatic assignment | CARO0ZZQH1H6U |

### Pickup Address (Customer)

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| pickup_customer_name | string | Yes | First name | Saurabh |
| pickup_last_name | string | Optional | Last name | Jindal |
| company_name | string | Optional | Company name | iorn pvt ltd |
| pickup_address | string | Yes | Address line 1 | Incubex, Velocity |
| pickup_address_2 | string | Optional | Address line 2 | |
| pickup_city | string | Yes | City | Bangalore |
| pickup_state | string | Yes | State | Karnataka |
| pickup_country | string | Yes | Country | India |
| pickup_pincode | string | Yes | PIN code | 560102 |
| pickup_email | string | Optional | Email | saurabh@velocity.in |
| pickup_phone | string | Yes | Phone | 8860697807 |
| pickup_isd_code | string | Optional | Country code | 91 |

### Shipping Address (Destination/Warehouse)

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| shipping_customer_name | string | Yes | Name | Jax |
| shipping_last_name | string | Optional | Last name | Doe |
| shipping_address | string | Yes | Address line 1 | Castle |
| shipping_address_2 | string | Optional | Address line 2 | Bridge |
| shipping_city | string | Yes | City | Delhi |
| shipping_state | string | Yes | State | New Delhi |
| shipping_country | string | Yes | Country | India |
| shipping_pincode | string | Yes | PIN | 110015 |
| shipping_email | string | Optional | Email | abhishek@velocity.in |
| shipping_phone | string | Yes | Phone | 8888888888 |

### Items & Payment

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| order_items[] | array | Yes | List of items | See below |
| payment_method | enum | Yes | Usually PREPAID for returns | PREPAID |
| total_discount | number | Optional | Discount total | 0 |
| sub_total | number | Yes | Item value | 400 |

### Dimensions & Warehouse

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| length | number | Yes | cm | 3 |
| breadth | number | Yes | cm | 1 |
| height | number | Yes | cm | 1 |
| weight | number | Yes | kg | 0.3 |
| warehouse_id | string | Yes | Destination warehouse ID | WHYYB5 |
| request_pickup | boolean | Optional | Auto pickup scheduling | true |

## Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/reverse-order-orchestration' \
--header 'Content-Type: application/json' \
--header 'Authorization: oEKN6oibwqhFWhSnBDBJUQ' \
--data-raw '{
  "order_id": "RET-12345157",
  "order_date": "2022-02-16",
  "carrier_id": "CARO0ZZQH1H6U",
  "pickup_customer_name": "Saurabh",
  "pickup_last_name": "Jindal",
  "company_name": "iorn pvt ltd",
  "pickup_address": "Incubex, Velocity",
  "pickup_city": "Bangalore",
  "pickup_state": "Karnataka",
  "pickup_country": "India",
  "pickup_pincode": "560102",
  "pickup_email": "saurabh+123891@velocity.in",
  "pickup_phone": "8860697807",
  "pickup_isd_code": "91",
  "shipping_customer_name": "Jax",
  "shipping_last_name": "Doe",
  "shipping_address": "Castle",
  "shipping_address_2": "Bridge",
  "shipping_city": "Delhi",
  "shipping_country": "India",
  "shipping_pincode": "110015",
  "shipping_state": "New Delhi",
  "shipping_email": "kumar.abhishek123@velocity.in",
  "shipping_isd_code": "91",
  "shipping_phone": "8888888888",
  "warehouse_id": "WHO89A",
  "order_items": [
    {
      "name": "shoes",
      "qc_enable": true,
      "qc_product_name": "shoes",
      "sku": "WSH234",
      "units": 1,
      "selling_price": 100,
      "discount": 0,
      "qc_brand": "Levi",
      "qc_product_image": "https://example.com/image.jpg"
    }
  ],
  "payment_method": "PREPAID",
  "total_discount": "0",
  "sub_total": 400,
  "length": 3,
  "breadth": 1,
  "height": 1,
  "weight": 0.3,
  "request_pickup": true
}'
```

## Success Response

```json
{
  "status": 1,
  "payload": {
    "order_created": 1,
    "awb_generated": 1,
    "pickup_generated": 1,
    "pickup_scheduled_date": null,
    "order_id": "ORDMUJCVLS7CB",
    "shipment_id": "SHIUEOB5S6CS5",
    "awb_code": "VEHR4336705675",
    "courier_company_id": "CARCVBWTPRH08",
    "courier_name": "Ekart Standard",
    "assigned_date_time": {
      "date": "2025-10-03T15:39:11.189+05:30",
      "timezone_type": 3,
      "timezone": "Asia/Kolkata"
    },
    "applied_weight": 0.34,
    "cod": 0,
    "is_return": 1,
    "charges": {
      "reverse_charges": "91.30",
      "qc": "0.00",
      "qc_leeway": "0.00",
      "dead_weight_billing": false
    }
  }
}
```

---

## QC Shipments (Quality Check)

For manifesting a QC shipment, the following parameters must be passed in `order_items`:
- `qc_enable`: `true`
- `qc_product_name`: Product name
- `qc_product_image`: Product image URL (mandatory)

### Prerequisites for QC

1. **Enable Return QC in Velocity Shipping:** Navigate to Settings → Return Quality Check
2. **Check Courier-level QC Guidelines:** Ensure selected QC parameters comply with courier guidelines
3. **Enable QC at SKU Level:** For each SKU requiring QC, enable QC and provide required details

> **Note:** Return QC is currently supported only for **Delhivery** and **Shadowfax**.

---

## Create Reverse Order and Shipment Separately

### Step 1: Create Reverse Order Only

**Endpoint:** `/custom/api/v1/reverse-order`

### Step 2: Assign Courier

**Endpoint:** `/custom/api/v1/reverse-order-shipment`

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/reverse-order-shipment' \
--header 'Authorization: bN9m81J0bQWEfPhK4xDu1g' \
--header 'Content-Type: application/json' \
--data '{
  "return_id": "RETYHL9924N5B",
  "warehouse_id": "WHYYB5",
  "carrier_id": ""
}'
```
