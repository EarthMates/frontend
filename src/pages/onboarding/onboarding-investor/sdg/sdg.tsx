import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import Slider from "../../../../components/onboarding/slider/slider";
import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";
import { Button } from "../../../../components/onboarding/button/button";
import SdgComponent from "../../../../components/onboarding/sdg/sdg";

export interface SdgProps {
  className?: string;
}

export const Sdg = ({ className }: SdgProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();
  const [selectedSdgs, setSelectedSdgs] = useState<string[]>([]);

  const [position, setPosition] = useState(0);
  // State to track selected SDGs

  const handleBackward = () => {
    navigate("/onboarding/investor/impact");
  };

  const handleForward = () => {
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      sdg: selectedSdgs,
    }));
    navigate("/onboarding/investor/values");
  };

  useEffect(() => {
    setPosition(50);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={5} />

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
            <SdgComponent
              selectedSdgs={selectedSdgs}
              setSelectedSdgs={setSelectedSdgs}
              handleForward={handleForward}
              role="investor"
            />
          </div>
        </div>
        <div className={styles.placeholder}></div>
      </div>
    </div>
  );
};

// Function to get the title of the SDG based on its index
