import Sidebar from "../../../components/home-page/sidebar/sidebar";
import Header from "../../../components/home-page/company-details/header/header";
import Financials from "../../../components/home-page/dashboard/financials/financials";
import Market from "../../../components/home-page/dashboard/market/market";
import styles from "./dashboard.module.scss";
import { useStartupData } from "../../../context/startup-data-context";
import Tracker from "../../../components/home-page/dashboard/tracker/tracker";
import CompanyInfo from "../../../components/home-page/company-info-banner/company-info";
import Preferences from "../../../components/home-page/dashboard/preferences/preferences";
import Team from "../../../components/home-page/dashboard/team/team";
import Product from "../../../components/home-page/dashboard/product/product";
import Impact from "../../../components/home-page/dashboard/impact/impact";

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
