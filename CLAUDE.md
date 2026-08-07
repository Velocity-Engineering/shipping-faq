# Velocity Shipping FAQ — Claude Instructions

## Keeping llms.txt Up to Date

`static/llms.txt` is the AI-readable index of this documentation site. It must be kept in sync with the actual site content at all times.

**When you add a new page:**
1. Add an entry to `static/llms.txt` under the appropriate section
2. Format: `- [Page Title](https://shipping-faq.vercel.app/{section}/{slug}): One-line description of what the page covers`

**When you rename or move a page:**
1. Update the URL and title of the corresponding entry in `static/llms.txt`

**When you delete a page:**
1. Remove the corresponding entry from `static/llms.txt`

**When you add a new section:**
1. Add a `## Section Name` heading in `static/llms.txt`
2. List all pages in that section underneath it

Never leave `static/llms.txt` out of sync with the actual docs. AI agents use this file as the sole navigation index for the site — stale or missing entries cause them to miss relevant pages or return wrong answers.

## Content Guidelines — User-Facing Only

This FAQ is read by merchants and their teams, not by Velocity engineers. All content must be written for end users. These rules apply to every page in this repo:

**Never include:**
- Internal Lambda/function/service names (e.g. `ee-tracking-processor-prod-*`)
- Internal field or config names (e.g. `push_tracking`, `warehouse_configs`, `order_display_id`)
- Raw log lines, error payloads, or stack traces
- Database table/column names or query details
- Internal system architecture or service topology
- Anything that only makes sense to a Velocity engineer

**Always include:**
- What the user will see or experience (symptoms in plain language)
- Why it happens, explained without internal jargon
- Clear, numbered steps the user can take themselves to resolve it
- When to contact support, and what information to have ready

**Tone:** Write in second person ("you"/"your"), direct and plain. Avoid passive voice and hedging. If a user can't act on the information themselves, cut it.

## Admonitions (callout boxes)

Use Docusaurus admonition syntax for notes, warnings, and info callouts. The title **must** use bracket syntax — inline titles do not render and will appear as plain text.

**Correct:**
```
:::info[Title here]
Content here.
:::

:::note
Content without a title is also fine.
:::
```

**Wrong — title after space renders as plain text:**
```
:::info Title here
Content here.
:::
```

Available types: `note`, `tip`, `info`, `caution`, `danger`.
