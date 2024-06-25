import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button/button";
import styles from "../company-details.module.scss";
import Section from "../../section/section";

type MarketProps = {
  // Define any props here if needed
};

const Market: React.FC<MarketProps> = (props) => {
  return (
    <div className={styles.root}>
      <h1>Market</h1>
    </div>
  );
};

export default Market;
