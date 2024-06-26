import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import nameStyles from "./name.module.scss"; // Import the new styles

import Slider from "../../../../components/onboarding/slider/slider";
import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";
import { TextField } from "@mui/material";
import { Button } from "../../../../components/onboarding/button/button";
import { StepCounter } from "../../../../components/onboarding/step-counter/step_counter";

export interface NameProps {
  className?: string;
}

export const Name = ({ className }: NameProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleBackward = () => {
    navigate("/onboarding/role");
  };

  const handleForward = () => {
    if (!name) {
      setError("Please enter a name.");
      return;
    }
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      name: name,
    }));
    console.log(onboardingData);
    navigate("/onboarding/startup/company-code");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value) {
      setError(""); // Clear error message if input is not empty
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={0} />

      <div className={styles.registration}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => handleBackward()}>
            <img src={arrowLeft} alt="Back" className={styles.arrowIcon} />
            Back
          </button>
        </div>
        <div className={styles.form}>
          <div className={styles.container}>
            <div className={classNames(nameStyles.root, className)}>
              <StepCounter currentStep={2} />
              <h1 className={nameStyles.h1}>What's your startup called?</h1>
              <p className={nameStyles.p}>Add the name of your startup</p>

              <TextField
                value={name}
                onChange={handleInputChange}
                className={nameStyles.select}
                variant="outlined"
                label="Startup name"
                error={!!error}
                helperText={error}
              />

              <Button
                buttonText="Next"
                onClick={handleForward}
                className={nameStyles.buttonContainer}
              />
            </div>
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};

export default Name;
