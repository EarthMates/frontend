import classNames from "classnames";
import styles from "./header-onboarding.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { FaHeadset } from "react-icons/fa";

export interface HeaderProps {
  className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
  const handleContactClick = () => {
    window.location.href = "mailto:jacopo@earthmates.de";
  };

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <a onClick={handleContactClick} className={styles.contact}>
        Need Help? <FaHeadset />
      </a>
    </div>
  );
};
