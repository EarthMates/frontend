import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import Slider from "../../../../components/onboarding/slider/slider";
import ResultsComponent from "../../../../components/onboarding/results/results";

import { useOnboardingData } from "../../../../context/onboarding-data-context";

import api from "../../../../api";

export interface ResultsProps {
  className?: string;
}

export const Results = ({ className }: ResultsProps) => {
  const navigate = useNavigate();
  const { onboardingData } = useOnboardingData();

  const handleBackward = () => {
    navigate("/onboarding/investor/strategy");
  };

  useEffect(() => {
    setPosition(100);
  }, []);

  const [position, setPosition] = useState(0);

  const [investor, setInvestor] = useState([]);

  const getInvestor = () => {
    api
      .get("/api/investor/")
      .then((res) => res.data)
      .then((data) => {
        setInvestor(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const { user_type, code, ...investorData } = onboardingData;
  const createInvestor = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log(investorData);
    api
      .post("/api/investor/", investorData)
      .then((res) => {
        if (res.status === 201) alert("Investor created!");
        else alert("Failed to make Investor.");
        getInvestor();
      })
      .catch((err) => alert(err));
  };

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={10} />

      <div className={styles.registration}>
        <div className={styles.form}>
          <div className={styles.container}>
            {/* Start of page internal component */}
            <ResultsComponent
              onboardingData={onboardingData}
              handleForward={createInvestor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
