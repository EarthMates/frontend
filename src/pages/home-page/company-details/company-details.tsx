import styles from "./company-details.module.scss";
import { useStartupData } from "../../../context/startup-data-context";
import Header from "../../../components/home-page/company-details/header/header";
import CompanyDetailsComponent from "../../../components/home-page/company-details/company-details";

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
