// Industry.tsx
import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import classNames from "classnames";
import styles from "./industry.module.scss";
import { Button } from "../button/button";
import { StepCounter } from "../step-counter/step_counter";

export interface IndustryProps {
  className?: string;
  handleIndustrySelected: (industry: string) => void;
  handleForward: () => void;
  role: string;
}

export const Industry = ({
  className,
  handleIndustrySelected,
  handleForward,
  role,
}: IndustryProps) => {
  const [selectedIndustry, setSelectedIndustry] =
    useState<string>("Select industry");
  const [hovered, setHovered] = useState(false);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectedIndustry(value);
    handleIndustrySelected(value);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <StepCounter currentStep={4} />
      {role == "startup" ? (
        <>
          <h1 className={styles.h1}>
            Which industry does your company belong to?
          </h1>
          <p className={styles.p}>Choose your company's niche</p>
        </>
      ) : (
        <>
          <h1 className={styles.h1}>
            Which industry do you want to invest in?
          </h1>
          <p className={styles.p}>Choose your company niche</p>
        </>
      )}

      <FormControl fullWidth variant="outlined" className={styles.select}>
        <InputLabel>Select industry</InputLabel>
        <Select
          value={selectedIndustry}
          onChange={handleChange}
          label="Select industry"
        >
          <MenuItem value="Select industry">Select industry</MenuItem>
          <MenuItem value="Technology">Technology</MenuItem>
          <MenuItem value="Agriculture">Agriculture</MenuItem>
          <MenuItem value="Mobility">Mobility</MenuItem>
          <MenuItem value="Finance">Finance</MenuItem>
        </Select>
      </FormControl>

      {selectedIndustry !== "Select industry" && (
        <div
          className={styles.buttonContainer}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Button
            buttonText="Next"
            onClick={handleForward}
            className={hovered ? styles.selected : ""}
          />
        </div>
      )}
    </div>
  );
};

export default Industry;
