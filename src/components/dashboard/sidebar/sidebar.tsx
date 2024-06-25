import { Link, useLocation } from "react-router-dom";
import { Button } from "../button/button";
import styles from "./sidebar.module.scss";
import { useStartupData } from "../../../context/startup-data-context";
import { useUserData } from "../../../context/user-data-context";
import { useEffect } from "react";

function Sidebar() {
  const { startupData, setStartupData } = useStartupData();
  const { userData, setUserData } = useUserData();
  const location = useLocation();

  function matchesDetailsPath(path: string) {
    if (path === "/company-details") return true;
    if (path === "/company-details/product") return true;
    if (path === "/company-details/finances") return true;
    if (path === "/company-details/impact") return true;
    if (path === "/company-details/team") return true;
    if (path === "/company-details/preferences") return true;
    if (path === "/company-details/market") return true;
    return false;
  }

  /* useEffect(() => {
    setStartupData((prevData) => ({
      ...prevData,
      name: "New Name",
    }));
  }, []); */

  return (
    <div className={styles.sidebar}>
      <div className={styles.workspace}>
        <div className={styles.logo}></div>
        <div className={styles.text}>
          <h2>{startupData.name}</h2>
          <p>Workspace</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <Link
            to="/get-started"
            className={`${styles.navItem} ${
              location.pathname === "/get-started" ? styles.active : ""
            }`}
          >
            <div className={`${styles.icon} ${styles.iconGetStarted}`}></div>
            Get Started
          </Link>

          <Link
            to="/dashboard"
            className={`${styles.navItem} ${
              location.pathname === "/dashboard" ? styles.active : ""
            }`}
          >
            <div className={`${styles.icon} ${styles.iconDashboard}`}></div>
            Dashboard
          </Link>

          <Link
            to="/matching"
            className={`${styles.navItem} ${
              location.pathname === "/matching" ? styles.active : ""
            }`}
          >
            <div className={`${styles.icon} ${styles.iconMatching}`}></div>
            Investor Matching
            <span className={styles.notification}>2</span>
          </Link>

          <Link
            to="/company-details"
            className={`${styles.navItem} ${
              matchesDetailsPath(location.pathname) ? styles.active : ""
            }`}
          >
            <div className={`${styles.icon} ${styles.iconDetails}`}></div>
            Company Details
          </Link>
        </ul>
      </nav>
      <div className={styles.plan}>
        <div className={styles.planInfo}>
          <div className={styles.icon}></div>
          <h3>Free Plan</h3>
        </div>
        <p>
          Ideal for early-stage startups looking to gain visibility and access
          basic features.
        </p>
        <div className={styles.button}>
          <Button buttonText="Upgrade Plan" />
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.avatar}>AA</div>
        <div>
          <p>
            {userData.firstName} {userData.lastName}
          </p>
          <p>{userData.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
