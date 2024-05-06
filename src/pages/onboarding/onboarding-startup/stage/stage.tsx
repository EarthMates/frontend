import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";
import StageComponent from "../../../../components/onboarding/stage/stage";

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
    <div className={classNames(styles.container)}>
      <Slider position={position} />

      <div className={styles.registration}>
        <button className={styles.button} onClick={() => handleBackward()}>
          Back
        </button>
        <div className={styles.form}>
          <StageComponent handleStageSelected={handleStageSelected} />
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
