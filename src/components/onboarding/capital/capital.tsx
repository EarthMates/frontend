import classNames from "classnames";
import styles from "./capital.module.scss";

import { Button } from "../button/button";
import { useState } from "react";
import InputSlider from "../inputSlider/input-slider";

export interface CapitalProps {
  className?: string;
  capitalAmount: number;
  handleCapitalChange: (value: number) => void;
  handleForward: () => void;
}

export const Capital = ({
  className,
  capitalAmount,
  handleCapitalChange,
  handleForward,
}: CapitalProps) => {
  const [sliderValue, setSliderValue] = useState<number>(500000); // Set initial value
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(typeof newValue === "number" ? newValue : newValue[0]);
    handleCapitalChange(typeof newValue === "number" ? newValue : 0);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>How much capital does your company need?</h1>
      <p className={styles.p}>
        Use the slider to select your company funding need
      </p>
      {/* <input
        className={styles.input}
        type="number"
        min={0}
        max={1000000}
        step={10000}
        value={capitalAmount}
        onChange={handleCapitalChange}
      /> */}
      <div>
        <InputSlider value={sliderValue} onChange={handleSliderChange} />
      </div>
      {true && <Button buttonText="Next" onClick={handleForward} />}{" "}
      {/* Should be only if capital > 0 */}
      {/* Render button only if capital is selected */}
    </div>
  );
};

export default Capital;
