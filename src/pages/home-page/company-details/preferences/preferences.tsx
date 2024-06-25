import styles from "../company-details.module.scss";
import { useStartupData } from "../../../../context/startup-data-context";
import Header from "../../../../components/home-page/company-details/header/header";
import PreferencesComponent from "../../../../components/home-page/company-details/preferences/preferences";

function Preferences() {
  const { startupData, setStartupData } = useStartupData();

  return (
    <div className={styles.root}>
      <Header />
      <PreferencesComponent />
      <div className={styles.mainContent}></div>
    </div>
  );
}

export default Preferences;
