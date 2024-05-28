import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./results.module.scss";

export interface ResultsProps {
  className?: string;
  userData?: any;
  handleForward?: (e: React.ChangeEvent<any>) => void;
}

export const Results = ({
  className,
  userData,
  handleForward,
  role,
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
      <div className={styles.userData}>
        <h2>User Data:</h2>
        <p>Name: {userData.name}</p>
        <p>Stage: {userData.stage}</p>
        <p>Industry: {userData.industry}</p>
        <p>Capital: {userData.capital}</p>
        <p>Impact: {userData.impact}</p>
        <p>SDG: {userData.sdg.join(", ")}</p>
        <p>Values: {userData.values.join(", ")}</p>
        <p>Expertise: {userData.expertise.join(", ")}</p>
        <p>Matching: {userData.matching.join(", ")}</p>
        <p>Strategy: {userData.strategy.join(", ")}</p>
      </div>
      <button className={styles.button} onClick={handleForward}>
        Complete Registration
      </button>
    </div>
  );
};

export default Results;
