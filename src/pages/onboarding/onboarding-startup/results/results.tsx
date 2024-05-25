import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "../../onboarding.module.scss";
import arrowLeft from "../../../../assets/arrow-left.svg";
import Slider from "../../../../components/onboarding/slider/slider";
import ResultsComponent from "../../../../components/onboarding/results/results";

import { useUserData } from "../../../../context/user-data-context";

import api from "../../../../api";

export interface ResultsProps {
  className?: string;
}

export const Results = ({ className }: ResultsProps) => {
  const navigate = useNavigate();
  const { userData } = useUserData();

  const handleBackward = () => {
    navigate("/onboarding/startup/strategy");
  };

  useEffect(() => {
    setPosition(100);
  }, []);

  const [position, setPosition] = useState(0);

  const [startup, setStartup] = useState([]);

  const getStartup = () => {
    api
      .get("/api/startup/")
      .then((res) => res.data)
      .then((data) => {
        setStartup(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const { user_type, ...startupData } = userData;
  const createStartup = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log(startupData);
    api
      .post("/api/startup/", startupData)
      .then((res) => {
        if (res.status === 201) alert("Startup created!");
        else alert("Failed to make startup.");
        getStartup();
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
              userData={userData}
              handleForward={createStartup}
              role="startup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
