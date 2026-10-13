import type { ReactNode } from 'react';
import styles from './styles.module.css';

export default function HomepageHero(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Velocity Shipping Help Center</h1>
        <p className={styles.subtitle}>
          Find answers, guides, and everything you need to ship smarter.
        </p>
      </div>
    </section>
  );
}
