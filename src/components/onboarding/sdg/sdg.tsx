import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import styles from "./sdg.module.scss";
import general_styles from "../onboarding.module.scss";
import Slider from "../../slider/slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useUserData } from "../../../context/user-data-context";
import { Button } from "../../button/button";

export interface SdgProps {
  className?: string;
}

export const Sdg = ({ className }: SdgProps) => {
  const navigate = useNavigate();
  const { userData, setUserData } = useUserData();

  const [position, setPosition] = useState(0);
  const [selectedSdgs, setSelectedSdgs] = useState<string[]>([]); // State to track selected SDGs

  const handleBackward = () => {
    navigate("/onboarding-startup/impact");
  };

  const handleForward = () => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      sdg: selectedSdgs,
    }));
    navigate("/onboarding-startup/values");
  };

  useEffect(() => {
    setPosition(50);
  }, []);

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
    <div className={classNames(general_styles.root)}>
      <Slider position={position} />

      <div className={general_styles.registration}>
        <button className={general_styles.button} onClick={handleBackward}>
          Back
        </button>
        <div className={general_styles.form}>
          {/* Start of page internal component */}
          <div className={classNames(styles.root, className)}>
            <h1 className={styles.h1}>
              Which SDGs do you fulfill with your startup project?
            </h1>
            <p className={styles.p}>Choose a maximum of 5</p>

            <div className={styles.checkboxContainer}>
              {/* Render checkboxes for each SDG */}
              {Array.from({ length: 17 }).map((_, index) => (
                <div key={index} className={styles.checkboxItem}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedSdgs.includes(
                          `SDG ${index + 1}: ${getSdgTitle(index + 1)}`
                        )}
                        onChange={handleSdgChange}
                        value={`SDG ${index + 1}: ${getSdgTitle(index + 1)}`}
                      />
                    }
                    label={`${getSdgTitle(index + 1)}`}
                  />
                </div>
              ))}
            </div>

            <Button buttonText="Next" onClick={handleForward} />
          </div>
        </div>
        <div className={general_styles.placeholder} />
      </div>
    </div>
  );
};

// Function to get the title of the SDG based on its index
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
