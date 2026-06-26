---
sidebar_position: 1
title: Authentication & Access
description: Login, password reset, sub-user management, and access control for Velocity Shipping.
---

# Authentication & Access - Frequently Asked Questions

> Login, password reset, user management, and permissions

---

## Table of Contents
1. [Login & Password](#1-login--password)
2. [Sub-User & Team Access](#2-sub-user--team-access)
3. [Permissions & Roles](#3-permissions--roles)
4. [API Access](#4-api-access)
5. [Common Issues](#5-common-issues)

---

## 1. Login & Password

### Q: How do I log in to Velocity Shipping?
**A:** Go to the Velocity Shipping login page and enter your registered email and password. Sub-users should use the email to which the invite was sent.

---

### Q: I forgot my password. How do I reset it?
**A:**
1. Click **Forgot Password** on the login page
2. Enter your registered email address
3. Check your inbox (and spam/junk) for the reset email
4. Click the link and set a new password

The reset link expires in 24 hours — repeat the process if expired.

---

### Q: I'm not receiving the password reset email. What should I do?
**A:**
1. Check your **spam/junk folder**
2. Ensure you're using the email address registered with Velocity
3. Wait 5 minutes — emails can be delayed
4. Try the "Forgot Password" flow again
5. If still not received, email support@velocity.in with your registered email

---

### Q: My account is locked. How do I unlock it?
**A:** Accounts may lock after multiple failed login attempts. Either wait 15–30 minutes and retry, or contact support@velocity.in for an immediate unlock.

---

### Q: Can I change my registered email address?
**A:** Contact support@velocity.in with your current and desired new email address.

---

## 2. Sub-User & Team Access

### Q: How do I add team members to my account?
**A:**
1. Go to **Settings → Users**
2. Click **Invite User**
3. Enter the team member's email and select their role
4. Click **Send Invite**
5. They'll receive an email to create their password

---

### Q: How many sub-users can I add?
**A:** There is no fixed cap. Contact your account manager for large-scale team setups.

---

### Q: How do I remove a user?
**A:**
1. Go to **Settings → Users**
2. Find the user and click **Deactivate**
3. Their access is revoked immediately

**Tip:** Do this as soon as a team member leaves to protect account security.

---

### Q: An invite link expired before my team member used it. What do I do?
**A:** Go to **Settings → Users** and re-send the invite. Invite links expire after 48 hours.

---

## 3. Permissions & Roles

### Q: What roles are available?

| Role | Access Level |
|------|-------------|
| **Admin** | Full access — settings, billing, users, VAS, all features |
| **Operations** | Create/manage shipments, orders, NDR management |
| **Viewer** | Read-only access to orders and shipments |

---

### Q: Who can enable/disable VAS (Automations, AI Calling)?
**A:** Only **Admin** users. Sub-users will see: *"You don't have permission to make changes. Please contact your admin."*

---

### Q: Who can manage billing and payments?
**A:** Only **Admin** users can recharge the wallet, download invoices, update GST, or change billing settings.

---

### Q: Can sub-users create shipments?
**A:** Yes — users with **Operations** role or higher can create and manifest shipments.

---

### Q: Can I restrict a sub-user to a specific warehouse?
**A:** Contact your account manager — warehouse-level access restrictions may be available as a custom configuration.

---

## 4. API Access

### Q: How do I get API credentials?
**A:**
1. Go to **Settings → API** (or Settings → Integrations → API Keys)
2. Click **Generate API Key**
3. Copy and securely store the key — it won't be shown again

---

### Q: My API key is compromised. What should I do?
**A:**
1. Immediately **revoke** the compromised key in Settings → API
2. Generate a new key
3. Update all systems using the old key
4. Contact support if you suspect unauthorized usage

---

### Q: Where is the API documentation?
**A:** Available in the **API Docs** section of this help center.

---

## 5. Common Issues

### Q: "Invalid credentials" error even though my password is correct.
**A:**
1. Confirm you're using the correct registered email
2. Check for **caps lock** being on
3. Try **copy-pasting** your password to avoid typos
4. Clear browser cache/cookies or try incognito mode
5. Try a **password reset** to set a fresh password

---

### Q: I can log in but can't see certain sections of the dashboard.
**A:** This is a permissions issue. Ask your admin to check your role in **Settings → Users** and upgrade it if needed.

---

### Q: The page shows "You don't have permission to make changes."
**A:** You're logged in as a sub-user without admin rights. Either ask your admin to make the change or to upgrade your role to Admin.

---

### Q: I'm the admin but can't access billing.
**A:** Possible causes:
- Your account is under a reseller/parent structure — contact your KAM
- Account temporarily restricted due to overdue payments
- Contact support@velocity.in for assistance

---

### Q: My session keeps logging me out.
**A:** Sessions expire after a period of inactivity for security. Use the **Remember Me** option at login (if available) and avoid long periods of idle time on the dashboard.

---

## Quick Reference

| Task | Who Can Do It | Where |
|------|--------------|-------|
| Add/remove users | Admin only | Settings → Users |
| Reset password | Any user | Login → Forgot Password |
| Change user role | Admin only | Settings → Users |
| Generate API key | Admin only | Settings → API |
| Enable VAS / Automations | Admin only | Settings → Automations |
| Manage billing & wallet | Admin only | Payments section |
| Create/manifest shipments | Admin + Operations | Orders section |

---

## Need Help?

- **Email:** support@velocity.in
- **Live Chat:** Click the chat icon in your dashboard
- **Account Manager:** For user management and access configuration help
