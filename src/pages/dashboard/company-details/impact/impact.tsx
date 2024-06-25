import styles from "../company-details.module.scss";
import { useStartupData } from "../../../../context/startup-data-context";
import Header from "../../../../components/dashboard/header/header";
import ImpactComponent from "../../../../components/dashboard/company-details/impact/impact";

function Impact() {
  const { startupData, setStartupData } = useStartupData();

  return (
    <div className={styles.root}>
      <Header />
      <ImpactComponent />
      <div className={styles.mainContent}></div>
    </div>
  );
}

export default Impact;
