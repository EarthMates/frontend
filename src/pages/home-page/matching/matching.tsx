import styles from "./matching.module.scss";
import { useStartupData } from "../../../context/startup-data-context";
import Header from "../../../components/home-page/company-details/header/header";
import MainComponent from "../../../components/home-page/company-details/company-details";

function Matching() {
  const { startupData, setStartupData } = useStartupData();

  return (
    <div className={styles.root}>
      <div className={styles.mainContent}>Matching</div>
    </div>
  );
}

export default Matching;
