import React from "react";
import styles from "../../About.module.css";

const Education = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.mainContentHeader}>
        <h1>EDUCATION</h1>
        <p>
          Currently studying my masters degrees final year. I major in software
          development.
        </p>
      </div>
      <span className={styles.divider}></span>
      <div className={`${styles.items} hideScrollbars`}>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h3>Master of Science (M.S.) in Information Technology</h3>
            <p>
              <em>Tampere University</em>
            </p>
          </div>
          <div className={styles.itemContent}>
            <p>
              <em>January 2024 -</em>
            </p>
            <p>
              Majoring in software development. Estimated graduation May 2025.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h3>Bachelor of Science (B.S.) in Information Technology</h3>
            <p>
              <em>Tampere University</em>
            </p>
          </div>
          <div className={styles.itemContent}>
            <p>
              <em>September 2020 - December 2023</em>
            </p>
            <p>
              Majored in software development and minored in data technologies.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h3>Matriculation Examination</h3>
            <p>
              <em>Kotka Lyseo</em>
            </p>
          </div>
          <div className={styles.itemContent}>
            <p>
              <em>August 2016 - July 2019</em>
            </p>
            <p>Finish matriculation exams.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
