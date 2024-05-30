import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import Slider from "../../../../components/onboarding/slider/slider";
import MatchingComponent from "../../../../components/onboarding/matching/matching";

import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";

export interface MatchingProps {
  className?: string;
}

export const Matching = ({ className }: MatchingProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();

  const [position, setPosition] = useState(0);
  const [selectedMatching, setSelectedMatching] = useState<string[]>([]);

  const handleBackward = () => {
    navigate("/onboarding/startup/expertise");
  };

  const handleForward = () => {
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      matching: selectedMatching,
    }));
    navigate("/onboarding/startup/strategy");
  };

  useEffect(() => {
    setPosition(80);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={8} />

      <div className={styles.registration}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => handleBackward()}>
            <img src={arrowLeft} alt="Back" className={styles.arrowIcon} />
            Back
          </button>
        </div>
        <div className={styles.form}>
          <div className={styles.container}>
            <MatchingComponent
              selectedMatching={selectedMatching}
              setSelectedMatching={setSelectedMatching}
              handleForward={handleForward}
              role="startup"
            />
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
