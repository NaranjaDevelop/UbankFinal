import './IncomesMinorexpense.css';

interface IncomesMinorexpensesProps {
    incomeAmount?: number;
    minorExpenseAmount?: number;
    incomePercentage?: number;
    minorExpensePercentage?: number;
}

const IncomesMinorexpenses: React.FC<IncomesMinorexpensesProps> = ({
    incomeAmount = 0,
    minorExpenseAmount = 0,
    incomePercentage = 0,
    minorExpensePercentage = 0
}) => (
    <div className="incomes-minorexpenses">
        <div className="header">
            <span role="img" aria-label="dollar">💵</span>
            <h2>Incomes vs Minor Expenses</h2>
        </div>

        {incomeAmount === 0 ? (
            <p className="not-found">Incomes not found</p>
        ) : (
            <div className="bar income-bar">
                <div className="bar-fill income-fill" style={{ width: `${incomePercentage}%` }}></div>
                <p>Incomes ${incomeAmount.toLocaleString()}</p>
            </div>
        )}

        {minorExpenseAmount === 0 ? (
            <p className="not-found">Minor expenses not found</p>
        ) : (
            <div className="bar minor-expense-bar">
                <div className="bar-fill minor-expense-fill" style={{ width: `${minorExpensePercentage}%` }}></div>
                <p>Minor Expenses ${minorExpenseAmount.toLocaleString()}</p>
            </div>
        )}
    </div>
);

export default IncomesMinorexpenses;
