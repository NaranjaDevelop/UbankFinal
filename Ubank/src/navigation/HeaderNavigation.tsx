import { createHashRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import { routerform } from "./Navigation";
import Authrouters from "./AuthNavegation";
import Incomes from "../pages/Incomes/Incomes";
import SavingsGoals from "../pages/Savings/Savings";


const router = createHashRouter([

    {
      path: "Incomes",
      element:
 

        <Incomes />
 
      ,
        
      
        
    },
    
    {
      path: "dashboard", 
      element: 
      
    
        <Dashboard />
     
      
          ,
    },

    {
      path: "savings-goals",
      element: <SavingsGoals />,
    },
    ...routerform,
    ...Authrouters,
    



]);

export default router