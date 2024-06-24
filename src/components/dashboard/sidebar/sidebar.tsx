import styles from "./sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>Startup Name</h2>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.active}>Dashboard</li>
          <li>Investor Matching</li>
        </ul>
      </nav>
      <div className={styles.footer}>
        
        <div className={styles.profile}>
          <p>Adediwura Adedigba</p>
          <p>a.emmanuel@sekofia.com</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
