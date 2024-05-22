import styles from "./header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <h3>Investor Views</h3>
          <p>118</p>
        </div>
        <div className={styles.stat}>
          <h3>Conversion Rate</h3>
          <p>24%</p>
        </div>
        <div className={styles.stat}>
          <h3>Funding Raised</h3>
          <p>$400,000</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
