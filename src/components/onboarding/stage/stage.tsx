import React, { useState } from "react";
import classNames from "classnames";
import styles from "./stage.module.scss";

interface StageProps {
  className?: string;
  handleStageSelected: (stage: string) => void;
  role: string;
}

function Stage({ className, handleStageSelected, role }: StageProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  if (role === "startup") {
    return (
      <div className={classNames(styles.root, className)}>
        <h1 className={styles.h1}>What's your company's current stage?</h1>
        <p className={styles.p}>Choose one that applies to your company</p>

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
                [styles.selected]: hoveredButton === stage,
              })}
              onMouseEnter={() => setHoveredButton(stage)}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleStageSelected(stage)}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={classNames(styles.root, className)}>
        <h1 className={styles.h1}>
          What’s funding stage are you interested in investing in?
        </h1>
        <p className={styles.p}>Choose one that applies to you</p>

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
                [styles.selected]: hoveredButton === stage,
              })}
              onMouseEnter={() => setHoveredButton(stage)}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleStageSelected(stage)}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Stage;
