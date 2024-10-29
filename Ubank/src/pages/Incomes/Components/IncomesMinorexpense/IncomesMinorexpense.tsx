import './IncomesMinorexpense.css';

const IncomesMinorexpenses: React.FC = () => (
    <div className="incomes-minorexpenses">
        <div className="header">
            <span role="img" aria-label="dollar">💵</span>
            <h2>Incomes vs Minor Expenses</h2>
        </div>

        <div className="bar income-bar">
            <div className="bar-fill income-fill"></div>
            <p>Incomes $0</p>
        </div>

        <div className="bar minor-expense-bar">
            <div className="bar-fill minor-expense-fill"></div>
            <p>Minor Expenses $0</p>
        </div>
    </div>
);

export default IncomesMinorexpenses;
