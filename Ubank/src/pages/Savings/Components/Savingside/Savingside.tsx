import { useEffect } from "react";

interface SavingsideProps {
    Goalname: string,
    GoalCategory: string,
    AmountToSave: string,
    Frequency: string,
    Contribution: string    
    }

const Savingside = ({ Goalname, GoalCategory, AmountToSave, Frequency, Contribution }: SavingsideProps) => {

    

    return (
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/ubank-6f760.appspot.com/o/logosavings.png?alt=media&token=331e5399-063d-41a4-bc5c-3e31e12d7f36" alt="" />

            <h1>!Let's create your</h1>
            <h1>saving goal</h1>

            <div>
                <h2>Goal details</h2>
                <h3>Goal name</h3>
                <p>{Goalname || "Enter a name for your goal" }</p>
                <h3>Category</h3>
                <p>{GoalCategory || "Select a category" }</p> 
            </div>

            <div>
                <h2>Savings Plan</h2>
                <h3>Amount to save</h3>
                <p>{AmountToSave || "Enter an amount to save" }</p>
                <h3>Savings frequency</h3>
                <p>{Frequency || "Select a duration" }</p> 
                <h3>Contribution</h3>
                <p>{Contribution || "Select a frequency" }</p> 
            </div>
        </div>
    )

}

export default Savingside;