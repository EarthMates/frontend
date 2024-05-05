import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./stage.module.scss";
import general_styles from "../../onboarding.module.scss";
import Slider from "../../../../components/slider/slider";

import { useUserData } from "../../../../context/user-data-context";

export interface StageProps {
  className?: string;
}

export const Stage = ({ className }: StageProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();
  console.log(userData);

  const [position, setPosition] = useState(0);

  const handleBackward = () => {
    navigate("/");
  };

  const handleStageSelected = (stage: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      stage: stage,
    }));
    navigate("/onboarding-startup/industry");
  };

  useEffect(() => {
    setPosition(10);
  }, []);

  return (
    <div className={classNames(general_styles.container)}>
      <Slider position={position} />

      <div className={general_styles.registration}>
        <button
          className={general_styles.button}
          onClick={() => handleBackward()}
        >
          Back
        </button>
        <div className={general_styles.form}>
          {/* Start of page internal component */}
          <div className={classNames(styles.root, className)}>
            <h1 className={styles.h1}>What's your company's current stage?</h1>
            <p className={styles.p}>Choose one that applies to your company</p>

            <div className={styles.stages}>
              <button
                className={styles.button}
                onClick={() => handleStageSelected("Pre-Seed")}
              >
                Pre-Seed
              </button>
              <button
                className={styles.button}
                onClick={() => handleStageSelected("Series A")}
              >
                Series A
              </button>
              <button
                className={styles.button}
                onClick={() => handleStageSelected("Series B")}
              >
                Series B
              </button>
              <button
                className={styles.button}
                onClick={() => handleStageSelected("Series C")}
              >
                Series C
              </button>
              <button
                className={styles.button}
                onClick={() => handleStageSelected("Bridge")}
              >
                Bridge
              </button>
            </div>
          </div>
        </div>
        <div className={general_styles.placeholder} />
      </div>
    </div>
  );
};
