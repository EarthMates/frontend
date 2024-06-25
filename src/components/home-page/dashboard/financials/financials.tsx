import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./financials.module.scss";
import { useNavigate } from "react-router-dom";

interface FinancialsProps {
  className?: string;
}

//sample data for the chart
const data = [
  {
    year: "2021",
    Turnover: 52000,
    Cost: 32100,
    Profit: 12000,
    Investment: 25000,
  },
  {
    year: "2022",
    Turnover: 45000,
    Cost: 28000,
    Profit: 11500,
    Investment: 19000,
  },
  {
    year: "2023",
    Turnover: 38000,
    Cost: 21000,
    Profit: 15000,
    Investment: 25000,
  },
  {
    year: "2024",
    Turnover: 31000,
    Cost: 16000,
    Profit: 8500,
    Investment: 22000,
  },
  {
    year: "2025",
    Turnover: 32000,
    Cost: 14000,
    Profit: 12000,
    Investment: 15000,
  },
  {
    year: "2026",
    Turnover: 39000,
    Cost: 13000,
    Profit: 12000,
    Investment: 14000,
  },
  {
    year: "2027",
    Turnover: 40000,
    Cost: 15000,
    Profit: 14000,
    Investment: 10000,
  },
  {
    year: "2028",
    Turnover: 41000,
    Cost: 13000,
    Profit: 11000,
    Investment: 12000,
  },
];

const Financials: React.FC<FinancialsProps> = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img src="/icons/finances-selected.svg" />
          <h2>Financials</h2>
        </div>
        <button
          className="orangeLink"
          onClick={() => {
            navigate("/company-details/finances");
          }}
        >
          <img className="icon" src="/icons/expand.svg" /> View Details
        </button>
        {/*⤢*/}
      </div>
      <div className={styles.body}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              layout="vertical"
            />
            <Line type="monotone" dataKey="Turnover" stroke="#8884d8" />
            <Line type="monotone" dataKey="Cost" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Profit" stroke="#ffc658" />
            <Line type="monotone" dataKey="Investment" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Financials;
