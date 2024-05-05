import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./industry.module.scss";
import general_styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";

import { useUserData } from "../../../../context/user-data-context";
import { Button } from "../../../../components/onboarding/button/button";

export interface IndustryProps {
  className?: string;
}

export const Industry = ({ className }: IndustryProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [industrySelected, setIndustrySelected] = useState(false); // State to track industry selection

  const handleBackward = () => {
    navigate("/onboarding-startup/stage");
  };

  const handleForward = () => {
    console.log(userData);
    navigate("/onboarding-startup/capital");
  };

  const handleIndustrySelected = (industry: string) => {
    if (industry === "Select industry") {
      setIndustrySelected(false); // Reset industrySelected if default option is selected
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        industry: industry,
      }));
      setIndustrySelected(true); // Set industrySelected to true when an industry is selected
    }
  };

  useEffect(() => {
    setPosition(20);
  }, []);

  return (
    <div className={classNames(general_styles.container)}>
      <Slider position={position} />

      <div className={general_styles.registration}>
        <button className={general_styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={general_styles.form}>
          {/* Start of page internal component */}
          <div className={classNames(styles.root, className)}>
            <h1 className={styles.h1}>
              Which industry does your company belong to?
            </h1>
            <p className={styles.p}>Choose your company's niche</p>
            <select
              className={styles.select}
              onChange={(e) => handleIndustrySelected(e.target.value)}
            >
              <option value="Select industry">Select industry</option>{" "}
              {/* Default option */}
              <option value="Technology">Technology</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Mobility">Mobility</option>
              <option value="Finance">Finance</option>
            </select>
            {industrySelected && (
              <Button buttonText="Next" onClick={handleForward} />
            )}
            {/* Render button only if industry is selected */}
          </div>
        </div>
        <div className={general_styles.placeholder} />
      </div>
    </div>
  );
};
