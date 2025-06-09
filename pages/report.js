import React, { useRef } from "react";
import ReportForm from "@/components/ReportForm/ReportForm";
import styles from "./ReportPage.module.css";

function PhotoEvidence() {
  const inputRef = useRef(null);

  const openCamera = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Do something with the photo here, e.g. upload or preview
      console.log("Photo taken:", file);
    }
  };

  return (
    <>
      {/* Hidden file input to open camera */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* This div acts as the clickable Photo Evidence section */}
      <div
        onClick={openCamera}
        className={styles.photoEvidenceClickable}
        style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          style={{ marginRight: 8 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
        </svg>
        <span style={{ fontWeight: "bold", color: "#0070f3" }}>Photo Evidence (click to open camera)</span>
      </div>
    </>
  );
}

export default function ReportPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <svg
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className={styles.title}>Report a Water Leak</h1>
        <p className={styles.subtitle}>
          Help us identify and fix water leaks in Johannesburg by reporting them
          here. Your reports help maintain our city's infrastructure and conserve
          water resources.
        </p>
      </div>

      <div className={styles.formSection}>
        <ReportForm />
      </div>

      <div className={styles.tipsSection}>
        <div className={styles.tipsHeader}>
          <svg
            className={styles.tipsIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <h3 className={styles.tipsTitle}>Reporting Tips</h3>
        </div>

        <div className={styles.tipsGrid}>
          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className={styles.tipContent}>
              <h4 className={styles.tipHeading}>Location Details</h4>
              <p className={styles.tipText}>
                Include as much detail as possible about the leak location,
                including street names, landmarks, and nearby buildings.
              </p>
            </div>
          </div>

          {/* Replace static Photo Evidence tip with clickable component */}
          <div className={styles.tipCard}>
            <PhotoEvidence />
          </div>

          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.936-.833-2.707 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className={styles.tipContent}>
              <h4 className={styles.tipHeading}>Severity Assessment</h4>
              <p className={styles.tipText}>
                Note the severity and impact on the community. This helps us
                prioritize emergency repairs and resource allocation.
              </p>
            </div>
          </div>

          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className={styles.tipContent}>
              <h4 className={styles.tipHeading}>Contact Information</h4>
              <p className={styles.tipText}>
                Provide your contact information for follow-up. We may need
                additional details or want to update you on repair progress.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.emergencyNotice}>
          <div className={styles.emergencyIcon}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.936-.833-2.707 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <div className={styles.emergencyContent}>
            <h4 className={styles.emergencyTitle}>Emergency Situations</h4>
            <p className={styles.emergencyText}>
              For urgent water emergencies that pose immediate danger to public
              safety, please call our emergency hotline:{" "}
              <strong>0800 428 4357</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
