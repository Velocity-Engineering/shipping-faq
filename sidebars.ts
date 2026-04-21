import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
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
