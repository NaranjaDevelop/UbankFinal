import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend formatter={(value) => (
            <span style={{ color: value === 'Incomes' ? '#6A1B9A' : '#FB8C00' }}>
              {value === 'incomes' ? 'Incomes' : 'Minor expenses'}
            </span>
          )} />
          <Bar dataKey="incomes" fill="#6A1B9A" name="Incomes" />
          <Bar dataKey="expenses" fill="#FB8C00" name="Minor expenses" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;
