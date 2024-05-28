import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./onboarding.module.scss";
import { Button } from "../../components/onboarding/button/button";

import ArrowRight from "../../assets/arrow-right.svg";
import BuildingIcon from "../../assets/building.svg";
import ManagerIcon from "../../assets/manager.svg";

import { useUserData } from "../../context/user-data-context";
import { Header } from "../../components/headers/onboarding/header-onboarding";
import { StepCounter } from "../../components/onboarding/step-counter/step_counter";
import Slider from "../../components/onboarding/slider/slider";

export interface OnboardingProps {
  className?: string;
}

export const Onboarding = ({ className }: OnboardingProps) => {
  const navigate = useNavigate();

  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);

  const handleRoleSelected = (role: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      user_type: role,
    }));
    if (role === "startup") {
      navigate("/onboarding/startup/name");
    } else if (role === "investor") {
      navigate("/onboarding/investor/name");
    }
  };

  useEffect(() => {
    setPosition(0);
  }, []);

  return (
    <div className={classNames(styles.root, className)}>
      <Slider position={0} />
      <div className={styles.registration}>
        <div className={styles.form}>
          <StepCounter currentStep={1} />
          <p className={styles.p}>Welcome to Earthmates</p>
          <h1 className={styles.h1}>
            Please select your role or interest on Earthmates
          </h1>

          <div className={styles.rolesContainer}>
            <div className={styles.role}>
              <img
                src={BuildingIcon}
                alt="Startup Founder"
                className={styles.icon}
              />
              <div
                className={classNames(
                  styles.description,
                  styles.descriptionContainer
                )}
              >
                <h1 className={styles.h1}>Startup Founder</h1>
                <p className={styles.p}>
                  For startup founders looking to showcase their venture,
                  attract investment, and drive growth.
                </p>
                <br />
                <br />
                <div className={styles.standardButton}>
                  <Button
                    buttonText="I am a Startup Founder"
                    onClick={() => handleRoleSelected("startup")}
                  />
                </div>
              </div>
            </div>

            <div className={styles.role}>
              <img src={ManagerIcon} alt="Investor" className={styles.icon} />
              <div
                className={classNames(
                  styles.description,
                  styles.descriptionContainer
                )}
              >
                <h1 className={styles.h1}>Investor</h1>
                <p className={styles.p}>
                  For investors seeking to discover promising startups, explore
                  investment opportunities, and support entrepreneurship.
                </p>
                <br />
                <div style={{ height: "0.3em" }} />
                <div className={styles.standardButton}>
                  <Button
                    buttonText="I am an Investor"
                    onClick={() => handleRoleSelected("investor")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
