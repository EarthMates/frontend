import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./expertise.module.scss";
import general_styles from "../../onboarding.module.scss";
import Slider from "../../../../components/onboarding/slider/slider";

import { useUserData } from "../../../../context/user-data-context";
import { Button } from "../../../../components/onboarding/button/button";

export interface ExpertiseProps {
  className?: string;
}

export const Expertise = ({ className }: ExpertiseProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();
  console.log(userData);

  const [position, setPosition] = useState(0);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

  const handleBackward = () => {
    navigate("/onboarding-startup/values");
  };

  const handleExpertiseToggle = (expertise: string) => {
    if (selectedExpertise.includes(expertise)) {
      setSelectedExpertise(
        selectedExpertise.filter((item) => item !== expertise)
      );
    } else {
      setSelectedExpertise([...selectedExpertise, expertise]);
    }
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      expertise: selectedExpertise,
    }));
    navigate("/onboarding-startup/matching");
  };

  useEffect(() => {
    setPosition(70);
  }, []);

  const expertises = [
    "Accounting",
    "Controlling",
    "Fundraising",
    "HR",
    "Logistics",
    "Management",
    "Marketing",
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
            <h1 className={styles.h1}>Investors expert knowledge</h1>
            <p className={styles.p}>
              Choose the necessary expert knowledge you need from investors to
              enable us match you with investors who can provide valuable
              insights and support tailored to your specific industry and growth
              stage.
            </p>

            <div className={styles.expertise}>
              {expertises.map((expertise) => (
                <button
                  key={expertise}
                  className={classNames(styles.button, {
                    [styles.selected]: selectedExpertise.includes(expertise),
                  })}
                  onClick={() => handleExpertiseToggle(expertise)}
                >
                  {expertise}
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
