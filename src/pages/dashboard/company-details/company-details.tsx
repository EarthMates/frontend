import styles from "./company-details.module.scss";
import { useStartupData } from "../../../context/startup-data-context";
import Header from "../../../components/dashboard/header/header";
import MainComponent from "../../../components/dashboard/main-component/main-component";

function CompanyDetails() {
  const { startupData, setStartupData } = useStartupData();

  return (
    <div className={styles.root}>
      <Header />
      <MainComponent />
      <div className={styles.mainContent}></div>
    </div>
  );
}

export default CompanyDetails;
