---
sidebar_position: 15
---

# Order Details API (Returns)

Retrieve a paginated list of return orders with filtering and sorting options.

**Method:** `POST`
**Endpoint:** `/custom/api/v1/returns`

## Request Parameters

### Pagination Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number (1-indexed) |
| per_page | integer | 20 | Records per page (max: 100) |

### Sort Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| sort_by | string | created_at | Field to sort by |
| sort_order | string | desc | Sort direction: `asc` or `desc` |

### Filter Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| search | string | Full search across display_id, customer details, tracking number, SKU, etc. |
| status | string | Filter by status: `return_requested`, `pickup_scheduled`, `in_transit`, `return_received`, `cancelled` |
| granular_status[] | array | Filter by granular status |
| warehouse_id[] | array | Filter by warehouse IDs |
| channel[] | array | Filter by order channel |
| store_name[] | array | Filter by store name |
| carrier_ids[] | array | Filter by carrier IDs |
| zone[] | array | Filter by shipping zone |
| refund_status[] | array | Filter by refund status |
| qc_status[] | array | Filter by QC status |
| display_id[] | array | Filter by return display IDs |
| sku[] | array | Filter by SKU codes |
| is_dangerous_goods | boolean | Filter by dangerous goods status |

### Date Range Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| created_at__gte | timestamp | Created at from date |
| created_at__lte | timestamp | Created at to date |
| return_pickup_scheduled_at__gte | timestamp | Pickup scheduled from date |
| return_pickup_scheduled_at__lte | timestamp | Pickup scheduled to date |
| return_delivered_at__gte | timestamp | Return delivered from date |
| return_delivered_at__lte | timestamp | Return delivered to date |

## Sample Requests

### Basic Request

```bash
curl -X POST "https://shazam.velocity.in/custom/api/v1/returns" \
  -H "Authorization: your_access_token" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1,
    "per_page": 20
  }'
```

### Filter by Status

```bash
curl -X POST "https://shazam.velocity.in/custom/api/v1/returns" \
  -H "Authorization: your_access_token" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1,
    "per_page": 20,
    "status": "in_transit"
  }'
```

### Filter by Date Range

```bash
curl -X POST "https://shazam.velocity.in/custom/api/v1/returns" \
  -H "Authorization: your_access_token" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1,
    "per_page": 20,
    "created_at__gte": "2024-01-01T00:00:00Z",
    "created_at__lte": "2024-01-31T23:59:59Z"
  }'
```

### Filter by QC and Refund Status

```bash
curl -X POST "https://shazam.velocity.in/custom/api/v1/returns" \
  -H "Authorization: your_access_token" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1,
    "per_page": 20,
    "qc_status": ["passed", "pending"],
    "refund_status": ["pending", "processed"]
  }'
```

### Complex Filter

```bash
curl -X POST "https://shazam.velocity.in/custom/api/v1/returns" \
  -H "Authorization: your_access_token" \
  -H "Content-Type: application/json" \
  -d '{
    "page": 1,
    "per_page": 50,
    "status": "return_received",
    "warehouse_id": ["warehouse-uuid"],
    "channel": ["shopify"],
    "qc_status": ["passed"],
    "refund_status": ["pending"],
    "sort_by": "created_at",
    "sort_order": "desc"
  }'
```

## Success Response

```json
{
  "data": [
    {
      "id": "return-uuid",
      "type": "return",
      "attributes": {
        "return_reason": "defective_product",
        "request_date": "2024-01-10T10:00:00Z",
        "display_id": "RET-12345",
        "qc_status": "passed",
        "qc_required": true,
        "status": "delivered",
        "warehouse_id": "warehouse-uuid",
        "shipping_address": {
          "name": "Customer Name",
          "phone": "9876543210",
          "city": "Delhi",
          "state": "Delhi",
          "zip": "110001"
        },
        "total_price": 1500.00,
        "is_exchange": false,
        "refund_status": "processed",
        "created_at": "2024-01-10T10:00:00Z",
        "return_items": [
          {
            "id": "return-item-uuid",
            "quantity": 1,
            "price": 1500.00,
            "name": "Product Name",
            "sku": "SKU-001",
            "return_reason": "defective_product"
          }
        ],
        "weight": {
          "value": 500,
          "metric_unit": "g"
        },
        "shipment": {
          "id": "shipment-uuid",
          "tracking_number": "RETTRACK123456",
          "status": "delivered",
          "carrier": {
            "id": "carrier-uuid",
            "name": "Delhivery"
          },
          "shipment_milestones": [
            {
              "milestone": "return_pickup_scheduled",
              "milestone_at": "2024-01-11T10:00:00Z"
            },
            {
              "milestone": "return_delivered",
              "milestone_at": "2024-01-15T14:00:00Z"
            }
          ]
        },
        "order": {
          "id": "order-uuid",
          "display_id": "ORD-12345",
          "channel": "shopify",
          "store_name": "My Store"
        }
      }
    }
  ],
  "meta": {
    "current_page": 1,
    "per_page": 20,
    "total": 45,
    "next_search_after": ["1705320000000", "return-uuid"]
  }
}
```
