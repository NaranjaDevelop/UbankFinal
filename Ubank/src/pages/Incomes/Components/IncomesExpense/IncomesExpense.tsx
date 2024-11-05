import './IncomesExpense.css';

import { BarChart, Bar, YAxis, XAxis, Tooltip, Legend, } from 'recharts';

interface IncomesExpensesProps {
    incomeAmount?: number;
    expenseAmount?: number;
    incomePercentage?: number;
    expensePercentage?: number;
}

const IncomesExpenses: React.FC<IncomesExpensesProps> = ({
    incomeAmount = 0,
    expenseAmount = 0,

}) => (
    <div className="incomes-expenses">
        <div className="header-incomesexpenses">
            <span role="img" aria-label="dollar">💵</span>
            <h2>Incomes vs Expenses</h2>
        </div>

        <div className="incomebarchart">
        <BarChart width={150} height={200} 
        data={[
            { name: 'Income', Income: incomeAmount },
            { name: 'Expense', Expense: expenseAmount },
        ]} >
        
          
            <Bar dataKey={'Income'} fill='#8644DB' />
            <Bar dataKey={'Expense'} fill='#eFd5D2' />
        </BarChart>
        </div>

        <div className="incomesexpenses-info">
            <div className="rectangle-incomes" ></div>
            <p id='incomes-info'>Income: ${incomeAmount}</p>
            <div className="rectangle-expenses" ></div>
            <p id='expenses-info'>Expense: ${expenseAmount}</p>
        </div>

        
    </div>
);

export default IncomesExpenses;
