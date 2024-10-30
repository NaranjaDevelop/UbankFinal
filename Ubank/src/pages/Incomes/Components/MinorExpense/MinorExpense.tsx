import './MinorExpense.css';

interface MinorExpenseProps {
    Expensetype: string;
    ExpenseName: string;
    ExpenseDate: string;
    ExpenseAmount: number;
}

const MinorExpense = ({ Expensetype, ExpenseName, ExpenseDate, ExpenseAmount }: MinorExpenseProps) => {
    return (
        <div className="minor-expense">
            
            <div className="CircleImage" >
            <img src="" alt="Circularicon" className="CircleImage1"/>
            </div>
            <div className="details">
                <h2>{Expensetype || "Food"}</h2>
                <p>{ExpenseName|| "WeetSunday Cocteles 2x1"}</p>
                <p>{ExpenseDate|| "24/10/2024"}</p>
            </div>
            <div className="amount">
                <h3>{ExpenseAmount}</h3>
            </div>
        </div>
    );
}

export default MinorExpense;
