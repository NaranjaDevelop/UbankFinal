import React, { useState } from 'react';
import { useExchangeRates } from '../../../../Hooks/ApiCurrency';

interface CurrencyConverterProps {
  totalBalance: number;
  savings: number;
  minorExpenses: number;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ totalBalance, savings, minorExpenses }) => {
  const [currency, setCurrency] = useState<string>('COP');
  const { convertCurrency } = useExchangeRates('COP');

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  return (
    <div className="currency-converter">
      <div className="balance-card">
        <div className="header">
          <h3>Total Balance</h3>
          <select value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="COP">COP</option>
          </select>
        </div>
        <div className="amount">
          <h1>{currency} {convertCurrency(totalBalance, currency).toLocaleString()}</h1>
        </div>
      </div>

      <div className="balance-card">
        <div className="header">
          <h3>Savings</h3>
          <select value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="COP">COP</option>
          </select>
        </div>
        <div className="amount">
          <h1>{currency} {convertCurrency(savings, currency).toLocaleString()}</h1>
        </div>
      </div>

      <div className="balance-card minor-expenses">
        <div className="header">
          <h3>Minor Expenses</h3>
          <select value={currency} onChange={(e) => handleCurrencyChange(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="COP">COP</option>
          </select>
        </div>
        <div className="amount">
          <h1 style={{ color: 'orange' }}>{currency} {convertCurrency(minorExpenses, currency).toLocaleString()}</h1>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
