import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import Slider from "../../../../components/onboarding/slider/slider";
import CapitalComponent from "../../../../components/onboarding/capital/capital";

import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";

export interface CapitalProps {
  className?: string;
}

export const Capital = ({ className }: CapitalProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();

  const [position, setPosition] = useState(0);
  const [capitalSelected, setCapitalSelected] = useState(false); // State to track capital selection
  const [capitalAmount, setCapitalAmount] = useState(""); // State to store capital amount

  const handleBackward = () => {
    navigate("/onboarding/startup/industry");
  };

  const handleForward = () => {
    console.log(onboardingData);
    navigate("/onboarding/startup/impact");
  };

  useEffect(() => {
    setPosition(30);
  }, []);

  const handleCapitalChange = (value: number) => {
    setCapitalAmount(value.toString());
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      capital: value.toString(),
    }));
    setCapitalSelected(true);
  };

  const handleRangeSelected = (capital_range: string) => {
    // Dummy
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      capital: capital_range,
    }));
  };

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={3} />

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
            <CapitalComponent
              capitalAmount={capitalAmount}
              handleCapitalChange={handleCapitalChange}
              handleRangeSelected={handleRangeSelected}
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
