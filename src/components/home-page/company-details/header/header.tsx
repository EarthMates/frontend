import { Link } from "react-router-dom";
import { Button } from "../../button/button";
import styles from "./header.module.scss";
import { useEffect } from "react";

function Header() {
  return (
    <div className={styles.root}>
      <Link
        to="/company-details"
        className={`${styles.navItem} ${
          location.pathname === "/company-details" ? styles.active : ""
        }`}
      >
        <div className={`${styles.icon} ${styles.iconCompanyProfile}`}></div>
        Company Profile
      </Link>
      <Link
        to="/company-details/product"
        className={`${styles.navItem} ${
          location.pathname === "/company-details/product" ? styles.active : ""
        }`}
      >
        <div className={`${styles.icon} ${styles.iconProductService}`}></div>
        Product/Service
      </Link>
      <Link
        to="/company-details/finances"
        className={`${styles.navItem} ${
          location.pathname === "/company-details/finances" ? styles.active : ""
        }`}
      >
        <div className={`${styles.icon} ${styles.iconFinancials}`}></div>
        Financials
      </Link>
      <Link
        to="/company-details/impact"
        className={`${styles.navItem} ${
          location.pathname === "/company-details/impact" ? styles.active : ""
        }`}
      >
        <div className={`${styles.icon} ${styles.iconImpact}`}></div>
        Impact
      </Link>
      <Link
        to="/company-details/team"
        className={`${styles.navItem} ${
          location.pathname === "/company-details/team" ? styles.active : ""
        }`}
      >
        <div className={`${styles.icon} ${styles.iconTeam}`}></div>
        Team
      </Link>
      <Link
        to="/company-details/preferences"
        className={`${styles.navItem} ${
          location.pathname === "/company-details/preferences"
            ? styles.active
            : ""
        }`}
      >
        <div
          className={`${styles.icon} ${styles.iconInvestorPreference}`}
        ></div>
        Investor Preference
      </Link>
      <Link
        to="/company-details/market"
        className={`${styles.navItem} ${
          location.pathname === "/company-details/market" ? styles.active : ""
        }`}
      >
        <div className={`${styles.icon} ${styles.iconMarket}`}></div>
        Market
      </Link>
    </div>
  );
}

export default Header;
