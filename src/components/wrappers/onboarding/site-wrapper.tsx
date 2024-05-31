import classNames from "classnames";
import styles from "./site-wrapper.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../onboarding/header/header-onboarding";
import theme from "../../../styles/theme";
import { ThemeProvider } from "@emotion/react";
import ProtectedRoute from "../../ProtectedRoutes";
import { OnboardingDataProvider } from "../../../context/onboarding-data-context";
import { USER_TYPE } from "../../../constants";

export interface SiteWrapperProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SiteWrapper = ({ className }: SiteWrapperProps) => {
  const navigate = useNavigate();

  if (localStorage.getItem(USER_TYPE) === "registered") {
    navigate("/");
    return null; // Prevent further rendering
  }

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.content}>
        <ThemeProvider theme={theme}>
          <ProtectedRoute>
            <OnboardingDataProvider>
              <Header />
              <Outlet />
            </OnboardingDataProvider>
          </ProtectedRoute>
        </ThemeProvider>
      </div>
    </div>
  );
};
