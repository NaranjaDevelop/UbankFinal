import './Dashboard.css'
import CurrencyConverter from "./Components/CardMoney/CurrencyConverter";

import IncomeExpenseChart from "./Components/IncExpChart/IncomeExpenseChart";
import ProgressCard from "./Components/SavingsProgress/SavingProgress";
import UseDashboard from '../../Hooks/DashboardHooks';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard: React.FC = () => {
  const { username, handleLogout } = UseDashboard() as { username: string; handleLogout: () => Promise<void> };
  return (
    <div className="dash-div">
      <Sidebar onLogout={handleLogout} />
      <h2
        className="welcome-user">
        Welcome!, {username} 
      </h2>
      <p>Detailed overview of your finantial situation</p>
      <CurrencyConverter totalBalance={310000} savings={100000} minorExpenses={30000} />

      <IncomeExpenseChart />
      <ProgressCard 
          title="Your saving goal" 
          description="New pair of shoes 👠👠" 
          currentAmount={100000} 
          goalAmount={200000} 
        />

    </div>
  );
};

export default Dashboard;


