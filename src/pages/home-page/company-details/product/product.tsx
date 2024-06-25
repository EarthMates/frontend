import styles from "../company-details.module.scss";
import { useStartupData } from "../../../../context/startup-data-context";
import Header from "../../../../components/home-page/company-details/header/header";
import ProductComponent from "../../../../components/home-page/company-details/product/product";

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
