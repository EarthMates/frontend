import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./results.module.scss";
import general_styles from "../onboarding.module.scss";
import Slider from "../../slider/slider";

import { useUserData } from "../../../context/user-data-context";
import { Button } from "../../button/button";

export interface ResultsProps {
  className?: string;
}

export const Results = ({ className }: ResultsProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [industrySelected, setIndustrySelected] = useState(false); // State to track industry selection

  const handleBackward = () => {
    navigate("/onboarding-startup/strategy");
  };

  useEffect(() => {
    setPosition(100);
  }, []);

  return (
    <div className={classNames(general_styles.root)}>
      <Slider position={position} />

      <div className={general_styles.registration}>
        <button className={general_styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={general_styles.form}>
          {/* Start of page internal component */}
          <div className={classNames(styles.root, className)}>
            <h1 className={styles.h1}>Results</h1>
            <h2 className={styles.h2}>User Type</h2>
            <p className={styles.p}>{userData.user_type}</p>
            <h2 className={styles.h2}>Stage</h2>
            <p className={styles.p}>{userData.stage}</p>
            <h2 className={styles.h2}>Industry</h2>
            <p className={styles.p}>{userData.industry}</p>
            <h2 className={styles.h2}>Capital</h2>
            <p className={styles.p}>{userData.capital}</p>
            <h2 className={styles.h2}>Impact</h2>
            <p className={styles.p}>{userData.impact}</p>
            <h2 className={styles.h2}>SDG</h2>
            <p className={styles.p}>{userData.sdg}</p>
            <h2 className={styles.h2}>Values</h2>
            <p className={styles.p}>{userData.values}</p>
            <h2 className={styles.h2}>Expertise</h2>
            <p className={styles.p}>{userData.expertise}</p>
            <h2 className={styles.h2}>Matching</h2>
            <p className={styles.p}>{userData.matching}</p>
            <h2 className={styles.h2}>Strategy</h2>
            <p className={styles.p}>{userData.strategy}</p>
          </div>
        </div>
        <div className={general_styles.placeholder} />
      </div>
    </div>
  );
};