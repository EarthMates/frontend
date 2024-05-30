import React, { useState } from "react";
import classNames from "classnames";
import styles from "./stage.module.scss";
import { StepCounter } from "../step-counter/step_counter";
import { Button } from "../button/button";

interface StageProps {
  className?: string;
  handleStageSelected: (stage: string[]) => void;
  role: string;
}

function Stage({ className, handleStageSelected, role }: StageProps) {
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleStageToggle = (stage: string) => {
    if (role === "startup") {
      setSelectedStages([stage]);
    } else {
      if (selectedStages.includes(stage)) {
        setSelectedStages(selectedStages.filter((item) => item !== stage));
      } else {
        setSelectedStages([...selectedStages, stage]);
      }
    }
    console.log(selectedStages);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <StepCounter currentStep={3} />
      {role == "startup" ? (
        <>
          <h1 className={styles.h1}>What's your company's current stage?</h1>
          <p className={styles.p}>Choose one that applies to your company</p>
        </>
      ) : (
        <>
          <h1 className={styles.h1}>
            What's funding stage are you interested in investing in?
          </h1>
          <p className={styles.p}>Choose one that applies to you</p>
        </>
      )}

      <div className={styles.stages}>
        {[
          "Pre-Seed Phase",
          "Seed Stage",
          "Pre-Series A",
          "Series A",
          "Pre-Series B",
          "Series B",
          "Series C",
          "Bridge",
        ].map((stage) => (
          <button
            key={stage}
            className={classNames(styles.button, {
              [styles.selected]: selectedStages.includes(stage),
            })}
            onMouseEnter={() => setHoveredButton(stage)}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={
              role === "startup"
                ? () => handleStageSelected([stage])
                : () => handleStageToggle(stage)
            }
          >
            {stage}
          </button>
        ))}
      </div>
      {role !== "startup" && selectedStages.length > 0 && (
        <Button
          buttonText="Next"
          onClick={() => handleStageSelected(selectedStages)}
          className={styles.next_button}
        />
      )}
    </div>
  );
}

export default Stage;
