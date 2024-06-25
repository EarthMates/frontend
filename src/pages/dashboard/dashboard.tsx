import Sidebar from "../../components/dashboard/sidebar/sidebar";
import Header from "../../components/dashboard/header/header";
import Financials from "../../components/dashboard/financials/financials";
import Market from "../../components/dashboard/market/market";
import InvestorPreference from "../../components/dashboard/investor-preference/investor-preference";
import CompanyProfile from "../../components/dashboard/company-profile/company-profile";
import styles from "./dashboard.module.scss";
import { useStartupData } from "../../context/startup-data-context";
import Tracker from "../../components/dashboard/tracker/tracker";

function Dashboard() {
  const { startupData, setStartupData } = useStartupData();

  return (
    <div className={styles.root}>
      {/* idk the use of these both divs \_o_/ */}
      <div className={styles.mainContent}>
        <h1>Dashboard</h1>
        <p>Track all about your workspace here...</p>
        <div className={styles.dashboardContent}>
          <div className={styles.trackers}>
            <Tracker />
            <Tracker />
            <Tracker />
          </div>
          <Financials />
        </div>
      </div>
      <div
        className={`${styles["company-profile-container"]} ${styles["sides-common-style"]}`}
      >
        <CompanyProfile />
      </div>
    </div>
  );
}

export default Dashboard;
