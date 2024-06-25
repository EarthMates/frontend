import React from "react";
import styles from "./impact.module.scss";

interface ImpactProps {
  className?: string;
}

const Impact: React.FC<ImpactProps> = () => {
  return (
    <div className={styles.root}>
      <h2>Impact</h2>
    </div>
  );
};

export default Impact;
