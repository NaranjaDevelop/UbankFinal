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
            <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/Images%2FExpensesIcon.png?alt=media&token=7d512b2b-ae50-4ad1-a596-c09ff45f8498" alt="Circularicon" className="CircleImage1"/>
            </div>
            <div className="details">
                <h2>{Expensetype || "Food"}</h2>
                <p>{ExpenseName|| "WeetSunday Cocteles 2x1"}</p>
                <p>{ExpenseDate|| "24/10/2024"}</p>
            </div>
            <div className="amount">
                <h3>{ExpenseAmount} $</h3>
            </div>
        </div>
    );
}

export default MinorExpense;
