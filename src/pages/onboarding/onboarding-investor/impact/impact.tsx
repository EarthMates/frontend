import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import SliderComponent from "../../../../components/onboarding/slider/slider";
import ImpactComponent from "../../../../components/onboarding/impact/impact";
import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";

export interface ImpactProps {
  className?: string;
}

export const Impact = ({ className }: ImpactProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [impactAmount, setImpactAmount] = useState(0); // State to store impact amount

  const handleBackward = () => {
    navigate("/onboarding/investor/capital");
  };

  const handleForward = () => {
    console.log(userData);
    navigate("/onboarding/investor/sdg");
  };

  const handleImpactChange = (value: number) => {
    setImpactAmount(value);
    setUserData((prevUserData) => ({
      ...prevUserData,
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
        <button className={styles.button} onClick={() => handleBackward()}>
          <img src={arrowLeft} alt="Back" className={styles.arrowIcon} />
          Back
        </button>
        <div className={styles.form}>
          <div className={styles.container}>
            <ImpactComponent
              handleImpactChange={handleImpactChange}
              handleForward={handleForward}
              impactAmount={impactAmount}
            />
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
