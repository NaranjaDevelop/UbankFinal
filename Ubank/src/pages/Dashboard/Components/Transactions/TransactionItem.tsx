import React from 'react';
import './TransactionItem.css';

interface TransactionItemProps {
  title: string;
  date: string;
  amount: number;
  icon: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ title, date, amount, icon }) => {
  const isExpense = amount < 0; // Determina si es egreso

  return (
    <div className="transaction-item">
      <div className="transaction-info">
        <img src={icon} alt="Transaction Icon" className="transaction-icon" />
        <div className="transaction-details">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      </div>
      <div className={`transaction-amount ${isExpense ? 'expense' : 'income'}`}>
        {isExpense ? '-' : '+'}${Math.abs(amount).toLocaleString()}
      </div>
    </div>
  );
};

export default TransactionItem;