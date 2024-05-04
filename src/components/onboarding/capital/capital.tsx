import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./capital.module.scss";
import general_styles from "../onboarding.module.scss";
import Slider from "../../slider/slider";

import { useUserData } from "../../../context/user-data-context";
import { Button } from "../../button/button";

export interface CapitalProps {
  className?: string;
}

export const Capital = ({ className }: CapitalProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [capitalSelected, setCapitalSelected] = useState(false); // State to track capital selection
  const [capitalAmount, setCapitalAmount] = useState(0); // State to store capital amount

  const handleBackward = () => {
    navigate("/onboarding-startup/industry");
  };

  const handleForward = () => {
    console.log(userData);
    navigate("/onboarding-startup/impact");
  };

  const handleCapitalSelected = (capital: string) => {
    if (capital === "Select capital") {
      setCapitalSelected(false); // Reset CapitalSelected if default option is selected
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        capital: parseFloat(capital),
      }));
      setCapitalSelected(true); // Set capitalSelected to true when an capital is selected
    }
  };

  useEffect(() => {
    setPosition(28.6);
  }, []);

  const handleCapitalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setCapitalAmount(value);
    setUserData((prevUserData) => ({
      ...prevUserData,
      capital: value,
    }));
    setCapitalSelected(true);
  };

  return (
    <div className={classNames(general_styles.root)}>
      <Slider position={position} />

      <div className={general_styles.registration}>
        <button className={general_styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={general_styles.form}>
          {/* Start of page internal component */}
          <div className={classNames(styles.root, className)}>
            <h1 className={styles.h1}>
              How much capital does your company need?
            </h1>
            <p className={styles.p}>
              Use the slider to select your company funding need
            </p>

            <input
              className={styles.input}
              type="number"
              min={0}
              max={1000000}
              step={10000}
              value={capitalAmount}
              onChange={handleCapitalChange}
            />

            {capitalSelected && (
              <Button buttonText="Next" onClick={handleForward} />
            )}
            {/* Render button only if capital is selected */}
          </div>
        </div>
        <div className={general_styles.placeholder} />
      </div>
    </div>
  );
};
