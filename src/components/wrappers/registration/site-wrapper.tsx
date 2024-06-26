import classNames from "classnames";
import styles from "./site-wrapper.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../registration/header/header-registration";
import theme from "../../../styles/theme";
import { ThemeProvider } from "@emotion/react";
import { UserDataProvider } from "../../../context/user-data-context";

export interface SiteWrapperProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SiteWrapper = ({ className }: SiteWrapperProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.content}>
        <ThemeProvider theme={theme}>
          <Header />
          <Outlet />
        </ThemeProvider>
      </div>
    </div>
  );
};
