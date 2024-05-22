import styles from "./company-profile.module.scss";

function CompanyProfile() {
  return (
    <div className={styles.companyProfile}>
      <h2>Company Profile</h2>
      <div className={styles.details}>
        <p>Founded: 19th May, 2023</p>
        <p>Industry: Healthcare</p>
        <p>Legal Form: For-Profit</p>
        <p>Target Group: B2B, B2C</p>
      </div>
    </div>
  );
}

export default CompanyProfile;
