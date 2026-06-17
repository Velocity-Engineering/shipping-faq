# Velocity Shipping FAQ — Claude Instructions

## Keeping llms.txt Up to Date

`public/llms.txt` is the AI-readable index of this documentation site. It must be kept in sync with the actual site content at all times.

**When you add a new page:**
1. Add an entry to `public/llms.txt` under the appropriate section
2. Format for docs: `- [Page Title](https://shipping-faq.vercel.app/docs/{section}/{slug}): One-line description of what the page covers`
3. Format for API docs: `- [Page Title](https://shipping-faq.vercel.app/api-docs/{slug}): One-line description of what the page covers`

**When you rename or move a page:**
1. Update the URL and title of the corresponding entry in `public/llms.txt`

**When you delete a page:**
1. Remove the corresponding entry from `public/llms.txt`

**When you add a new section:**
1. Add a `## Section Name` heading in `public/llms.txt`
2. List all pages in that section underneath it

Never leave `public/llms.txt` out of sync with the actual docs. AI agents use this file as the sole navigation index for the site — stale or missing entries cause them to miss relevant pages or return wrong answers.

## Project Structure

This site uses [Fumadocs](https://fumadocs.vercel.app/) with Next.js 15. Key directories:

- `content/docs/` - Help Center documentation (MDX files)
- `content/api-docs/` - API documentation (MDX files)
- `public/` - Static assets (images, fonts, llms.txt)
- `app/` - Next.js app router pages and layouts
- `lib/source.ts` - Fumadocs source configuration

## Navigation

- Update `content/docs/meta.json` and subdirectory `meta.json` files to control sidebar ordering
- Update `content/api-docs/meta.json` for API docs ordering
