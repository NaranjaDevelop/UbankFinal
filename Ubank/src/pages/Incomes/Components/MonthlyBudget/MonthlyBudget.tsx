import './MonthlyBudget.css';

interface MonthlyBudgetProps {
    budgetAmount: number;
    expensesAmount: number;
    minorExpensesAmount: number;
}

const MonthlyBudget = ({ budgetAmount, expensesAmount, minorExpensesAmount }: MonthlyBudgetProps) => {
    const percentageExpenses = ((expensesAmount / budgetAmount) * 100).toFixed(0);
    const percentageMinorExpenses = ((minorExpensesAmount / budgetAmount) * 100).toFixed(0);

    return (
        <div className="monthly-budget">

            <div className="IconImage" style={{ display: "flex", flexDirection: "row"}} >
            <img src="" alt="Icon" className="Icon1"/> <h2>Monthly Budget</h2>
            </div>
            
            <div className="circular-chart">
                <div className="circle blue">
                <h3>{`$${budgetAmount.toLocaleString()}`}</h3>
                    </div> {/* Placeholder for the chart */}
            </div>
            

        <div className="DataDown" >
            <div className="expenses-summary">
                <p>Expenses: {`$${expensesAmount.toLocaleString()} • ${percentageExpenses}%`}</p>
                <p>Minor expenses: {`$${minorExpensesAmount.toLocaleString()} • ${percentageMinorExpenses}%`}</p>
            </div>
        </div>
        </div>
    );
}

export default MonthlyBudget;
