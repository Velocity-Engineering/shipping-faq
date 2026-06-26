---
sidebar_position: 1
title: Platform Overview
description: Get started with Velocity Shipping - understand the platform, key concepts, and how to set up your account.
---

# Platform Overview - Getting Started

> Everything you need to know to start using Velocity Shipping

---

## Table of Contents
1. [What is Velocity Shipping?](#1-what-is-velocity-shipping)
2. [Key Concepts & Terminology](#2-key-concepts--terminology)
3. [Dashboard Navigation](#3-dashboard-navigation)
4. [Account Setup Checklist](#4-account-setup-checklist)
5. [How Shipping Works End-to-End](#5-how-shipping-works-end-to-end)
6. [Common Questions](#6-common-questions)

---

## 1. What is Velocity Shipping?

### Q: What does Velocity Shipping do?
**A:** Velocity Shipping is a multi-carrier shipping aggregation platform that helps e-commerce businesses:
- **Book shipments** across multiple carriers from a single dashboard
- **Automate carrier selection** using intelligent shipping rules
- **Track all shipments** in one place regardless of carrier
- **Reduce RTO (Return to Origin)** with AI-powered customer communication
- **Manage COD collections** and billing automatically

### Q: Who is Velocity Shipping for?
**A:** Velocity Shipping is designed for:
- D2C (Direct-to-Consumer) brands selling online
- E-commerce businesses on Shopify, WooCommerce, or other platforms
- Businesses shipping high volumes of orders across India
- Sellers looking to reduce RTO rates and improve delivery success

---

## 2. Key Concepts & Terminology

### Q: What do common shipping terms mean?

| Term | Full Form | Meaning |
|------|-----------|---------|
| **AWB** | Air Waybill | The unique tracking number assigned to each shipment |
| **RTO** | Return to Origin | When a shipment is returned back to the seller |
| **NDR** | Non-Delivery Report | A report raised when a delivery attempt fails |
| **COD** | Cash on Delivery | Payment collected by carrier at delivery |
| **Prepaid** | — | Order paid online before delivery |
| **Manifest** | — | The act of booking a shipment with a carrier |
| **3PL** | Third-Party Logistics | The carrier/courier company (e.g., Delhivery, BlueDart) |
| **Forward Shipment** | — | Package going from seller to buyer |
| **Reverse Shipment** | — | Package being returned from buyer to seller |
| **SDD / NDD** | Same/Next Day Delivery | Expedited delivery services |
| **VAS** | Value Added Services | Premium features like AI calling, WhatsApp notifications |
| **KAM** | Key Account Manager | Your dedicated Velocity account manager |
| **HP Mode** | High Performance Mode | Carrier restricted to its best-performing pincodes |

---

### Q: What is the difference between an Order and a Shipment?

| | Order | Shipment |
|---|-------|----------|
| **What it is** | Customer's purchase | Physical package booked with a carrier |
| **When created** | When synced from store / created manually | When you click "Manifest" |
| **Has AWB?** | No | Yes |
| **Trackable?** | No | Yes |

---

## 3. Dashboard Navigation

### Q: What are the main sections of the Velocity Shipping dashboard?

| Section | What You Can Do |
|---------|----------------|
| **Orders** | View all orders, create shipments, filter by status |
| **Shipments** | Track all manifested shipments, view AWBs |
| **NDR Panel** | Manage failed deliveries, request reattempts |
| **Payments** | Manage wallet, view invoices, track COD settlements |
| **Reports** | Download shipment data, schedule automated reports |
| **Settings** | Configure warehouses, shipping rules, automations, integrations |
| **Tools** | Check pincode serviceability, bulk operations |
| **AI Agents** | View automation call history and outcomes |

---

### Q: Where do I go to create a shipment?
**A:** Go to **Orders**, find the order, and click **Manifest**. You can also:
- Manifest multiple orders at once via **Bulk Manifest**
- Let orders auto-manifest from your Shopify/WooCommerce store

---

## 4. Account Setup Checklist

### Q: What do I need to set up before I can start shipping?

| Step | What to Do | Where |
|------|-----------|-------|
| **1. Add Warehouse** | Add your pickup address | Settings → Warehouses |
| **2. Configure Billing** | Choose Prepaid / Postpaid / COD Offset | Set during onboarding |
| **3. Add GST** | Enter your GSTIN | Settings → GST |
| **4. Connect Store** | Link Shopify, WooCommerce, etc. | Settings → Integrations |
| **5. Configure Carriers** | Enable carriers and set shipping rules | Shipping Rules → Courier Selection |
| **6. Recharge Wallet** | Add funds (prepaid accounts) | Payments → Wallet |
| **7. Test a Shipment** | Create a test order and manifest it | Orders |

---

### Q: How do I add my first warehouse?
**A:**
1. Go to **Settings → Warehouses**
2. Click **Add New Warehouse**
3. Fill in the warehouse name, full address, pincode, city, state, and contact details
4. Mark as **Default Pickup** if this is your primary location
5. Optionally set a separate **RTO Address** for returns
6. Save — carrier activation takes 24–48 hours

See [Warehouse Management](/warehouse-management) for full details.

---

## 5. How Shipping Works End-to-End

### Q: What is the end-to-end shipping flow?

```
Order arrives (store sync / manual / API)
        ↓
Velocity applies Shipping Rules → selects carrier
        ↓
Shipment manifested with carrier → AWB generated
        ↓
Carrier picks up from your warehouse
        ↓
Package in transit (tracking updates in real-time)
        ↓
Delivered ✓            OR         Delivery failed → NDR raised
                                          ↓
                          Reattempt requested / RTO initiated
```

---

### Q: What happens when a delivery fails?
**A:**
1. Carrier raises an **NDR (Non-Delivery Report)**
2. It appears in your **NDR Panel**
3. If automation is enabled, Velocity contacts the customer via WhatsApp/AI Call
4. Customer confirms reattempt or provides a new address
5. If all attempts fail, shipment is returned (RTO)

---

## 6. Common Questions

### Q: My store is connected but orders aren't syncing. What should I check?
**A:**
1. **Integration status** — Go to Settings → Integrations, verify it shows green/active
2. **Sync settings** — Confirm which order statuses trigger sync
3. **Order age** — Some integrations only sync orders placed after the connection date
4. **Re-authenticate** — If the connection was recently disrupted, reconnect the store
5. Contact support if orders still aren't syncing after checking the above

---

### Q: I can see my orders but I can't manifest them. Why?
**A:** Common reasons:
- **Zero wallet balance** (prepaid accounts) — Recharge in Payments → Wallet
- **No carriers enabled** — Enable carriers in Shipping Rules → Courier Selection
- **No shipping rule configured** — Ensure at least a Default Rule exists
- **Account not fully activated** — Contact your KAM or support

---

### Q: What do the order statuses mean?

| Status | Meaning |
|--------|---------|
| **Order Created** | In Velocity, not yet manifested |
| **Processing** | Shipment request sent to carrier, awaiting AWB |
| **Manifested** | AWB assigned, confirmed with carrier |
| **Pickup Pending** | Waiting for carrier to collect |
| **In Transit** | Package en route to customer |
| **Out for Delivery** | With delivery agent today |
| **Delivered** | Successfully delivered ✓ |
| **Undelivered** | Delivery attempt failed — check NDR Panel |
| **RTO Initiated** | Return process started |
| **RTO Delivered** | Returned to your warehouse |

For full status reference, see [Tracking & Order Status](/tracking).

---

### Q: Can multiple users access my Velocity account?
**A:** Yes. You can create sub-users with different roles. See [Authentication & Access](/authentication) for details.

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your dashboard
- **Account Manager:** For onboarding and account setup help
