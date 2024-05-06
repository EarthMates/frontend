import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./impact.module.scss";

import { Button } from "../button/button";
import exp from "constants";

export interface ImpactProps {
  className?: string;
  impactAmount: number;
  handleImpactChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleForward: () => void;
}

export const Impact = ({
  className,
  impactAmount,
  handleImpactChange,
  handleForward,
}: ImpactProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>
        How important is it to have impact through your business?
      </h1>
      <p className={styles.p}>
        Rate the importance of impact for your company on a scale of 1 - 10
      </p>
      <input
        className={styles.input}
        type="number"
        min={0}
        max={10}
        step={1}
        value={impactAmount}
        onChange={handleImpactChange}
      />
      {true && <Button buttonText="Next" onClick={handleForward} />}{" "}
      {/* Should display only if impact > 0 */}
      {/* Render button only if impact is selected */}
    </div>
  );
};

export default Impact;
