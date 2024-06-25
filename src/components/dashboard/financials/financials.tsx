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
import "./financials.scss";

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
  return (
    <div className="financial-chart-container">
      <div className="financial-chart-header">
        <div className="title-icon">
          <i className="icon">&#128176;</i> {/* Use an appropriate icon */}
          <span className="title">Financials</span>
        </div>
        <button className=" orangeLink">&#x2924; View Details</button>
        {/*⤢*/}
      </div>
      <div className="financial-chart-body">
        <div className="funding-info">
          <p>
            <span className="label">Funding Requirement</span>
            <span className="value">$1,000,000</span>
          </p>
          <p>
            <span className="label">Target Investor Count</span>
            <span className="value">5</span>
          </p>
          <p>
            <span className="label">Funding Stage</span>
            <span className="value">Series-A</span>
          </p>
        </div>
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
