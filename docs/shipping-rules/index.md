---
sidebar_position: 1
title: Shipping Rules
description: Learn how to set up rules to automatically select the best carrier for each shipment.
---

# Shipping Rules - Frequently Asked Questions

> Learn how to set up rules to automatically select the best carrier for each shipment

---

## Table of Contents
1. [What Are Shipping Rules?](#1-what-are-shipping-rules)
2. [Carrier Selection Modes](#2-carrier-selection-modes)
3. [Setting Up Rules](#3-setting-up-rules)
4. [How Carriers Are Selected](#4-how-carriers-are-selected)
5. [Regular vs High Performance Mode](#5-regular-vs-high-performance-mode)
6. [Common Questions](#6-common-questions)

---

## 1. What Are Shipping Rules?

### Q: What are Shipping Rules?
**A:** Shipping Rules automatically select the best carrier for each shipment based on conditions you define. Instead of manually choosing a carrier for every order, rules do it for you.

**Example:**
- Orders over Rs. 2,000 - Use fastest carrier
- COD orders under 2kg - Use cheapest carrier
- Metro city deliveries - Use premium carrier

---

### Q: Why should I use Shipping Rules?
**A:** Benefits include:
- **Save time** - No manual carrier selection
- **Optimize costs** - Automatically pick cheapest options
- **Improve delivery speed** - Route time-sensitive orders to faster carriers
- **Reduce errors** - Consistent, automated decisions

---

### Important: Rules Apply Forward Only

**Q: If I change a rule, will it affect existing shipments?**

**A: No. Rules only apply to new shipments created after the change.**

- Changing a rule won't re-route shipments already booked
- New rules take effect immediately for future orders
- This ensures your in-transit shipments aren't disrupted

---

## 2. Carrier Selection Modes

### Q: What are the different ways to select carriers?

**A:** Velocity Shipping offers several modes:

| Mode | How It Works | Best For |
|------|--------------|----------|
| **Cheapest** | Picks the lowest cost carrier | Cost-conscious shipments |
| **Fastest** | Picks the carrier with shortest delivery time | Time-sensitive orders |
| **Recommended** | Balances cost with carrier reliability | Everyday shipments |
| **Custom** | You set the exact carrier priority order | Full control |
| **Concierge** | Advanced optimization by our team | Premium accounts |

---

### Cheapest Mode

**Q: How does Cheapest mode work?**
**A:**
- Compares all available carriers by total cost (shipping + COD charges)
- Automatically picks the lowest cost option
- Great for maximizing margins on low-value orders

---

### Fastest Mode

**Q: How does Fastest mode work?**
**A:**
- Compares carriers by expected delivery date
- Picks the carrier that delivers soonest
- If two carriers have the same delivery time, picks the cheaper one

---

### Recommended Mode

**Q: How does Recommended mode work?**
**A:**
- Considers both cost AND carrier performance history
- Avoids carriers with high RTO rates for your shipments
- Balances reliability with cost efficiency
- Best for most everyday shipping needs

---

### Custom Mode

**Q: How does Custom mode work?**
**A:**
- You manually set which carriers to use and in what order
- Example: Try Carrier A first, then Carrier B, then Carrier C
- You can also blacklist carriers you don't want to use
- Maximum control over carrier selection

---

### Concierge Mode

**Q: What is Concierge mode?**
**A:** Concierge is an advanced optimization mode managed by our team. It uses sophisticated algorithms to balance speed, cost, and reliability.

**Q: How do I enable Concierge mode?**
**A:** Concierge can only be enabled with help from your Account Manager (KAM). Contact them to discuss if it's right for your business.

---

## 3. Setting Up Rules

### Q: What conditions can I set on a rule?

**A:** You can combine any of these conditions:

| Condition | Example |
|-----------|---------|
| **Weight** | 0-5 kg, 5-10 kg, above 10 kg |
| **Order Value** | Under Rs. 500, Rs. 500-2000, above Rs. 2000 |
| **Payment Mode** | COD only, Prepaid only |
| **Pickup Location** | Specific pincodes, cities, or states |
| **Delivery Location** | Specific pincodes, cities, or states |
| **Zone** | Metro, Tier-2, Tier-3 cities |

---

### Q: Can I combine multiple conditions?

**A:** Yes! All conditions must match for a rule to apply.

**Example:** A rule with:
- Weight: 0-5 kg
- Payment: COD
- Delivery: Mumbai

Will only match shipments that are **under 5kg AND COD AND going to Mumbai**.

---

### Q: What if multiple rules match a shipment?

**A:** Rules are checked in **priority order**. The first rule that matches is used.

**Example:**
- Rule 1 (Priority 10): Mumbai deliveries - Use Carrier A
- Rule 2 (Priority 5): All COD orders - Use Carrier B

A COD order to Mumbai will use **Carrier A** (higher priority rule matched first).

---

### Q: What is the Default Rule?

**A:** The Default Rule is a safety net that applies when no other rules match.
- Every account has one Default Rule
- You can configure its mode (Cheapest, Fastest, etc.)
- You cannot delete the Default Rule

---

## 4. How Carriers Are Selected

### Q: What happens when an order is placed?

**A:** Here's the process:

```
1. Order received
      |
2. Find matching shipping rule
      |
3. Check carrier serviceability (can they deliver there?)
      |
4. Select carrier based on rule's mode
      |
5. Book shipment with carrier
```

---

### Serviceability Is Checked First

**Q: What is a serviceability check?**

**A:** Before booking, we verify the carrier can actually deliver to that location. We check:
- Carrier services that pincode
- Weight is within carrier limits
- Payment mode (COD/Prepaid) is supported
- No temporary blocks or disruptions

**This happens automatically before trying to book with any carrier.**

---

### Automatic Fallback to Next Carrier

**Q: What happens if a carrier throws an error?**

**A: We automatically try the next available carrier.**

- If Carrier A fails - We try Carrier B
- If Carrier B fails - We try Carrier C
- **By default, we try up to 3 carriers**

This ensures your shipment gets booked even if one carrier has issues.

---

### Q: Can I change how many carriers are tried?

**A:** The default is 3 carriers. Contact your Account Manager if you need to adjust this.

---

## 5. Regular vs High Performance Mode

### Q: What's the difference between Regular and High Performance mode?

**A:** Each carrier can operate in two modes:

| Mode | Description |
|------|-------------|
| **Regular** | Carrier operates across all serviceable pincodes |
| **High Performance** | Carrier only operates in select, optimized pincodes |

---

### Q: What is High Performance (HP) mode?

**A:** High Performance mode restricts a carrier to a curated list of pincodes where they perform best.

**Benefits:**
- Better delivery success rates
- Faster deliveries in those areas
- Ideal for premium carriers

**Example:** A premium carrier might only be available for metro cities in HP mode.

---

### Q: How do I enable High Performance mode?

**A:** Go to **Shipping Rules - view details** and for each enabled carrier, you'll see the option to toggle HP mode on/off.

**Note:** HP mode is only supported for select carriers. If you don't see the option, that carrier doesn't support HP mode.

---

### Q: Which mode should I use?

**A:**
- **Regular** - Use for maximum coverage across all locations
- **High Performance** - Use for priority/premium shipments where reliability matters most

---

## 6. Common Questions

### Q: My shipment didn't use the carrier I expected. Why?

**A:** Common reasons:

| Reason | Explanation |
|--------|-------------|
| **Rule didn't match** | Check if shipment meets all rule conditions |
| **Serviceability failed** | Carrier can't deliver to that pincode |
| **Higher priority rule matched** | Another rule matched first |
| **Carrier error** | Carrier failed, system moved to next carrier |

---

### Q: Can I have different rules for forward shipments and returns?

**A:** Yes! Set the "Journey Type" on your rule:
- **Forward** - Only applies to outgoing shipments
- **Return** - Only applies to return pickups
- **Both** - Applies to all shipments

---

### Q: How do I temporarily disable a carrier?

**A:** Two options:

1. **Blacklist in Custom mode** - Add carrier to blacklist in your rule
2. **Disable the carrier** - Turn off the carrier in Shipping rules - Courier Selection

---

### Q: Can I test a rule before enabling it?

**A:** Yes! Create the rule in **disabled** status:
1. Set up your rule conditions and mode
2. Keep status as "Disabled"
3. Test using the serviceability check tool
4. Enable when ready

---

### Q: Do rules affect my shipping rates?

**A:** Rules affect which carrier is selected, not the rates themselves. Rates are configured separately in your carrier rate cards.

---

## Quick Reference

### Carrier Selection Modes

| Mode | Selects By | Control Level |
|------|-----------|---------------|
| Cheapest | Lowest cost | Automatic |
| Fastest | Quickest delivery | Automatic |
| Recommended | Cost + reliability balance | Automatic |
| Custom | Your priority order | Manual |
| Concierge | Advanced optimization | Managed by KAM |

### Rule Matching Order

1. Rules checked by priority (highest first)
2. First matching rule is used
3. Default rule applies if no match
4. Serviceability check runs
5. Up to 3 carriers tried if errors occur

### Regular vs High Performance

| Aspect | Regular | High Performance |
|--------|---------|------------------|
| Coverage | All serviceable pincodes | Select optimized pincodes |
| Best for | Maximum reach | Premium shipments |
| Enable in | Shipping Rules settings | Shipping Rules settings |

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your dashboard
- **Account Manager:** For Concierge mode or custom configurations

We're here to help you optimize your shipping!
