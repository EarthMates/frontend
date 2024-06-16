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
          <MenuItem value="Real estate">Real estate</MenuItem>
          <MenuItem value="Nature protection">Nature protection</MenuItem>
          <MenuItem value="Woman Empowerment">Woman Empowerment</MenuItem>
          <MenuItem value="Poverty alleviation">Poverty alleviation</MenuItem>
          <MenuItem value="Greentech">Greentech</MenuItem>
          <MenuItem value="Smart City">Smart City</MenuItem>
          <MenuItem value="Mobility">Mobility</MenuItem>
          <MenuItem value="Energy">Energy</MenuItem>
          <MenuItem value="Education">Education</MenuItem>
          <MenuItem value="Health">Health</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Cosmetics">Cosmetics</MenuItem>
          <MenuItem value="Financial & Insurance">Financial & Insurance</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Legal">Legal</MenuItem>
          <MenuItem value="Rental & Repair">Rental & Repair</MenuItem>
          <MenuItem value="Transportation & storage">Transportation & storage</MenuItem>
          <MenuItem value="Information & Communication">Information & Communication</MenuItem>
          <MenuItem value="Arts, entertainment & recreation">Arts, entertainment & recreation</MenuItem>
          <MenuItem value="Support services">Support services</MenuItem>
          <MenuItem value="Technical services">Technical services</MenuItem>
          <MenuItem value="Environmental Consulting">Environmental Consulting</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
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
