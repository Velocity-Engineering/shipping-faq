import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  apiSidebar: [
    'introduction',
    'authentication',
    {
      type: 'category',
      label: 'Warehouse',
      items: ['warehouse'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Shipments',
      items: [
        'serviceability',
        'forward-shipment',
        'reverse-shipment',
        'cancel-order',
        'tracking',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'NDR Management',
      items: ['ndr-actions'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Order Details',
      items: [
        'order-details-forward',
        'order-details-returns',
      ],
      collapsed: false,
    },
    'rates',
    'finance',
    'reports',
    'webhooks',
    'shipment-status',
  ],
};

export default sidebars;
