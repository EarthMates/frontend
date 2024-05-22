import styles from "./investor-preference.module.scss";

function InvestorPreference() {
  return (
    <div className={styles.investorPreference}>
      <h2>Investor Preference</h2>
      <div className={styles.details}>
        <p>Investment Instrument: Equity</p>
        <p>Investor Exit Strategy: Long-Term Exit</p>
        <p>Get Matched With: Everybody that can help me</p>
      </div>
    </div>
  );
}

export default InvestorPreference;
