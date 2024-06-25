import Sidebar from "../../components/dashboard/sidebar/sidebar";
import Header from "../../components/dashboard/header/header";
import Financials from "../../components/dashboard/financials/financials";
import Market from "../../components/dashboard/market/market";
import InvestorPreference from "../../components/dashboard/investor-preference/investor-preference";
import CompanyProfile from "../../components/dashboard/company-profile/company-profile";
import styles from "./dashboard.module.scss";
import { useStartupData } from "../../context/startup-data-context";

function Dashboard() {
  const { startupData, setStartupData } = useStartupData();

  /* console.log(startupData);

  setStartupData((prevStartupData) => ({
    ...prevStartupData,
    name: "New Name",
  }));

  console.log(startupData); */

  return (
    <div className={styles.root}>
      {/* idk the use of these both divs \_o_/ */}
      <div className={styles.mainContent}>
        <div className={styles.dashboardContent}>
          <Financials />
        </div>
      </div>
      <div className="company-profile-container sides-common-style">
        <CompanyProfile />
      </div>
    </div>
  );
}

export default Dashboard;
