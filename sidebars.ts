import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar order follows the natural user journey:
 *   1. Get oriented (platform, account)
 *   2. Connect store & carriers
 *   3. Configure routing & warehouses
 *   4. Day-to-day operations (shipping, tracking, returns, automations)
 *   5. Smart features & billing
 *   6. Troubleshooting last
 *
 * Single-doc sections use type:'doc' directly (no empty category wrapper)
 * so they render as flat links, visually identical to child items inside
 * categories. Collapsible categories are only used where there are actual
 * child pages.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    // Home
    { type: 'doc', id: 'intro', label: 'Home' },

    // ── Getting Started ──────────────────────────────
    { type: 'doc', id: 'platform-overview/index', label: 'Platform Overview' },
    { type: 'doc', id: 'authentication/index',    label: 'Authentication & Access' },

    // ── Connect Your Store ───────────────────────────
    {
      type: 'category',
      label: 'Store Integrations',
      collapsed: true,
      items: [
        'integrations/shopify',
        'integrations/woocommerce',
      ],
    },
    { type: 'doc', id: 'partners/index', label: 'Partner Integrations' },

    // ── Carriers & Routing ───────────────────────────
    { type: 'doc', id: 'carrier-integrations/index', label: 'Carrier Integrations' },
    { type: 'doc', id: 'warehouse-management/index',  label: 'Warehouse Management' },
    { type: 'doc', id: 'shipping-rules/index',        label: 'Shipping Rules' },

    // ── Shipping Operations ──────────────────────────
    {
      type: 'category',
      label: 'Shipping Operations',
      collapsed: true,
      items: [
        'features/bulk-operations',
        'features/labels',
        'features/cod-remittance',
        'features/weight-discrepancies',
      ],
    },

    // ── Tracking & Status ────────────────────────────
    { type: 'doc', id: 'tracking/index', label: 'Tracking & Order Status' },

    // ── Returns & Disputes ───────────────────────────
    {
      type: 'category',
      label: 'Returns & Disputes',
      collapsed: true,
      items: [
        'features/returns-and-qc',
        'features/post-delivery-disputes',
      ],
    },

    // ── Value Added Services ─────────────────────────
    {
      type: 'category',
      label: 'Value Added Services',
      collapsed: true,
      link: { type: 'doc', id: 'vas/index' },
      items: [
        {
          type: 'category',
          label: 'Automations',
          collapsed: true,
          link: { type: 'doc', id: 'automations/index' },
          items: [
            'automations/order-confirmation',
            'automations/ndr-management',
          ],
        },
        'features/velocity-prime',
        'features/branded-tracking-page',
      ],
    },

    // ── Billing & Reports ────────────────────────────
    { type: 'doc', id: 'billing/index', label: 'Billing & Payments' },
    { type: 'doc', id: 'reports/index', label: 'Reports' },
    { type: 'doc', id: 'tools/index',   label: 'Tools' },

    // ── Reference ────────────────────────────────────
    { type: 'doc', id: 'features/ndr-rto-reasons', label: 'NDR / RTO Reason Mapping' },

    // ── Troubleshooting ──────────────────────────────
    {
      type: 'category',
      label: 'Common Issues',
      collapsed: true,
      link: { type: 'doc', id: 'common-issues/index' },
      items: [
        'common-issues/order-not-showing',
        'common-issues/courier-not-visible',
        'common-issues/shipping-errors',
        'common-issues/status-mismatch',
        'common-issues/upstream-updates',
        'common-issues/invoicing-payment-cod',
      ],
    },
  ],
};

export default sidebars;
