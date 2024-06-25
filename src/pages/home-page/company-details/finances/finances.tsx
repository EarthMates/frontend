import styles from "../company-details.module.scss";
import { useStartupData } from "../../../../context/startup-data-context";
import Header from "../../../../components/home-page/company-details/header/header";
import FinancesComponent from "../../../../components/home-page/company-details/finances/finances";

function Finances() {
  const { startupData, setStartupData } = useStartupData();

  return (
    <div className={styles.root}>
      <Header />
      <FinancesComponent />
      <div className={styles.mainContent}></div>
    </div>
  );
}

export default Finances;
