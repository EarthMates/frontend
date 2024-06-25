import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button/button";
import styles from "../company-details.module.scss";
import Section from "../../section/section";

type FinancesProps = {
  // Define any props here if needed
};

const Finances: React.FC<FinancesProps> = (props) => {
  return (
    <div className={styles.root}>
      <h1>Finances</h1>
    </div>
  );
};

export default Finances;
