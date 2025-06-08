// pages/dashboard.js
import { useReports } from "@/hooks/useReports";
import Map from "@/components/Map/Map";
import ReportForm from "@/components/ReportForm/ReportForm";
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const { reports, loading } = useReports();

  const getSeverityClass = (severity) => {
    const severityMap = {
      'high': styles.severityHigh,
      'medium': styles.severityMedium,
      'low': styles.severityLow
    };
    return severityMap[severity?.toLowerCase()] || styles.severityDefault;
  };

  const getStatusClass = (status) => {
    const statusMap = {
      'open': styles.statusOpen,
      'in-progress': styles.statusInProgress,
      'resolved': styles.statusResolved,
      'closed': styles.statusClosed
    };
    return statusMap[status?.toLowerCase()] || styles.statusDefault;
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1 className={styles.title}>Municipal Dashboard</h1>
        <p className={styles.subtitle}>Monitor and manage community reports</p>
      </header>
      
      <div className={styles.mapSection}>
        <Map reports={reports} />
      </div>
      
      <section className={styles.reportsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recent Reports</h2>
          <span className={styles.reportCount}>
            {reports.length} {reports.length === 1 ? 'report' : 'reports'}
          </span>
        </div>
        
        {loading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Loading reports...</p>
          </div>
        ) : reports.length > 0 ? (
          <div className={styles.reportsGrid}>
            {reports.map((report) => (
              <article key={report.id} className={styles.reportCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.reportTitle}>{report.title}</h3>
                  <div className={styles.badges}>
                    <span className={`${styles.badge} ${getStatusClass(report.status)}`}>
                      {report.status}
                    </span>
                    <span className={`${styles.badge} ${getSeverityClass(report.severity)}`}>
                      {report.severity}
                    </span>
                  </div>
                </div>
                <p className={styles.reportDescription}>{report.description}</p>
                <div className={styles.cardFooter}>
                  <time className={styles.timestamp}>
                    {report.createdAt && new Date(report.createdAt).toLocaleDateString()}
                  </time>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>No reports available</p>
          </div>
        )}
      </section>
    </div>
  );
}