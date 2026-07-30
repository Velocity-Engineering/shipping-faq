---
sidebar_position: 1
title: Reports
description: Guide to Velocity Shipping's reporting system, export modes, filters, scheduling, and custom reports.
---

# Reports - Frequently Asked Questions

> Guide to Velocity Shipping's reporting system, export modes, filters, and scheduling

---

## Table of Contents
1. [Overview](#1-overview)
2. [Report Modes: Lite vs Detailed](#2-report-modes-lite-vs-detailed)
3. [Available Reports](#3-available-reports)
4. [Filters & Date Ranges](#4-filters--date-ranges)
5. [Scheduled Reports](#5-scheduled-reports)
6. [Custom Reports](#6-custom-reports)
7. [Reports Download](#7-reports-download)
8. [Data Access & Permissions](#8-data-access--permissions)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Overview

### Q: What types of reports are available in Velocity Shipping?
**A:** Velocity Shipping offers various report types:

| Category | Reports |
|----------|---------|
| **Shipment Reports** | Shipment Report, Shipment Item-Level Report |
| **Order Reports** | Order Report, Order Item-Level Report |
| **NDR Reports** | NDR Report, NDR Analysis |
| **Financial Reports** | COD Remittance, Shipping Charges, Ledger, COD Settlement |
| **Operational Reports** | Weight Discrepancy, Delayed Deliveries, RTO Analysis |
| **Performance Reports** | SKU Performance, Carrier Performance |
| **Serviceability** | Serviceable Pincodes Report |

### Q: What formats can I export reports in?
**A:** Reports are exported as **CSV files**. The file is generated and stored securely, with a download link sent to your email.

### Q: How do I access the Reports section?
**A:** Navigate to **Shipping > Reports** in your Velocity dashboard. The Reports page has four main tabs:
- **Additional Reports** - Generate standard reports on-demand
- **Reports Download** - View download history and status
- **Schedule Report** - Set up automated recurring reports
- **Custom Report** - Create personalized report templates

---

## 2. Report Modes: Lite vs Detailed

### Two Report Generation Modes

Velocity Shipping offers two report generation modes:

| Aspect | Lite Report | Detailed Report |
|--------|-------------|-----------------|
| **Speed** | Slow (can take up to 2 minutes) | Fast (usually under 30 seconds) |
| **Record Limit** | Up to 10,000 records | Up to 1,00,000 (1 lakh) records |
| **Filters Supported** | All UI filters | Only status and date filters |
| **Data Freshness** | Real-time (live database) | Slightly stale (max 30 minutes delay) |
| **Use Case** | Small, filtered exports with all columns | Large bulk exports |

---

### Q: Which mode is used when I download from the Reports section?

**A: Reports downloaded from the Reports section use Detailed report mode.**

This means:
- Your report will be generated quickly
- You can export up to 1 lakh records
- **Data may be up to 30 minutes stale**
- Only status and date filters are applied

---

### Q: Why is my downloaded report missing some recent orders?

**A:** If you're downloading a Detailed report, there's a **data sync delay of up to 30 minutes**.

- Orders created in the last 30 minutes may not appear
- For real-time data, use the Orders/Shipments listing page with filters and export (limited to 10k records)

---

### Q: How do I get real-time data in my report?

**A:** Use the **listing page export** instead of the Reports section:
1. Go to Orders or Shipments listing
2. Apply your desired filters
3. Click Export/Download

This uses Lite report mode but is limited to 10,000 records.

---

### Q: Why can't I apply all filters in bulk reports?

**A:** Detailed reports only support:
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

| Report | Description | Access Required |
|--------|-------------|-----------------|
| **Shipping Charges** | Detailed breakdown of shipping charges | Financial Data Access |
| **COD Remittance Report** | Cash-on-delivery collection and settlement | Financial Data Access |
| **Ledger** | Complete transaction ledger | Financial Data Access |
| **COD Settlement** | COD settlement details | Financial Data Access |
| **Weight Discrepancy Report** | Carrier weight disputes and charges | Standard Access |

**Note:** Financial reports require the "Financial Data Access" permission enabled on your account.

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

**A:** Status filters differ based on journey type:

**Forward Journey Statuses:**

| Status Category | Statuses |
|-----------------|----------|
| **Pre-Transit** | Pending, Ready for Pickup, Pickup Scheduled |
| **In Transit** | In Transit, Out for Delivery |
| **Delivered** | Delivered |
| **Exceptions** | NDR Raised, Need Attention, Undelivered |
| **RTO** | RTO Initiated, RTO In Transit, RTO Delivered |
| **Other** | Cancelled, Lost, Rejected, Processing |

**Reverse Journey Statuses:**
- Pickup Requested, Pickup Scheduled, Picked Up
- In Transit, Out for Delivery
- Delivered to Warehouse
- QC Pending, QC Approved, QC Rejected
- Refund Initiated, Refund Completed
- Cancelled

---

### Q: What's the maximum date range I can query?

**A:**
- **Detailed report**: Recommended max 90 days for optimal performance
- **Lite report**: No strict limit, but larger ranges take longer

For historical data beyond 90 days, consider scheduling multiple reports or contacting support.

---

## 5. Scheduled Reports

### Q: Can I schedule automatic report generation?

**A:** Yes! You can schedule reports to run automatically and receive them via email.

| Frequency | Options |
|-----------|---------|
| **Daily** | Every day at your specified time |
| **Weekly** | Choose any day (Monday - Sunday) |
| **Monthly** | Choose any date (1st - 31st) |

---

### Q: How do I set up a scheduled report?

**A:**
1. Go to **Shipping > Reports > Schedule Report**
2. Click **"Schedule Report"** button
3. Configure your schedule:
   - **Report Type**: Select from available reports
   - **Email Addresses**: Add up to 10 recipients
   - **Email Subject**: Customize the email subject line
   - **Frequency**: Daily, Weekly, or Monthly
   - **Day/Date**: For weekly (day of week) or monthly (day of month)
   - **Date Range Preset**: Select the data window
   - **Send Time**: Choose from 24 hourly slots (12:00 AM - 11:00 PM)
4. Configure data access options if needed
5. Click **Save**

---

### Q: What date range presets are available for scheduled reports?

**A:** Date range presets vary by frequency:

| Frequency | Available Presets |
|-----------|-------------------|
| **Daily** | Yesterday, Today, Last 7 days, Last 15 days, Last 30 days, Last 60 days |
| **Weekly** | Last 7 days, Last 15 days, Last 30 days, Last 60 days |
| **Monthly** | Last 30 days, Last 60 days |

---

### Q: Can I add multiple recipients to a scheduled report?

**A:** Yes, you can add **up to 10 email addresses**. All recipients receive the download link when the report is generated.

---

### Q: How do I enable or disable a scheduled report?

**A:** Each scheduled report has an **On/Off toggle** in the scheduled reports table. Toggle it to enable or disable without deleting the schedule configuration.

---

### Q: Can I hide sensitive data in scheduled reports?

**A:** Yes, you can configure data masking options when creating a schedule:

| Option | Effect |
|--------|--------|
| **Hide Buyer Data** | Masks customer names, phone numbers, and addresses |
| **Hide Financial Data** | Hides charges, amounts, and financial columns |

These options are available for Orders, Returns, Order Confirmation, and NDR reports.

---

## 6. Custom Reports

### Q: What are Custom Reports?

**A:** Custom Reports let you create personalized report templates with:
- **Selected columns only** - Choose exactly which fields you need
- **Custom field ordering** - Drag and drop to arrange columns
- **Journey type selection** - Forward or Reverse shipments
- **Breakdown level** - Order-level or Item-level granularity
- **Saved filters** - Pre-configured status filters
- **Reusable templates** - Download anytime with different date ranges

---

### Q: How do I create a Custom Report?

**A:**
1. Go to **Shipping > Reports > Custom Report**
2. Click **"Create Custom Report"**
3. Configure your report:
   - **Report Name**: Give your template a unique name
   - **Journey Type**: Choose Forward or Reverse
   - **Breakdown Level**: Order Level or Item Level
   - **Field Selection**: 
     - Default fields are pre-selected and required
     - Select additional fields from the Available Fields panel
     - Use the search box to find specific fields
   - **Reorder Fields**: Drag and drop selected fields to your preferred order
   - **Status Filter**: Optionally filter by specific statuses
4. Click **"Create Report"**

---

### Q: What journey types are supported in Custom Reports?

**A:** Custom Reports support two journey types:

| Journey | Description | Use Case |
|---------|-------------|----------|
| **Forward** | Original shipment from seller to customer | Standard order fulfillment tracking |
| **Reverse** | Return shipment from customer to seller/warehouse | Returns, exchanges, RTO tracking |

Each journey type has its own set of available fields and status filters.

---

### Q: What breakdown levels are available?

**A:**

| Level | Description | Rows Generated |
|-------|-------------|----------------|
| **Order Level** | One row per order | Order with 3 items = 1 row |
| **Item Level** | One row per product/SKU | Order with 3 items = 3 rows |

Choose Item Level when you need product-specific details like SKU, quantity, or item-level pricing.

---

### Q: What fields are available in Custom Reports?

**A:** Fields vary by journey type. Here are the main categories:

**Forward Journey Fields:**

| Category | Example Fields |
|----------|----------------|
| **Order Details** | Order ID, Order Date, Channel, Payment Method, COD Amount |
| **Customer** | Customer Name, Phone, Email, Delivery Address |
| **Shipment** | AWB, Carrier, Status, Current Location, Delivery Date |
| **Product** | SKU, Product Name, Quantity, Unit Price, HSN Code |
| **Warehouse** | Warehouse Name, Origin Pincode, Pickup Address |
| **NDR** | NDR Status, NDR Reason, Reattempt Count, AI Call Status, WhatsApp Status |
| **RTO** | RTO AWB, RTO Status, RTO Initiated Date, RTO Delivered Date |
| **Charges** | Shipping Charge, COD Charge, Total Amount |

**Reverse Journey Fields:**

| Category | Example Fields |
|----------|----------------|
| **Return Details** | Return ID, Return Date, Return Reason |
| **Pickup** | Pickup AWB, Pickup Status, Pickup Date |
| **QC** | QC Status, QC Notes, QC Date |
| **Refund** | Refund Status, Refund Amount, Refund Date |
| **Warehouse** | Destination Warehouse, Received Date |

---

### Q: Can I modify an existing Custom Report?

**A:** Yes, but with some restrictions:
- You **can** modify: Field selection, field order, status filters
- You **cannot** modify: Report name, Journey type, Breakdown level

If you need to change the journey type or breakdown level, create a new custom report.

---

### Q: How do I download a Custom Report?

**A:**
1. Go to **Custom Report** tab
2. Find your report in the table
3. Click the **Download** button
4. Select your date range in the modal (default: Last 30 days)
5. Click **Download**

The report is generated asynchronously and you'll be notified when it's ready.

---

### Q: Can I delete a Custom Report?

**A:** Yes. Click the **Delete** icon next to the report and confirm. This permanently removes the template but does not affect previously downloaded reports.

---

## 7. Reports Download

### Q: Where can I find my downloaded reports?

**A:** The **Reports Download** tab has three sections:

| Section | Contents |
|---------|----------|
| **Report Download** | Standard report downloads (Orders, Shipments, NDR, etc.) |
| **Scheduled Reports Download** | Reports generated by your scheduled jobs |
| **Custom Report Download** | Downloads from your custom report templates |

---

### Q: What information is shown in the download history?

**A:** Each download entry shows:
- **Module**: Report category (Orders, Returns, etc.)
- **Report Type**: Specific report name
- **Report Date Range**: The date range of data in the report
- **Username**: Who requested the report
- **Report Generated On**: When the report was created
- **Action**: Download button or status indicator

---

### Q: What do the download status icons mean?

**A:**

| Status | Indicator | Meaning |
|--------|-----------|---------|
| **In Progress** | Spinning loader | Report is being generated |
| **Ready** | Download button | Click to download the CSV |
| **Failed** | Error icon | Generation failed - try again |

---

### Q: How long are reports available for download?

**A:** Download links are available for **1 hour** after generation. After expiration:
1. Find the report in your download history
2. Request a new download with the same parameters

---

### Q: Will I be notified when my report is ready?

**A:** Yes! Velocity uses real-time notifications:
- **In-app notification**: You'll see a notification in your dashboard when the report completes
- **Email**: Download link is also sent to your registered email address

You don't need to stay on the Reports page - you can continue working and will be notified automatically.

---

## 8. Data Access & Permissions

### Q: What data access controls are available?

**A:** Velocity Shipping supports granular data access controls:

| Permission | Description | Affected Reports |
|------------|-------------|------------------|
| **Buyer Data Access** | View customer names, phone numbers, addresses | Orders, Returns, NDR, Order Confirmation |
| **Financial Data Access** | View charges, amounts, financial data | Shipping Charges, COD Remittance, Ledger, COD Settlement |

---

### Q: What happens when Buyer Data Access is disabled?

**A:** Customer PII (Personally Identifiable Information) is masked:
- Customer names show as "NOT AUTHORISED"
- Phone numbers are hidden
- Delivery addresses are masked

This applies to both on-demand downloads and scheduled reports.

---

### Q: How do I check my data access permissions?

**A:** Contact your account administrator or Velocity support to verify your current permission settings. Permissions are configured at the user level and may vary by role.

---

### Q: Can I generate reports with masked data for external sharing?

**A:** Yes! When scheduling reports, you can enable:
- **Hide Buyer Data**: Masks all customer PII
- **Hide Financial Data**: Removes financial columns

This is useful when sharing reports with external partners or teams who shouldn't see sensitive information.

---

## 9. Troubleshooting

### Q: My report is taking too long to generate

**A:** Possible causes and solutions:

| Cause | Solution |
|-------|----------|
| Large date range | Reduce to 30-60 days |
| Too many records | Add more filters to reduce data |
| System load | Wait and retry, or schedule for off-peak hours |
| Lite report mode | Use Reports section for Detailed report mode |
| Concurrency limit | Wait for your current report to complete |

**Note:** The system limits concurrent report generation:
- Lite reports: 1 report per user at a time (15-minute window)
- Detailed reports: Maximum 6 concurrent jobs globally

---

### Q: My report shows fewer records than expected

**A:** Check these common causes:

| Issue | Explanation |
|-------|-------------|
| **Data staleness** | Detailed report data may be up to 30 mins behind |
| **10k limit** | Lite report mode caps at 10,000 records |
| **1 lakh limit** | Detailed report mode caps at 1,00,000 records |
| **Filter mismatch** | Verify your status and date filters |
| **Date field selection** | Ensure correct date milestone is selected |
| **Journey type** | Custom reports only include the selected journey |

---

### Q: Report generation failed

**A:** Common reasons:

| Reason | Solution |
|--------|----------|
| Timeout | Reduce date range or add filters |
| No data | Verify filters return results in UI first |
| Concurrent limit | Wait for other reports to complete |
| System error | Contact support with the report ID |

---

### Q: Can I download a report again after it expires?

**A:** Download links expire after **1 hour**. To get the report again:
1. Go to **Reports > Reports Download**
2. Find your report in the history
3. Click **Download** to generate a new file

For scheduled reports, check the **Scheduled Reports Download** section.

---

### Q: Why can't I see the Custom Reports tab?

**A:** Custom Reports may not be visible if:
- Your account doesn't have custom reports enabled
- Contact your account manager to enable this feature

---

### Q: My scheduled report emails stopped arriving

**A:** Check these common causes:
1. **Schedule disabled**: Verify the toggle is set to "On"
2. **Email delivery**: Check spam/junk folders
3. **Invalid emails**: Ensure all recipient addresses are valid
4. **No data**: If no records match your filters, no email is sent

---

## Quick Reference

### Report Mode Comparison

| Feature | Lite Report | Detailed Report |
|---------|-------------|-----------------|
| Max Records | 10,000 | 1,00,000 |
| Speed | Up to 2 mins | Under 30 secs |
| Data Freshness | Live | Up to 30 mins stale |
| All Filters | Yes | Status & Date only |
| Default in Reports Section | No | Yes |

### When to Use Which Mode

| Scenario | Recommended Mode |
|----------|------------------|
| Quick bulk export | Detailed report (Reports section) |
| Need all filters | Lite report (Listing page export) |
| Need > 10k records | Detailed report |
| Need real-time accuracy | Lite report |
| Scheduled reports | Detailed report |

### Custom Reports Quick Reference

| Setting | Options |
|---------|---------|
| Journey Type | Forward, Reverse |
| Breakdown Level | Order Level, Item Level |
| Max Recipients (Scheduled) | 10 emails |
| Download Link Expiry | 1 hour |
| Concurrent Downloads | 1 per user (15 min window) |

---

## Need More Help?

If you couldn't find your answer here:
- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard
- **Account Manager:** Contact your dedicated account manager

Our support team is happy to help!
