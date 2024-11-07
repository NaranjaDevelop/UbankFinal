import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Savings.css'

const SavingsGoals: React.FC = () => {
  function handleLogout(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className='savings-goals-container'>
      <Sidebar onLogout={handleLogout} />
      <section className='text-content'>
        <h2>Savings Goals</h2>
        <p >Manage your savings goals here.</p>
      </section>
    </div>
  );
};

export default SavingsGoals;
