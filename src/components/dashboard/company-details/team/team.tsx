import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button/button";
import styles from "../company-details.module.scss";
import Section from "../../section/section";

type TeamProps = {
  // Define any props here if needed
};

const Team: React.FC<TeamProps> = (props) => {
  return (
    <div className={styles.root}>
      <h1>Team</h1>
    </div>
  );
};

export default Team;
