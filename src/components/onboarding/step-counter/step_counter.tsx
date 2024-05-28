import React from "react";
import classNames from "classnames";
import styles from "./step_counter.module.scss";

export interface StepCounterProps {
  className?: string;
  currentStep: number;
}

export const StepCounter = ({ className, currentStep }: StepCounterProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      Step {currentStep} of 11
    </div>
  );
};
