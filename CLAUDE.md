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
