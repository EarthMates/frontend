import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";
import StageComponent from "../../../../components/onboarding/stage/stage";
import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";
import arrowLeft from "../../../../assets/arrow-left.svg";

export interface StageProps {
  className?: string;
}

export const Stage = ({ className }: StageProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();
  const [position, setPosition] = useState(0);

  const handleBackward = () => {
    navigate("/onboarding/startup/company-code");
  };

  const handleStageSelected = (stage: string[]) => {
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      stage: stage, // Single selection for startup
    }));
    navigate("/onboarding/startup/industry");
  };

  useEffect(() => {
    setPosition(10);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={1} />

      <div className={styles.registration}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleBackward}>
            <img src={arrowLeft} alt="Back" className={styles.arrowIcon} />
            Back
          </button>
        </div>
        <div className={styles.form}>
          <div className={styles.container}>
            <StageComponent
              handleStageSelected={handleStageSelected}
              role="startup"
            />
          </div>
        </div>
        <div className={styles.placeholder}></div>
      </div>
    </div>
  );
};
