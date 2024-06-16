import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Slider, Typography, Box, Tooltip } from "@mui/material";
import styles from "./impact.module.scss";
import { Button } from "../button/button";
import { StepCounter } from "../step-counter/step_counter";

export interface ImpactProps {
  className?: string;
  impactAmount: number;
  handleImpactChange: (value: number) => void;
  handleForward: () => void;
  role: string;
}

export const Impact = ({
  className,
  impactAmount,
  handleImpactChange,
  handleForward,
  role,
}: ImpactProps) => {
  const [sliderValue, setSliderValue] = useState<number>(impactAmount); // Use initial value from props

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const value = typeof newValue === "number" ? newValue : newValue[0];
    setSliderValue(value);
    handleImpactChange(value);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <StepCounter currentStep={6} />
      {role === "startup" ? (
        <>
          <h1 className={styles.h1}>
            How important is it to have{" "}
            <Tooltip title="Measurable positive social or environmental change created by your company's products, services, or operations.">
              <span className={styles.underline}>impact</span>
            </Tooltip>{" "}
            through your business?
          </h1>
          <p className={styles.p}>
            Rate the importance of impact for your company on a scale of 1 - 10
          </p>
        </>
      ) : (
        <>
          <h1 className={styles.h1}>
            How do you prioritize investment in social{" "}
            <Tooltip title="Measurable positive social or environmental change created by your company's products, services, or operations.">
              <span className={styles.underline}>impact</span>
            </Tooltip>{" "}
           ?
          </h1>
          <p className={styles.p}>
            Rate the importance of impact for your company on a scale of 1 - 10
          </p>
        </>
      )}

      <Box
        className={styles.sliderContainer}
        border={1}
        borderColor="#e0e0e0"
        borderRadius="20px"
        p={4}
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
            {sliderValue}
          </Typography>
        </Box>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          min={1}
          max={10}
          step={1}
          marks={[
            { value: 1, label: "1" },
            { value: 10, label: "10" },
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
          className={styles.button}
        />
      )}
    </div>
  );
};

export default Impact;
