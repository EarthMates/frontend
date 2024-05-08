import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";

import Slider from "../../../../components/onboarding/slider/slider";
import IndustryComponent from "../../../../components/onboarding/industry/industry";
import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/header/header";

export interface IndustryProps {
  className?: string;
}

export const Industry = ({ className }: IndustryProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [industrySelected, setIndustrySelected] = useState(false); // State to track industry selection

  const handleBackward = () => {
    navigate("/onboarding-investor/stage");
  };

  const handleForward = () => {
    console.log(userData);
    navigate("/onboarding-investor/capital");
  };

  const handleIndustrySelected = (industry: string) => {
    if (industry === "Select industry") {
      setIndustrySelected(false); // Reset industrySelected if default option is selected
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        industry: industry,
      }));
      setIndustrySelected(true); // Set industrySelected to true when an industry is selected
    }
  };

  useEffect(() => {
    setPosition(20);
  }, []);

  return (
    <div className={classNames(styles.container)}>
      <Slider position={position} />

      <div className={styles.registration}>
        <button className={styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={styles.form}>
          {/* Start of page internal component */}
          <IndustryComponent
            handleIndustrySelected={handleIndustrySelected}
            handleForward={handleForward}
          />
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
