---
sidebar_position: 9
---

# Exchange Order API

Creates an exchange order in a single call: dispatches a new (forward) shipment to the customer and schedules a reverse pickup for the item being returned. Both AWBs are generated and labels are produced.

**Method:** `POST`
**Endpoint:** `/custom/api/v1/exchange-order-orchestration`

## How It Works

An exchange creates two linked shipments:

1. **Forward shipment** — the new item ships from your warehouse to the customer's delivery address
2. **Reverse shipment** — the old item is picked up from the customer's pickup address and returned to your warehouse

Both are created atomically. If you are exchanging against a previously created order, pass `forward_order_id` (new order) and `order_id` (original order reference).

## Request Fields

### Order & Carrier

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| order_id | string | Yes | New forward order's external reference ID | ORDER-EXCH-001 |
| forward_order_id | string | Optional | Use when exchanging against an existing order — this is the new forward order ID; `order_id` becomes the original order reference | ORDER-ORIG-001 |
| order_date | string | Yes | Order date in `YYYY-MM-DD HH:mm` | 2024-03-15 14:30 |
| carrier_id | string | Optional | Leave blank for automatic courier assignment | CARO0ZZQH1H6U |
| channel | string | Optional | Sales channel (default: `website`) | shopify |
| payment_method | enum | Yes | `COD` or `PREPAID` | PREPAID |
| cod_collectible | number | Conditional | Required when `payment_method` is `COD` | 990 |
| print_label | boolean | Optional | Auto-generate shipping labels (default: `true`) | true |
| return_reason | string | Optional | Reason for the return leg (default: `Return`) | Size issue |

### Forward Delivery Address (Where New Item Ships To)

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| billing_customer_name | string | Yes | First name | Saurabh |
| billing_last_name | string | Optional | Last name | Jindal |
| billing_address | string | Yes | Address line 1 | Incubex, Velocity |
| billing_address_2 | string | Optional | Address line 2 | |
| billing_city | string | Yes | City | Bangalore |
| billing_state | string | Yes | State | Karnataka |
| billing_country | string | Yes | Country | India |
| billing_pincode | string | Yes | 6-digit PIN | 560102 |
| billing_email | string | Optional | Email | saurabh@velocity.in |
| billing_phone | string | Yes | Phone | 8860697807 |

### Return Pickup Address (Where Old Item Gets Collected From)

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| pickup_customer_name | string | Yes | First name | Rahul |
| pickup_last_name | string | Optional | Last name | Sharma |
| pickup_address | string | Yes | Address line 1 | 12 MG Road |
| pickup_address_2 | string | Optional | Address line 2 | |
| pickup_city | string | Yes | City | Mumbai |
| pickup_state | string | Yes | State | Maharashtra |
| pickup_country | string | Yes | Country | India |
| pickup_pincode | string | Yes | 6-digit PIN | 400001 |
| pickup_email | string | Optional | Email | rahul@example.com |
| pickup_phone | string | Yes | Phone | 9876543210 |

### Forward Package (New Item Being Sent Out)

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| order_items[] | array | Yes | Items being dispatched to the customer (see below) | |
| forward_warehouse_id | string | Yes | Warehouse to dispatch from | WHYYB5 |
| weight | number | Yes | Package weight in kg | 0.5 |
| length | number | Yes | Package length in cm | 30 |
| breadth | number | Yes | Package breadth in cm | 20 |
| height | number | Yes | Package height in cm | 10 |
| forward_package_id | string | Optional | Use a pre-defined package instead of manual dims | |

### Return Package (Item Being Collected Back)

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| return_items[] | array | Yes | Items being picked up from customer (see below) | |
| return_warehouse_id | string | Optional | Destination warehouse for return (defaults to `forward_warehouse_id`) | WHYYB5 |
| return_weight | number | Optional | Return package weight in kg (defaults to `weight`) | 0.5 |
| return_length | number | Optional | Return package length in cm (defaults to `length`) | |
| return_breadth | number | Optional | Return package breadth in cm (defaults to `breadth`) | |
| return_height | number | Optional | Return package height in cm (defaults to `height`) | |
| return_package_id | string | Optional | Use a pre-defined return package | |

#### Order Item Fields (`order_items`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Item name |
| sku | string | Yes | SKU code |
| units | number | Yes | Quantity |
| selling_price | number | Yes | Price per unit |
| discount | number | Optional | Discount amount |
| tax | number | Optional | Tax rate (percentage) |
| hsn | string | Optional | HSN code |

#### Return Item Fields (`return_items`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Item name |
| sku | string | Yes | SKU code |
| units | number | Yes | Quantity |
| selling_price | number | Yes | Price per unit |
| discount | number | Optional | Discount amount |
| tax | number | Optional | Tax rate (percentage) |
| hsn | string | Optional | HSN code |
| qc_enable | boolean | Optional | Enable QC check on pickup |
| qc_product_image | string | Optional | Reference product image URL for QC |
| qc_questions | array | Optional | QC questions to ask at pickup |

## Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/exchange-order-orchestration' \
--header 'Content-Type: application/json' \
--header 'Authorization: your_access_token' \
--data-raw '{
  "order_id": "ORDER-EXCH-001",
  "order_date": "2024-03-15 14:30",
  "payment_method": "PREPAID",
  "print_label": true,
  "billing_customer_name": "Saurabh",
  "billing_last_name": "Jindal",
  "billing_address": "Incubex, Velocity",
  "billing_city": "Bangalore",
  "billing_state": "Karnataka",
  "billing_country": "India",
  "billing_pincode": "560102",
  "billing_phone": "8860697807",
  "billing_email": "saurabh@velocity.in",
  "pickup_customer_name": "Rahul",
  "pickup_last_name": "Sharma",
  "pickup_address": "12 MG Road",
  "pickup_city": "Mumbai",
  "pickup_state": "Maharashtra",
  "pickup_country": "India",
  "pickup_pincode": "400001",
  "pickup_phone": "9876543210",
  "order_items": [
    {
      "name": "T-shirt Blue L",
      "sku": "TSHIRT-BLUE-L",
      "units": 1,
      "selling_price": 799,
      "discount": 0,
      "tax": 5
    }
  ],
  "return_items": [
    {
      "name": "T-shirt Blue M",
      "sku": "TSHIRT-BLUE-M",
      "units": 1,
      "selling_price": 799,
      "qc_enable": true
    }
  ],
  "forward_warehouse_id": "WHYYB5",
  "weight": 0.3,
  "length": 25,
  "breadth": 15,
  "height": 5
}'
```

## Success Response

```json
{
  "status": 1,
  "payload": {
    "pickup_location_added": 1,
    "order_created": 1,
    "return_created": 1,
    "awb_generated": 2,
    "label_generated": 1,
    "pickup_generated": 1,
    "manifest_generated": 0,
    "order_id": "ORDKDKHOFL07I",
    "return_id": "RETABC123DEF",
    "exchange_order_id": 42,
    "shipment_id": "SHIHB0BMT4DYM",
    "forward_shipment_id": "SHIHB0BMT4DYM",
    "return_shipment_id": "SHIXYZ789ABC",
    "forward_awb": "34812010700125",
    "reverse_awb": "84161310011340",
    "forward_awb_code": "34812010700125",
    "awb_code": "84161310011340",
    "forward_shipment_label": "https://velocity-shazam-prod.s3.ap-south-1.amazonaws.com/forward_label.pdf",
    "label_url": "https://velocity-shazam-prod.s3.ap-south-1.amazonaws.com/forward_label.pdf",
    "reverse_shipment_label": "https://velocity-shazam-prod.s3.ap-south-1.amazonaws.com/reverse_label.pdf",
    "courier_name": "Delhivery Standard",
    "forward_courier_name": "Delhivery Standard",
    "reverse_courier_name": "Delhivery Standard",
    "applied_weight": 0.3,
    "forward_applied_weight": 0.3,
    "reverse_applied_weight": 0.3,
    "cod": 0,
    "is_exchange": 1,
    "exchange_order_details": {
      "id": 42,
      "unique_id": "EXCHABC123",
      "display_id": "ORDER-EXCH-001",
      "status": "pending",
      "order_id": "ORDKDKHOFL07I",
      "return_id": "RETABC123DEF",
      "channel": "website"
    },
    "forward_shipment_details": {
      "shipment_id": "SHIHB0BMT4DYM",
      "awb": "34812010700125",
      "label_url": "https://velocity-shazam-prod.s3.ap-south-1.amazonaws.com/forward_label.pdf",
      "courier_name": "Delhivery Standard",
      "applied_weight": 0.3,
      "cod": 0,
      "status": "pending"
    },
    "return_shipment": {
      "shipment_id": "SHIXYZ789ABC",
      "awb": "84161310011340",
      "label_url": "https://velocity-shazam-prod.s3.ap-south-1.amazonaws.com/reverse_label.pdf",
      "courier_name": "Delhivery Standard",
      "applied_weight": 0.3,
      "status": "pending"
    },
    "charges": {
      "total": 185.5,
      "forward": {
        "forward_charges": 44.4,
        "forward_cod_charges": 0,
        "forward_rto_charges": 40.0
      },
      "reverse": {
        "return_pickup_charges": 65.0,
        "qc_charges": 0,
        "exchange_charges": 36.1
      }
    }
  }
}
```

## Notes

- The `forward_warehouse_id` is required; `return_warehouse_id` defaults to `forward_warehouse_id` if omitted
- Return package dimensions (`return_weight`, `return_length`, etc.) default to the forward package dims if omitted
- `order_id` in the response is the internal Velocity order ID — store it for subsequent API calls (e.g., [Update Order](update-order.md))
- Duplicate detection is based on `order_id`: re-submitting the same `order_id` reuses the existing exchange order if found
