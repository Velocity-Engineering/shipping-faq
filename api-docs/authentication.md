---
sidebar_position: 2
---

# Authentication

Generate an API key to authenticate all requests to the Velocity Shipping API.

## Generating an API Key

API keys are long-lived, named credentials that you manage from the Velocity Shipping dashboard. Unlike the old session-based token, API keys can be valid for up to **365 days** and can be revoked independently.

### Step 1 — Create the key from your dashboard

1. Log in to the [Velocity Shipping dashboard](https://app.velocity.in)
2. Go to **Settings → API**
3. Click **Generate API Key**
4. Give the key a name (e.g. `production-integration`) and choose an expiry date
5. Copy and securely store the token — **it is shown only once**

### Step 2 — Use the token in API calls

Include the token in the `Authorization` header for every authenticated API request:

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/warehouse' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...' \
--data '{...}'
```

> **Note:** Always include the `Bearer` prefix before the token value.

---

## Managing Your API Keys

From **Settings → API** in the dashboard you can:

- **Enable / Disable** a key temporarily without deleting it
- **Delete** a key permanently when it is no longer needed

---

## Key Limits and Best Practices

- A maximum of **5 active API keys** are allowed per account
- Set a meaningful name to identify where each key is used
- Rotate keys regularly and revoke any that are no longer in use
- Never expose API keys in client-side code, logs, or public repositories

---

## Deprecated: Session Token via `/custom/api/v1/auth-token`

> ⚠️ This endpoint is **deprecated** and will be removed in a future release. It continues to work for now, but we strongly recommend migrating to the API key system above. Session tokens issued here are valid for **1 month** and will be revoked after that.

The old authentication flow issued a session token by submitting your username and password:

**Method:** `POST`  
**Endpoint:** `/custom/api/v1/auth-token`

### Request Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| username | string | Yes | Mobile number with country code (Velocity Shipping Username) | +91xxxxxxxxxx |
| password | string | Yes | Velocity Shipping Account password | Your password |

> **Account Lockout:** 5 consecutive failed login attempts with an incorrect password may result in a temporary account lock.

### Sample Request

```bash
curl --location 'https://shazam.velocity.in/custom/api/v1/auth-token' \
--header 'Content-Type: application/json' \
--data-raw '{
  "username": "+919866340090",
  "password": "YourPassword123"
}'
```

### Response

```json
{
  "token": "bbqRkOXw0xWLuYj9ubnDwg",
  "expires_at": "2025-09-17T10:11:40"
}
```
