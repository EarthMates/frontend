import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button/button";
import styles from "../company-details.module.scss";
import Section from "../../section/section";

type ImpactProps = {
  // Define any props here if needed
};

const Impact: React.FC<ImpactProps> = (props) => {
  return (
    <div className={styles.root}>
      <h1>Impact</h1>
    </div>
  );
};

export default Impact;
