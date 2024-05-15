import * as React from "react";
import Slider from "@mui/material/Slider";
import styles from "./input-slider.module.scss";

interface InputSliderProps {
  position: number;
}

const InputSlider: React.FC<InputSliderProps> = ({ position }) => {
  return (
    <div className="input-slider-container">
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={110}
      />
    </div>
  );
};

export default InputSlider;
