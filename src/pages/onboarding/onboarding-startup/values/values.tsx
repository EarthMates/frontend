import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./values.module.scss";
import general_styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useUserData } from "../../../../context/user-data-context";
import { Button } from "../../../../components/onboarding/button/button";

export interface ValuesProps {
  className?: string;
}

export const Values = ({ className }: ValuesProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [selectedValues, setSelectedValues] = useState<string[]>([]); // State to track selected Values

  console.log(userData);

  const handleBackward = () => {
    navigate("/onboarding-startup/sdg");
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      values: selectedValues,
    }));
    navigate("/onboarding-startup/expertise");
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
    <div className={classNames(general_styles.container)}>
      <Slider position={position} />

      <div className={general_styles.registration}>
        <button className={general_styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={general_styles.form}>
          {/* Start of page internal component */}
          <div className={classNames(styles.root, className)}>
            <h1 className={styles.h1}>
              What are the relevant values for your teams?
            </h1>
            <p className={styles.p}>Choose a maximum of 6</p>

            <div className={styles.checkboxContainer}>
              {/* Render checkboxes for each value */}
              {teamValues.map((value, index) => (
                <div key={index} className={styles.checkboxItem}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedValues.includes(value)}
                        onChange={handleValuesChange}
                        value={value}
                      />
                    }
                    label={`${value}`}
                  />
                </div>
              ))}
            </div>

            <Button buttonText="Next" onClick={handleForward} />
          </div>
        </div>
        <div className={general_styles.placeholder} />
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
