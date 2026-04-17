---
sidebar_position: 13
---

# Webhooks

Webhooks allow you to receive real-time notifications about shipment status changes.

## Configuration

To configure webhooks:

1. Log in to your admin account
2. Navigate to **Settings → Webhooks**
3. Add your webhook endpoint URL
4. Select the authorization method
5. Provide the required authorization details (if applicable)

## Authentication Methods

| Method | Description |
|--------|-------------|
| None | No authentication header is sent with the webhook request |
| API Key | An API key is sent in the `X-API-Key` header. Configure the key in the settings page |

When using API Key authentication, the webhook request will include:

```
X-API-Key: your_configured_api_key
```

## Supported Events

Webhooks are triggered for shipment status changes including:

- Order created
- Pickup scheduled
- In transit
- Out for delivery
- Delivered
- NDR raised
- RTO initiated
- RTO delivered
- Return pickup scheduled
- Return delivered
- And more...

## Webhook Payload

When a status change occurs, Velocity Shipping sends a POST request to your configured endpoint with the following payload structure:

```json
{
  "event": "status_change",
  "event_id": "fe629ee4-05af-499c-bd15-3ebb87d1a077",
  "event_timestamp": "2026-04-15T10:58:47+05:30",
  "data": {
    "shipment_id": "SHIQ6MAKJMOIY",
    "tracking_number": "41332221429154",
    "order_id": "ORDQ7LAKF9XJJ",
    "order_external_id": "510322643_602973822",
    "order_display_id": "114595804897851",
    "status": "delivered",
    "sub_status": "delivered",
    "carrier_name": "Delhivery Standard",
    "estimated_delivery_date": "2026-04-17T00:00:00+05:30",
    "original_edd": "2026-04-17T00:00:00+05:30",
    "shipment_type": "forward",
    "delivered_at": "2026-04-15T10:58:39+05:30",
    "tracking_url": "https://www.velocityshipping.in/track/41332221429154"
  }
}
```

### Payload Fields

| Field | Description |
|-------|-------------|
| event | Event type (e.g., `status_change`) |
| event_id | Unique identifier for this event |
| event_timestamp | ISO 8601 timestamp when the event occurred |
| data.shipment_id | Velocity Shipping internal shipment ID |
| data.tracking_number | Carrier tracking/AWB number |
| data.order_id | Velocity Shipping internal order ID |
| data.order_external_id | Your external order reference |
| data.order_display_id | Human-readable order ID |
| data.status | Current shipment status |
| data.sub_status | Detailed sub-status |
| data.carrier_name | Name of the carrier |
| data.estimated_delivery_date | Expected delivery date |
| data.original_edd | Original estimated delivery date |
| data.shipment_type | Type of shipment (`forward`, `return`, `rto`) |
| data.delivered_at | Delivery timestamp (when applicable) |
| data.tracking_url | Public tracking page URL |

## Best Practices

- **Validate requests**: Verify the `X-API-Key` header matches your configured key to ensure requests originate from Velocity Shipping
- **Handle idempotency**: Use `event_id` to detect and ignore duplicate webhook deliveries
- **Respond quickly**: Return a 2xx status code within 5 seconds; process heavy logic asynchronously
- **Fallback to pull API**: If webhooks fail or are delayed, periodically poll the [Order Details API](/api/order-details-forward) as a backup

## Security

- Use HTTPS endpoints for secure communication
- Configure API Key authentication to verify webhook authenticity
- Respond with a 2xx status code to acknowledge receipt
