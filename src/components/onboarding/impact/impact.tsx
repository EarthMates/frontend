import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./impact.module.scss";
import general_styles from "../onboarding.module.scss";
import Slider from "../../slider/slider";

import { useUserData } from "../../../context/user-data-context";
import { Button } from "../../button/button";

export interface ImpactProps {
  className?: string;
}

export const Impact = ({ className }: ImpactProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [impactSelected, setImpactSelected] = useState(false); // State to track impact selection
  const [impactAmount, setImpactAmount] = useState(0); // State to store impact amount

  const handleBackward = () => {
    navigate("/onboarding-startup/capital");
  };

  const handleForward = () => {
    console.log(userData);
    navigate("/onboarding-startup/sdg");
  };

  const handleImpactSelected = (impact: string) => {
    if (impact === "Select impact") {
      setImpactSelected(false); // Reset ImpactSelected if default option is selected
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        impact: parseFloat(impact),
      }));
      setImpactSelected(true); // Set impactSelected to true when an impact is selected
    }
  };

  useEffect(() => {
    setPosition(40);
  }, []);

  const handleImpactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setImpactAmount(value);
    setUserData((prevUserData) => ({
      ...prevUserData,
      impact: value,
    }));
    setImpactSelected(true);
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
              How important is it to have impact through your business?
            </h1>
            <p className={styles.p}>
              Rate the importance of impact for your company on a scale of 1 -
              10
            </p>

            <input
              className={styles.input}
              type="number"
              min={0}
              max={10}
              step={1}
              value={impactAmount}
              onChange={handleImpactChange}
            />

            {impactSelected && (
              <Button buttonText="Next" onClick={handleForward} />
            )}
            {/* Render button only if impact is selected */}
          </div>
        </div>
        <div className={general_styles.placeholder} />
      </div>
    </div>
  );
};
