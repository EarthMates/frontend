// values.tsx
import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Checkbox,
  ListItemText,
} from "@mui/material";
import classNames from "classnames";
import styles from "./values.module.scss";
import { Button } from "../button/button";

export interface ValuesProps {
  className?: string;
  handleValuesSelected: (values: string[]) => void;
  handleForward: () => void;
}

export const Values = ({
  className,
  handleValuesSelected,
  handleForward,
}: ValuesProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [hovered, setHovered] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const value = event.target.value as string[];
    setSelectedValues(value);
    handleValuesSelected(value);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>
        What are the relevant values for your teams?
      </h1>
      <p className={styles.p}>Choose a maximum of 5</p>

      <FormControl fullWidth variant="outlined" className={styles.select}>
        <InputLabel>Select values</InputLabel>
        <Select
          multiple
          value={selectedValues}
          onChange={handleChange}
          label="Select values"
          renderValue={(selected) => selected.join(", ")}
        >
          <MenuItem value="Trust">
            <Checkbox checked={selectedValues.indexOf("Trust") > -1} />
            <ListItemText primary="Trust" />
          </MenuItem>
          <MenuItem value="Respect">
            <Checkbox checked={selectedValues.indexOf("Respect") > -1} />
            <ListItemText primary="Respect" />
          </MenuItem>
          <MenuItem value="Collaboration">
            <Checkbox checked={selectedValues.indexOf("Collaboration") > -1} />
            <ListItemText primary="Collaboration" />
          </MenuItem>
          <MenuItem value="Innovation">
            <Checkbox checked={selectedValues.indexOf("Innovation") > -1} />
            <ListItemText primary="Innovation" />
          </MenuItem>
          <MenuItem value="Accountability">
            <Checkbox checked={selectedValues.indexOf("Accountability") > -1} />
            <ListItemText primary="Accountability" />
          </MenuItem>
          <MenuItem value="Excellence">
            <Checkbox checked={selectedValues.indexOf("Excellence") > -1} />
            <ListItemText primary="Excellence" />
          </MenuItem>
          <MenuItem value="Integrity">
            <Checkbox checked={selectedValues.indexOf("Integrity") > -1} />
            <ListItemText primary="Integrity" />
          </MenuItem>
          <MenuItem value="Diversity">
            <Checkbox checked={selectedValues.indexOf("Diversity") > -1} />
            <ListItemText primary="Diversity" />
          </MenuItem>
          <MenuItem value="Empowerment">
            <Checkbox checked={selectedValues.indexOf("Empowerment") > -1} />
            <ListItemText primary="Empowerment" />
          </MenuItem>
          <MenuItem value="Communication">
            <Checkbox checked={selectedValues.indexOf("Communication") > -1} />
            <ListItemText primary="Communication" />
          </MenuItem>
        </Select>
      </FormControl>

      {selectedValues.length > 0 && (
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

export default Values;
