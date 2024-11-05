import React from 'react';
import './CardMoney.css';

interface BalanceCardProps {
  title: string;
  amount: number;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  style?: React.CSSProperties;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, amount, currency, onCurrencyChange, style }) => {
  return (
    <div className="balance-card" style={style}>
      <div className="header">
        <h3>{title}</h3>
        <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="COP">COP</option>
        </select>
      </div>
      <div className="amount">
        <h1>{currency} {amount.toLocaleString()}</h1>
      </div>
    </div>
  );
};

export default BalanceCard;
