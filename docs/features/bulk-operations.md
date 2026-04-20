---
sidebar_position: 1
title: Bulk Operations
description: Learn about bulk order uploads, bulk shipment actions, and bulk label generation in Velocity Shipping.
---

# Bulk Operations FAQ

This guide covers everything you need to know about bulk operations in Velocity Shipping, including bulk order uploads, bulk shipment actions, and bulk label generation.

---

## Table of Contents

1. [Bulk Order Upload](#1-bulk-order-upload)
2. [Bulk Shipment Actions](#2-bulk-shipment-actions)
3. [Bulk Labels & Manifests](#3-bulk-labels--manifests)
4. [Troubleshooting Common Issues](#4-troubleshooting-common-issues)
5. [Best Practices](#5-best-practices)

---

## 1. Bulk Order Upload

### What is Bulk Order Upload?

Bulk Order Upload allows you to create multiple orders at once by uploading a CSV file instead of entering each order manually. This is especially useful for sellers who:
- Don't have a sales channel integration (like Shopify or WooCommerce)
- Need to process orders from offline channels
- Want to migrate orders from another platform

### How do I access Bulk Order Upload?

1. Go to **Orders** in the left sidebar
2. Click the **+ Add Order** button
3. Select **Bulk Upload**
4. Download the sample CSV template
5. Fill in your order details
6. Upload the completed file

### What file format is supported?

Only **CSV (Comma-Separated Values)** files are supported. The file must be UTF-8 encoded.

### What information is required in the CSV file?

The following fields are **mandatory** (marked with *):

| Field | Description | Example |
|-------|-------------|---------|
| Customer name* | Full name of the buyer | John Doe |
| Customer mobile no* | 10-digit Indian mobile number | 9876543210 |
| Order Id* | Your unique order reference | ORD-001 |
| Payment method* | Must be PREPAID or COD | COD |
| Address line 1* | Street address | 123 Main Street |
| Customer pincode* | 6-digit delivery pincode | 110001 |
| Product name* | Name of the product | Blue T-Shirt |
| Product SKU Id* | Your product code | SKU-12345 |
| Product quantity* | Number of items | 2 |
| Product price* | Price per unit (in INR) | 499.00 |
| Product tax rate (in %)* | GST percentage | 18 |
| Weight of the Package (in Kgs)* | Total shipment weight | 0.5 |
| Product image url* | URL to product image | https://example.com/image.jpg |

**Optional fields:**
- Order date
- Order total
- COD Amount
- Customer email
- Customer alternate no
- Address line 2
- Customer city (auto-populated from pincode if not provided)
- Customer state (auto-populated from pincode if not provided)
- Package Id
- Package Length (in cms)
- Package Width (in cms)
- Package Height (in cms)
- RTO Warehouse Id
- E-waybill Number
- Product HSN code
- Product discount

### Can I upload multiple items in a single order?

Yes! If an order has multiple items, create a separate row for each item with the **same Order ID**. The system will automatically group them together.

**Example:**
| Order Id | Product name | Product quantity | Product price |
|----------|--------------|------------------|---------------|
| ORD-001 | Blue T-Shirt | 1 | 499 |
| ORD-001 | Black Jeans | 1 | 999 |
| ORD-002 | Red Kurta | 2 | 799 |

This creates 2 orders: ORD-001 with 2 items, and ORD-002 with 1 item.

### What happens after I upload the file?

1. **Processing Starts**: Your file is processed in the background
2. **Validation**: Each row is validated for mandatory fields and data formats
3. **Order Creation**: Valid orders are created in your account
4. **Error Report**: If any rows fail, you'll receive an email with an error report

### How do I know if my upload was successful?

- You'll see a confirmation message: "Bulk upload orders processing started"
- Successfully created orders will appear in your Orders list
- If there are errors, you'll receive an email with a detailed error report

### What happens if some orders fail?

- Successfully processed orders will still be created
- Failed orders are listed in an error report sent to your email
- The error report shows the original data plus an "Errors" column explaining what went wrong
- You can fix the errors and re-upload only the failed rows

### What are the upload limits?

- Orders are processed in batches of 100 rows
- There's no hard limit on the number of orders per file
- Large files may take longer to process

---

## 2. Bulk Shipment Actions

### What bulk actions can I perform on shipments?

| Action | Description | Where to access |
|--------|-------------|-----------------|
| **Bulk Ship** | Create shipments for multiple orders at once | Orders > New tab > Select orders > Ship |
| **Bulk Cancel** | Cancel multiple shipments at once | Orders > New or Ready to Ship tab > Select > Cancel |
| **Bulk RTO** | Initiate Return to Origin for multiple shipments | Orders > Need Attention tab > Select > Return to Origin |
| **Bulk Reattempt** | Request delivery reattempt for multiple shipments | Orders > NDR > Select > Reattempt |
| **Bulk Update Package** | Change package type for multiple orders | Orders > New > Select > Edit Package |
| **Bulk Reassign** | Move shipments to a different courier/warehouse | Orders > Ready to Ship > Select > Reassign |
| **Bulk Tags** | Add tags to multiple shipments | Orders > New > Select > Add Tags |
| **Bulk Fulfill** | Mark orders as fulfilled externally | Orders > New > Select > Mark Fulfilled |

### How do I select multiple shipments?

1. Go to the Orders page
2. Use the checkboxes on the left side to select individual orders
3. Or use the "Select All" checkbox at the top to select all visible orders
4. The bulk action buttons will appear at the top right corner of the list

### What is the maximum number of shipments I can select?

You can select up to **5,000 shipments** for bulk actions. If you need to process more, perform the action in multiple batches.

### How do I know the bulk action is complete?

- Bulk actions are processed in the background
- You'll see a progress indicator or notification
- Refresh the page to see updated statuses
- For failed actions, you'll be notified of the specific shipments that couldn't be processed

### Can I bulk update the address for multiple shipments?

Yes, through the **Bulk Reattempt** action:
1. Select the shipments (typically from NDR tab)
2. Choose "Reattempt Delivery"
3. You can optionally update the delivery address for all selected shipments

---

## 3. Bulk Labels & Manifests

### How do I download labels for multiple shipments?

1. Go to **Orders** > **Ready to Ship** tab
2. Select the shipments you want labels for
3. Click **Download Labels**
4. A PDF file containing all labels will be generated

### What label formats are available?

- **A6 format**: Compact 4x6 inch labels (recommended for thermal printers)
- **A4 format**: Standard paper size (4 labels per page)

### How do I download the manifest?

1. Go to **Pickups** tab
2. Select the shipments
3. Click **Create Manifest** or **Download Manifest**
4. The manifest PDF will be generated for the selected shipments

### What is included in the manifest?

The manifest includes:
- List of all AWB (tracking) numbers
- Order details
- Courier assignment
- Pickup warehouse details
- Ready for courier handover

### Can I download invoices in bulk?

Yes!
1. Select multiple orders
2. Click **Download Invoices**
3. A combined PDF with all invoices will be generated

### What is a Picklist and how do I download it?

A Picklist is a document to help warehouse staff pick and pack orders efficiently.

1. Go to **Orders** > **Ready to Ship**
2. Select the orders
3. Click **Download Picklist**
4. The picklist shows all products to be packed, organized by SKU

### How long do bulk label/manifest downloads take?

- Small batches (under 100): Usually instant
- Large batches (500+): May take a few minutes
- Very large batches (1000+): Progress is tracked, and you'll be notified when ready
- The download link will be provided when generation is complete

---

## 4. Troubleshooting Common Issues

### My bulk order upload failed. What should I do?

| Error | Cause | Solution |
|-------|-------|----------|
| "Missing mandatory field" | A required field is empty | Fill in all fields marked with * |
| "Invalid pincode" | Pincode doesn't exist in our system | Verify the 6-digit pincode is correct |
| "Invalid payment method" | Payment method not recognized | Use exactly "PREPAID" or "COD" |
| "Invalid phone number" | Phone number format incorrect | Use 10-digit number without country code |
| "Warehouse not found" | Warehouse ID doesn't match | Verify warehouse is set up correctly |
| "Invalid weight" | Weight is zero or negative | Enter a positive weight in KGs |
| "Duplicate Order ID" | This Order ID already exists | Use a unique Order ID |

### Why are some orders showing as "Processing"?

Orders are processed in batches. Large uploads may take a few minutes. If orders remain in "Processing" for more than 30 minutes, please contact support.

### Labels are not generating for some shipments

This can happen if:
- The shipment is not in "Ready to Ship" status
- The carrier hasn't provided label data yet
- There's a temporary connectivity issue with the carrier

**Solution**: Wait a few minutes and try again. If the issue persists, individual labels can be downloaded from the order detail page.

### My bulk action is stuck

- Bulk actions are processed asynchronously
- Large batches may take several minutes
- Refresh the page after a few minutes to check status
- If stuck for more than 30 minutes, contact support

---

## 5. Best Practices

### For Bulk Order Upload

1. **Always use the sample template**: Download the latest template to ensure you have all required columns
2. **Validate before uploading**: Check for empty mandatory fields before uploading
3. **Use consistent formats**: Keep phone numbers, pincodes, and prices in consistent formats
4. **Group multi-item orders**: Use the same Order ID for items that belong together
5. **Test with small batches first**: Upload 5-10 orders first to verify your data format

### For Bulk Shipment Actions

1. **Filter before selecting**: Use filters to narrow down to the exact shipments you want
2. **Double-check selection**: Review your selection before performing irreversible actions like cancellation
3. **Process in reasonable batches**: While you can select up to 5,000, smaller batches (500-1000) are faster
4. **Wait for completion**: Allow bulk actions to complete before starting another

### For Bulk Labels & Manifests

1. **Generate labels after shipping**: Labels are available only after AWB assignment
2. **Create manifests before pickup**: Generate manifests when ready for courier handover
3. **Download picklists early**: Get picklists while orders are being prepared
4. **Keep copies**: Save manifest copies for your records

---

## Need Help?

If you couldn't find your answer here:
- **Email**: support@velocity.in
- **Chat**: Use the chat widget in your Velocity Shipping dashboard
- **Help Center**: Visit our help center for more guides
