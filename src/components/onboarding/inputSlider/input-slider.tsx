import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import "./input-slider.module.scss";

interface InputSliderProps {
  value: number;
  onChange: (event: Event, value: number | number[]) => void;
}

const InputSlider: React.FC<InputSliderProps> = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState<number>(value);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setDisplayValue(typeof newValue === "number" ? newValue : newValue[0]);
    onChange(event, newValue);
  };

  function formatNumber(number: number): string {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <div className="InputSlider-container">
      <div>{"$" + formatNumber(displayValue)}</div>
      <Slider
        aria-label="Value"
        value={value}
        onChange={handleSliderChange}
        step={10000} // Steps of 10,000
        min={0} // Minimum value set to 0
        max={1500000} // Maximum value set to 1,500,000
        marks={[
          { value: 0, label: "$0" },
          { value: 1500000, label: "$1.5M" },
        ]}
      />
    </div>
  );
};

export default InputSlider;
