import './Dashboard.css'
import CurrencyConverter from "./Components/CardMoney/CurrencyConverter";

import IncomeExpenseChart from "./Components/IncExpChart/IncomeExpenseChart";
import ProgressCard from "./Components/SavingsProgress/SavingProgress";
import UseDashboard from '../../Hooks/DashboardHooks';
import { UseIncomes } from '../../Hooks/Useincomes';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useEffect } from 'react';

const Dashboard: React.FC = () => {
  const { incomes,minorExpenses ,TotalIncomes, TotalMinorExpenses} = UseIncomes()
  const { username, handleLogout } = UseDashboard() as { username: string; handleLogout: () => Promise<void> };

  const getMonthlyIncomes = () => {
    const monthlyTotals:  { [key: string]: number  } = {};
    const minorExpenseTotals: { [key: string]: number } = {};

    incomes.forEach(income => {
        const date = new Date(income.IncomeDate);
        const month = date.getMonth();
        const year = date.getFullYear();
        const monthYear = `${year}-${month}`;


        if (!monthlyTotals[monthYear]) {
            monthlyTotals[monthYear] = 0;
        }

        monthlyTotals[monthYear] += income.IncomeAmount
      
    });

    minorExpenses.forEach((expense: { ExpenseDate: string | number | Date; ExpenseAmount: number; }) => {
      const date = new Date(expense.ExpenseDate);
      const month = date.getMonth();
      const year = date.getFullYear();
      const monthYear = `${year}-${month}`;

      if (!minorExpenseTotals[monthYear]) {
          minorExpenseTotals[monthYear] = 0;
      }

      minorExpenseTotals[monthYear] += expense.ExpenseAmount;
  });

    return Object.entries(monthlyTotals).map(([key, value]) => ({
        monthYear: key,
        incomes: value,
        minorexpenses: minorExpenseTotals[key] 
    }));
}

  useEffect(() => {
    console.log(getMonthlyIncomes());
    console.log(minorExpenses);
    
  }, [incomes,minorExpenses])
      
  return (
    <div className="dashboard-content">
      <Sidebar onLogout={handleLogout} />
      <section className='info-section'>
        <div className='text-content'>
        <h2>Welcome!, {username}</h2>
        <p>Detailed overview of your finantial situation</p>
        </div>
        <div className='body-content'>
          <CurrencyConverter totalBalance={TotalIncomes} savings={100000} minorExpenses={TotalMinorExpenses} />
            <div className='dash-progress-charts'>
              <IncomeExpenseChart datachart={getMonthlyIncomes()}/>
              <ProgressCard 
                  title="Your saving goal" 
                  description="New pair of shoes 👠👠" 
                  currentAmount={100000} 
                  goalAmount={200000} 
                />
            </div>
          </div>
        </section>
      

    </div>
  );
};

export default Dashboard;


