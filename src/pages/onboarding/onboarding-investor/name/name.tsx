import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import nameStyles from "./name.module.scss"; // Import the new styles

import Slider from "../../../../components/onboarding/slider/slider";
import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/headers/onboarding/header-onboarding";
import { TextField } from "@mui/material";
import { Button } from "../../../../components/onboarding/button/button";

export interface NameProps {
  className?: string;
}

export const Name = ({ className }: NameProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();
  const [name, setName] = useState("");

  const handleBackward = () => {
    navigate("/onboarding/role");
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      name: name || "NONE", // Set "NONE" if name is empty
    }));
    console.log(userData);
    navigate("/onboarding/investor/stage");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
            <div className={classNames(nameStyles.root, className)}>
              <h1 className={nameStyles.h1}>
                What's your investment company called?
              </h1>
              <p className={nameStyles.p}>Add the name of your company</p>

              <TextField
                value={name}
                onChange={handleInputChange}
                className={nameStyles.select}
                variant="outlined"
                label="Company name (optional)"
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
