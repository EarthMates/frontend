import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button/button";
import styles from "../company-details.module.scss";
import Section from "../../generic/section/section";

type PreferencesProps = {
  // Define any props here if needed
};

const Preferences: React.FC<PreferencesProps> = (props) => {
  return (
    <div className={styles.root}>
      <h1>Preferences</h1>
    </div>
  );
};

export default Preferences;
