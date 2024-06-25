import React from "react";
import styles from "./product.module.scss";

interface ProductProps {
  className?: string;
}

const Product: React.FC<ProductProps> = () => {
  return (
    <div className={styles.root}>
      <h2>Product</h2>
    </div>
  );
};

export default Product;
