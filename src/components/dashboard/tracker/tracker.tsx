import React from "react";
import styles from "./tracker.module.scss";

function Tracker() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <span>Investor Views</span>
        <span className={styles.thisWeek}>This Week</span>
      </div>
      <div className={styles.content}>
        <div className={styles.views}>
          <span className={styles.number}>118</span>
          <span className={styles.percentage}>
            <span className={styles.arrow}>↑</span> 9%
          </span>
        </div>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}></div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
