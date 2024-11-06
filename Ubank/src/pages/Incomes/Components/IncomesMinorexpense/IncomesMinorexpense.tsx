import './IncomesMinorexpense.css';

import { BarChart, Bar} from 'recharts';

interface IncomesExpensesProps {
    incomeAmount?: number;
    minorexpense?: number;
    incomePercentage?: number;
    expensePercentage?: number;
}

const IncomesExpenses: React.FC<IncomesExpensesProps> = ({
    incomeAmount = 0,
    minorexpense = 0,

}) => (
    <div className="incomes-expenses">
        <div className="header-incomesexpenses">
            <span role="img" aria-label="dollar">💵</span>
            <h2>Incomes vs Minor expenses</h2>
        </div>

        <div className="incomebarchart">
        <BarChart width={150} height={200} 
        data={[
            { name: 'Income', Income: incomeAmount },
            { name: 'Expense', Expense: minorexpense },
        ]} >
        
          
            <Bar dataKey={'Income'} fill='#8644DB' />
            <Bar dataKey={'Expense'} fill='#eFd5D2' />
        </BarChart>
        </div>

        <div className="incomesexpenses-info">
            <div className="incomesexpenses-info-container">
                
            <div className="rectangle-incomes" ></div>
            <p id='incomes-info'>Income: ${incomeAmount}</p>
            </div>

            <div className="incomesexpenses-info-container">

            <div className="rectangle-expenses" ></div>
            <p id='expenses-info'>Minor Expense: ${minorexpense}</p>
            </div>
        </div>

        
    </div>
);

export default IncomesExpenses;
