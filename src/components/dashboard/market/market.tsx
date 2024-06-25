import React from "react";
import styles from "./market.module.scss";

interface MarketProps {
  className?: string;
}

const Market: React.FC<MarketProps> = () => {
  return (
    <div className={styles.root}>
      <h2>Market</h2>
    </div>
  );
};

export default Market;
