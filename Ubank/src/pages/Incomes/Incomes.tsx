import { useEffect, useState } from "react";
import { UseContextIncomes } from "../../Hooks/Usecontext";
import { getUserData, updateUserData } from "../../Services/Userdata";
import Incomescard from "./Components/Incomescard/Incomescard";
import MinorExpense from "./Components/MinorExpense/MinorExpense";
import MonthlyBudget from "./Components/MonthlyBudget/MonthlyBudget";
import IncomesExpenses from "./Components/IncomesExpense/IncomesExpense";
import IncomeForm from "./Components/IncomesForm/IncomeForm";
import './Incomespage.css'
import IncomesMinorexpenses from "./Components/IncomesMinorexpense/IncomesMinorexpense";
import Motivation from "./Components/Advertisement/Motivation";
import ExpenseForm from "./Components/ExpensesForm/ExpensesForm";




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
const [TotalIncomes, setTotalIncomes] = useState<number>(0);
  
 
 
    
 useEffect(() => {
    console.log(incomesdata);
    
    setIncomes(incomesdata)


    
}, [incomesdata]);


   

 useEffect(() => {
     console.log(incomes);
     
     
     
     const getincomesamount = incomes.map((income) => income.IncomeAmount).reduce((acc, curr) => acc + curr, 0);
     console.log(getincomesamount);
     setTotalIncomes(getincomesamount);
     
     
    }, [incomes]);

    const handleIncomeSubmit = (data: { incomeName: string; amount: number; date: string }) => {
        
            console.log("upload");
        
            const newIncomes = [...incomes, {
                IncomeName: data.incomeName,
                IncomeAmount: data.amount,
                IncomeDate: data.date,
            }]
            setIncomes(newIncomes);
            updateUserData({ Incomes: newIncomes });
            console.log("Datos del formulario:", data); 
         }

         interface ExpenseData {
            ExpensesName: string;
            ExpensesAmount: number;
            ExpensesDate: string;
            ExpensesCategory: string;
          }
          
         
        const [expenses, setExpenses] = useState<ExpenseData[]>([]);

         const handleExpenseSubmit = (data: ExpenseData) => {
            setExpenses((prevExpenses) => [...prevExpenses, data]);
            const newExpenses = [...expenses, {
                ExpensesName: data.ExpensesName,
                ExpensesAmount: data.ExpensesAmount,
                ExpensesDate: data.ExpensesDate,
                ExpensesCategory: data.ExpensesCategory,
            }]
            updateUserData({ Expenses: newExpenses });
            console.log("Nuevo gasto agregado:", data);
          };

    return (
        <div>
            <h1>Incomes</h1>
            <div>
                <IncomeForm onSubmit={handleIncomeSubmit}></IncomeForm>
            </div>

            <div>
                <ExpenseForm onSubmit={handleExpenseSubmit}></ExpenseForm>
            </div>
            
            <div className="Firstrow-container">

            <div className="incomes-container">
            <h1>Incomes</h1>
            <h3>Your incomes this month</h3>
            <div className='addbutton'>+</div>
            <div className="incomescard-container-scroll">
                

            {incomes.length < 0 ? <h3>No incomes added yet</h3> :

                incomes.map((income, index) => (
                    <Incomescard key={index} IncomeTitle={income.IncomeName} IncomeAmount={income.IncomeAmount} IncomeDate={income.IncomeDate} Incomesimg="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FGroup%201000006371.png?alt=media&token=229de619-a0ec-42ce-87fa-1c9d321440b1" />
                ))  
                
                
            }
                </div>
           
                <h3 className="total-incomes">Total: {TotalIncomes}$</h3>
            
            
            </div>
            <div className="Bargraph-container">

            <div>
                <IncomesExpenses incomeAmount={TotalIncomes} expenseAmount={3000} />
            </div>
            <div>
                <IncomesMinorexpenses incomeAmount={TotalIncomes} minorexpense={100} />
            </div>
            </div>
            <div>
                <Motivation />
            </div>
            </div>
            <div className="Secondrow-container">

            <MonthlyBudget budgetAmount={TotalIncomes} expensesAmount={100} minorExpensesAmount={199}   />
            <div className="Minor-expense-container">
                <h1>Minor Expenses</h1>
                <MinorExpense ExpenseAmount={100} ExpenseDate="20-12-2023" ExpenseName="comida" Expensetype="Food" />
            </div> 
            </div>
    
           </div>
           
    )
};

export default Incomes;