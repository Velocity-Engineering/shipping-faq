---
sidebar_position: 1
title: Reports
description: Guide to Velocity Shipping's reporting system, export modes, filters, and scheduling.
---

# Reports - Frequently Asked Questions

> Guide to Velocity Shipping's reporting system, export modes, filters, and scheduling

---

## Table of Contents
1. [Overview](#1-overview)
2. [Report Modes: Realtime vs ClickHouse](#2-report-modes-realtime-vs-clickhouse)
3. [Available Reports](#3-available-reports)
4. [Filters & Date Ranges](#4-filters--date-ranges)
5. [Scheduled Reports](#5-scheduled-reports)
6. [Custom Reports](#6-custom-reports)
7. [Troubleshooting](#7-troubleshooting)

---

## 1. Overview

### Q: What types of reports are available in Velocity Shipping?
**A:** Velocity Shipping offers various report types:

| Category | Reports |
|----------|---------|
| **Shipment Reports** | Shipment Report, Shipment Item-Level Report |
| **Order Reports** | Order Report, Order Item-Level Report |
| **NDR Reports** | NDR Report, NDR Analysis |
| **Financial Reports** | COD Remittance, Invoice Itemised Bill, VAS Itemised Bill |
| **Operational Reports** | Weight Discrepancy, Delayed Deliveries, RTO Analysis |
| **Performance Reports** | SKU Performance, Carrier Performance |
| **Serviceability** | Serviceable Pincodes Report |

### Q: What formats can I export reports in?
**A:** Reports are exported as **CSV files**. The file is generated and stored securely, with a download link sent to your email.

---

## 2. Report Modes: Realtime vs ClickHouse

### Critical: Two Report Generation Modes

Velocity Shipping uses two different backends for generating reports:

| Aspect | Realtime Mode | ClickHouse Mode |
|--------|---------------|-----------------|
| **Speed** | Slow (can take up to 2 minutes) | Fast (usually under 30 seconds) |
| **Record Limit** | Up to 10,000 records | Up to 1,00,000 (1 lakh) records |
| **Filters Supported** | All UI filters | Only status and date filters |
| **Data Freshness** | Real-time (live database) | Slightly stale (max 30 minutes delay) |
| **Use Case** | Small, filtered exports with all columns | Large bulk exports |

---

### Q: Which mode is used when I download from the Reports section?

**A: Reports downloaded from the Reports section default to ClickHouse mode.**

This means:
- Your report will be generated quickly
- You can export up to 1 lakh records
- **Data may be up to 30 minutes stale**
- Only status and date filters are applied

---

### Q: Why is my downloaded report missing some recent orders?

**A:** If you're using the Reports section (ClickHouse mode), there's a **data sync delay of up to 30 minutes**.

- Orders created in the last 30 minutes may not appear
- For real-time data, use the Orders/Shipments listing page with filters and export (limited to 10k records)

---

### Q: How do I get real-time data in my report?

**A:** Use the **listing page export** instead of the Reports section:
1. Go to Orders or Shipments listing
2. Apply your desired filters
3. Click Export/Download

This uses Realtime mode but is limited to 10,000 records.

---

### Q: Why can't I apply all filters in bulk reports?

**A:** ClickHouse mode (used for bulk reports) only supports:
- **Status filter** - Select specific shipment statuses
- **Date filter** - Date range with milestone selection

Other filters (tags, carriers, warehouses, etc.) are not available in bulk mode due to performance optimization.

---

## 3. Available Reports

### Shipment Reports

**Q: What's the difference between Shipment Report and Shipment Item-Level Report?**

| Report | Granularity | Use Case |
|--------|-------------|----------|
| **Shipment Report** | One row per shipment/AWB | Overall shipment tracking, delivery status |
| **Shipment Item-Level Report** | One row per product/SKU | Product-level analysis, inventory reconciliation |

**Example:**
- Order with 3 items - Shipment Report shows 1 row
- Order with 3 items - Item-Level Report shows 3 rows

---

### Order Reports

**Q: What's the difference between Order and Shipment reports?**

| Report | Scope | Key Fields |
|--------|-------|------------|
| **Order Report** | Order-level data | Order ID, order date, customer details, payment method |
| **Shipment Report** | Shipment-level data | AWB, carrier, tracking status, delivery timestamps |

One order can have multiple shipments (split shipments, returns, replacements).

---

### Financial Reports

**Q: What financial reports are available?**

| Report | Description |
|--------|-------------|
| **Invoice Itemised Bill** | Detailed breakdown of shipping charges |
| **VAS Itemised Bill** | Value Added Services charges (WhatsApp, AI Calls, etc.) |
| **COD Remittance Report** | Cash-on-delivery collection and settlement |
| **Weight Discrepancy Report** | Carrier weight disputes and charges |

---

## 4. Filters & Date Ranges

### Q: What date fields can I filter by?

**A:** You can filter reports by various milestones:

| Date Field | Description |
|------------|-------------|
| `order_date` | When the order was placed |
| `ready_for_pickup_at` | When shipment was ready for carrier pickup |
| `picked_up_at` | When carrier picked up the shipment |
| `in_transit_at` | When shipment entered transit |
| `out_for_delivery_at` | When shipment went out for delivery |
| `delivered_at` | When shipment was delivered |
| `rto_initiated_at` | When return-to-origin was initiated |
| `rto_delivered_at` | When RTO shipment was delivered back |

---

### Q: What statuses can I filter by?

**A:** Common status filters include:

| Status Category | Statuses |
|-----------------|----------|
| **Pre-Transit** | Pending, Ready for Pickup, Pickup Scheduled |
| **In Transit** | In Transit, Out for Delivery |
| **Delivered** | Delivered |
| **Exceptions** | NDR Raised, Need Attention, Undelivered |
| **RTO** | RTO Initiated, RTO In Transit, RTO Delivered |
| **Other** | Cancelled, Lost, Rejected, Processing |

---

### Q: What's the maximum date range I can query?

**A:**
- **ClickHouse mode**: Recommended max 90 days for optimal performance
- **Realtime mode**: No strict limit, but larger ranges take longer

For historical data beyond 90 days, consider scheduling multiple reports or contacting support.

---

## 5. Scheduled Reports

### Q: Can I schedule automatic report generation?

**A:** Yes! You can schedule reports to run automatically:

| Frequency | Description |
|-----------|-------------|
| **Daily** | Every day at specified time |
| **Weekly** | Specific day of the week |
| **Monthly** | Specific date of the month |
| **Custom** | Cron-based custom schedule |

---

### Q: How do I set up a scheduled report?

**A:**
1. Go to **Tools - Reports - Scheduled Reports**
2. Select the report type
3. Configure filters and date range logic
4. Set frequency and time
5. Add recipient email addresses
6. Save the schedule

Reports are automatically emailed to all recipients when generated.

---

### Q: Can I add multiple recipients to a scheduled report?

**A:** Yes, you can add multiple email addresses. All recipients receive the download link when the report is ready.

---

## 6. Custom Reports

### Q: What are Custom Reports?

**A:** Custom Reports let you create personalized report templates with:
- Selected columns only (no unnecessary data)
- Predefined filters
- Saved for reuse

---

### Q: How do I create a Custom Report?

**A:**
1. Go to **Tools - Reports - Custom Reports**
2. Click "Create New"
3. Select module (Orders)
4. Choose breakdown level (Order or Item level)
5. Select journey type (Forward or Reverse)
6. Pick your columns
7. Save with a name

---

### Q: What fields are available in Custom Reports?

**A:** For Order module:

| Category | Example Fields |
|----------|----------------|
| **Order Details** | Order ID, Order Date, Payment Method, COD Amount |
| **Customer** | Customer Name, Phone, Email, Address |
| **Shipment** | AWB, Carrier, Status, Delivery Date |
| **Product** | SKU, Product Name, Quantity, Price |
| **Warehouse** | Warehouse Name, Origin Pincode |
| **RTO** | RTO AWB, RTO Status, RTO Delivered Date |

---

## 7. Troubleshooting

### Q: My report is taking too long to generate

**A:** Possible causes and solutions:

| Cause | Solution |
|-------|----------|
| Large date range | Reduce to 30-60 days |
| Too many records | Add more filters to reduce data |
| System load | Wait and retry, or schedule for off-peak hours |
| Realtime mode | Use Reports section for ClickHouse mode |

---

### Q: My report shows fewer records than expected

**A:** Check these common causes:

| Issue | Explanation |
|-------|-------------|
| **Data staleness** | ClickHouse data may be up to 30 mins behind |
| **10k limit** | Realtime mode caps at 10,000 records |
| **Filter mismatch** | Verify your status and date filters |
| **Date field selection** | Ensure correct date milestone is selected |

---

### Q: Report generation failed

**A:** Common reasons:

| Reason | Solution |
|--------|----------|
| Timeout | Reduce date range or add filters |
| No data | Verify filters return results in UI first |
| System error | Contact support with the report ID |

---

### Q: Can I download a report again after it expires?

**A:** Download links expire after **1 hour**. To get the report again:
1. Go to Tools - Reports - Download History
2. Find your report
3. Click "Regenerate" if available, or create a new request

---

## Quick Reference

### Report Mode Comparison

| Feature | Realtime | ClickHouse |
|---------|----------|------------|
| Max Records | 10,000 | 1,00,000 |
| Speed | Up to 2 mins | Under 30 secs |
| Data Freshness | Live | Up to 30 mins stale |
| All Filters | Yes | Status & Date only |
| Default in Reports Section | No | Yes |

### When to Use Which Mode

| Scenario | Recommended Mode |
|----------|------------------|
| Quick bulk export | ClickHouse (Reports section) |
| Need all filters | Realtime (Listing page export) |
| Need > 10k records | ClickHouse |
| Need real-time accuracy | Realtime |
| Scheduled reports | ClickHouse |

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard
- **Account Manager:** Contact your dedicated account manager

Our support team is happy to help!
