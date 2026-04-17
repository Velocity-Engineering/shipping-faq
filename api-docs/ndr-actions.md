---
sidebar_position: 11
---

# NDR Action API

Enables initiating a Re-attempt or Return to Origin (RTO) for undelivered orders.

> **Note:**
> - This API is applicable only for orders currently in the **NDR Raised** state
> - Re-attempt requests may fail if more than two delivery attempts have already been made, or for specific NDR scenarios (e.g., OTP-verified cancellations)

## Re-attempt API

**Method:** `POST`
**Endpoint:** `/custom/api/v1/reattempt`

### Request Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| awb | string | Yes | Airway bill number | 38539510600353 |
| updated_address | object | Optional | Updated street address and landmark. Note: pincode and city name update is not allowed | See below |
| updated_phone_number | string | Optional | Updated customer phone number (available for selected couriers only) | +919876543210 |
| comments | string | Optional | Additional notes | Customer requested reattempt |

### Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/reattempt' \
--header 'Authorization: QQ3LsHOOpYZfi4v3_MsNCg' \
--header 'Content-Type: application/json' \
--data '{
  "awb": "38539510600353",
  "updated_address": {
    "address_line": "123 New Street",
    "landmark": "Near Park"
  },
  "updated_phone_number": "+919876543210",
  "comments": "Customer requested reattempt with updated address"
}'
```

### Success Response

```json
{
  "success": true,
  "message": "Reattempt initiated successfully",
  "data": {
    "awb": "38539510600353"
  }
}
```

---

## Initiate RTO API

**Method:** `POST`
**Endpoint:** `/custom/api/v1/initiate-rto`

### Request Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| awb | string | Yes | Airway bill number | 76812979994 |

### Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/initiate-rto' \
--header 'Authorization: QQ3LsHOOpYZfi4v3_MsNCg' \
--header 'Content-Type: application/json' \
--data '{
  "awb": "76812979994"
}'
```

### Success Response

```json
{
  "success": true,
  "message": "RTO initiated successfully",
  "data": {
    "awb": "76812979994"
  }
}
```
