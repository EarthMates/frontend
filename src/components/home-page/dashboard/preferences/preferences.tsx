import React from "react";
import styles from "./preferences.module.scss";
import { useNavigate } from "react-router-dom";

interface PreferencesProps {
  className?: string;
}

const Preferences: React.FC<PreferencesProps> = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src="/icons/preferences-selected.svg" />
          <h2>Preferences</h2>
        </div>
        <button
          className="orangeLink"
          onClick={() => {
            navigate("/company-details/preferences");
          }}
        >
          <img className="icon" src="/icons/expand.svg" /> View Details
        </button>
        {/*⤢*/}
      </div>
      <div className={styles.body}>
        <p>Some text here</p>
        <p>Some other here</p>
      </div>
    </div>
  );
};

export default Preferences;
