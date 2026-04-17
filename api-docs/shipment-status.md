---
sidebar_position: 16
---

# Shipment Status

Complete list of all shipment statuses used in the Velocity Shipping platform.

## Forward Shipment Statuses

| Status | Description |
|--------|-------------|
| `pending` | New shipment created but not yet assigned to a courier |
| `rejected` | Forward shipment cancelled or rejected before courier assignment |
| `processing` | Intermediate state while a bulk or system action is being processed |
| `ready_for_pickup` | Shipment assigned to a courier and ready for pickup |
| `pickup_scheduled` | Pickup has been scheduled with the courier |
| `not_picked` | Shipment could not be picked up during forward journey |
| `in_transit` | Shipment is moving through the courier network |
| `out_for_delivery` | Shipment is out for delivery to the consignee |
| `delivered` | Shipment successfully delivered to the consignee |
| `ndr_raised` | Shipment could not be delivered and marked as undelivered (NDR raised) |
| `need_attention` | Shipment requires attention due to delivery issues |
| `reattempt_delivery` | Shipment assigned for a re-attempted delivery |
| `cancelled` | Shipment cancelled by the user or courier partner |
| `lost` | Shipment marked as lost during forward journey |
| `externally_fulfilled` | Shipment fulfilled using a courier outside the Velocity Shipping network |

## RTO (Return to Origin) Statuses

| Status | Description |
|--------|-------------|
| `rto_initiated` | Return to Origin (RTO) has been initiated |
| `rto_cancelled` | Return to Origin (RTO) has been cancelled |
| `rto_in_transit` | RTO shipment is in transit back to origin |
| `rto_need_attention` | RTO shipment requires attention due to delivery failure |
| `rto_delivered` | RTO shipment delivered back to the origin warehouse |
| `rto_lost` | RTO shipment marked as lost during return to origin |

## Return Shipment Statuses

| Status | Description |
|--------|-------------|
| `return_rejected` | Return shipment cancelled or rejected before courier assignment |
| `return_pickup_scheduled` | Pickup scheduled for return shipment |
| `return_not_picked` | Return shipment could not be picked up |
| `return_in_transit` | Return shipment is in transit to the warehouse |
| `return_delivered` | Return shipment successfully delivered to warehouse |
| `return_cancelled` | Return shipment cancelled |
| `return_ndr_raised` | Return shipment could not be delivered and marked as undelivered |
| `return_need_attention` | Return shipment requires attention |
| `return_qc_failed` | Return shipment failed quality check |
| `return_lost` | Return shipment marked as lost |
