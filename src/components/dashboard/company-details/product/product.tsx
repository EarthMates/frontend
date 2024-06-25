import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button/button";
import styles from "../company-details.module.scss";
import Section from "../../section/section";

type ProductProps = {
  // Define any props here if needed
};

const Product: React.FC<ProductProps> = (props) => {
  return (
    <div className={styles.root}>
      <h1>Product</h1>
    </div>
  );
};

export default Product;
