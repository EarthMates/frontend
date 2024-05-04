import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./strategy.module.scss";
import general_styles from "../onboarding.module.scss";
import Slider from "../../slider/slider";

import { useUserData } from "../../../context/user-data-context";
import { Button } from "../../button/button";

export interface StrategyProps {
  className?: string;
}

export const Strategy = ({ className }: StrategyProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();
  console.log(userData);

  const [position, setPosition] = useState(0);
  const [selectedStrategy, setSelectedStrategy] = useState<string[]>([]);

  const handleBackward = () => {
    navigate("/onboarding-startup/matching");
  };

  const handleStrategyToggle = (strategy: string) => {
    if (selectedStrategy.includes(strategy)) {
      setSelectedStrategy(selectedStrategy.filter((item) => item !== strategy));
    } else {
      setSelectedStrategy([...selectedStrategy, strategy]);
    }
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      strategy: selectedStrategy,
    }));
    navigate("/onboarding-startup/results");
  };

  useEffect(() => {
    setPosition(14.3);
  }, []);

  const strategys = ["Clear and quick exit", "A long term exit", "No exit"];

  return (
    <div className={classNames(general_styles.root)}>
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
            <h1 className={styles.h1}>I am looking for</h1>
            <p className={styles.p}>Choose your long term business plan</p>

            <div className={styles.strategy}>
              {strategys.map((strategy) => (
                <button
                  key={strategy}
                  className={classNames(styles.button, {
                    [styles.selected]: selectedStrategy.includes(strategy),
                  })}
                  onClick={() => handleStrategyToggle(strategy)}
                >
                  {strategy}
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
