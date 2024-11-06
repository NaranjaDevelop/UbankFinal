import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';
import img1 from "../../../../assets/digramadebarras.webp"

interface IncomeExpenseChartProps {
  title?: string;
  subtitle?: string;
}

const data = [
  { month: 'March', incomes: 12000, expenses: 8000 },
  { month: 'April', incomes: 15000, expenses: 10000 },
  { month: 'May', incomes: 25000, expenses: 5000 },
  { month: 'June', incomes: 16000, expenses: 7000 },
  { month: 'July', incomes: 14000, expenses: 9000 },
  { month: 'August', incomes: 18000, expenses: 12000 },
  { month: 'September', incomes: 21000, expenses: 11000 },
];

const IncomeExpenseChart: React.FC<IncomeExpenseChartProps> = ({
  title = "Comparing of Incomes and Minor Expenses",
  subtitle = "You can see a comparison of your incomes and minor expenses over the months"
}) => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <div className="icon" style={{ backgroundColor: '#D7F177' }}> <img src={img1} alt="bar-chart" width={17}/></div>
        <h2>{title}</h2>
      </div>
      <p>{subtitle}</p>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 30, right: 30, left: 20, bottom: -12 }} barSize={16}>
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }}/>
          <Tooltip />
          <Legend 
          iconType="circle"
          formatter={(value) => (
            <span style={{ color: 'black', fontSize: '13px', fontWeight: "400" }}>
            {value === 'Incomes' ? 'Incomes' : 'Minor expenses'}
            </span>
          )} />
          <Bar dataKey="incomes" fill="#8644DB" name="Incomes" radius={[5, 5, 0, 0]}/>
          <Bar dataKey="expenses" fill="#F4A261" name="Minor expenses" radius={[5, 5, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;
