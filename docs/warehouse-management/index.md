---
sidebar_position: 1
title: Warehouse Management
description: Add and manage warehouses, configure pickup and RTO addresses, and set up multi-warehouse shipping.
---

# Warehouse Management - Frequently Asked Questions

> Set up and manage your warehouses, pickup locations, and return addresses

---

## Table of Contents
1. [Adding Warehouses](#1-adding-warehouses)
2. [Warehouse Activation with Carriers](#2-warehouse-activation-with-carriers)
3. [RTO & Return Addresses](#3-rto--return-addresses)
4. [Multi-Warehouse Setup](#4-multi-warehouse-setup)
5. [Common Issues](#5-common-issues)

---

## 1. Adding Warehouses

### Q: How do I add a new warehouse?
**A:**
1. Go to **Settings → Warehouses**
2. Click **Add New Warehouse**
3. Fill in:
   - Warehouse name
   - Full address (Line 1, Line 2)
   - Pincode, City, State
   - Contact person name and 10-digit phone
4. Mark as **Default Pickup** if this is your primary location
5. Click **Save** — carrier activation takes 24–48 hours

---

### Q: What details are required for a warehouse?

| Field | Required | Notes |
|-------|----------|-------|
| Warehouse Name | Yes | Internal identifier |
| Address Line 1 | Yes | Street address |
| Pincode | Yes | 6-digit Indian pincode |
| City | Yes | |
| State | Yes | |
| Contact Name | Yes | Person responsible for pickup |
| Contact Phone | Yes | 10-digit mobile |
| Address Line 2 | No | Floor/apartment details |
| GSTIN | No | If applicable for this location |
| RTO Address | No | Defaults to pickup address if blank |

---

### Q: How many warehouses can I add?
**A:** No fixed limit. Each warehouse needs carrier activation (24–48 hours) before it can be used for new shipments.

---

### Q: Can I edit a warehouse address after saving?
**A:** Yes — go to **Settings → Warehouses** and click **Edit**. If the pincode changes, re-activation with carriers is required (24–48 hours). Changes apply to new shipments only.

---

### Q: How do I deactivate a warehouse?
**A:** Warehouses with active shipments cannot be deleted. Go to **Settings → Warehouses**, click on the warehouse, and select **Deactivate**. Contact support for permanent removal.

---

## 2. Warehouse Activation with Carriers

### Q: Why does a warehouse need to be activated with carriers?
**A:** Carriers must register your pickup address in their system before scheduling pickups. This is a one-time process per warehouse-carrier combination and is handled by Velocity.

---

### Q: How long does activation take?

| Carrier | Typical Activation Time |
|---------|------------------------|
| Delhivery | 24–48 hours |
| Shadowfax | ~24 hours |
| Xpressbees | 24–48 hours |
| Ekart | 24–48 hours |
| BlueDart | 48–72 hours |
| DTDC | 48–72 hours |

---

### Q: Shipments are failing with "Warehouse not registered" error.
**A:** Carrier activation is pending or failed. Contact support with your warehouse name and the carrier name — Velocity handles all carrier activation. **You do not need to contact the carrier directly.**

---

### Q: Do I need to activate each carrier separately for a new warehouse?
**A:** Yes, each carrier-warehouse combination is activated separately. When you add a new warehouse, Velocity initiates activation with all your enabled carriers automatically.

---

## 3. RTO & Return Addresses

### Q: What is an RTO address?
**A:** The address where undelivered shipments are returned. By default, returns go back to the same pickup warehouse. You can configure a separate return/processing address if needed.

---

### Q: How do I set a different RTO address?
**A:**
1. Add the return address as a warehouse in **Settings → Warehouses**
2. When manifesting a shipment, select this warehouse as the RTO location
3. Or mark it as your **Default RTO** warehouse to apply automatically to all shipments

**Important:** Not all carriers support separate RTO addresses. Carriers that support it: Delhivery, BlueDart, Xpressbees, Ekart, Shadowfax. Carriers that return to pickup address only: DTDC, Pikndel, Blitz, Urbanebolt. See [Carrier Integrations](/carrier-integrations) for full details.

---

### Q: How do I set up a central RTO warehouse for all returns?
**A:**
1. Add a new warehouse with your central return address in **Settings → Warehouses**
2. Mark it as **Default RTO**
3. Use only carriers that support separate RTO addresses for these shipments

---

## 4. Multi-Warehouse Setup

### Q: I have multiple warehouses. How does Velocity know which one to pick from?
**A:**
- **Manually** — Select the pickup warehouse per order at manifest time
- **Default** — Mark one warehouse as Default; it's auto-selected unless changed
- **Rules-based** — Contact your KAM for warehouse-aware shipping rules

---

### Q: Can I ship different items in one order from different warehouses?
**A:** Each shipment is linked to one pickup warehouse. For split orders, create multiple shipments from the respective warehouses.

---

### Q: My pickup schedule is different per warehouse. How is that managed?
**A:** Pickup schedules are managed per carrier per warehouse. Contact your KAM to adjust pickup frequency or timing for specific warehouse locations.

---

## 5. Common Issues

### Q: A carrier isn't picking up from my new warehouse.
**A:** Likely causes:
1. **Activation pending** — Wait 48 hours, then contact support if still unresolved
2. **Pincode not serviceable** — Check carrier serviceability for your warehouse pincode in Tools → Serviceability
3. **Minimum quantity** — Some carriers require a minimum number of shipments per pickup run

---

### Q: I moved my warehouse. How do I update the address?
**A:**
1. Edit the warehouse in **Settings → Warehouses** with the new address
2. If the pincode changed, re-activation with carriers is needed (24–48 hours)
3. Existing in-transit shipments complete normally — only new shipments use the updated address

---

### Q: Returns are going to the wrong warehouse.
**A:**
1. Check the RTO address on the shipment (Order details → Shipment details)
2. Check your Default RTO warehouse in Settings → Warehouses
3. If the shipment is already in transit, contact support — some carriers allow RTO address updates before the return is delivered

---

### Q: I see "Client-Warehouse is not active" error when creating shipments.
**A:** The warehouse-carrier combination is inactive. Contact support with your warehouse name and the carrier name. Velocity will reactivate it. **Do not contact the carrier directly.**

---

## Quick Reference

| Task | Where | Notes |
|------|-------|-------|
| Add warehouse | Settings → Warehouses | 24–48h carrier activation |
| Set default pickup | Settings → Warehouses → Edit | Applies to new shipments |
| Set RTO address | Settings → Warehouses | Not all carriers support this |
| Fix "warehouse not registered" | Contact support | Velocity handles carrier activation |
| Deactivate warehouse | Settings → Warehouses | Cannot delete if active shipments exist |

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your dashboard
- **Account Manager:** For multi-warehouse configurations

Include your **warehouse name** and **carrier name** in all warehouse-related support queries.
