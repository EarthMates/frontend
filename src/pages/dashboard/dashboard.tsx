import Sidebar from "../../components/dashboard/sidebar/sidebar";
import Header from "../../components/dashboard/header/header";
import Financials from "../../components/dashboard/financials/financials";
import Market from "../../components/dashboard/market/market";
import InvestorPreference from "../../components/dashboard/investor-preference/investor-preference";
import CompanyProfile from "../../components/dashboard/company-profile/company-profile";
import styles from "./dashboard.module.scss";

function Dashboard() {
  return (
    <div className={styles.root}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.dashboardContent}>
          <Financials />
        </div>
      </div>
      <CompanyProfile />
    </div>
  );
}

export default Dashboard;
