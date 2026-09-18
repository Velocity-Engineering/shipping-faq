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
--header 'Authorization: eyJhbGciOiJIUzI1NiJ9...' \
--data '{...}'
```

> **Note:** Pass the raw JWT token as the `Authorization` value — no `Bearer` prefix required.

---

## Programmatic Key Generation

If you need to create keys programmatically (e.g. from a CI pipeline), you can call the API directly using your dashboard session credentials.

**Method:** `POST`  
**Endpoint:** `/api/v1/api_keys`

### Request Headers

| Header | Description |
|--------|-------------|
| `Content-Type` | `application/json` |
| `access-token` | Access token from your Velocity Shipping session |
| `client` | Client identifier from your Velocity Shipping session |
| `uid` | User identifier (your registered email/mobile) from your session |

### Request Body

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| name | string | Yes | A label for this key | `"production-key"` |
| expires_at | integer | Yes | Unix timestamp for key expiry (max 365 days from now) | `1789721913` |

### Sample Request

```bash
curl --location 'https://shazam.velocity.in/api/v1/api_keys' \
--header 'Content-Type: application/json' \
--header 'access-token: <your-access-token>' \
--header 'client: <your-client-id>' \
--header 'uid: +919866340090' \
--data '{
  "name": "production-key",
  "expires_at": 1789721913
}'
```

### Success Response (`201 Created`)

```json
{
  "data": {
    "id": "a1b2c3d4-...",
    "type": "api_key",
    "attributes": {
      "name": "production-key",
      "status": "active",
      "expires_at": "2027-09-17T12:00:00.000Z",
      "created_by": "user@example.com",
      "created_at": "2026-09-17T12:00:00.000Z",
      "expired": false,
      "usable": true,
      "token": "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaGF6YW0iLCJjbGllbnRfaWQiOiI..."
    }
  }
}
```

> **Important:** The `token` field is only present in the creation response. Store it securely — you cannot retrieve it again.

### Error Responses

| Status | Reason |
|--------|--------|
| `401 Unauthorized` | Invalid or missing session credentials |
| `403 Forbidden` | API access is not enabled for your account — contact support |
| `422 Unprocessable Entity` | Validation error (e.g. name already in use, expiry exceeds 365 days, or maximum of 5 active keys reached) |

---

## Key Limits and Best Practices

- A maximum of **5 active API keys** are allowed per account
- Set a meaningful name to identify where each key is used
- Rotate keys regularly and revoke any that are no longer in use
- Never expose API keys in client-side code, logs, or public repositories

---

## Revoking a Key

Delete a key immediately from **Settings → API** in the dashboard, or via the API:

```bash
curl --request DELETE \
'https://shazam.velocity.in/api/v1/api_keys/<key-id>' \
--header 'access-token: <your-access-token>' \
--header 'client: <your-client-id>' \
--header 'uid: +919866340090'
```

---

## Deprecated: Session Token via `/custom/api/v1/auth-token`

> ⚠️ This endpoint is **deprecated** and will be removed in a future release. It continues to work for now, but we strongly recommend migrating to the API key system above. Session tokens issued here are short-lived (24 hours) and require re-authentication on every expiry.

The old authentication flow issued a short-lived session token by submitting your username and password:

**Method:** `POST`  
**Endpoint:** `/custom/api/v1/auth-token`

### Request Fields

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| username | string | Yes | Mobile number with country code (Velocity Shipping Username) | +91xxxxxxxxxx |
| password | string | Yes | Velocity Shipping Account password | Your password |

> **Note:** Creating a new token revoked all previous tokens. Token was valid for **24 hours** only.

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
