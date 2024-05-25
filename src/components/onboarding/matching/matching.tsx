import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./matching.module.scss";
import { Button } from "../button/button";

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
    "VCs",
    "Business Angels",
    "Foundations",
    "Everyone",
  ];

  if (role === "startup") {
    return (
      <div className={classNames(styles.root, className)}>
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
        {true && <Button buttonText="Next" onClick={handleForward} />}
      </div>
    );
  } else {
    return (
      <div className={classNames(styles.root, className)}>
        <h1 className={styles.h1}>I want to get matched with</h1>
        <p className={styles.p}>
          Select the type of company you want to get matched with
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
        {true && <Button buttonText="Next" onClick={handleForward} />}
      </div>
    );
  }
};
export default Matching;
