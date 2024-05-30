import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { USER_TYPE } from "../../../constants";
import styles from "./home.module.scss";
import classNames from "classnames";
import HomeIcon from "@mui/icons-material/Home";

export interface HomeProps {
  className?: string;
}

export const Home = ({ className }: HomeProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isNewUser = localStorage.getItem(USER_TYPE) === "new_user";
    if (isNewUser) {
      navigate("/onboarding/role");
    }
  }, [navigate]);

  return (
    <div>
      {localStorage.getItem(USER_TYPE) !== "new_user" && (
        <div className={classNames(styles.root, className)}>
          <div className={styles.registration}>
            <div className={styles.form}>
              <p className={styles.p}>
                <HomeIcon /> Home
              </p>
              <h1 className={styles.h1}>Welcome to Earthmates</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
