import styles from "../company-details.module.scss";
import { useStartupData } from "../../../../context/startup-data-context";
import Header from "../../../../components/home-page/company-details/header/header";
import TeamComponent from "../../../../components/home-page/company-details/team/team";

function Team() {
  const { startupData, setStartupData } = useStartupData();

  return (
    <div className={styles.root}>
      <Header />
      <TeamComponent />
      <div className={styles.mainContent}></div>
    </div>
  );
}

export default Team;
