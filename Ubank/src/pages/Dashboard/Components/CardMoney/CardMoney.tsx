import React, { useState, useEffect } from 'react';

interface CurrencyData {
  rates: {
    [key: string]: number;
  };
}

interface CardProps {
  title: string;
  amount: number;
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

// Componente para la tarjeta
const BalanceCard: React.FC<CardProps> = ({ title, amount, selectedCurrency, onCurrencyChange }) => {
  return (
    <div className="balance-card">
      <div className="header">
        <h3>{title}</h3>
        <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="COP">COP</option>
          {/* Agrega más divisas según se necesite */}
        </select>
      </div>
      <div className="amount">
        <h1>{selectedCurrency} {amount.toLocaleString()}</h1>
      </div>
    </div>
  );
};

// Componente principal que maneja el estado
const CurrencyConverter: React.FC = () => {
  const [totalBalance, setTotalBalance] = useState<number>(310000);
  const [savings, setSavings] = useState<number>(100000);
  const [currency, setCurrency] = useState<string>('COP');
  const [exchangeRates, setExchangeRates] = useState<CurrencyData | null>(null);

  // Fetch para obtener las tasas de conversión desde free currency api
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/COP');
        const data: CurrencyData = await response.json();
        setExchangeRates(data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  // Función para convertir las monedas
  const convertCurrency = (amount: number, targetCurrency: string): number => {
    if (exchangeRates && exchangeRates.rates[targetCurrency]) {
      return amount * exchangeRates.rates[targetCurrency];
    }
    return amount;
  };

  // Actualizar la moneda seleccionada
  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  return (
    <div className="currency-converter">
      <BalanceCard
        title="Total Balance"
        amount={convertCurrency(totalBalance, currency)}
        selectedCurrency={currency}
        onCurrencyChange={handleCurrencyChange}
      />
      <BalanceCard
        title="Savings"
        amount={convertCurrency(savings, currency)}
        selectedCurrency={currency}
        onCurrencyChange={handleCurrencyChange}
      />
    </div>
  );
};

export default CurrencyConverter;
