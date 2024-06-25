import classNames from "classnames";
import styles from "./button.module.scss";
import React from "react";

export interface ButtonProps {
  className?: string;
  buttonText: string;
  onClick?: () => void;
  src?: string;
  color?: string;
  textColor?: string;
}

const defaultClick = () => {};

export const Button: React.FC<ButtonProps> = ({
  className,
  buttonText,
  onClick,
  src,
  color = "#ff8516", // Default color if not provided
  textColor = "#ffffff", // Default color if not provided
}: ButtonProps) => {
  const handleClick = onClick || defaultClick;

  return (
    <div
      className={classNames(styles.root, className)}
      onClick={handleClick}
      style={{ backgroundColor: color, color: textColor }}
    >
      {src && <img src={src} alt="edit" />}
      {buttonText}
    </div>
  );
};
