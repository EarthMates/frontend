import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import SliderComponent from "../../../../components/onboarding/slider/slider";
import ImpactComponent from "../../../../components/onboarding/impact/impact";
import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";

export interface ImpactProps {
  className?: string;
}

export const Impact = ({ className }: ImpactProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();

  const [position, setPosition] = useState(0);
  const [impactAmount, setImpactAmount] = useState(0); // State to store impact amount

  const handleBackward = () => {
    navigate("/onboarding/investor/capital");
  };

  const handleForward = () => {
    console.log(onboardingData);
    navigate("/onboarding/investor/sdg");
  };

  const handleImpactChange = (value: number) => {
    setImpactAmount(value);
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      impact: value,
    }));
  };

  useEffect(() => {
    setPosition(40);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <SliderComponent position={4} />

      <div className={styles.registration}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => handleBackward()}>
            <img src={arrowLeft} alt="Back" className={styles.arrowIcon} />
            Back
          </button>
        </div>
        <div className={styles.form}>
          <div className={styles.container}>
            <ImpactComponent
              handleImpactChange={handleImpactChange}
              handleForward={handleForward}
              role="investor"
              impactAmount={impactAmount}
              role="investor"
            />
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
