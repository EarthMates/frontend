import React from "react";
import styles from "./team.module.scss";

interface TeamProps {
  className?: string;
}

const Team: React.FC<TeamProps> = () => {
  return (
    <div className={styles.root}>
      <h2>Team</h2>
    </div>
  );
};

export default Team;
