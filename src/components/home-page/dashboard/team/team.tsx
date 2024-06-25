import React from "react";
import styles from "./team.module.scss";
import { useNavigate } from "react-router-dom";

interface TeamProps {
  className?: string;
}

const Team: React.FC<TeamProps> = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src="/icons/team-selected.svg" />
          <h2>Team</h2>
        </div>
        <button
          className="orangeLink"
          onClick={() => {
            navigate("/company-details/team");
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

export default Team;
