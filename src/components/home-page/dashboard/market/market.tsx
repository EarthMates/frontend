import React from "react";
import styles from "./market.module.scss";
import { useNavigate } from "react-router-dom";

interface MarketProps {
  className?: string;
}

const Market: React.FC<MarketProps> = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src="/icons/market-selected.svg" />
          <h2>Market</h2>
        </div>
        <button
          className="orangeLink"
          onClick={() => {
            navigate("/company-details/market");
          }}
        >
          <img className="icon" src="/icons/expand.svg" /> View Details
        </button>
        {/*⤢*/}
      </div>
      <div className={styles.body}>
        <p>Some text here</p>
        <p>Some other here</p>
      </div>
    </div>
  );
};

export default Market;
