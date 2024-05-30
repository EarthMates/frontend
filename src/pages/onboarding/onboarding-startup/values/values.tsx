import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import Slider from "../../../../components/onboarding/slider/slider";
import ValuesComponent from "../../../../components/onboarding/values/values";

import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";

export interface ValuesProps {
  className?: string;
}

export const Values = ({ className }: ValuesProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();

  const [position, setPosition] = useState(0);
  const [selectedValues, setSelectedValues] = useState<string[]>([]); // State to track selected Values

  console.log(onboardingData);

  const handleBackward = () => {
    navigate("/onboarding/startup/sdg");
  };

  const handleForward = () => {
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      values: selectedValues,
    }));
    navigate("/onboarding/startup/expertise");
  };

  useEffect(() => {
    setPosition(60);
  }, []);

  const handleValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      // Add the selected values to the array if checked
      if (selectedValues.length < 6) {
        setSelectedValues([...selectedValues, value]);
      } else {
        event.preventDefault(); // Prevent checking more than 5 Values
      }
    } else {
      // Remove the Values from the array if unchecked
      setSelectedValues(selectedValues.filter((item) => item !== value));
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={6} />

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
            <ValuesComponent
              handleValuesSelected={setSelectedValues}
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

// List of the 10 most known team values
const teamValues = [
  "Trust",
  "Respect",
  "Collaboration",
  "Innovation",
  "Accountability",
  "Excellence",
  "Integrity",
  "Diversity",
  "Empowerment",
  "Communication",
];
