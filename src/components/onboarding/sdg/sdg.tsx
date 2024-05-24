import React from "react";
import classNames from "classnames";
import styles from "./sdg.module.scss";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "../button/button";

interface SdgProps {
  className?: string;
  selectedSdgs: string[];
  setSelectedSdgs: React.Dispatch<React.SetStateAction<string[]>>;
  handleForward: () => void;
  role: string;
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
      if (selectedSdgs.length < 5) {
        setSelectedSdgs([...selectedSdgs, sdg]);
      } else {
        event.preventDefault();
      }
    } else {
      setSelectedSdgs(selectedSdgs.filter((item) => item !== sdg));
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          Which SDGs do you fulfill with your startup project?
        </h1>
        <p className={styles.p}>Choose a maximum of 5</p>

        <div className={styles.checkboxContainer}>
          {Array.from({ length: 17 }).map((_, index) => (
            <div
              key={index}
              className={styles.checkboxItem}
              title={getSdgDescription(index + 1)}
            >
              <Checkbox
                sx={{
                  color: "#b3b3b3",
                  "&.Mui-checked": {
                    color: "#ff8516",
                  },
                }}
                checked={selectedSdgs.includes(
                  `SDG ${index + 1}: ${getSdgTitle(index + 1)}`
                )}
                onChange={handleSdgChange}
                value={`SDG ${index + 1}: ${getSdgTitle(index + 1)}`}
              />
              <div className={styles.checkboxTextContainer}>
                <p className={styles.checkboxTitle}>
                  {`${getSdgTitle(index + 1)}`}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button
          buttonText="Next"
          onClick={handleForward}
          className={styles.next_button}
        />
      </div>
    </div>
  );
}

export default Sdg;

const getSdgTitle = (index: number) => {
  const titles = [
    "No Poverty",
    "Zero Hunger",
    "Good Health and Well-being",
    "Quality Education",
    "Gender Equality",
    "Clean Water and Sanitation",
    "Affordable and Clean Energy",
    "Decent Work and Economic Growth",
    "Industry, Innovation and Infrastructure",
    "Reduced Inequalities",
    "Sustainable Cities and Communities",
    "Responsible Consumption and Production",
    "Climate Action",
    "Life Below Water",
    "Life on Land",
    "Peace, Justice, and Strong Institutions",
    "Partnerships for the Goals",
  ];
  return titles[index - 1] || "";
};

const getSdgDescription = (index: number) => {
  const descriptions = [
    "End poverty in all its forms everywhere",
    "End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
    "Ensure healthy lives and promote well-being for all at all ages",
    "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
    "Achieve gender equality and empower all women and girls",
    "Ensure availability and sustainable management of water and sanitation for all",
    "Ensure access to affordable, reliable, sustainable and modern energy for all",
    "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
    "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
    "Reduce inequality within and among countries",
    "Make cities and human settlements inclusive, safe, resilient and sustainable",
    "Ensure sustainable consumption and production patterns",
    "Take urgent action to combat climate change and its impacts",
    "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
    "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss",
    "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels",
    "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development",
  ];
  return descriptions[index - 1] || "";
};

///
