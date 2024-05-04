import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./role.module.scss";
import general_styles from "../onboarding.module.scss";
import Slider from "../../slider/slider";

import ArrowRight from "../../../assets/arrow-right.svg";
import BuildingIcon from "../../../assets/building.svg";
import ManagerIcon from "../../../assets/manager.svg";

import { useUserData } from "../../../context/user-data-context";

export interface RoleProps {
  className?: string;
}

export const Role = ({ className }: RoleProps) => {
  const navigate = useNavigate();

  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);

  const handleBackward = () => {};

  const handleRoleSelected = (role: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      user_type: role,
    }));
    navigate("/onboarding-startup/stage");
  };

  useEffect(() => {
    setPosition(0);
  }, []);

  return (
    <div className={classNames(general_styles.root)}>
      <Slider position={position} />
      <div className={general_styles.registration}>
        <div className={general_styles.placeholder} />

        <div className={general_styles.form}>
          <div className={classNames(styles.root, className)}>
            <p className={styles.p}>Welcome to Earthmates</p>
            <h1 className={styles.h1}>
              Please select your role or interest on Earthmates
            </h1>

            <div
              className={styles.role}
              id="startup"
              onClick={() => handleRoleSelected("startup")}
            >
              <img src={BuildingIcon} alt="building" />
              <div className={styles.description}>
                <h1 className={styles.h1}>Startup Founder</h1>
                <p className={styles.p}>
                  For startup founders looking to showcase their venture,
                  attract investment, and drive growth.
                </p>
              </div>
              <img src={ArrowRight} alt="building" />
            </div>

            <div
              className={styles.role}
              id="investor"
              onClick={() => handleRoleSelected("investor")}
            >
              <img src={ManagerIcon} alt="manager" />
              <div className={styles.description}>
                <h1 className={styles.h1}>Investor</h1>
                <p className={styles.p}>
                  For investors seeking to discover promising startups, explore
                  investment opportunities, and support entrepreneurship.
                </p>
              </div>
              <img src={ArrowRight} alt="building" />
            </div>
          </div>
        </div>

        <div className={general_styles.placeholder} />
      </div>
    </div>
  );
};
