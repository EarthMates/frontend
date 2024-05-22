import React, { useState } from "react";
import { TextField } from "@mui/material";
import classNames from "classnames";
import styles from "./name.module.scss";
import { Button } from "../button/button";

export interface NameProps {
  className?: string;
  handleNameInserted: (name: string) => void;
  handleForward: () => void;
  role: string;
}

export const Name = ({
  className,
  handleNameInserted,
  handleForward,
  role,
}: NameProps) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value) {
      setError(""); // Clear error message if input is not empty
    }
  };

  const handleButtonClick = () => {
    if (role === "startup" && !name) {
      setError("Please enter a name.");
      return;
    }
    const finalName = name || "NONE";
    handleNameInserted(finalName);
    handleForward();
  };

  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>What's your startup called?</h1>
      <p className={styles.p}>Add the name of your startup</p>

      <TextField
        value={name}
        onChange={handleInputChange}
        className={styles.select}
        variant="outlined"
        label="Startup name"
        error={role === "startup" && !!error}
        helperText={role === "startup" && error}
      />

      <Button
        buttonText="Next"
        onClick={handleButtonClick}
        className={styles.buttonContainer}
      />
    </div>
  );
};

export default Name;
