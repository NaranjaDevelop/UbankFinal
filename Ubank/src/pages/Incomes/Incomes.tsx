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
import Expensescard from "./Components/Expenses/Expenses";
import TypeExpensesWheel from "./Components/TypeExpensesPie/TypeExpensesPie";
import UseDashboard from "../../Hooks/DashboardHooks";
import Sidebar from "../../components/Sidebar/Sidebar";
import CategoriesCards from "./Components/Categoriescards/CategoriesCards";
import img1 from "../../assets/icon-income.webp"
import img2 from "../../assets/incomemoney.webp"

interface IncomesProps {
    IncomeName: string;
    IncomeAmount: number;
    IncomeDate: string;
}

interface IncomesData {
    
        Incomes: IncomesProps[]
    
}


const Incomes = () => {
    const { handleLogout } = UseDashboard() as { username: string; handleLogout: () => Promise<void>; };

    
    const {incomesdata,ExpenseData} = UseContextIncomes();


const [incomes, setIncomes] = useState<IncomesProps[]>([]);
const [TotalIncomes, setTotalIncomes] = useState<number>(0);
const [TotalExpenses, setTotalExpenses] = useState<number>(0);
const [TotalMinorExpenses, setTotalMinorExpenses] = useState<number>(0);
const [expenses, setExpenses] = useState<ExpenseData[]>([]);
const [minorExpenses, setMinorExpenses] = useState<any>([]);
const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
const [CategoriesData, setCategoriesData] = useState<any>([]);
 
const Category = [{
    CategoryName: "Rent or Housing",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FRenta.png?alt=media&token=86a9bd6b-fcd8-4205-b848-91c29a276dfc"
 },
 {
    CategoryName: "Food",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FMErcado.png?alt=media&token=fa267137-875d-461c-b19f-d3f32bddebfa"
 },
 {
    CategoryName: "Transportation",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FTransporte.png?alt=media&token=b00644a4-35bb-405a-9d2d-79b98f0d8c1b"
 },
 {
    CategoryName: "Entertainment",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FEntretenimiento.png?alt=media&token=36c0ff91-3af4-4651-b8c4-a2ca8692916f"
 },
 {
    CategoryName: "Education",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FEstudios.png?alt=media&token=6bd3aec7-cab0-4637-9515-e876abb60b4d"
    
 },
 {
    CategoryName: "Health",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FSalud.png?alt=media&token=86725444-72ee-48be-940f-b081c7f5e82c"
    
 },
 {
    CategoryName: "Sports",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FDeportes.png?alt=media&token=60c64004-71f6-41a8-a0c4-5e3c9f06cb0d"
 },
 {
    CategoryName: "Clothing",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FRopa.png?alt=media&token=27f6a2e8-b38b-4670-971b-612b0350435e"
    
 },
 {
    CategoryName: "Technology",
    CategoryAmount: 0,
    CategoryImg: "https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FTecnologia.png?alt=media&token=74b766cd-4cfd-4b9f-817b-124833548a71"
 },
 {
    CategoryName: "Social Events",
    CategoryAmount: 0,
    CategoryImg:"https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FFIestas.png?alt=media&token=744b99b4-8fe4-4e50-9fae-4f6292806d7d"
    
 },
 {
    CategoryName: "Other Expenses",
    CategoryAmount: 0,
    CategoryImg:"https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FMErcado.png?alt=media&token=fa267137-875d-461c-b19f-d3f32bddebfa"
    
 }
]


const categoriesexpensesadd = (expenses: ExpenseData[]) => {
 
    const categories = Category.map((category) => {
        const filterbycategory = expenses.filter((expense) => expense.ExpensesCategory === category.CategoryName);
        const categoryamount = filterbycategory.map((expense) => expense.ExpensesAmount).reduce((acc, curr) => acc + curr, 0);
        return {
            ...category,
             CategoryAmount: categoryamount,
        }
    })
            
    return categories;
}
    
 useEffect(() => {
    console.log(incomesdata);
    
    setIncomes(incomesdata)
    setExpenses(ExpenseData)
    categoriesexpensesadd(ExpenseData);
    setCategoriesData(categoriesexpensesadd(ExpenseData));
    MinorExpensesselector(ExpenseData);
    
}, [incomesdata]);


const MinorExpensesselector = (expenses: ExpenseData[]) => {

        
    const filterbyfood= expenses.filter((expense) => expense.ExpensesCategory === "Food" && expense.ExpensesAmount < 4000);
    const filterbytransport= expenses.filter((expense) => expense.ExpensesCategory === "Transportation" && expense.ExpensesAmount > 10000);
    
    const Minorexpenses = [...filterbyfood,...filterbytransport]
    setMinorExpenses(Minorexpenses);
    console.log(Minorexpenses);
}

 useEffect(() => {
     console.log(incomes);
     console.log(expenses);
     
     
     
     const getincomesamount = remainingIncomes.map((income) => income.IncomeAmount).reduce((acc, curr) => acc + curr, 0);
     const getexpensesamount = remainingExpenses.map((expense) => expense.ExpensesAmount).reduce((acc, curr) => acc + curr, 0);
    const getminorexpensesamount = minorExpenses.map((expense: ExpenseData) => expense.ExpensesAmount).reduce((acc: number, curr: number) => acc + curr, 0);
     console.log(getincomesamount);
     setTotalExpenses(getexpensesamount);
     setTotalIncomes(getincomesamount);
     setTotalMinorExpenses(getminorexpensesamount);
     
     
    }, [incomes,expenses]);



    const handleIncomeSubmit = (data: { incomeName: string; amount: number; date: string }) => {
        console.log("upload");

        const newIncomes = [
            ...incomes,
            {
                IncomeName: data.incomeName,
                IncomeAmount: data.amount,
                IncomeDate: data.date,
            },
        ];
        setIncomes(newIncomes);
        updateUserData({ Incomes: newIncomes });
        console.log("Datos del formulario:", data);
        setIsIncomeModalOpen(false);
    };

         interface ExpenseData {
            ExpensesName: string;
            ExpensesAmount: number;
            ExpensesDate: string;
            ExpensesCategory: string;
          }
          
         
      

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
            setIsExpenseModalOpen(false);
          };


        
          const [, ...remainingIncomes] = incomes;
          const [, ...remainingExpenses] = expenses;
      
    return (
        <div className="incomes-main-div">
            <h1 className="main-title">Incomes and Expenses</h1>
            <p className="main-subtitle">Here you can enter your income and expenses to have control over them.</p>





            <Sidebar onLogout={handleLogout} />
            
            <div>
                {isIncomeModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <button className="close-button" onClick={() => setIsIncomeModalOpen(false)}>X</button>
                            <IncomeForm onSubmit={handleIncomeSubmit} />
                        </div>
                    </div>
                )}
            </div>
            {isExpenseModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-button" onClick={() => setIsExpenseModalOpen(false)}>
                X
              </button>
              <ExpenseForm onSubmit={handleExpenseSubmit} />
            </div>
          </div>
        )}

            <div className="Firstrow-container">
            <div className="incomes-container">
            <div className="header2">
                <div className="icon" style={{ backgroundColor: '#D7F177' }}> <img src={img1} alt="income-info" width={14}/></div>
                <h1>Incomes</h1>
                <img className="add-income"  onClick={() => setIsIncomeModalOpen(true)} src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FAddbutton.png?alt=media&token=54634ae9-a33a-4abe-8827-f698b40714c4" alt="" height={45} width={45}/>
            </div>
            <p>Your incomes this month</p>
            
            <div className="incomescard-container-scroll">
                
            
            {remainingIncomes.length === 0 ?  <h3>No incomes added yet</h3> :

                    remainingIncomes.map((income, index) => (
                    <Incomescard key={index} IncomeTitle={income.IncomeName} IncomeAmount={income.IncomeAmount} IncomeDate={income.IncomeDate} Incomesimg={img2} />
                ))  
                
                
            }
                </div>
           
                <h3 className="total-incomes">Total: ${TotalIncomes.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</h3>
            
            
            </div>
            <div className="Bargraph-container">

            <div>
                <IncomesExpenses incomeAmount={TotalIncomes} expenseAmount={TotalExpenses} />
            </div>
            <div>
             
                <IncomesMinorexpenses incomeAmount={TotalIncomes} minorexpense={TotalMinorExpenses} />
            </div>
            </div>
            <div>
                <Motivation />
            </div>
            </div>
            <div className="Secondrow-container">

            <MonthlyBudget budgetAmount={TotalIncomes} expensesAmount={TotalExpenses} minorExpensesAmount={TotalMinorExpenses}   />
            <div className="Minor-expense-container">
                <h1>Minor Expenses</h1>
                <div className="minor-expense-scroll-container">

                {   
                    minorExpenses.length === 0 ? <h3>No minor expenses detected yet</h3> :
                    minorExpenses.map((expense: ExpenseData, index:any) => (
                        <MinorExpense key={index} ExpenseAmount={expense.ExpensesAmount} ExpenseDate={expense.ExpensesDate} ExpenseName={expense.ExpensesName} Expensetype={expense.ExpensesCategory} />
                        ))
                }
                    </div>
                            </div> 
            </div>
            <div className="Thirdrow-container">
                
            <div className="expensescards-container">

            <div className="categories-container">

                <TypeExpensesWheel  data={CategoriesData}   />
                <div className="categories-scroll-container">

                {
                    categoriesexpensesadd(expenses).map((category, index) => (
                        <CategoriesCards key={index} TypeExpenses={category.CategoryName} TypeAmount={category.CategoryAmount} TypeImg={category.CategoryImg}/>
                    ))
               } 
                </div>
            </div>
            <div className="Expensescontainer-all">
                <div className="containerheader-expenses">
               <div>

                <h1>Expenses</h1>
                <h3>Your expenses this month</h3>
               </div>
               <div className="Addexpenses-container">

                <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FFilter%20Icon.png?alt=media&token=14ff20e3-a9a0-4b8a-9158-7c65918bc496" alt="" height={20} width={20} />

                <img className="add-expenses"  onClick={() => setIsExpenseModalOpen(true)} src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FAddbutton.png?alt=media&token=54634ae9-a33a-4abe-8827-f698b40714c4" alt="" height={50} width={50}/>
               </div>
                </div>
                <div className="expensescard-container-scroll">

                {
                    remainingExpenses.length === 0 ? <h3>No expenses added yet</h3> :
                    
                    remainingExpenses.map((expense, index) => (
                        <Expensescard key={index} ExpensesTitle={expense.ExpensesName} ExpensesAmount={expense.ExpensesAmount} ExpensesDate={expense.ExpensesDate} ExpensesType={expense.ExpensesCategory} Expensesimg="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FGroup%201000006371.png?alt=media&token=229de619-a0ec-42ce-87fa-1c9d321440b1" />
                    ))  
                }
                </div>
                </div>
                </div>
            </div>
           </div>
           
    )
};

export default Incomes;