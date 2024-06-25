import styles from "./company-info.module.scss";

function CompanyInfo() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img
          className={styles.icon}
          src="/icons/building-selected.svg"
          alt="building"
        />
        <h2>Company Profile</h2>
      </div>
      <div className={styles.logo}>
        <img className={styles.icon} src="/icons/sekofia.svg" alt="building" />
        <div className={styles.name}>
          <h2>Sekofia</h2>
          <p>California, United States.</p>
        </div>
      </div>
      <div className={styles.details}>
        <p>
          We are a Saas startup harnessing AI to revolutionize health insurance
          operations. Sekofia Health's cutting-edge platform automates claims
          processing and detects fraud, delivering unparalleled efficiency,
          accuracy, and security.
        </p>
        <div className={styles.mission}>
          <h2>Vision/Mission Statement</h2>
          <p>
            We are a Saas startup harnessing AI to revolutionize health
            insurance operations. Sekofia Health's cutting-edge platform
            automates claims processing and detects fraud, delivering
            unparalleled efficiency, accuracy, and security.
          </p>
        </div>
        <div className={styles.table}>
          <div className={styles.header}>Company Status</div>
          <div className={styles.values}>
            <div className={styles.item}>
              <h2>Founded</h2>
              <p>19th May, 2023</p>
            </div>
            <div className={styles.item}>
              <h2>Industry</h2>
              <p>Healthcare</p>
            </div>
            <div className={styles.item}>
              <h2>Legal Form</h2>
              <p>For-Profit</p>
            </div>
            <div className={styles.item}>
              <h2>Target Group</h2>
              <p className={styles.button}>B2B</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
