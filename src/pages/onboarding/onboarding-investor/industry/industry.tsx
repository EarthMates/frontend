import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";

import Slider from "../../../../components/onboarding/slider/slider";
import IndustryComponent from "../../../../components/onboarding/industry/industry";
import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";

export interface IndustryProps {
  className?: string;
}

export const Industry = ({ className }: IndustryProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();

  const [position, setPosition] = useState(0);
  const [industrySelected, setIndustrySelected] = useState(false); // State to track industry selection

  const handleBackward = () => {
    navigate("/onboarding/investor/stage");
  };

  const handleForward = () => {
    console.log(onboardingData);
    navigate("/onboarding/investor/capital");
  };

  const handleIndustrySelected = (industry: string) => {
    if (industry === "Select industry") {
      setIndustrySelected(false); // Reset industrySelected if default option is selected
    } else {
      setOnboardingData((prevOnboardingData) => ({
        ...prevOnboardingData,
        industry: industry,
      }));
      setIndustrySelected(true); // Set industrySelected to true when an industry is selected
    }
  };

  useEffect(() => {
    setPosition(20);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={2} />

      <div className={styles.registration}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => handleBackward()}>
            <img src={arrowLeft} alt="Back" className={styles.arrowIcon} />
            Back
          </button>
        </div>
        <div className={styles.form}>
          <div className={styles.container}>
            {/* Start of page internal component */}
            <IndustryComponent
              handleIndustrySelected={handleIndustrySelected}
              handleForward={handleForward}
              role="investor"
            />
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
