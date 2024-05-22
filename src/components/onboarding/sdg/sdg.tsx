import classNames from "classnames";
import styles from "./sdg.module.scss";

import Checkbox from "@mui/material/Checkbox";

import { useState } from "react";
import { Button } from "../button/button";

interface SdgProps {
  className?: string;
  selectedSdgs: string[];
  setSelectedSdgs: React.Dispatch<React.SetStateAction<string[]>>;
  handleForward: () => void;
}

function Sdg({
  className,
  selectedSdgs,
  setSelectedSdgs,
  handleForward,
}: SdgProps) {
  const handleSdgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sdg = event.target.value;
    if (event.target.checked) {
      // Add the selected SDG to the array if checked
      if (selectedSdgs.length < 5) {
        console.log(sdg);
        setSelectedSdgs([...selectedSdgs, sdg]);
        console.log(selectedSdgs);
      } else {
        event.preventDefault(); // Prevent checking more than 5 SDGs
      }
    } else {
      // Remove the SDG from the array if unchecked
      setSelectedSdgs(selectedSdgs.filter((item) => item !== sdg));
    }
  };
  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>
        Which SDGs do you fulfill with your startup project?
      </h1>
      <p className={styles.p}>Choose a maximum of 5</p>

      <div className={styles.checkboxContainer}>
        {/* Render checkboxes for each SDG */}
        {Array.from({ length: 17 }).map((_, index) => (
          <div key={index} className={styles.checkboxItem}>
            <Checkbox
              sx={{
                color: "#b3b3b3",
                "&.Mui-checked": {
                  color: "#ff8516", // Purple color for checked state
                },
              }}
              checked={selectedSdgs.includes(
                `SDG ${index + 1}: ${getSdgTitle(index + 1)}`
              )}
              onChange={handleSdgChange}
              value={`SDG ${index + 1}: ${getSdgTitle(index + 1)}`}
            />
            <div className="checkboxText-container">
              <p className={styles.checkboxTitle}>{`${getSdgTitle(
                index + 1
              )}`}</p>
              <p className={styles.checkboxText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button buttonText="Next" onClick={handleForward} />
    </div>
  );
}

export default Sdg;

const getSdgTitle = (index: number) => {
  switch (index) {
    case 1:
      return "No Poverty";
    case 2:
      return "Zero Hunger";
    case 3:
      return "Good Health and Well-being";
    case 4:
      return "Quality Education";
    case 5:
      return "Gender Equality";
    case 6:
      return "Clean Water and Sanitation";
    case 7:
      return "Affordable and Clean Energy";
    case 8:
      return "Decent Work and Economic Growth";
    case 9:
      return "Industry, Innovation and Infrastructure";
    case 10:
      return "Reduced Inequalities";
    case 11:
      return "Sustainable Cities and Communities";
    case 12:
      return "Responsible Consumption and Production";
    case 13:
      return "Climate Action";
    case 14:
      return "Life Below Water";
    case 15:
      return "Life on Land";
    case 16:
      return "Peace, Justice, and Strong Institutions";
    case 17:
      return "Partnerships for the Goals";
    default:
      return "";
  }
};
