import classNames from "classnames";
import styles from "./capital.module.scss";

import { Button } from "../button/button";

export interface CapitalProps {
  className?: string;
  capitalAmount: number;
  handleCapitalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleForward: () => void;
}

export const Capital = ({
  className,
  capitalAmount,
  handleCapitalChange,
  handleForward,
}: CapitalProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h1 className={styles.h1}>How much capital does your company need?</h1>
      <p className={styles.p}>
        Use the slider to select your company funding need
      </p>
      <input
        className={styles.input}
        type="number"
        min={0}
        max={1000000}
        step={10000}
        value={capitalAmount}
        onChange={handleCapitalChange}
      />
      {true && <Button buttonText="Next" onClick={handleForward} />}{" "}
      {/* Should be only if capital > 0 */}
      {/* Render button only if capital is selected */}
    </div>
  );
};

export default Capital;
