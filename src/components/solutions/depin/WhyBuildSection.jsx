import React from "react";
import styles from "./WhyBuildSection.module.scss";

const WhyBuildSection = () => {
  return (
    <section className={styles.whyBuildSection} id="why-build">
      <h2 className={styles.sectionTitle}>Why Build on Solana?</h2>

      <div className={styles.contentWrapper}>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <h3 className={styles.statValue}>24M</h3>
            <p className={styles.statLabel}>DePIN Txns / month</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statValue}>120k</h3>
            <p className={styles.statLabel}>MAUs</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statValue}>$400M</h3>
            <p className={styles.statLabel}>DePIN rewards distributed</p>
          </div>
        </div>

        <div className={styles.benefitsContainer}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#lightning-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <defs>
                  <linearGradient
                    id="lightning-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#9945FF" />
                    <stop offset="50%" stopColor="#EB54BC" />
                    <stop offset="100%" stopColor="#FF754A" />
                  </linearGradient>
                </defs>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className={styles.benefitContent}>
              <h3>High Throughput, Low Costs</h3>
              <p>
                The Solana network offers the speed, scalability, and security
                needed to support the rapid growth of DePIN networks.
              </p>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#heart-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <defs>
                  <linearGradient
                    id="heart-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#9945FF" />
                    <stop offset="50%" stopColor="#EB54BC" />
                    <stop offset="100%" stopColor="#FF754A" />
                  </linearGradient>
                </defs>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className={styles.benefitContent}>
              <h3>The World&apos;s Strongest Community of DePIN founders</h3>
              <p>
                Hundreds of DePIN founders and developers are building on
                Solana, including the most impactful DePIN projects in the
                world.
              </p>
            </div>
          </div>

          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#box-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
              >
                <defs>
                  <linearGradient
                    id="box-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#9945FF" />
                    <stop offset="50%" stopColor="#EB54BC" />
                    <stop offset="100%" stopColor="#FF754A" />
                  </linearGradient>
                </defs>
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>
            <div className={styles.benefitContent}>
              <h3>An Unstoppable, Giant Community of Developers & Fans</h3>
              <p>
                New developers are choosing to build on Solana more than any
                other blockchain, and Solana products have millions of users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuildSection;
