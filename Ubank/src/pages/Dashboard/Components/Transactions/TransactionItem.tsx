import React from 'react';
import './TransactionItem.css';

interface TransactionItemProps {
  title: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
}

const TransactionItem: React.FC<TransactionItemProps> = ({ title, date, amount, type }) => {
  return (
    <div className={`transaction-item ${type}`}>
      <div className='info-left'>
        <div className="icon">
        {/* Aquí podría añadir un ícono, si es necesario */}
      </div>
      <div className="details">
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
      </div>
      <div 
        className="amount" 
        style={{ color: type === 'expense' ? 'red' : 'black' }} // Cambia el color según el tipo expense o income
      >
        {type === 'expense' ? '-' : '+'}${Math.abs(amount).toLocaleString()}
      </div>
    </div>
  );
};

export default TransactionItem;