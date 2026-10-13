import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * API docs sidebar ordered by integration journey:
 *   1. Get oriented (introduction, authentication)
 *   2. Set up account resources (warehouses, stores)
 *   3. Core operations (create/cancel/update shipments)
 *   4. Post-shipment (tracking, NDR)
 *   5. Query & reporting (order details, rates, finance, reports)
 *   6. Events & reference (webhooks, status codes)
 *
 * Single-doc items use type:'doc' directly — no single-item category wrappers.
 */
const sidebars: SidebarsConfig = {
  apiSidebar: [
    // Foundations
    { type: 'doc', id: 'introduction',  label: 'Introduction' },
    { type: 'doc', id: 'authentication', label: 'Authentication' },

    // ── Account Setup ────────────────────────────────
    { type: 'doc', id: 'warehouse', label: 'Warehouses' },
    { type: 'doc', id: 'stores',    label: 'Stores' },

    // ── Shipment Operations ──────────────────────────
    {
      type: 'category',
      label: 'Shipments',
      collapsed: true,
      items: [
        'serviceability',
        'forward-shipment',
        'reverse-shipment',
        'cancel-order',
        'update-order',
      ],
    },

    // ── Post-Shipment ────────────────────────────────
    { type: 'doc', id: 'tracking',    label: 'Tracking' },
    { type: 'doc', id: 'ndr-actions', label: 'NDR Actions' },

    // ── Order Queries ────────────────────────────────
    {
      type: 'category',
      label: 'Order Details',
      collapsed: true,
      items: [
        'order-details-forward',
        'order-details-returns',
        'exchange-orders',
      ],
    },

    // ── Rates & Finance ──────────────────────────────
    { type: 'doc', id: 'rates',    label: 'Get Rates' },
    { type: 'doc', id: 'finance',  label: 'Finance' },
    { type: 'doc', id: 'reports',  label: 'Reports' },

    // ── Webhooks & Reference ─────────────────────────
    { type: 'doc', id: 'webhooks',        label: 'Webhooks' },
    { type: 'doc', id: 'shipment-status', label: 'Shipment Status Reference' },
  ],
};

export default sidebars;
