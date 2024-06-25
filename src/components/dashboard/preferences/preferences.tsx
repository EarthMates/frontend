import React from "react";
import styles from "./preferences.module.scss";

interface PreferencesProps {
  className?: string;
}

const Preferences: React.FC<PreferencesProps> = () => {
  return (
    <div className={styles.root}>
      <h2>Preferences</h2>
    </div>
  );
};

export default Preferences;
