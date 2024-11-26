import { useState } from "react";
import { updateUserData } from "../../../../Services/Userdata";
import UseSavings from "../../../../Hooks/Usesavings";
import Savingside from "../Savingside/Savingside";



const FormSavings = () => {
    
   const {Savingadd,setGoalName,setCategory,setGoalAmount,setSavingFrequency,setAmountPerFrequency} = UseSavings();
    
               return (

        <div>

            <div>

            <h1>Goal Details</h1>
            <h3>Goal Name</h3>
            <input type="text" placeholder="Enter your goal"  onChange={(e) => setGoalName(e.target.value)}/>
            <h3>Category</h3>
            <select name="Category" onChange={(e) => setCategory(e.target.value)}>
                <option value="Rent or Housing">Rent or Housing</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Sports">Sports</option>
                <option value="Clothing">Clothing</option>
                <option value="Technology">Technology</option>
                <option value="Social Events">Social Events</option>
                <option value="Other Expenses">Other Expenses</option>
            </select>

            </div>
            <div>
                <h1>Savings Plan</h1>
                <h3>Goal Amount</h3>
                <input type="number" placeholder="Enter your monthly contribution" onChange={(e) => setGoalAmount(e.target.value)} />
                <h3>Saving Frequency</h3>
                <select name="Frequency" onChange={(e) => setSavingFrequency(e.target.value)}>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Yearly">Yearly</option>
                </select>
                <h3>Amount per frequency</h3>
                <input type="number" placeholder="Enter your amount per frequency" onChange={(e) => setAmountPerFrequency(e.target.value)} />
            </div>
            <div>
            <button>Cancel</button>
            <button onClick={() => Savingadd()}>Create Goal</button>
            </div>

        </div>
    )
};
export default FormSavings;