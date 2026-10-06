---
sidebar_position: 5
---

# Forward Shipment API

Velocity Shipping allows you to create an order without assigning a courier and assign the courier later.

## Step 1: Create Order

**Endpoint:** `/custom/api/v1/forward-order`

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/forward-order' \
--header 'Authorization: Iu9npoZf8PWpvIIBeMZXWQ' \
--header 'Content-Type: application/json' \
--data-raw '{
  "order_id": "ORDER-0099iyhih",
  "order_date": "2018-05-08 12:23",
  "billing_customer_name": "Saurabh",
  "billing_address": "Incubex, Velocity",
  "billing_city": "Bangalore",
  "billing_pincode": "560102",
  "billing_state": "Karnataka",
  "billing_country": "India",
  "billing_phone": "8860697807",
  "shipping_is_billing": true,
  "print_label": true,
  "order_items": [
    {
      "name": "T-shirt Round Neck",
      "sku": "t-shirt-round1474",
      "units": 2,
      "selling_price": 1000
    }
  ],
  "payment_method": "COD",
  "sub_total": 990,
  "cod_collectible": 990,
  "shipping_charges": 49,
  "length": 100,
  "breadth": 50,
  "height": 10,
  "weight": 0.50,
  "pickup_location": "HomeNew",
  "warehouse_id": "WHYYB5"
}'
```

**Response:** (No courier assigned yet)

```json
{
  "status": 1,
  "payload": {
    "pickup_location_added": 1,
    "order_created": 1,
    "awb_generated": 0,
    "pickup_generated": 0,
    "shipment_id": "SHIXRE1ER7BQI",
    "order_id": "ORDBJSDAMG9YN"
  }
}
```

:::tip
To ship the order immediately after creation, you can opt for "Courier Auto Assignment" under settings on the dashboard, the order will be shipped based on the shipping rules set. And subscribe to the Webhooks to get the status updates and tracking details.
:::

## Step 2: Assign Courier

**Endpoint:** `/custom/api/v1/forward-order-shipment`

To use a specific carrier, pass the `carrier_id` in the payload. If left blank, the order will be shipped using the shipping rules set on your account.

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/forward-order-shipment' \
--header 'Authorization: RJShHQFn_YuXsMzfZb9-1A' \
--header 'Content-Type: application/json' \
--data '{
  "shipment_id": "SHIXRE1ER7BQI",
  "carrier_id": ""
}'
```

**Response:** (Courier now assigned)

```json
{
  "status": 1,
  "payload": {
    "awb_generated": 1,
    "label_generated": 1,
    "pickup_generated": 1,
    "awb_code": "34812010700125",
    "courier_name": "Delhivery Standard",
    "label_url": "https://..."
  }
}
```
