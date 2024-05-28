import React from "react";
import classNames from "classnames";
import styles from "./expertise.module.scss";
import { Button } from "../button/button";
import { StepCounter } from "../step-counter/step_counter";

export interface ExpertiseProps {
  className?: string;
  selectedExpertise: string[];
  setSelectedExpertise: React.Dispatch<React.SetStateAction<string[]>>;
  handleForward: () => void;
  role: string;
}

export const Expertise = ({
  className,
  selectedExpertise,
  setSelectedExpertise,
  handleForward,
  role,
}: ExpertiseProps) => {
  const handleExpertiseToggle = (expertise: string) => {
    if (selectedExpertise.includes(expertise)) {
      setSelectedExpertise(
        selectedExpertise.filter((item) => item !== expertise)
      );
    } else {
      setSelectedExpertise([...selectedExpertise, expertise]);
    }
  };

  const expertises = [
    "Accounting",
    "Controlling",
    "Fundraising",
    "Personnel",
    "Logistics",
    "Management",
    "Marketing",
    "PR",
    "Procurement",
    "Development",
    "Production",
    "Sales",
    "Strategy",
    "Technology",
  ];

  return (
    <div className={classNames(styles.root, className)}>
      <StepCounter currentStep={9} />
      <div className={styles.container}>
        {role == "startup" ? (
          <>
            <h1 className={styles.h1}>Investors expert knowledge</h1>
            <p className={styles.p}>
              Choose the necessary expert knowledge you need from investors to
              enable us to match you with investors who can provide valuable
              insights and support tailored to your specific industry and growth
              stage.
            </p>
          </>
        ) : (
          <>
            <h1 className={styles.h1}>What is your area of expertise?</h1>
            <p className={styles.p}>
              Choose the necessary expert knowledge you possess as an investor
              to enable us to match you with startups who can provide valuable
              insights and support tailored to your specific industry and growth
              stage.
            </p>
          </>
        )}

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
        {selectedExpertise.length > 0 && (
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

export default Expertise;
