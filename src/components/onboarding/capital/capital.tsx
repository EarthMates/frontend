import classNames from "classnames";
import styles from "./capital.module.scss";

import { Button } from "../button/button";
import { useState } from "react";
import { Slider, Typography, Box } from "@mui/material";
import { StepCounter } from "../step-counter/step_counter";

export interface CapitalProps {
  className?: string;
  capitalAmount: string;
  handleCapitalChange: (value: number) => void;
  handleRangeSelected: (range: string) => void;
  handleForward: () => void;
  role: string;
}

// Function to map slider value to custom scale
const mapValueToCustomScale = (value: number) => {
  if (value <= 100) {
    return value * 10000; // Steps of 10k
  } else {
    return 1000000 + (value - 100) * 100000; // Steps of 100k
  }
};

// Function to map custom scale value to slider value
const mapCustomScaleToValue = (value: number) => {
  if (value <= 1000000) {
    return value / 10000;
  } else {
    return 100 + (value - 1000000) / 100000;
  }
};

export const Capital = ({
  className,
  capitalAmount,
  handleCapitalChange,
  handleRangeSelected,
  handleForward,
  role,
}: CapitalProps) => {
  const [sliderValue, setSliderValue] = useState<number>(0); // Set initial value
  const [selectedRange, setSelectedRanges] = useState<string[]>([]);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const actualValue = mapValueToCustomScale(
      typeof newValue === "number" ? newValue : newValue[0]
    );
    setSliderValue(actualValue);
    handleCapitalChange(actualValue);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <StepCounter currentStep={5} />

      {role == "startup" ? (
        <>
          <h1 className={styles.h1}>
            How much capital does your company need?
          </h1>
          <p className={styles.p}>
            Use the slider to select your company funding need
          </p>
          <Box
            className={styles.sliderContainer}
            border={1}
            borderColor="#e0e0e0"
            borderRadius="20px"
            p={4} // Increase the padding here
          >
            <Box
              className={styles.valueBox}
              border={1}
              borderColor="#e0e0e0"
              borderRadius="20px"
              px={8}
              mb={2}
            >
              <Typography
                id="impact-slider"
                className={styles.valueText}
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  fontFamily: "Oswald",
                  color: "#000000",
                }}
              >
                {`$${sliderValue.toLocaleString()}`}
              </Typography>
            </Box>
            <Slider
              value={mapCustomScaleToValue(sliderValue)}
              onChange={handleSliderChange}
              min={0}
              max={140} // Adjusted maximum value
              step={1}
              marks={[
                { value: 0, label: "$0" },
                { value: 100, label: "$1M" },
                { value: 140, label: "$5M" },
              ]}
              valueLabelDisplay="off"
              sx={{
                color: "#ff8516",
                "& .MuiSlider-thumb": {
                  width: 24,
                  height: 24,
                  backgroundColor: "#ff8516",
                },
                "& .MuiSlider-rail, & .MuiSlider-track": {
                  height: 4,
                },
              }}
            />
          </Box>
          {sliderValue > 0 && (
            <Button
              buttonText="Next"
              onClick={handleForward}
              className={styles.next_button}
            />
          )}
        </>
      ) : (
        <>
          <h1 className={styles.h1}>
            What is the investment range for your firm?
          </h1>
          <p className={styles.p}>Choose one that applies to you</p>
          <div className={styles.investmentRanges}>
            {[
              "$1000 - $10,000",
              "$10,000 - $25,000",
              "$25,000 - $50,000",
              "$50,000 - $100,000",
              "$100,000 - $250,000",
              "$250,000 - $500,000",
              "$500,000 - $1,000,000",
            ].map((range) => (
              <button
                key={range}
                className={classNames(styles.button, {
                  [styles.selected]: selectedRange.includes(range),
                })}
                onMouseEnter={() => setHoveredButton(range)}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => handleRangeSelected(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Capital;
