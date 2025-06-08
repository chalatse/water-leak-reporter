import Link from 'next/link';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroIcon}>
        <div className={styles.waterDrop}>
          <span>💧</span>
          <div className={styles.alertDot}></div>
        </div>
      </div>
      
      <h1 className={styles.title}>Water Crisis Reporter</h1>
      
      <p className={styles.subtitle}>
        Empowering communities to report water infrastructure issues and helping municipalities respond faster to critical water emergencies.
      </p>

      {/* Action Cards Grid */}
      <div className={styles.grid}>
        {/* Report Card */}
        <Link href="/report" className={`${styles.card} ${styles.report}`}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>
              <span>⚠️</span>
            </div>
            <div className={styles.cardArrow}>
              <span>→</span>
            </div>
          </div>
          
          <h2>Report a Leak</h2>
          
          <p>
            Quickly submit new water leak reports with photos and location details to help your municipality respond faster.
          </p>
          
          <div className={styles.cardFooter}>
            <span>Start Report</span>
            <div className={styles.cardFooterArrow}>
              <span>→</span>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className={styles.cardDecoration}></div>
        </Link>

        {/* Dashboard Card */}
        <Link href="/dashboard" className={`${styles.card} ${styles.dashboard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>
              <span>📊</span>
            </div>
            <div className={styles.cardArrow}>
              <span>→</span>
            </div>
          </div>
          
          <h2>Municipal Dashboard</h2>
          
          <p>
            Access the comprehensive dashboard to view, manage, and track all reported water infrastructure issues in your area.
          </p>
          
          <div className={styles.cardFooter}>
            <span>View Dashboard</span>
            <div className={styles.cardFooterArrow}>
              <span>→</span>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className={styles.cardDecoration}></div>
        </Link>
      </div>

      {/* Stats Section */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={`${styles.statNumber} ${styles.blue}`}>24/7</div>
          <div className={styles.statLabel}>Emergency Reporting</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statNumber} ${styles.cyan}`}>Real-time</div>
          <div className={styles.statLabel}>Status Updates</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statNumber} ${styles.teal}`}>Community</div>
          <div className={styles.statLabel}>Driven Solutions</div>
        </div>
      </div>

      {/* Floating water drops animation */}
      <div className={styles.floatingDrops}>
        <div className={`${styles.drop} ${styles.drop1}`}></div>
        <div className={`${styles.drop} ${styles.drop2}`}></div>
        <div className={`${styles.drop} ${styles.drop3}`}></div>
      </div>
    </main>
  );
}