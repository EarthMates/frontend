import styles from "./market.module.scss";

function Market() {
  return (
    <div className={styles.market}>
      <h2>Market</h2>
      <div className={styles.details}>
        <p>Target Market: Africa</p>
        <p>Est. Market Size: $2,000,000,000</p>
        <p>Annual Growth Rate: 24%</p>
      </div>
    </div>
  );
}

export default Market;
