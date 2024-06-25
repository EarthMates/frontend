import styles from "./company-details.module.scss";
import { useStartupData } from "../../../context/startup-data-context";
import Header from "../../../components/dashboard/header/header";
import CompanyDetailsComponent from "../../../components/dashboard/company-details/company-details";

function CompanyDetails() {
  const { startupData, setStartupData } = useStartupData();

  return (
    <div className={styles.root}>
      <Header />
      <CompanyDetailsComponent />
      <div className={styles.mainContent}></div>
    </div>
  );
}

export default CompanyDetails;
