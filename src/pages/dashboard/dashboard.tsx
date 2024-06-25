import Sidebar from "../../components/dashboard/sidebar/sidebar";
import Header from "../../components/dashboard/header/header";
import Financials from "../../components/dashboard/financials/financials";
import Market from "../../components/dashboard/market/market";
import InvestorPreference from "../../components/dashboard/investor-preference/investor-preference";
import styles from "./dashboard.module.scss";
import { useStartupData } from "../../context/startup-data-context";
import Tracker from "../../components/dashboard/tracker/tracker";
import CompanyInfo from "../../components/dashboard/company-info/company-info";
import Preferences from "../../components/dashboard/preferences/preferences";
import Team from "../../components/dashboard/team/team";
import Product from "../../components/dashboard/product/product";
import Impact from "./../../components/dashboard/impact/impact";

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
          <div className={styles.flexContainer}>
            <div className={styles.item}>
              <Market />
            </div>

            <div className={styles.item}>
              <Preferences />
            </div>
          </div>
          <Team />
          <Product />
          <Impact />
        </div>
      </div>
      <div className="company-profile-container sides-common-style">
        <CompanyInfo />
      </div>
    </div>
  );
}

export default Dashboard;
