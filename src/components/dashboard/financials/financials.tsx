import React from 'react';
import styles from './financials.module.scss';

interface FinancialsProps {
  className?: string,
}

const Financials: React.FC<FinancialsProps> = () => {
  return (
    <div className={styles.financials}>
      <h2>Financials</h2>
    </div>
  );
};

export default Financials;