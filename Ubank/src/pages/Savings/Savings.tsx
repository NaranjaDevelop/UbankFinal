import React, { useContext, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Savings.css'

import UseDashboard from '../../Hooks/DashboardHooks';

import Savingside from './Components/Savingside/Savingside';
import UseSavings from '../../Hooks/Usesavings';
import { IncomesContext } from '../../Context/Incomes';

const SavingsGoals: React.FC = () => {
  
  const context = useContext(IncomesContext)
  
  const {handlescreens,goalName, goalAmount, savingFrequency, amountPerFrequency, category} = UseSavings() 

  

  const {handleLogout} = UseDashboard() as { username: string; handleLogout: () => Promise<void>; };

  return (
    <div className='savings-goals-container'>
      {context.SavingIndex < 2 ?(
        <Sidebar onLogout={handleLogout} />)
        : (
          <Savingside Goalname={goalName} GoalCategory={category} AmountToSave={goalAmount} Frequency={savingFrequency} Contribution={amountPerFrequency}></Savingside>
        ) 

      }
      <section className='info-section'>
        <h1>Savings</h1>
      </section>
      <div className='savingsScreens-container'>
        {handlescreens()}
      </div>
    </div>
  );
};

export default SavingsGoals;
