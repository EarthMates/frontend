import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import Slider from "../../../../components/onboarding/slider/slider";
import StrategyComponent from "../../../../components/onboarding/strategy/strategy";

import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";

export interface StrategyProps {
  className?: string;
}

export const Strategy = ({ className }: StrategyProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [selectedStrategy, setSelectedStrategy] = useState<string[]>([]);

  const handleBackward = () => {
    navigate("/onboarding/startup/matching");
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      strategy: selectedStrategy,
    }));
    navigate("/onboarding/startup/results");
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
              role="startup"
            />
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
