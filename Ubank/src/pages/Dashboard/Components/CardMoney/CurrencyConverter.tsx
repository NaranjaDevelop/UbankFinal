import React, { useState } from 'react';
import { useExchangeRates } from '../../../../Hooks/ApiCurrency';
import BalanceCard from '../CardMoney/CardMoney';
import './CurrencyConverter.css';

interface CurrencyConverterProps {
  totalBalance: number;
  savings: number;
  minorExpenses: number;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ totalBalance, savings, minorExpenses }) => {
  const [currencies, setCurrencies] = useState<{ [key: string]: string }>({
    totalBalance: 'COP',
    savings: 'COP',
    minorExpenses: 'COP',
  });

  const { convertCurrency } = useExchangeRates('COP');

  const handleCurrencyChange = (key: string, newCurrency: string) => {
    setCurrencies((prevCurrencies) => ({ ...prevCurrencies, [key]: newCurrency }));
  };

  return (
    <div className="currency-converter">
      <BalanceCard
        title="Total Balance"
        amount={convertCurrency(totalBalance, currencies.totalBalance)}
        currency={currencies.totalBalance}
        onCurrencyChange={(currency) => handleCurrencyChange('totalBalance', currency)}
        style={{ backgroundColor: '#ffffff', color: 'black'}}
      />
      <BalanceCard
        title="Savings"
        amount={convertCurrency(savings, currencies.savings)}
        currency={currencies.savings}
        onCurrencyChange={(currency) => handleCurrencyChange('savings', currency)}
        style={{ backgroundColor: '#ffffff', color: 'green'}}
      />
      <BalanceCard
        title="Minor Expenses"
        amount={convertCurrency(minorExpenses, currencies.minorExpenses)}
        currency={currencies.minorExpenses}
        onCurrencyChange={(currency) => handleCurrencyChange('minorExpenses', currency)}
        style={{ backgroundColor: '#FFEEDD', color: 'orange'}}
      />
    </div>
  );
};

export default CurrencyConverter;
