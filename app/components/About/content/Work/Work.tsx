import React from "react";
import styles from "../../About.module.css";

const Work = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.mainContentHeader}>
        <h1>Work Experience</h1>
        <p>
          I have gained valuable experience across multiple industries,
          developing strong skills in communication, problem-solving, and
          performing effectively under pressure.
        </p>
      </div>
      <span className={styles.divider}></span>
      <div className={`${styles.items} hideScrollbars`}>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h3>Opitco Oy</h3>
            <p>
              <em>Full Stack Developer</em>
            </p>
          </div>
          <div className={styles.itemContent}>
            <p>
              <em>December 2023 - Present</em>
            </p>
            <p>
              Led the design, development, and maintenance of the Todo Groups
              web application, a tool aimed at enhancing classroom management
              for teachers and improving student engagement and focus.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h3>Barona / Accountor</h3>
            <p>
              <em>IT Support</em>
            </p>
          </div>
          <div className={styles.itemContent}>
            <p>
              <em>September 2024 - October 2024 (Contract)</em>
            </p>
            <p>
              Provided critical support for the implementation of Accountor’s
              new login system, assisting customers through the authentication
              process and troubleshooting issues.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h3>Soldem</h3>
            <p>
              <em>Sales Specialist</em>
            </p>
          </div>
          <div className={styles.itemContent}>
            <p>
              <em>May 2024 - August 2024 (Project)</em>
            </p>
            <p>
              Achieved sales targets by promoting Telia products and services
              through direct phone contact with customers.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h3>Teleperformance</h3>
            <p>
              <em>IT Support</em>
            </p>
          </div>
          <div className={styles.itemContent}>
            <p>
              <em>October 2023 - December 2023</em>
            </p>
            <p>
              Delivered exceptional customer service as part of Google’s support
              team, resolving a wide range of issues related to Google products.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h3>BOLT</h3>
            <p>
              <em>Construction Assistant</em>
            </p>
          </div>
          <div className={styles.itemContent}>
            <p>
              <em>May 2023 - September 2023 (Freelance)</em>
            </p>
            <p>
              Supported multiple construction projects, including preparation
              for major events such as Blockfest festival and outdoor areas for
              the Ice Hockey World Championships.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemHeader}>
            <h3>Prisma Food Court</h3>
            <p>
              <em>Restaurant Worker</em>
            </p>
          </div>
          <div className={styles.itemContent}>
            <p>
              <em>February 2022 - May 2023</em>
            </p>
            <p>
              Provided high-quality customer service and performed kitchen
              duties as a cook for Hesburger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
