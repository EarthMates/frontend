import styles from "../company-details.module.scss";
import { useStartupData } from "../../../../context/startup-data-context";
import Header from "../../../../components/dashboard/header/header";
import ProductComponent from "../../../../components/dashboard/company-details/product/product";

function Product() {
  const { startupData, setStartupData } = useStartupData();

  return (
    <div className={styles.root}>
      <Header />
      <ProductComponent />
      <div className={styles.mainContent}></div>
    </div>
  );
}

export default Product;
