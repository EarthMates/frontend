import React from "react";
import classNames from "classnames";
import styles from "./strategy.module.scss";
import { Button } from "../button/button";
import { StepCounter } from "../step-counter/step_counter";

export interface StrategyProps {
  className?: string;
  selectedStrategy: string[];
  setSelectedStrategy: React.Dispatch<React.SetStateAction<string[]>>;
  handleForward: () => void;
  role: string;
}

export const Strategy = ({
  className,
  selectedStrategy,
  setSelectedStrategy,
  handleForward,
  role,
}: StrategyProps) => {
  const handleStrategyToggle = (strategy: string) => {
    if (selectedStrategy.includes(strategy)) {
      setSelectedStrategy(selectedStrategy.filter((item) => item !== strategy));
    } else {
      setSelectedStrategy([...selectedStrategy, strategy]);
    }
  };

  const strategies = ["Quick Exit", "Long Term Exit", "No Exit"];

  return (
    <div className={classNames(styles.root, className)}>
      <StepCounter currentStep={11} />
      <div className={styles.container}>
        {role == "startup" ? (
          <>
            <h1 className={styles.h1}>I am looking for</h1>
            <p className={styles.p}>Choose your long term business plan</p>
          </>
        ) : (
          <>
            <h1 className={styles.h1}>I am looking for</h1>
            <p className={styles.p}>Choose your long term investment plan</p>
          </>
        )}

        <div className={styles.strategy}>
          {strategies.map((strategy) => (
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
        {selectedStrategy.length > 0 && (
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

export default Strategy;
