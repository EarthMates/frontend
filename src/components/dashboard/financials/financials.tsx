import styles from "./financials.module.scss";

function Financials() {
  return (
    <div className={styles.financials}>
      <h2>Financials</h2>
      <div className={styles.chart}>
        {/* Insert chart component or image here */}
      </div>
      <div className={styles.details}>
        <p>Funding Requirement: $50,000 - $200,000</p>
        <p>Target Investor Count: 5</p>
        <p>Funding Stage: Series-A</p>
      </div>
    </div>
  );
}

export default Financials;
