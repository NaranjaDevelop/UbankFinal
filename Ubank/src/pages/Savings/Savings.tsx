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
      <div className='text-content'>
        <h2>Savings Goals</h2>
        <p >Manage your savings goals here.</p>
      </div>
      </section>
      <div className='screens-container'>
        {handlescreens()}
      </div>
    </div>
  );
};

export default SavingsGoals;
