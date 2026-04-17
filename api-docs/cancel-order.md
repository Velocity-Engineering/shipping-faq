---
sidebar_position: 7
---

# Cancel Order API

Cancels one or more shipments that are not yet picked up.

**Method:** `POST`
**Endpoint:** `/custom/api/v1/cancel-order`

## Request Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| awbs[] | array | Yes | List of AWBs to cancel (Max 50) | ["84161310011340"] |

## Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/cancel-order' \
--header 'Content-Type: application/json' \
--header 'Authorization: bbqRkOXw0xWLuYj9ubnDwg' \
--data '{
  "awbs": ["39879810176282"]
}'
```

## Success Response

```json
{
  "message": "Bulk Shipment cancellation is in progress. Please wait for some time."
}
```

## Notes

- Cancellation is only possible for shipments that have not yet been picked up
- Multiple AWBs can be cancelled in a single request (up to 50)
- The cancellation process runs asynchronously
