import styles from "./section.module.scss";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

function Section({ children }: SectionProps) {
  return <div className={styles.root}>{children}</div>;
}

export default Section;
