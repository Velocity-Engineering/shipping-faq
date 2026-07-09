import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Common Issues',
      link: {
        type: 'doc',
        id: 'common-issues/index',
      },
      items: [
        'common-issues/order-not-showing',
        'common-issues/courier-not-visible',
        'common-issues/upstream-updates',
        'common-issues/invoicing-payment-cod',
        'common-issues/shipping-errors',
        'common-issues/status-mismatch',
      ],
    },
    {
      type: 'category',
      label: 'Platform Overview',
      link: {
        type: 'doc',
        id: 'platform-overview/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Authentication & Access',
      link: {
        type: 'doc',
        id: 'authentication/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Automations',
      link: {
        type: 'doc',
        id: 'automations/index',
      },
      items: [
        'automations/order-confirmation',
        'automations/ndr-management',
      ],
    },
    {
      type: 'category',
      label: 'Billing & Payments',
      link: {
        type: 'doc',
        id: 'billing/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Carrier Integrations',
      link: {
        type: 'doc',
        id: 'carrier-integrations/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/bulk-operations',
        'features/labels',
        'features/cod-remittance',
        'features/weight-discrepancies',
        'features/returns-and-qc',
        'features/branded-tracking-page',
      ],
    },
    {
      type: 'category',
      label: 'Store Integrations',
      items: [
        'integrations/shopify',
        'integrations/woocommerce',
      ],
    },
    {
      type: 'category',
      label: 'Partner Integrations',
      link: {
        type: 'doc',
        id: 'partners/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Tracking & Order Status',
      link: {
        type: 'doc',
        id: 'tracking/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Warehouse Management',
      link: {
        type: 'doc',
        id: 'warehouse-management/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Tools',
      link: {
        type: 'doc',
        id: 'tools/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Reports',
      link: {
        type: 'doc',
        id: 'reports/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Shipping Rules',
      link: {
        type: 'doc',
        id: 'shipping-rules/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Value Added Services',
      link: {
        type: 'doc',
        id: 'vas/index',
      },
      items: [],
    },
  ],
};

export default sidebars;
