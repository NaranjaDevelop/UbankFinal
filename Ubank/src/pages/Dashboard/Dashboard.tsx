import './Dashboard.css'
import CurrencyConverter from "./Components/CardMoney/CurrencyConverter";

import IncomeExpenseChart from "./Components/IncExpChart/IncomeExpenseChart";
import ProgressCard from "./Components/SavingsProgress/SavingProgress";
import UseDashboard from '../../Hooks/DashboardHooks';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard: React.FC = () => {
  const { username, handleLogout } = UseDashboard() as { username: string; handleLogout: () => Promise<void> };
  return (
    <div className="dashboard-content">
      <Sidebar onLogout={handleLogout} />
      <section className='info-section'>
        <div className='text-content'>
        <h2>Welcome!, {username}</h2>
        <p>Detailed overview of your finantial situation</p>
        </div>
        <div className='body-content'>
          <CurrencyConverter totalBalance={310000} savings={100000} minorExpenses={30000} />
          <IncomeExpenseChart />
          <ProgressCard 
              title="Your saving goal" 
              description="New pair of shoes 👠👠" 
              currentAmount={100000} 
              goalAmount={200000} 
            />
          </div>
        </section>
      

    </div>
  );
};

export default Dashboard;


