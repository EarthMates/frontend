import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_TYPE } from "../../../constants";
import styles from "./home.module.scss";
import classNames from "classnames";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import api from "../../../api";

export interface HomeProps {
  className?: string;
}

export const Home = ({ className }: HomeProps) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

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

  const handleLogout = () => {
    navigate("/logout");
  };

  useEffect(() => {
    const isNewUser = localStorage.getItem(USER_TYPE) === "new_user";
    if (isNewUser) {
      navigate("/onboarding/role");
    }

    const userType = localStorage.getItem(USER_TYPE);
    if (userType === "investor") {
      getInvestor();
    } else if (userType === "startup") {
      getStartup();
    }
  }, [navigate]);

  return (
    <div>
      {localStorage.getItem(USER_TYPE) !== "new_user" && (
        <div className={classNames(styles.root, className)}>
          <div className={styles.registration}>
            <div className={styles.form}>
              <div className={styles.nav}>
                <p className={styles.p}>
                  <HomeIcon /> Home &nbsp;&nbsp;{" "}
                </p>
              </div>
              <h1 className={styles.h1}>Welcome to Earthmates</h1>
              {name !== "" && (
                <h2 className={styles.h2}>
                  You have succesffuly registered <span>{name} </span>to
                  EarthMates!
                </h2>
              )}
              <a href="/login" className={styles.logout}>
                Logout <LogoutIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
