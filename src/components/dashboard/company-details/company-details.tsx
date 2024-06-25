import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/button";
import styles from "./company-details.module.scss";
import Section from "../section/section";

type CompanyDetailsProps = {
  // Define any props here if needed
};

const CompanyDetails: React.FC<CompanyDetailsProps> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState<string>(
    "We are a SaaS startup harnessing AI to revolutionize health insurance operations. Sekofia Health's cutting-edge platform automates claims processing and detects fraud, delivering unparalleled efficiency, accuracy, and security."
  );
  const [location, setLocation] = useState<string>("California, United States");
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
        <img className={styles.logo} src="/icons/sekofia.svg" />
        <div className={styles.button}>
          <Button
            src="/icons/edit.svg"
            buttonText={isEditing ? "Save Profile" : "Edit Profile"}
            onClick={isEditing ? handleSave : handleEdit}
          />
        </div>
      </div>
      <div className={styles.name}>
        <h2>Sekofia</h2>
        <span className={styles.id}>A1578902000</span>
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
            <img src="/icons/details/date.svg" />
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
          <div className={styles.divider} />
          <div className={styles.infoBlock}>
            <img src="/icons/details/industry.svg" />
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
          <div className={styles.divider} />
          <div className={styles.infoBlock}>
            <img src="/icons/details/form.svg" />
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
          <div className={styles.divider} />
          <div className={styles.infoBlock}>
            <img src="/icons/details/target.svg" />
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
          <a className={styles.item} href="https://www.sekofia.com">
            <div className={styles.sub_item}>
              <img className={styles.icon} src="/icons/details/website.svg" />
              <p>Website</p>
            </div>
            <div className={styles.sub_item}>
              <p>https://www.sekofia.com</p>
              <img src="/icons/details/arrow-left.svg" />
            </div>
          </a>
        </Section>
        <Section>
          <a
            className={styles.item}
            href="https://www.linkedin.com/in/adedigba-adediwura"
          >
            <div className={styles.sub_item}>
              <img className={styles.icon} src="/icons/details/linkedin.svg" />
              <p>LinkedIn</p>
            </div>
            <div className={styles.sub_item}>
              <p>https://www.linkedin.com/in/adedigba-adediwura</p>
              <img src="/icons/details/arrow-left.svg" />
            </div>
          </a>
        </Section>
        <Section>
          <a
            className={styles.item}
            href="https://www.facebook.com/in-adediwura"
          >
            <div className={styles.sub_item}>
              <img className={styles.icon} src="/icons/details/facebook.svg" />
              <p>Facebook</p>
            </div>
            <div className={styles.sub_item}>
              <p>https://www.facebook.com/in-adediwura</p>
              <img src="/icons/details/arrow-left.svg" />
            </div>
          </a>
        </Section>
        <Section>
          <a
            className={styles.item}
            href="https://www.twitter.com/in-adediwura"
          >
            <div className={styles.sub_item}>
              <img className={styles.icon} src="/icons/details/twitter.svg" />
              <p>Twitter</p>
            </div>
            <div className={styles.sub_item}>
              <p>https://www.twitter.com/in-adediwura</p>
              <img src="/icons/details/arrow-left.svg" />
            </div>
          </a>
        </Section>
      </div>
    </div>
  );
};

export default CompanyDetails;
