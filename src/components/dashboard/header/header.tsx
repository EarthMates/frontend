import { Link } from "react-router-dom";
import { Button } from "../button/button";
import styles from "./header.module.scss";
import { useEffect } from "react";

function Header() {
  return (
    <div className={styles.root}>
      <Link
        to="/company-profile"
        className={`${styles.navItem} ${styles.active}`}
      >
        <div className={`${styles.icon} ${styles.iconCompanyProfile}`}></div>
        Company Profile
      </Link>
      <Link to="/product-service" className={styles.navItem}>
        <div className={`${styles.icon} ${styles.iconProductService}`}></div>
        Product/Service
      </Link>
      <Link to="/financials" className={styles.navItem}>
        <div className={`${styles.icon} ${styles.iconFinancials}`}></div>
        Financials
      </Link>
      <Link to="/impact" className={styles.navItem}>
        <div className={`${styles.icon} ${styles.iconImpact}`}></div>
        Impact
      </Link>
      <Link to="/team" className={styles.navItem}>
        <div className={`${styles.icon} ${styles.iconTeam}`}></div>
        Team
      </Link>
      <Link to="/investor-preference" className={styles.navItem}>
        <div
          className={`${styles.icon} ${styles.iconInvestorPreference}`}
        ></div>
        Investor Preference
      </Link>
      <Link to="/market" className={styles.navItem}>
        <div className={`${styles.icon} ${styles.iconMarket}`}></div>
        Market
      </Link>
    </div>
  );
}

export default Header;
