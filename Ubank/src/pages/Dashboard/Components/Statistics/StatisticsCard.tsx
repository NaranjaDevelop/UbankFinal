import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './StatisticsCard.css';

interface StatisticsCardProps {
  title: string;
  data: { name: string; value: number; color: string }[]; // Datos con nombre, valor y color
  totalAmount: number;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ title, data, totalAmount }) => {
  return (
    <div className="statistics-card">
      <div className="statistics-header">
        <div className="icon" style={{ backgroundColor: '#D7F177' }}>
          <img src="" alt="statistics" width={20} />
        </div>
        <h2>{title}</h2>
        <select className="statistics-select">
          <option value="expenses">Expenses</option>
          <option value="incomes">Incomes</option>
        </select>
      </div>
      <div className="statistics-chart">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={80}
              fill="#8884d8"
              paddingAngle={1}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            {/* Texto dentro de la gráfica */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="chart-text"
            >
              <tspan x="50%" dy="-10" fontSize="14px" fontWeight="bold" fill="#333">
                This month expense
              </tspan>
              <tspan x="50%" dy="20" fontSize="18px" fontWeight="bold" fill="#000">
                ${totalAmount.toLocaleString()}
              </tspan>
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="statistics-legend">
        {data.map((entry, index) => (
          <div key={index} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: entry.color }}></span>
            {entry.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsCard;
