---
sidebar_position: 2
---

# Authentication

Generate an API key to authenticate all requests to the Velocity Shipping API.

## Generating an API Key

API keys are long-lived, named credentials that you manage from the Velocity Shipping dashboard. Unlike the old session-based token, API keys can be valid for up to **365 days** and can be revoked independently.

### Step 1 — Create the key from your dashboard

1. Go to [Settings → API Keys](https://dashboard.velocity.in/shipping/settings/api-keys) in the Velocity Shipping dashboard
2. Click **Generate API Key**
3. Give the key a name (e.g. `production-integration`) and choose an expiry date
4. Copy and securely store the token — **it is shown only once**

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
