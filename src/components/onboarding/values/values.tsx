import React, { useState } from "react";
import classNames from "classnames";
import styles from "./values.module.scss";
import { Button } from "../button/button";
import { StepCounter } from "../step-counter/step_counter";

export interface ValuesProps {
  className?: string;
  handleValuesSelected: (values: string[]) => void;
  handleForward: () => void;
  role: string;
}

export const Values = ({
  className,
  handleValuesSelected,
  handleForward,
  role,
}: ValuesProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const values = [
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

  const handleButtonClick = (value: string) => {
    let newSelectedValues;
    if (selectedValues.includes(value)) {
      newSelectedValues = selectedValues.filter((v) => v !== value);
    } else if (selectedValues.length < 6) {
      newSelectedValues = [...selectedValues, value];
    } else {
      newSelectedValues = selectedValues;
    }
    setSelectedValues(newSelectedValues);
    handleValuesSelected(newSelectedValues);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <StepCounter currentStep={8} />
      {role == "startup" ? (
        <>
          <h1 className={styles.h1}>
            What are the relevant values for your teams?
          </h1>
          <p className={styles.p}>Choose a maximum of 5</p>
        </>
      ) : (
        <>
          <h1 className={styles.h1}>
            What are the relevant values you are looking for in teams?
          </h1>
          <p className={styles.p}>Choose a maximum of 6</p>
        </>
      )}

      <div className={styles.valuesContainer}>
        {values.map((value) => (
          <button
            key={value}
            className={classNames(styles.button, {
              [styles.selected]: selectedValues.includes(value),
            })}
            onMouseEnter={() => setHoveredButton(value)}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
      </div>

      {selectedValues.length > 0 && (
        <div
          className={styles.buttonContainer}
          onMouseEnter={() => setHoveredButton("Next")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Button
            buttonText="Next"
            onClick={handleForward}
            className={hoveredButton === "Next" ? styles.selected : ""}
          />
        </div>
      )}
    </div>
  );
};

export default Values;
