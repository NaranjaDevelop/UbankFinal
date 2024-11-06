import { useEffect, useState } from "react";
import { UseContextIncomes } from "../../Hooks/Usecontext";
import { getUserData, updateUserData } from "../../Services/Userdata";
import Incomescard from "./Components/Incomescard/Incomescard";
import MinorExpense from "./Components/MinorExpense/MinorExpense";
import MonthlyBudget from "./Components/MonthlyBudget/MonthlyBudget";
import IncomesExpenses from "./Components/IncomesExpense/IncomesExpense";

import IncomesMinorexpenses from "./Components/IncomesMinorexpense/IncomesMinorexpense";





interface IncomesProps {
    IncomeName: string;
    IncomeAmount: number;
    IncomeDate: string;

}

interface IncomesData {
    
        Incomes: IncomesProps[]
    
}
const Incomes = () => {
    
    const {incomesdata} = UseContextIncomes();


const [incomes, setIncomes] = useState<IncomesProps[]>([]);
const [incomeName, setIncomeName] = useState<string>("");
const [incomeAmount, setIncomeAmount] = useState<number>(0);
const [incomeDate, setIncomeDate] = useState<string>("");

const [TotalIncomes, setTotalIncomes] = useState<number>(0);
  
 
 
    
 useEffect(() => {
    console.log(incomesdata);
    const ignorefirst = incomesdata.slice(1);
    
    setIncomes(incomesdata)
    setIncomes(ignorefirst);

    
}, [incomesdata]);


   
 const handleinputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const value = e.target.value;
     console.log(value);
     setIncomeName(value);
     return value;
 }

 const handleupload = () => {
    console.log("upload");
    
    const newIncomes = [...incomes, {
        IncomeName: incomeName,
        IncomeAmount: incomeAmount,
        IncomeDate: incomeDate,
    }]
    setIncomes(newIncomes);
    updateUserData({ Incomes: newIncomes });
    
    
 }
 
 useEffect(() => {
     console.log(incomes);
     
     
     
     const getincomesamount = incomes.map((income) => income.IncomeAmount).reduce((acc, curr) => acc + curr, 0);
     console.log(getincomesamount);
     setTotalIncomes(getincomesamount);
     
     
    }, [incomes]);

  

    return (
        <div>
            <h1>Incomes</h1>
            <div className="incomes-container">
            <h1>Incomes</h1>
            <h3>Your incomes this month</h3>
            <div className="incomescard-container-scroll">
                

            { 
                incomes.map((income, index) => (
                    <Incomescard key={index} IncomeTitle={income.IncomeName} IncomeAmount={income.IncomeAmount} IncomeDate={income.IncomeDate} Incomesimg="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FGroup%201000006371.png?alt=media&token=229de619-a0ec-42ce-87fa-1c9d321440b1" />
                ))  
                
                
            }
                </div>
            <div>
                <h3>Total: {TotalIncomes}$</h3>
            </div>
            
            </div>
            <div className="incomes-expenses">
                <IncomesExpenses incomeAmount={TotalIncomes} expenseAmount={3000} />
            </div>
            <div>
                <IncomesMinorexpenses incomeAmount={TotalIncomes} minorexpense={100} />
            </div>
            <div className="Minor-expense-container">
                <MinorExpense ExpenseAmount={100} ExpenseDate="20-12-2023" ExpenseName="comida" Expensetype="Food" />
            </div>
            <MonthlyBudget budgetAmount={TotalIncomes} expensesAmount={100} minorExpensesAmount={199}   />
           </div>
           
    )
};
export default Incomes;