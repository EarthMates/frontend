import { Button } from "../button/button";
import styles from "./sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.workspace}>
        <div className={styles.logo}></div>
        <div className={styles.text}>
          <h2>Sekofia</h2>
          <p>Workspace</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <div className={styles.icon}></div>
            Get Started
          </li>
          <li className={`${styles.navItem} ${styles.active}`}>
            <div className={`${styles.icon} ${styles.iconDashboard}`}></div>
            Dashboard
          </li>
          <li className={styles.navItem}>
            <div className={styles.icon}></div>
            Investor Matching
            <span className={styles.notification}>2</span>
          </li>
          <li className={styles.navItem}>
            <div className={styles.icon}></div>
            Company Details
          </li>
        </ul>
      </nav>
      <div className={styles.plan}>
        <h3>Free Plan</h3>
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
          <p>Adediwura Adedigba</p>
          <p>a.emmanuel@sekofia.com</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
