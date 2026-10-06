---
sidebar_position: 9
title: Velocity Prime
description: Velocity Prime delivers guaranteed delivery SLAs on select pincodes with auto-ship and premium carrier routing.
---

# Velocity Prime FAQ

Velocity Prime is a premium shipping service that offers guaranteed delivery SLAs on select pincodes, automatic carrier selection, and a dedicated Prime experience in the Velocity dashboard.

---

## Overview

### Q: What is Velocity Prime?
**A:** Velocity Prime is a value-added shipping subscription that provides:
- **Guaranteed delivery SLAs** on Prime-eligible pincodes — Velocity commits to a delivery timeline
- **Auto-ship** — orders are automatically manifested and assigned to the best-performing carrier without manual intervention
- **Premium carrier routing** — Prime shipments are routed through carriers with the highest performance on Prime pincodes
- **Prime dashboard experience** — dedicated UI showing Prime metrics vs. non-Prime performance comparison

### Q: Which pincodes are covered under Velocity Prime?
**A:** Prime coverage expands over time as performance data is validated. Your KAM can share the current list of Prime-eligible pincodes for your delivery zones. You can also check pincode eligibility via **Tools → Serviceability** — Prime-eligible pincodes will be marked.

### Q: How is Velocity Prime different from regular shipping?
**A:**

| Feature | Regular Shipping | Velocity Prime |
|---------|-----------------|----------------|
| Carrier selection | Manual or rule-based | Automatic (Prime-optimised) |
| Delivery SLA | Best-effort | Guaranteed on Prime pincodes |
| Dashboard | Standard | Prime metrics + vs. comparison |
| Auto-ship | Optional | Enabled by default |
| Pricing | Standard rate card | Prime subscription + per-shipment rate |

---

## Eligibility & Activation

### Q: How do I sign up for Velocity Prime?
**A:** Contact your Key Account Manager (KAM) to enquire about Prime eligibility and pricing. Once enrolled:
1. Prime is activated on your account
2. Auto-ship and Prime carrier routing are enabled automatically
3. Your dashboard updates to show the Prime view

### Q: Can I use Velocity Prime if I have a BYOC (Bring Your Own Carrier) setup?
**A:** No. Velocity Prime cannot be activated on accounts that have BYOC (external/custom) carriers enabled. Prime's SLA guarantee relies on Velocity's curated carrier network; BYOC carriers operate outside that network. If you wish to enroll in Prime, you would need to disable your BYOC carrier configuration first.

### Q: Can I have Prime for some shipments and use my own carrier for others?
**A:** Not on the same account if BYOC is active. Speak to your KAM about account structuring options if you have a mixed requirement.

---

## Auto-Ship

### Q: What does Auto-Ship do?
**A:** With Auto-Ship enabled, orders that arrive in Velocity are automatically shipped without requiring manual manifesting. The system:
1. Receives the order (via integration or API)
2. Selects the optimal Prime carrier
3. Manifests the shipment
4. Generates the label

This removes the daily "ship orders" step from your ops workflow.

### Q: Can I disable Auto-Ship for specific orders?
**A:** Yes. You can tag orders to exclude them from Auto-Ship, or pause Auto-Ship temporarily from your dashboard settings. Contact your KAM for configuration options.

### Q: What if Auto-Ship picks a carrier I don't want for an order?
**A:** For the rare case where you need to override the automatic selection, you can manually reassign the shipment after it's been auto-shipped (from the Ready to Ship tab) before the carrier picks it up. After pickup, reassignment is not possible.

---

## SLA & Performance

### Q: What happens if Velocity fails to deliver within the Prime SLA?
**A:** Velocity monitors SLA breaches on Prime pincodes. The ops team reviews Prime pincode performance monthly and issues credit notes for confirmed SLA breaches. Credit notes are applied to your account balance.

**Note:** Automatic credit reversal for SLA breaches is not applied in real-time — credits are issued after the monthly review cycle.

### Q: How do I see my Prime delivery performance?
**A:** In the Velocity dashboard, Prime subscribers see a **Prime Metrics** view that shows:
- On-time delivery rate for Prime pincodes
- Comparison vs. non-Prime pincodes
- Carrier-level performance on Prime routes

---

## Troubleshooting

### Q: My dashboard doesn't show the Prime view even though I'm subscribed.
**A:** Ensure you are logged into the correct account. If the issue persists, contact support — there may be a configuration delay after activation.

### Q: Auto-Ship isn't manifesting my orders automatically.
**A:**
1. Verify that Auto-Ship is enabled in your account settings
2. Check that the orders are in "New" status (not on hold or flagged)
3. Confirm the orders are for Prime-eligible pincodes
4. If orders have been waiting for more than 30 minutes, contact support with order IDs

---

## Need Help?

- **Email:** support.shipping@velocity.in
- **Account Manager:** For Prime enrollment, SLA queries, and pincode coverage
