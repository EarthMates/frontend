import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import pageStyles from "./company-code.module.scss"; // Import the new styles

import Slider from "../../../../components/onboarding/slider/slider";
import { useOnboardingData } from "../../../../context/onboarding-data-context";
import { Header } from "../../../../components/onboarding/header/header-onboarding";
import { TextField } from "@mui/material";
import { Button } from "../../../../components/onboarding/button/button";
import { StepCounter } from "../../../../components/onboarding/step-counter/step_counter";

export interface CompanyCodeProps {
  className?: string;
}

export const CompanyCode = ({ className }: CompanyCodeProps) => {
  const navigate = useNavigate();
  const { onboardingData, setOnboardingData } = useOnboardingData();
  const [code, setCode] = useState("");

  const handleBackward = () => {
    navigate("/onboarding/startup/name");
  };

  const handleForward = () => {
    setOnboardingData((prevOnboardingData) => ({
      ...prevOnboardingData,
      code: code || "NONE",
    }));
    console.log(onboardingData);
    navigate("/onboarding/startup/stage");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={1} />

      <div className={styles.registration}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => handleBackward()}>
            <img src={arrowLeft} alt="Back" className={styles.arrowIcon} />
            Back
          </button>
        </div>
        <div className={styles.form}>
          <div className={styles.container}>
            <div className={classNames(pageStyles.root, className)}>
              <StepCounter currentStep={2} />
              <h1 className={pageStyles.h1}>
                Do you have a company code/registration number?
              </h1>
              <p className={pageStyles.p}>
                Only registered companies are eligible for matching, ensuring
                their credibility.
              </p>

              <TextField
                value={code}
                onChange={handleInputChange}
                className={pageStyles.select}
                variant="outlined"
                label="Company code"
              />

              <Button
                buttonText="Next"
                onClick={handleForward}
                className={pageStyles.buttonContainer}
              />
            </div>
          </div>
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};

export default CompanyCode;
