import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL, USER_TYPE } from "../../../constants";
import styles from "./home.module.scss";
import classNames from "classnames";
import { FaHeadset, FaSignOutAlt } from "react-icons/fa";
import api from "../../../api";

export interface HomeProps {
  className?: string;
}

export const Home = ({ className }: HomeProps) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getInvestor = () => {
    api
      .get("/api/investor/")
      .then((res) => res.data)
      .then((data) => {
        console.log(data[0].name);
        setName(data[0].name);
      })
      .catch((err) => alert(err));
  };

  const getStartup = () => {
    api
      .get("/api/startup/")
      .then((res) => res.data)
      .then((data) => {
        console.log(data[0].name);
        setName(data[0].name);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    const isNewUser = localStorage.getItem(USER_TYPE) === "new_user";
    if (isNewUser) {
      navigate("/onboarding/role");
    }
    const email = localStorage.getItem(EMAIL);
    if (email != null) {
      setEmail(email);
    } else {
      setEmail("NONE");
    }

    const userType = localStorage.getItem(USER_TYPE);
    if (userType === "investor") {
      getInvestor();
    } else if (userType === "startup") {
      getStartup();
    }
  }, [navigate]);

  const handleContactClick = () => {
    window.location.href = "mailto:jacopo@earthmates.de";
  };

  return (
    <div>
      {localStorage.getItem(USER_TYPE) !== "new_user" && (
        <div className={classNames(styles.root, className)}>
          <div className={styles.registration}>
            <div className={styles.form}>
              <div className={styles.nav}></div>
              <h1 className={styles.h1}>Welcome to Earthmates</h1>
              {email !== "" && (
                <div>
                  <h2 className={styles.h2}>
                    You have successfully registered to EarthMates!
                  </h2>
                  <h2 className={styles.h2}>
                    We have sent a confirmation email to <span>{email}</span>
                  </h2>
                </div>
              )}
              <div className={styles.bottom}>
                <a onClick={handleContactClick} className={styles.contact}>
                  <FaHeadset /> Contact
                </a>
                <a href="/logout" className={styles.logout}>
                  Logout <FaSignOutAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
