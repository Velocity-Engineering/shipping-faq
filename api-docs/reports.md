---
sidebar_position: 10
---

# Summary Report API

Fetches status-based summary report for forward and return/reverse pickup orders.

**Method:** `POST`
**Endpoint:** `/custom/api/v1/reports`

## Request Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| start_date_time | string | Yes | Start date & time (ISO 8601) | 2022-01-01T00:00:00Z |
| end_date_time | string | Yes | End date & time (ISO 8601) | 2025-09-08T20:00:00Z |
| shipment_type | string | Yes | `forward` or `return` | forward |

## Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/reports' \
--header 'Authorization: RJShHQFn_YuXsMzfZb9-1A' \
--header 'Content-Type: application/json' \
--data '{
  "start_date_time": "2022-01-01T00:00:00Z",
  "end_date_time": "2025-09-08T20:00:00Z",
  "shipment_type": "return"
}'
```

## Success Response

```json
{
  "status": "SUCCESS",
  "payload": {
    "date_range": {
      "start_date_time": "2022-01-01T00:00:00Z",
      "end_date_time": "2025-09-08T20:00:00Z"
    },
    "shipment_type": "return",
    "summary": {
      "return_pickup_scheduled": {
        "count": 0,
        "sum_of_prepaid_orders": 0.0,
        "sum_of_cod_orders": 0.0
      },
      "return_in_transit": {
        "count": 0,
        "sum_of_prepaid_orders": 0.0,
        "sum_of_cod_orders": 0.0
      },
      "return_delivered": {
        "count": 0,
        "sum_of_prepaid_orders": 0.0,
        "sum_of_cod_orders": 0.0
      },
      "cancelled": {
        "count": 0,
        "sum_of_prepaid_orders": 0.0,
        "sum_of_cod_orders": 0.0
      }
    }
  }
}
```

## Summary Fields

Each status in the summary includes:

| Field | Description |
|-------|-------------|
| count | Number of shipments in this status |
| sum_of_prepaid_orders | Total value of prepaid orders |
| sum_of_cod_orders | Total value of COD orders |
