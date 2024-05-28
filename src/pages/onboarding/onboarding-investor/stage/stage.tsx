import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import Slider from "../../../../components/onboarding/slider/slider";
import StageComponent from "../../../../components/onboarding/stage/stage";
import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";
import { Button } from "../../../../components/onboarding/button/button";

export interface StageProps {
  className?: string;
}

export const Stage = ({ className }: StageProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [position, setPosition] = useState(0);

  const handleBackward = () => {
    navigate("/onboarding/investor/name");
  };

  const handleStageSelected = (stages: string[]) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      stage: stages,
    }));
    navigate("/onboarding/investor/industry");
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
              role="investor"
            />
          </div>
        </div>
        {selectedStages.length > 0 && (
          <Button
            buttonText="Next"
            onClick={() => handleStageSelected(selectedStages)}
            className={styles.next_button}
          />
        )}
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
