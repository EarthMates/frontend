import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import Slider from "../../../../components/onboarding/slider/slider";
import ExpertiseComponent from "../../../../components/onboarding/expertise/expertise";
import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";

export interface ExpertiseProps {
  className?: string;
}

export const Expertise = ({ className }: ExpertiseProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();

  const [position, setPosition] = useState(0);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  const handleBackward = () => {
    navigate("/onboarding/investor/values");
  };

  const handleForward = () => {
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      expertise: selectedExpertise,
    }));
    navigate("/onboarding/investor/matching");
  };

  useEffect(() => {
    setPosition(70);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={7} />

      <div className={styles.registration}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => handleBackward()}>
            <img src={arrowLeft} alt="Back" className={styles.arrowIcon} />
            Back
          </button>
        </div>
        <div className={styles.form}>
          <div className={styles.container}>
            <ExpertiseComponent
              selectedExpertise={selectedExpertise}
              setSelectedExpertise={setSelectedExpertise}
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
