import React from "react";
import styles from "./impact.module.scss";
import { useNavigate } from "react-router-dom";

interface ImpactProps {
  className?: string;
}

const Impact: React.FC<ImpactProps> = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src="/icons/impact-selected.svg" />
          <h2>Impact</h2>
        </div>
        <button
          className="orangeLink"
          onClick={() => {
            navigate("/company-details/impact");
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

export default Impact;
