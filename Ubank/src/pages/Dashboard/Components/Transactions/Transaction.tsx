import React from 'react';
import './Transaction.css';
import TransactionItem from '../Transactions/TransactionItem';

interface Transaction {
  id: string; 
  title: string; 
  date: string; 
  amount: number; // Monto (positivo = ingreso, negativo = egreso)
  icon: string; 
}

interface TransactionListProps {
  transactions: Transaction[]; 
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <div className="header">
        <img src="ruta-del-icono-principal" alt="Icon" />
        <h2>Your last movements</h2>
      </div>
      <div className="transactions-container">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            title={transaction.title}
            date={transaction.date}
            amount={transaction.amount}
            icon={transaction.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
