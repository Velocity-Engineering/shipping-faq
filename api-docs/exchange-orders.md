---
sidebar_position: 16
---

# Exchange Orders API

Returns a paginated list of exchange orders with filtering and sorting options.

**Method:** `POST`
**Endpoint:** `/custom/api/v1/exchange-orders`

## Request Parameters

### Pagination

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number (1-indexed) |
| per_page | integer | 20 | Records per page (max: 100) |

Alternatively, use nested format: `page[number]` and `page[per_page]`.

### Sort Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_by | string | `created_at` | Column to sort by |
| sort_order | string | `desc` | Sort direction: `asc` or `desc` |

### Filter Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| search | string | Full-text search across order details |
| status | string | Filter by exchange order status |
| display_id | string | Filter by exchange order display ID |
| return_display_id | string | Filter by return order display ID |
| created_at__gte | string | Created at or after this datetime (ISO 8601) |
| created_at__lte | string | Created at or before this datetime (ISO 8601) |
| updated_at__gte | string | Updated at or after this datetime (ISO 8601) |
| updated_at__lte | string | Updated at or before this datetime (ISO 8601) |
| warehouse_id[] | array | Filter by warehouse ID(s) |
| channel[] | array | Filter by sales channel(s) (e.g., `shopify`, `website`) |
| carrier_ids[] | array | Filter by carrier ID(s) |
| carrier_group_id[] | array | Filter by carrier group ID(s) |
| store_name[] | array | Filter by store name(s) |
| sku[] | array | Filter by SKU code(s) |
| zone[] | array | Filter by shipping zone(s) |
| refund_status[] | array | Filter by refund status |
| granular_status[] | array | Filter by granular status |
| qc_status[] | array | Filter by QC status |
| return_status[] | array | Filter by return order status |
| forward_status[] | array | Filter by forward order status |
| return_shipment_status[] | array | Filter by return shipment status |
| forward_shipment_status[] | array | Filter by forward shipment status |

## Sample Requests

### Basic Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/exchange-orders' \
--header 'Content-Type: application/json' \
--header 'Authorization: your_access_token' \
--data '{
  "page": 1,
  "per_page": 20
}'
```

### Filter by Date Range

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/exchange-orders' \
--header 'Content-Type: application/json' \
--header 'Authorization: your_access_token' \
--data '{
  "page": 1,
  "per_page": 20,
  "created_at__gte": "2024-01-01T00:00:00+05:30",
  "created_at__lte": "2024-01-31T23:59:59+05:30"
}'
```

### Filter by Status

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/exchange-orders' \
--header 'Content-Type: application/json' \
--header 'Authorization: your_access_token' \
--data '{
  "page": 1,
  "per_page": 20,
  "status": "pending"
}'
```

### Filter by Channel and Warehouse

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/exchange-orders' \
--header 'Content-Type: application/json' \
--header 'Authorization: your_access_token' \
--data '{
  "page": 1,
  "per_page": 50,
  "channel": ["shopify"],
  "warehouse_id": ["WHYYB5"],
  "sort_by": "created_at",
  "sort_order": "desc"
}'
```

## Success Response

```json
{
  "data": [
    {
      "id": "exchange-order-uuid",
      "type": "exchange_order",
      "attributes": {
        "client_id": 123,
        "display_id": "ORDER-EXCH-001",
        "unique_id": "EXCHABC123",
        "status": "pending",
        "channel": "shopify",
        "created_at": "2024-03-15T14:30:00.000+05:30",
        "updated_at": "2024-03-15T14:30:00.000+05:30",
        "fare_breakup": {
          "total": 185.5
        },
        "order": {
          "data": {
            "attributes": {
              "unique_id": "ORDKDKHOFL07I",
              "display_id": "ORDER-EXCH-001",
              "status": "processing",
              "payment_method": "prepaid"
            }
          }
        },
        "forward_shipment": {
          "data": {
            "attributes": {
              "unique_id": "SHIHB0BMT4DYM",
              "tracking_number": "34812010700125",
              "status": "pending",
              "courier_name": "Delhivery Standard"
            }
          }
        },
        "return": {
          "data": {
            "attributes": {
              "unique_id": "RETABC123DEF",
              "display_id": "ORDER-EXCH-001-RET",
              "status": "pending"
            }
          }
        },
        "return_shipment": {
          "data": {
            "attributes": {
              "unique_id": "SHIXYZ789ABC",
              "tracking_number": "84161310011340",
              "status": "pending",
              "courier_name": "Delhivery Standard"
            }
          }
        }
      }
    }
  ],
  "meta": {
    "total": 142,
    "page": 1,
    "per_page": 20,
    "total_pages": 8
  }
}
```

## Notes

- `display_id` corresponds to the `order_id` you supplied when creating the exchange via [Exchange Order API](exchange-order-orchestration.md)
- Each record includes the nested forward order, forward shipment, return order, return shipment, and carrier details
- Array filter parameters (e.g., `channel[]`, `warehouse_id[]`) accept multiple values and apply an OR match within the same field
