import classNames from "classnames";
import styles from "./site-wrapper.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../onboarding/header/header-onboarding";
import theme from "../../../styles/theme";
import { ThemeProvider } from "@emotion/react";
import { UserDataProvider } from "../../../context/user-data-context";
import ProtectedRoute from "../../ProtectedRoutes";

export interface SiteWrapperProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SiteWrapper = ({ className }: SiteWrapperProps) => {
  console.log("loading SiteWrapper");
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.content}>
        <ThemeProvider theme={theme}>
          <ProtectedRoute>
            <Header />
            <Outlet />
          </ProtectedRoute>
        </ThemeProvider>
      </div>
    </div>
  );
};
