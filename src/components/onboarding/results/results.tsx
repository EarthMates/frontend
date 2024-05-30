import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./results.module.scss";

export interface ResultsProps {
  className?: string;
  onboardingData?: any;
  handleForward?: (e: React.ChangeEvent<any>) => void;
}

export const Results = ({
  className,
  onboardingData,
  handleForward,
}: ResultsProps) => {
  const navigate = useNavigate();

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.checkmark}>
        <span>&#10004;</span>
      </div>
      <h1 className={styles.title}>Welcome to Earthmates!</h1>
      <p className={styles.message}>
        Thank you for choosing Earthmates as your platform for connecting with
        investors, accessing funding, and accelerating your startup's growth.
      </p>
      <div className={styles.onboardingData}>
        <h2>User Data:</h2>
        <p>Name: {onboardingData.name}</p>
        <p>Stage: {onboardingData.stage}</p>
        <p>Industry: {onboardingData.industry}</p>
        <p>Capital: {onboardingData.capital}</p>
        <p>Impact: {onboardingData.impact}</p>
        <p>SDG: {onboardingData.sdg.join(", ")}</p>
        <p>Values: {onboardingData.values.join(", ")}</p>
        <p>Expertise: {onboardingData.expertise.join(", ")}</p>
        <p>Matching: {onboardingData.matching.join(", ")}</p>
        <p>Strategy: {onboardingData.strategy.join(", ")}</p>
      </div>
      <button className={styles.button} onClick={handleForward}>
        Complete Registration
      </button>
    </div>
  );
};

export default Results;
