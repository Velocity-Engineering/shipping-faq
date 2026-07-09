---
sidebar_position: 6
title: Branded Tracking Page
description: Set up and configure a custom-branded tracking page for your customers with your logo, support links, social media, and promotional banners.
---

# Branded Tracking Page - FAQ

> Give your customers a fully branded order-tracking experience at your own subdomain — with your logo, navigation, support details, and promotional banners.

---

## Table of Contents
1. [Overview](#1-overview)
2. [Getting Started](#2-getting-started)
3. [Basic Setup](#3-basic-setup)
4. [Advanced Customization](#4-advanced-customization)
5. [Image Uploads](#5-image-uploads)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. Overview

### Q: What is the Branded Tracking Page?
**A:** The Branded Tracking Page lets your customers track their shipments on a page that looks like yours — with your logo, support links, and social media presence. Instead of sending customers to a generic carrier tracking site, they land on a URL like `https://yourstore.track.velocity.in`.

The page automatically shows the shipment's live tracking timeline, carrier events, and estimated delivery — all under your brand.

### Q: What can I customize?
**A:**

| Section | What You Can Set |
|---------|------------------|
| **Basic Branding** | Logo, brand name, support email, phone, and support link |
| **Subdomain** | Your custom tracking URL (e.g., `yourstore.track.velocity.in`) |
| **Website & Returns** | Links to your main website and return policy |
| **Header Menu** | Navigation links displayed at the top of the page |
| **Footer Social Links** | Instagram, YouTube, Facebook, Pinterest, Twitter |
| **Sticky Bar** | A persistent banner anchored to the header or footer |
| **Promotional Banners** | Separate desktop and mobile images with click-through links |

---

## 2. Getting Started

### Q: Where do I configure the branded tracking page?
**A:**
1. Go to **Settings → Communication** in your Velocity dashboard
2. Click **Branded Tracking Page**
3. Complete the two-step setup wizard (Basic → Advanced)
4. Save — your page goes live immediately

### Q: What is my tracking page URL?
**A:** Your page is served at:
```
https://{subdomain}.{tracking-domain}
```
For example, if you set `mystore` as your subdomain, the URL becomes `https://mystore.track.velocity.in`.

### Q: Is this feature available on all plans?
**A:** The branded tracking page may need to be enabled on your account. If you don't see it under **Settings → Communication**, contact your Key Account Manager (KAM) or email support@velocity.in.

---

## 3. Basic Setup

### Q: What do I configure in Basic Setup (Step 1)?
**A:**

| Field | Description |
|-------|-------------|
| **Subdomain** | Unique slug for your tracking URL (e.g., `mystore`) |
| **Logo** | Your brand logo displayed on the tracking page |
| **Brand Name** | Your store or brand name |
| **Support Email** | Contact email shown to customers |
| **Support Phone** | Contact phone number shown to customers |
| **Support Link** | URL to your help/support page |
| **Website URL** | Your main website (linked from the tracking page) |
| **Return Policy URL** | Link to your returns/refund policy page |

### Q: Can I change my subdomain later?
**A:** Yes — edit the subdomain from **Settings → Communication → Branded Tracking Page** at any time. Changing the subdomain updates your tracking URL, so make sure to update any links you've shared with customers or embedded in communications.

---

## 4. Advanced Customization

### Q: How do I add header navigation links?
**A:** In Step 2 (Advanced Setup), under **Header**:
1. Click **Add Menu Item**
2. Enter a **Name** (the link label shown on the page)
3. Enter the **URL** it should point to
4. Repeat for each navigation link

### Q: Which social media platforms can I link in the footer?
**A:** The footer supports:
- Instagram
- YouTube
- Facebook
- Pinterest
- Twitter / X

### Q: What is the Sticky Bar?
**A:** The Sticky Bar is a persistent banner that stays fixed at the top or bottom of the page as customers scroll. It can be configured separately for the header and footer sections.

### Q: How do I add a promotional banner?
**A:** In Step 2 under **Banners**:
1. Upload a **desktop image** (displayed on wide screens)
2. Upload a **mobile image** (displayed on smaller screens)
3. Set a **click-through URL** — where customers go when they click the banner
4. Add **alt text** for accessibility

You can configure multiple banners.

---

## 5. Image Uploads

### Q: What image formats are accepted?
**A:** The following formats are supported for logos and banners:
- JPEG / JPG
- PNG
- WebP
- GIF

### Q: Is there a recommended image size for banners?
**A:** Since separate desktop and mobile images are supported, use appropriately sized assets:
- **Desktop banners**: 1200px wide or wider
- **Mobile banners**: 375–768px wide

Using dedicated images for each breakpoint ensures the best appearance on all devices.

### Q: My upload seems stuck. What should I do?
**A:** Upload URLs expire after 10 minutes. If an upload times out:
1. Refresh the page
2. Re-select your image file
3. Try the upload again

If the issue persists, try a smaller file size or a different image format.

---

## 6. Troubleshooting

### Q: I saved changes but my tracking page still shows the old content.
**A:** Changes are pushed to the edge network automatically on save. Allow up to 1–2 minutes for propagation. If you still see stale content:
- Do a hard refresh (`Ctrl+Shift+R` on Windows/Linux, `Cmd+Shift+R` on Mac)
- Try opening the URL in an incognito/private browser window

### Q: My logo or banner image isn't showing on the tracking page.
**A:**
1. Confirm the file format is JPEG, PNG, WebP, or GIF
2. Check that the upload completed — you should see an image preview after a successful upload
3. Save the configuration after uploading

### Q: I can't find **Settings → Communication → Branded Tracking Page**.
**A:** The feature may not be enabled on your account. Contact your KAM or support@velocity.in to get it activated.

### Q: The subdomain I want is already taken.
**A:** Subdomains are unique across all Velocity merchants. Try a variation such as `mystore-in`, `mystore-official`, or `brand-track`.

---

## Need Help?

- **Email:** support@velocity.in
- **Chat:** Use the chat widget in your Velocity Shipping dashboard
- **Account Manager:** Contact your KAM to enable or configure the branded tracking page

**Related:**
- [Tracking & Order Status](/tracking) — General tracking FAQs
- [Value Added Services](/vas) — WhatsApp tracking notifications for customers
