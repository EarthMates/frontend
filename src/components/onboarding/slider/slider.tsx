import React from "react";
import classNames from "classnames";
import styles from "./slider.module.scss";

interface SliderProps {
  position: number;
}

const Slider: React.FC<SliderProps> = ({ position }) => {
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.sliderTrack}>
        <div
          className={styles.sliderThumb}
          style={{ width: `${position}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
