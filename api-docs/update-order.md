---
sidebar_position: 8
---

# Update Order API

Updates the details of an existing order before a shipment has been assigned. Supports changing the warehouse, payment status, shipping address, and order items.

**Method:** `PUT`
**Endpoint:** `/custom/api/v1/order`

## Request Fields

### Top-Level Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| order_id | string | Yes | Unique ID of the order to update | ORDKDKHOFL07I |
| order | object | Yes | Fields to update on the order | see below |

### Order Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| payment_status | string | Optional | Updated payment status | `paid`, `unpaid` |
| warehouse_id | string | Optional | New warehouse unique ID | WHYYB5 |
| package_id | string | Optional | New package unique ID | PKGABC123 |
| weight | number | Optional | Weight override in kg | 0.5 |
| cod_amount | number | Optional | COD amount to collect | 990 |
| shipping_address | object | Optional | Updated shipping address (see below) | |
| order_items_attributes | array | Optional | Items to add, update, or remove (see below) | |

### Shipping Address Fields

| Field | Type | Description |
|-------|------|-------------|
| name | string | Recipient name |
| phone | string | Phone number |
| email | string | Email address |
| address | string | Address line 1 |
| address_2 | string | Address line 2 |
| city | string | City |
| state | string | State |
| country | string | Country |
| zip | string | PIN code |

### Order Item Fields (`order_items_attributes`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | For updates/removes | Internal item ID |
| name | string | Optional | Item name |
| sku | string | Optional | SKU code |
| quantity | integer | Optional | Quantity |
| variant_id | string | Optional | Variant identifier |
| price | number | Optional | Price per unit |
| weight | number | Optional | Item weight |
| tax | number | Optional | Tax amount |
| hsn | string | Optional | HSN code |
| _destroy | boolean | Optional | Set `true` to remove this item |
| tax_lines | array | Optional | Tax breakdown (see below) |

#### Tax Line Fields

| Field | Type | Description |
|-------|------|-------------|
| rate | number | Tax rate (percentage) |
| price | number | Tax amount |
| title | string | Tax name (e.g., `IGST`) |

## Sample Request

```bash
curl --location --request PUT 'https://shazam.velocity.in/custom/api/v1/order' \
--header 'Content-Type: application/json' \
--header 'Authorization: your_access_token' \
--data '{
  "order_id": "ORDKDKHOFL07I",
  "order": {
    "payment_status": "paid",
    "warehouse_id": "WHYYB5",
    "weight": 0.6,
    "cod_amount": 0,
    "shipping_address": {
      "name": "Saurabh Jindal",
      "phone": "8860697807",
      "email": "saurabh@velocity.in",
      "address": "Incubex, Velocity",
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India",
      "zip": "560102"
    },
    "order_items_attributes": [
      {
        "id": "item-uuid-1",
        "quantity": 2,
        "price": 999.00
      }
    ]
  }
}'
```

## Success Response

```json
{
  "status": 1,
  "payload": {
    "order_id": "ORDKDKHOFL07I",
    "message": "Order updated successfully"
  }
}
```

## Error Response

```json
{
  "status": 0,
  "message": "Order not found"
}
```

## Notes

- Only fields passed inside the `order` object are updated; omitted fields remain unchanged
- `order_id` is the unique ID returned when the order was created (e.g., from the forward-shipment or forward-order endpoint), not the external order ID you supplied
- To remove an order item, include its `id` and set `_destroy: true`
- Updating a warehouse or weight after a shipment is assigned may not take effect; update before courier assignment
