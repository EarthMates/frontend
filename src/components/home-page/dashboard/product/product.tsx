import React from "react";
import styles from "./product.module.scss";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  className?: string;
}

const Product: React.FC<ProductProps> = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src="/icons/product-selected.svg" />
          <h2>Product</h2>
        </div>
        <button
          className="orangeLink"
          onClick={() => {
            navigate("/company-details/product");
          }}
        >
          <img className="icon" src="/icons/expand.svg" /> View Details
        </button>
        {/*⤢*/}
      </div>
      <div className={styles.body}>
        <p>Some text here</p>
        <p>Some other here</p>
      </div>
    </div>
  );
};

export default Product;
