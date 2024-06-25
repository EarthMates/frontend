import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button/button";
import styles from "./product.module.scss";
import Section from "../../generic/section/section";

type ProductProps = {
  // Define any props here if needed
};

const Product: React.FC<ProductProps> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState<string>(
    "Sekofia is your one-stop healthcare management solution.  This secure cloud-based platform connects patients, health centers & insurers, streamlining Fragmented UHC in Nigeria. Eliminate paperwork, get faster approvals, receive quicker claim reimbursements, and experience a more efficient healthcare system.  Benefits all parties: insurers, health centers & patients.  Join the future of Nigerian healthcare."
  );
  const [problem, setProblem] = useState<string>(
    "Here's the breakdown of common pain points Sekofia addresses Paperwork Overload: Manual claim submissions and approvals are slow, prone to errors, and difficult to track. Delayed Approvals:  Cumbersome processes lead to long waiting times for patients needing medical care. xSlow Reimbursements:  Health centers face delays in receiving payments for rendered services due to inefficient claim processi"
  );
  const [USP, setUSP] = useState<string>(
    "Sekofia is your one-stop healthcare management solution.  This secure cloud-based platform connects patients, health centers & insurers, streamlining Fragmented UHC in Nigeria. Eliminate paperwork, get faster approvals, receive quicker claim reimbursements, and experience a more efficient healthcare system.  Benefits all parties: insurers, health centers & patients.  Join the future of Nigerian healthcare."
  );

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleProblemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProblem(event.target.value);
  };

  const handleUSPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUSP(event.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save the updated details here, for example, make an API call
  };
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.text}>
          <h1>Product</h1>
          <p>Track all about your workspace’s finance here...</p>
        </div>
        <div className={styles.button}>
          <Button
            src="/icons/edit.svg"
            buttonText={isEditing ? "Save Product Info" : "Edit Product Info"}
            onClick={isEditing ? handleSave : handleEdit}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.item}>
          <h2>Product Description</h2>
          {isEditing ? (
            <input
              className={styles.input}
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
          ) : (
            <p>{description}</p>
          )}
        </div>

        <div className={styles.item}>
          <h2>Customer Problem</h2>
          {isEditing ? (
            <input
              className={styles.input}
              type="text"
              value={problem}
              onChange={handleProblemChange}
            />
          ) : (
            <p>{problem}</p>
          )}
        </div>

        <div className={styles.item}>
          <h2>Unique Selling Point</h2>
          {isEditing ? (
            <input
              className={styles.input}
              type="text"
              value={USP}
              onChange={handleUSPChange}
            />
          ) : (
            <p>{USP}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
