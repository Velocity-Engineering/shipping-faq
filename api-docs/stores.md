---
sidebar_position: 4
---

# Stores API

Manage the stores associated with your Velocity account. A store represents a sales channel — for example, a specific Shopify storefront, a WooCommerce site, or a manually-managed channel. You can use stores to tag orders at creation time, making it easy to filter, report on, and separate fulfilment across multiple channels.

The Stores API lets you create and manage **manual-order stores** — stores whose orders are created directly via the API rather than synced from a platform integration.

**Base URL:** `https://shazam.velocity.in`

---

## List Stores

Returns all active stores for your account.

**Method:** `GET`
**Endpoint:** `/custom/api/v1/client-stores`

### Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/client-stores' \
  --header 'Authorization: YOUR_API_KEY'
```

### Success Response

```json
{
  "data": [
    {
      "id": "uuid",
      "store_name": "my-website",
      "brand_name": "My Brand",
      "channel": "manual_order",
      "status": "connected"
    }
  ]
}
```

---

## Get Store

Returns a single store by ID.

**Method:** `GET`
**Endpoint:** `/custom/api/v1/client-stores/:id`

### Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/client-stores/STORE-UUID' \
  --header 'Authorization: YOUR_API_KEY'
```

---

## Create Store

Creates a new store. All stores created via this endpoint are `manual_order` channel stores.

**Method:** `POST`
**Endpoint:** `/custom/api/v1/client-stores`

### Request Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| store_name | string | Yes | Unique identifier for the store — used when creating orders. Only letters, numbers, and hyphens. | `my-website` |
| brand_name | string | No | Display name shown in the dashboard | `My Brand` |
| logo | file | No | Store logo image (max 2 MB) | — |

:::info[Store name uniqueness]
`store_name` must be unique per account. Attempting to create a second store with the same `store_name` returns a `422 Unprocessable Entity` error.
:::

### Sample Request

```bash
curl --location --request POST 'https://shazam.velocity.in/custom/api/v1/client-stores' \
  --header 'Authorization: YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "store_name": "my-website",
    "brand_name": "My Brand"
  }'
```

### Success Response

```json
{
  "data": {
    "id": "uuid",
    "store_name": "my-website",
    "brand_name": "My Brand",
    "channel": "manual_order",
    "status": "connected"
  }
}
```

### Error Response (duplicate store name)

```json
{
  "errors": ["Store name has already been taken"]
}
```

---

## Update Store

Updates the display name or logo of an existing store. `store_name` can be changed as long as the new value is unique for your account.

**Method:** `PUT`
**Endpoint:** `/custom/api/v1/client-stores/:id`

### Request Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| store_name | string | No | New unique identifier for the store |
| brand_name | string | No | New display name |
| logo | file | No | New logo image (max 2 MB) |

### Sample Request

```bash
curl --location --request PUT 'https://shazam.velocity.in/custom/api/v1/client-stores/STORE-UUID' \
  --header 'Authorization: YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "brand_name": "My Brand Updated"
  }'
```

---

## Linking Orders to a Store

When creating a forward shipment, pass `store_name` to associate the order with a specific store. This is optional — if omitted, the order is not linked to any store.

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/forward-order-orchestration' \
  --header 'Authorization: YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "store_name": "my-website",
    "order_id": "ORDER-001",
    "order_date": "2025-01-15 10:30",
    "billing_customer_name": "Jane Doe",
    "billing_address": "123 Main Street",
    "billing_city": "Mumbai",
    "billing_pincode": "400001",
    "billing_state": "Maharashtra",
    "billing_country": "India",
    "billing_phone": "9999999999",
    "shipping_is_billing": true,
    "print_label": true,
    "order_items": [
      {
        "name": "Product Name",
        "sku": "SKU-001",
        "units": 1,
        "selling_price": 500
      }
    ],
    "payment_method": "PREPAID",
    "sub_total": 500,
    "cod_collectible": 0,
    "length": 20,
    "breadth": 15,
    "height": 10,
    "weight": 0.5,
    "warehouse_id": "WHYYB5"
  }'
```

:::caution[Invalid store name]
If you pass a `store_name` that does not exist in your account, the request is rejected with an error. Create the store first using the [Create Store](#create-store) endpoint.
:::

The same `store_name` field is supported on:
- `POST /custom/api/v1/forward-order-orchestration`
- `POST /custom/api/v1/forward-order`
