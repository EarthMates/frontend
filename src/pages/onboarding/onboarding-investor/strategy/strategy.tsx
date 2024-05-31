import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import Slider from "../../../../components/onboarding/slider/slider";
import StrategyComponent from "../../../../components/onboarding/strategy/strategy";

import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";
import api from "../../../../api";
import { USER_TYPE } from "../../../../constants";

export interface StrategyProps {
  className?: string;
}

export const Strategy = ({ className }: StrategyProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();

  const [position, setPosition] = useState(0);
  const [selectedStrategy, setSelectedStrategy] = useState<string[]>([]);

  const handleBackward = () => {
    navigate("/onboarding/investor/matching");
  };

  const handleForward = () => {
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      strategy: selectedStrategy,
    }));

    const { user_type, code, ...investorData } = onboardingData;
    console.log(investorData);
    api
      .post("/api/investor/", investorData)
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem(USER_TYPE, "investor");
          navigate("/");
        } else {
          alert("Failed to make Investor.");
        }
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    setPosition(90);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={9} />

      <div className={styles.registration}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => handleBackward()}>
            <img src={arrowLeft} alt="Back" className={styles.arrowIcon} />
            Back
          </button>
        </div>
        <div className={styles.form}>
          <div className={styles.container}>
            <StrategyComponent
              selectedStrategy={selectedStrategy}
              setSelectedStrategy={setSelectedStrategy}
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
