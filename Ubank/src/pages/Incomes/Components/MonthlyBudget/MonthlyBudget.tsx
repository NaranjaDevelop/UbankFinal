import './MonthlyBudget.css';

import { PieChart, Pie, Cell } from 'recharts'


interface MonthlyBudgetProps {
    budgetAmount: number;
    expensesAmount: number;
    minorExpensesAmount: number;

}

const MonthlyBudget = ({ budgetAmount, expensesAmount, minorExpensesAmount }: MonthlyBudgetProps) => {


    return (
        <div className="monthly-budget">

            <div className="IconImage" style={{ display: "flex", flexDirection: "row" }} >
                <img src="" alt="Icon" className="Icon1" /> <h2>Monthly Budget</h2>
            </div>

            <div className="circular-chart">
                <PieChart width={200} height={200}>
                    <Pie
                        data={[{ name: 'Expenses', value: expensesAmount }, { name: 'Minor Expenses', value: minorExpensesAmount }]}
                        outerRadius={100}
                        innerRadius={80}
                        paddingAngle={0}
                        dataKey={"value"}

                    >
                        <Cell fill="#B7C7FF" />
                        <Cell fill="#c58121" />
                    </Pie>
                </PieChart>
                <div className="blue">
                    <h5>Monthly Budget</h5>
                    <h3>{budgetAmount}$</h3>
                </div>





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

export default MonthlyBudget;
