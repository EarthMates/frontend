import styles from "./sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>Sekofia</h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>Get Started</li>
          <li className={styles.active}>Dashboard</li>
          <li>Investor Matching</li>
          <li>Company Profile</li>
          <li>Product/Services</li>
          <li>Financials</li>
          <li>Impact</li>
          <li>Team</li>
          <li>Investor Preference</li>
          <li>Market</li>
        </ul>
      </nav>
      <div className={styles.footer}>
        <div className={styles.plan}>
          <p>Free Plan</p>
          <button>Upgrade Plan</button>
        </div>
        <div className={styles.profile}>
          <p>Adediwura Adedigba</p>
          <p>a.emmanuel@sekofia.com</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
