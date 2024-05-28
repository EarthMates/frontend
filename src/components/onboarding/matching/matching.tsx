import React from "react";
import classNames from "classnames";
import styles from "./matching.module.scss";
import { Button } from "../button/button";
import { StepCounter } from "../step-counter/step_counter";

export interface MatchingProps {
  className?: string;
  selectedMatching: string[];
  setSelectedMatching: React.Dispatch<React.SetStateAction<string[]>>;
  handleForward: () => void;
  role: string;
}

export const Matching = ({
  className,
  selectedMatching,
  setSelectedMatching,
  handleForward,
  role,
}: MatchingProps) => {
  const handleMatchingToggle = (matching: string) => {
    if (selectedMatching.includes(matching)) {
      setSelectedMatching(selectedMatching.filter((item) => item !== matching));
    } else {
      setSelectedMatching([...selectedMatching, matching]);
    }
  };

  const matchings = [
    "Family Office",
    "Everybody",
    "VCs",
    "Business Angel",
    "Foundation",
  ];

  return (
    <div className={classNames(styles.root, className)}>
      <StepCounter currentStep={10} />
      <div className={styles.container}>
        <h1 className={styles.h1}>I want to get matched with</h1>
        <p className={styles.p}>
          Select the type of investor you want to get matched with
        </p>

        <div className={styles.matching}>
          {matchings.map((matching) => (
            <button
              key={matching}
              className={classNames(styles.button, {
                [styles.selected]: selectedMatching.includes(matching),
              })}
              onClick={() => handleMatchingToggle(matching)}
            >
              {matching}
            </button>
          ))}
        </div>
        {selectedMatching.length > 0 && (
          <Button
            buttonText="Next"
            onClick={handleForward}
            className={styles.next_button}
          />
        )}
      </div>
    </div>
  );
};

export default Matching;
