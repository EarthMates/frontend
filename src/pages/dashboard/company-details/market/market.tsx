import styles from "../company-details.module.scss";
import { useStartupData } from "../../../../context/startup-data-context";
import Header from "../../../../components/dashboard/header/header";
import MarketComponent from "../../../../components/dashboard/company-details/market/market";

function Market() {
  const { startupData, setStartupData } = useStartupData();

  return (
    <div className={styles.root}>
      <Header />
      <MarketComponent />
      <div className={styles.mainContent}></div>
    </div>
  );
}

export default Market;
