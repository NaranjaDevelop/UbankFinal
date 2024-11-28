import { useLocation, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import UseDashboard from "../../Hooks/DashboardHooks";
import UseSavings from "../../Hooks/Usesavings";
import SavingDetailed from "./Components/Saving/SavingDetailed";
import { useContext, useEffect } from "react";
import { IncomesContext } from "../../Context/Incomes";




const SavingsDetail = () => {
   
  
  
  const {savingsdata } = useContext(IncomesContext)
  console.log(savingsdata);
  
    const param = useLocation().pathname.split('/')[2]
    const paraid = parseInt(param)

    const {handleLogout} = UseDashboard() as { username: string; handleLogout: () => Promise<void>; };
    
  return (
    <>
     <div className='savings-goals-container'>
        <Sidebar onLogout={handleLogout} />
      <section className='info-section'>
        <h1 className="main-title">Savings</h1>
      
      </section>
      <div>
        <SavingDetailed savingtitle="" savedtotal={2} savingFrequency="" savingamount={2} savingdate="" savingsdone={[{amount:2, date:"2022-02-02"}]} />
      </div>
    </div>
    </>
  );
};

export default SavingsDetail;