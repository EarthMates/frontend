import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./matching.module.scss";
import general_styles from "../../onboarding.module.scss";
import Slider from "../../../../components/slider/slider";

import { useUserData } from "../../../../context/user-data-context";
import { Button } from "../../../../components/button/button";

export interface MatchingProps {
  className?: string;
}

export const Matching = ({ className }: MatchingProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();
  console.log(userData);

  const [position, setPosition] = useState(0);
  const [selectedMatching, setSelectedMatching] = useState<string[]>([]);

  const handleBackward = () => {
    navigate("/onboarding-startup/expertise");
  };

  const handleMatchingToggle = (matching: string) => {
    if (selectedMatching.includes(matching)) {
      setSelectedMatching(selectedMatching.filter((item) => item !== matching));
    } else {
      setSelectedMatching([...selectedMatching, matching]);
    }
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      matching: selectedMatching,
    }));
    navigate("/onboarding-startup/strategy");
  };

  useEffect(() => {
    setPosition(80);
  }, []);

  const matchings = [
    "Family Office",
    "VCs",
    "Business Angels",
    "Foundations",
    "Everyone",
  ];

  return (
    <div className={classNames(general_styles.container)}>
      <Slider position={position} />

      <div className={general_styles.registration}>
        <button
          className={general_styles.button}
          onClick={() => handleBackward()}
        >
          Back
        </button>
        <div className={general_styles.form}>
          {/* Start of page internal component */}
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
        </div>
        <div className={general_styles.placeholder} />
      </div>
    </div>
  );
};
