import './TypeExpenses.css'

import { PieChart, Pie, Cell} from 'recharts'


interface MonthlyBudgetProps {
    budgetAmount: number;
    expensesAmount: number;
    minorExpensesAmount: number;
}

const TypeExpensesWheel = ({ budgetAmount, expensesAmount, minorExpensesAmount }: MonthlyBudgetProps) => {


    return (
        <div className="monthly-budget">

            <div className="IconImage" style={{ display: "flex", flexDirection: "row" }} >
                <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FExpensesIcon.png?alt=media&token=7d512b2b-ae50-4ad1-a596-c09ff45f8498" alt="Icon" className="Icon1" height={40} />
                 <div className="ExpensesText-wheel">

                 <h2>Expenses</h2>
                 <p>your expenses this month</p>
                 </div>
            </div>

            <div className="circular-chart">
                <PieChart width={200} height={200}>
                    <Pie
                        data={[{ name: 'Expenses', value: expensesAmount }, { name: 'Minor Expenses', value: minorExpensesAmount }]}
                        outerRadius={100}
                        innerRadius={60}
                        dataKey={"value"}

                    >
                        
                        <Cell fill="#B7C7FF" />
                        <Cell fill="#c58121" />
                    </Pie>
                </PieChart>
               





            </div>


            <div className="DataDown" >
                <div className="expenses-summary">
                    <p>Expenses: {expensesAmount}</p>
                    <p>Minor expenses: {minorExpensesAmount}</p>
                </div>
            </div>
        </div>
    );
}

export default TypeExpensesWheel;
