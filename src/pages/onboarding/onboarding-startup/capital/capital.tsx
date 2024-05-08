import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";
import CapitalComponent from "../../../../components/onboarding/capital/capital";

import { useUserData } from "../../../../context/user-data-context";
import { Header } from "../../../../components/header/header";

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
    setPosition(30);
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
    <div className={classNames(styles.container)}>
      <Header />
      <Slider position={position} />

      <div className={styles.registration}>
        <button className={styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={styles.form}>
          {/* Start of page internal component */}
          <CapitalComponent
            capitalAmount={capitalAmount}
            handleCapitalChange={handleCapitalChange}
            handleForward={handleForward}
          />
        </div>
        <div className={styles.placeholder} />
      </div>
    </div>
  );
};
