---
sidebar_position: 1
slug: /
---

# Introduction

This documentation provides a complete reference to the Velocity Shipping API suite for custom integrations with websites, ERPs, or order management systems.

## Overview

By using these APIs, integrators can efficiently create, manage, and track shipments, enabling end-to-end order manifestation and shipping operations through Velocity Shipping.

**Base URL:** `https://shazam.velocity.in/`

## Authentication

All API requests (except the auth-token endpoint) require authentication using a Bearer token. Obtain your token using the [Authentication API](/api/authentication) and include it in the `Authorization` header of all subsequent requests.

```
Authorization: your_token_here
```

## Standard Error Codes

| HTTP Code | Description |
|-----------|-------------|
| 400 | Validation error in request parameters |
| 401 | Authorization failed due to invalid or missing credentials |
| 422 | Waybill operation failed/Shipment cancellation failed/Other business logic errors |
| 500 | Internal server error |

## API Endpoints Summary

| Endpoint | Description |
|----------|-------------|
| `/custom/api/v1/auth-token` | Get authentication token |
| `/custom/api/v1/warehouse` | Create warehouse |
| `/custom/api/v1/serviceability` | Check serviceability |
| `/custom/api/v1/forward-order-orchestration` | Create forward shipment |
| `/custom/api/v1/reverse-order-orchestration` | Create reverse pickup |
| `/custom/api/v1/cancel-order` | Cancel shipment |
| `/custom/api/v1/order-tracking` | Track shipment |
| `/custom/api/v1/rates` | Get shipping rates |
| `/custom/api/v1/reports` | Get summary reports |
| `/custom/api/v1/reattempt` | NDR re-attempt |
| `/custom/api/v1/initiate-rto` | Initiate RTO |
