---
sidebar_position: 5
---

# Variants API

Manage product variants (SKUs) associated with your Velocity account. A variant represents a single sellable product configuration — a specific size, colour, or other attribute combination — and holds the product metadata that Velocity uses for order creation, QC, and catalogue management.

**Base URL:** `https://shazam.velocity.in`

---

## List Variants

Returns all active variants for your account, ordered by most recently created. Supports search and pagination.

**Method:** `GET`
**Endpoint:** `/custom/api/v1/variants`

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| search | string | No | Filter variants by SKU or title (partial match) |
| page | integer | No | Page number (default: 1) |
| per_page | integer | No | Results per page |

### Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/variants' \
  --header 'Authorization: YOUR_API_KEY'
```

### Sample Request (with search)

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/variants?search=SKU001&page=1&per_page=20' \
  --header 'Authorization: YOUR_API_KEY'
```

### Success Response

```json
{
  "data": [
    {
      "id": 1,
      "type": "variant",
      "attributes": {
        "id": 1,
        "external_id": null,
        "sku": "TEE-BL-M",
        "title": "Blue Tee - Medium",
        "price": "499.0",
        "weight": 0.3,
        "length": null,
        "breadth": null,
        "height": null,
        "category": "Apparel",
        "hsn_code": "6109",
        "essential": false,
        "fssai": null,
        "product_description": "Cotton crew-neck t-shirt",
        "product_id": null,
        "brand_name": "My Brand",
        "color": "Blue",
        "size": "M",
        "qc_enabled": false,
        "qc_parameters": [],
        "channel": "website",
        "client_id": 42,
        "variant_images": [
          {
            "id": 7,
            "url": "https://cdn.example.com/tee-blue.jpg"
          }
        ]
      }
    }
  ],
  "meta": {
    "total": 1,
    "current_page": 1,
    "per_page": 20
  }
}
```

---

## Create Variant

Creates a new product variant linked to your account. The `channel` is automatically set to `website`.

**Method:** `POST`
**Endpoint:** `/custom/api/v1/variants`

### Request Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Product name or variant label |
| sku | string | Yes | Unique SKU code for this variant |
| price | decimal | No | Selling price |
| weight | decimal | No | Weight in kg |
| length | decimal | No | Package length in cm |
| breadth | decimal | No | Package breadth in cm |
| height | decimal | No | Package height in cm |
| category | string | No | Product category (e.g. `Apparel`, `Electronics`) |
| hsn_code | string | No | HSN/SAC code for GST |
| essential | boolean | No | Whether this is an essential commodity |
| fssai | string | No | FSSAI licence number (for food products) |
| product_description | string | No | Detailed product description |
| brand_name | string | No | Brand name for this variant |
| color | string | No | Colour attribute |
| size | string | No | Size attribute |
| qc_enabled | boolean | No | Enable QC checks for this variant. Requires at least one image — see note below. |
| image_urls | array of strings | No | Public image URLs to attach to this variant |

:::info[QC requires an image]
If `qc_enabled` is `true`, at least one product image must be provided via `image_urls`. Omitting an image when QC is enabled returns a `422 Unprocessable Entity` error: `"Product image is mandatory for QC."`
:::

### Sample Request

```bash
curl --location --request POST 'https://shazam.velocity.in/custom/api/v1/variants' \
  --header 'Authorization: YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "title": "Blue Tee - Medium",
    "sku": "TEE-BL-M",
    "price": 499,
    "weight": 0.3,
    "category": "Apparel",
    "color": "Blue",
    "size": "M",
    "image_urls": ["https://cdn.example.com/tee-blue.jpg"]
  }'
```

### Success Response (`201 Created`)

```json
{
  "data": {
    "id": 1,
    "type": "variant",
    "attributes": {
      "id": 1,
      "sku": "TEE-BL-M",
      "title": "Blue Tee - Medium",
      "price": "499.0",
      "weight": 0.3,
      "channel": "website",
      "client_id": 42,
      "variant_images": [
        {
          "id": 7,
          "url": "https://cdn.example.com/tee-blue.jpg"
        }
      ]
    }
  }
}
```

### Error Response (`422 Unprocessable Entity`)

```json
{
  "errors": ["Product image is mandatory for QC."]
}
```

---

## Update Variant

Updates an existing variant. Only variants belonging to your account can be updated — attempting to modify another account's variant returns a `400 Bad Request`. Image attachments and field updates are applied atomically; if validation fails, no changes are saved.

**Method:** `PUT` or `PATCH`
**Endpoint:** `/custom/api/v1/variants/:id`

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | integer | Yes | The variant's ID |

### Request Fields

All fields are optional — send only what you want to change.

| Field | Type | Description |
|-------|------|-------------|
| title | string | Product name or variant label |
| sku | string | SKU code |
| price | decimal | Selling price |
| weight | decimal | Weight in kg |
| length | decimal | Package length in cm |
| breadth | decimal | Package breadth in cm |
| height | decimal | Package height in cm |
| category | string | Product category |
| hsn_code | string | HSN/SAC code |
| essential | boolean | Essential commodity flag |
| fssai | string | FSSAI licence number |
| product_description | string | Detailed description |
| brand_name | string | Brand name |
| color | string | Colour attribute |
| size | string | Size attribute |
| qc_enabled | boolean | Enable/disable QC. Enabling requires at least one image. |
| image_urls | array of strings | Additional image URLs to attach |

:::caution[Images are additive]
`image_urls` on update _adds_ new images to the variant — it does not replace existing ones.
:::

### Sample Request

```bash
curl --location --request PUT 'https://shazam.velocity.in/custom/api/v1/variants/1' \
  --header 'Authorization: YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "title": "Blue Tee - Medium (Updated)",
    "price": 550
  }'
```

### Success Response (`200 OK`)

```json
{
  "data": {
    "id": 1,
    "type": "variant",
    "attributes": {
      "id": 1,
      "sku": "TEE-BL-M",
      "title": "Blue Tee - Medium (Updated)",
      "price": "550.0",
      "weight": 0.3,
      "channel": "website",
      "client_id": 42,
      "variant_images": [
        {
          "id": 7,
          "url": "https://cdn.example.com/tee-blue.jpg"
        }
      ]
    }
  }
}
```

### Error Response (`422 Unprocessable Entity`)

```json
{
  "errors": ["Product image is mandatory for QC."]
}
```

---

## Using Variants in Shipments

When creating a forward shipment, you can reference a variant's `sku` in the `order_items` array. Velocity will pull product metadata (weight, dimensions, HSN code) from the variant automatically.

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/forward-order-orchestration' \
  --header 'Authorization: YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{
    "order_id": "ORDER-001",
    "order_items": [
      {
        "name": "Blue Tee - Medium",
        "sku": "TEE-BL-M",
        "units": 1,
        "selling_price": 499
      }
    ],
    "payment_method": "PREPAID",
    "sub_total": 499,
    "weight": 0.3,
    "warehouse_id": "WHYYB5"
  }'
```
