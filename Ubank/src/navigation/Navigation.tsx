import FinantialPlan from "../pages/FinantialPlan/FinantialPlan";
import { lazy, Suspense } from "react";
import OnBoarding from "../pages/OnBoarding/OnBoarding";
const FormPage = lazy(() => import("../pages/Form/Form"));
import Error from "../components/Error/Error";
import IncomeForm from "../pages/Incomes/Components/IncomesForm/IncomeForm";

const handleIncomeSubmit = (data: { incomeName: string; amount: number; date: string }) => {
  console.log("Datos del formulario:", data); 
};


export const routerform = ([
   
    {
        path: "/onboarding",
        element:<OnBoarding/>,
    },
    {
      path: "/form",
      element: <Suspense fallback={<div>Loading...</div>}>
          <FormPage />,
        </Suspense>
  
    }
    ,{
      path: "/Plan",
      element: <FinantialPlan />,
      
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "/IncomeForm",
      element: <IncomeForm onSubmit={handleIncomeSubmit}/>,
    },
  ]);