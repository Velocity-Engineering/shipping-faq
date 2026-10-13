import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type Category = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const categories: Category[] = [
  {
    icon: '🚀',
    title: 'Getting Started',
    description: 'Key concepts, dashboard navigation, and setup checklist.',
    href: '/platform-overview',
  },
  {
    icon: '🔐',
    title: 'Authentication & Access',
    description: 'Login, password reset, sub-users, roles, and API keys.',
    href: '/authentication',
  },
  {
    icon: '🛍️',
    title: 'Store Integrations',
    description: 'Connect Shopify, WooCommerce, and other storefronts.',
    href: '/integrations/shopify',
  },
  {
    icon: '🤝',
    title: 'Partner Integrations',
    description: 'Clickpost, Pragma, Unicommerce, Vinculum, EasyEcom.',
    href: '/partners',
  },
  {
    icon: '🚚',
    title: 'Carrier Integrations',
    description: 'Delhivery, BlueDart, DTDC, Ekart, Xpressbees, Shadowfax.',
    href: '/carrier-integrations',
  },
  {
    icon: '📦',
    title: 'Tracking & Order Status',
    description: 'Status meanings, tracking issues, and order synchronization.',
    href: '/tracking',
  },
  {
    icon: '🏭',
    title: 'Warehouse Management',
    description: 'Add warehouses, RTO addresses, and multi-warehouse setup.',
    href: '/warehouse-management',
  },
  {
    icon: '⚙️',
    title: 'Shipping Rules',
    description: 'Carrier selection modes, rule conditions, High Performance mode.',
    href: '/shipping-rules',
  },
  {
    icon: '✨',
    title: 'Smart Features (VAS)',
    description: 'AI Calling, WhatsApp Notifications, RTO Prediction, Early COD.',
    href: '/vas',
  },
  {
    icon: '📊',
    title: 'Reports',
    description: 'Download shipment data, schedule reports, custom exports.',
    href: '/reports',
  },
  {
    icon: '🛠️',
    title: 'Common Issues',
    description: 'Troubleshoot the most frequent shipping and account problems.',
    href: '/common-issues',
  },
  {
    icon: '⚡',
    title: 'Features',
    description: 'Returns & QC, NDR management, COD reconciliation, and more.',
    href: '/features',
  },
];

function CategoryCard({ icon, title, description, href }: Category): ReactNode {
  const resolvedHref = useBaseUrl(href);
  return (
    <Link to={resolvedHref} className={styles.card}>
      <span className={styles.cardIcon}>{icon}</span>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardDescription}>{description}</p>
    </Link>
  );
}

export default function CategoryGrid(): ReactNode {
  return (
    <div className={styles.section}>
      <p className={styles.sectionTitle}>Browse by Topic</p>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <CategoryCard key={cat.href} {...cat} />
        ))}
      </div>
    </div>
  );
}
