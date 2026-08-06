---
sidebar_position: 17
---

# Finance APIs

Two POST endpoints that allow sellers to fetch shipment-level financial data programmatically using AWB numbers.

:::note Rate Limiting
Both endpoints are throttled to **5 requests per minute** per authenticated client. Exceeding the limit returns HTTP 429.
:::

---

## Shipping Charges API

Returns ledger events (charges) for each AWB — both shipment-level and order-level charges (e.g. platform fees, AI/IVR call charges raised before AWB assignment).

**Method:** `POST`
**Endpoint:** `/custom/api/v1/shipping-charges`

### Request Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| awbs | array of strings | Yes | List of AWB/tracking numbers to query. Max 100. Duplicates are silently deduplicated. | `["AWB001", "AWB002"]` |

### Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/shipping-charges' \
--header 'Authorization: your_token_here' \
--header 'Content-Type: application/json' \
--data '{
  "awbs": ["AWB001", "AWB002"]
}'
```

### Success Response

```json
{
  "data": [
    {
      "tracking_number": "AWB001",
      "charges": [
        {
          "event_type": "shipment_debit",
          "transaction_type": "debit",
          "amount_without_gst": 84.75,
          "amount_with_gst": 100.0
        },
        {
          "event_type": "platform_fee",
          "transaction_type": "debit",
          "amount_without_gst": 8.47,
          "amount_with_gst": 10.0
        },
        {
          "event_type": "oc_automation_ai_call_service_charge",
          "transaction_type": "debit",
          "amount_without_gst": 4.24,
          "amount_with_gst": 5.0
        }
      ]
    },
    {
      "tracking_number": "AWB002",
      "error": "AWB AWB002 does not exist in your account."
    }
  ]
}
```

### Response Fields

#### Per-AWB Object

| Field | Type | Description |
|-------|------|-------------|
| tracking_number | string | The AWB number from the request |
| charges | array | List of charge entries (omitted if `error` is present) |
| error | string | Present only when the AWB is not found in the seller's account |

#### Charge Entry Object

| Field | Type | Description |
|-------|------|-------------|
| event_type | string | Charge category, e.g. `shipment_debit`, `platform_fee`, `oc_automation_ai_call_service_charge`, `rto_risk_service_charge` |
| transaction_type | string | `debit` or `credit` |
| amount_without_gst | float | Charge amount excluding GST, rounded to 2 decimal places |
| amount_with_gst | float | Charge amount including GST, rounded to 2 decimal places |

---

## COD Remittance API

Returns remittance details for each COD AWB. For each AWB the response includes the delivery date, COD amount collected, and remittance date (either the actual settlement date if already remitted, or the next scheduled date per client configuration).

**Method:** `POST`
**Endpoint:** `/custom/api/v1/cod-remittance`

### Request Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| awbs | array of strings | Yes | List of AWB/tracking numbers to query. Max 100. Duplicates are silently deduplicated. | `["AWB001", "AWB002"]` |

### Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/cod-remittance' \
--header 'Authorization: your_token_here' \
--header 'Content-Type: application/json' \
--data '{
  "awbs": ["AWB001", "PREPAID001"]
}'
```

### Success Response

```json
{
  "data": [
    {
      "tracking_number": "AWB001",
      "delivery_date": "2026-07-20",
      "cod_amount": 499.0,
      "remittance_date": "2026-07-29",
      "utr_no": "UTR123456789"
    },
    {
      "tracking_number": "PREPAID001",
      "error": "AWB PREPAID001 is a prepaid order."
    },
    {
      "tracking_number": "MISSING001",
      "error": "AWB MISSING001 does not exist in your account."
    }
  ]
}
```

### Response Fields

#### Per-AWB Object

| Field | Type | Description |
|-------|------|-------------|
| tracking_number | string | The AWB number from the request |
| delivery_date | string (YYYY-MM-DD) | Date the shipment was delivered. `null` if not yet delivered. |
| cod_amount | float | COD amount collected, rounded to 2 decimal places |
| remittance_date | string (YYYY-MM-DD) | Settlement date if already remitted; otherwise the next scheduled remittance date per client config |
| utr_no | string | UTR number once the remittance is settled. `null` if pending. |
| error | string | Present only when the AWB is not found or is a prepaid order |

---

## Common Validation Errors

Both endpoints share the same input validation and return HTTP 400 for any of the following:

| Scenario | HTTP Status | Error Message |
|----------|-------------|---------------|
| `awbs` param missing or empty | 400 | `awbs is mandatory` |
| `awbs` is not an array | 400 | `awbs must be an array` |
| More than 100 AWBs provided | 400 | `AWB maximum limit is 100` |
