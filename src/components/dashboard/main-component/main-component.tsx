import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/button";
import styles from "./main-component.module.scss";
import Section from "../section/section";

type MainComponentProps = {
  // Define any props here if needed
};

const MainComponent: React.FC<MainComponentProps> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState<string>(
    "We are a SaaS startup harnessing AI to revolutionize health insurance operations. Sekofia Health's cutting-edge platform automates claims processing and detects fraud, delivering unparalleled efficiency, accuracy, and security."
  );
  const [location, setLocation] = useState<string>(
    "California, United States."
  );
  const [mission, setMission] = useState<string>(
    "We are a Saas startup harnessing AI to revolutionize health insurance operations. Sekofia Health's cutting-edge platform automates claims processing and detects fraud, delivering unparalleled efficiency, accuracy, and security. We are a Saas startup harnessing AI to revolutionize health insurance operations. Sekofia Health's cutting-edge platform automates claims processing and detects fraud, delivering unparalleled efficiency, accuracy, and security. We are a Saas startup harnessing AI to revolutionize health insurance operations. Sekofia Health's cutting-edge platform automates claims processing and detects fraud, delivering unparalleled efficiency, accuracy, and security."
  );
  const [foundedDate, setFoundedDate] = useState<string>("19th May, 2023");
  const [industry, setIndustry] = useState<string>("Healthcare");
  const [legalForm, setLegalForm] = useState<string>("For-Profit");
  const [teamValues, setTeamValues] = useState<string>("B2B, B2C");

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleMissionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMission(event.target.value);
  };

  const handleFoundedDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFoundedDate(event.target.value);
  };

  const handleIndustryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndustry(event.target.value);
  };

  const handleLegalFormChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLegalForm(event.target.value);
  };

  const handleTeamValuesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTeamValues(event.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save the updated details here, for example, make an API call
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1 className={styles.title}>Sekofia</h1>
        <span className={styles.id}>A1578902000</span>
        <div className={styles.button}>
          <Button
            buttonText={isEditing ? "Save Profile" : "Edit Profile"}
            onClick={isEditing ? handleSave : handleEdit}
          />
        </div>
      </div>
      <div className={styles.location}>
        {isEditing ? (
          <input
            className={styles.input}
            type="text"
            value={location}
            onChange={handleLocationChange}
          />
        ) : (
          <p>{location}</p>
        )}
      </div>
      <div className={styles.description}>
        {isEditing ? (
          <textarea
            className={styles.textarea}
            value={description}
            onChange={handleDescriptionChange}
          />
        ) : (
          <p>{description}</p>
        )}
      </div>
      <div className={styles.mission}>
        <h2>Vision/Mission Statement</h2>
        {isEditing ? (
          <textarea
            className={styles.textarea}
            value={mission}
            onChange={handleMissionChange}
          />
        ) : (
          <p>{mission}</p>
        )}
      </div>
      <div className={styles.infoSection}>
        <Section>
          <div className={styles.infoBlock}>
            <h3>Founded</h3>
            {isEditing ? (
              <input
                className={styles.input}
                type="text"
                value={foundedDate}
                onChange={handleFoundedDateChange}
              />
            ) : (
              <p>{foundedDate}</p>
            )}
          </div>
          <div className={styles.infoBlock}>
            <h3>Industry</h3>
            {isEditing ? (
              <input
                className={styles.input}
                type="text"
                value={industry}
                onChange={handleIndustryChange}
              />
            ) : (
              <p>{industry}</p>
            )}
          </div>
          <div className={styles.infoBlock}>
            <h3>Legal Form</h3>
            {isEditing ? (
              <input
                className={styles.input}
                type="text"
                value={legalForm}
                onChange={handleLegalFormChange}
              />
            ) : (
              <p>{legalForm}</p>
            )}
          </div>
          <div className={styles.infoBlock}>
            <h3>Team Values</h3>
            {isEditing ? (
              <input
                className={styles.input}
                type="text"
                value={teamValues}
                onChange={handleTeamValuesChange}
              />
            ) : (
              <p>{teamValues}</p>
            )}
          </div>
        </Section>
      </div>

      <div className={styles.links}>
        <Section>
          <Link to="https://www.sekofia.com">Website</Link>
        </Section>
        <Section>
          <Link to="https://www.linkedin.com/in/adedigba-adediwura">
            LinkedIn
          </Link>
        </Section>
        <Section>
          <Link to="https://www.facebook.com/in-adediwura">Facebook</Link>
        </Section>
        <Section>
          <Link to="https://www.twitter.com/in-adediwura">Twitter</Link>
        </Section>
      </div>
    </div>
  );
};

export default MainComponent;
