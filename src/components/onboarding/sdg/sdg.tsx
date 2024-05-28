import React from "react";
import classNames from "classnames";
import styles from "./sdg.module.scss";
import { Button } from "../button/button";
import { StepCounter } from "../step-counter/step_counter";

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
  role,
}: SdgProps) {
  const handleSdgChange = (sdg: string) => {
    if (selectedSdgs.includes(sdg)) {
      setSelectedSdgs(selectedSdgs.filter((item) => item !== sdg));
    } else if (selectedSdgs.length < 5) {
      setSelectedSdgs([...selectedSdgs, sdg]);
    }
  };

  return (
    <div className={classNames(styles.root, className)}>
      <StepCounter currentStep={7} />
      <div className={styles.container}>
        <h1 className={styles.h1}>
          Which <span className={styles.sdgText}>SDGs</span> do you fulfill with
          your startup project?
        </h1>
        <p className={styles.p}>Choose a maximum of 5</p>

        <div className={styles.checkboxContainer}>
          {Array.from({ length: 17 }).map((_, index) => {
            const sdg = `SDG ${index + 1}: ${getSdgTitle(index + 1)}`;
            const isSelected = selectedSdgs.includes(sdg);
            return (
              <div
                key={index}
                className={classNames(styles.checkboxItem, {
                  [styles.selected]: isSelected,
                })}
                onClick={() => handleSdgChange(sdg)}
                title={getSdgDescription(index + 1)} // Tooltip text
              >
                <div className={styles.checkboxTextContainer}>
                  <p
                    className={classNames(styles.checkboxTitle, {
                      [styles.selectedText]: isSelected,
                    })}
                  >
                    {getSdgTitle(index + 1)}
                  </p>
                  <p
                    className={classNames(styles.checkboxDescription, {
                      [styles.selectedText]: isSelected,
                    })}
                  >
                    {getSdgDescription(index + 1)}
                  </p>
                </div>
              </div>
            );
          })}
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
