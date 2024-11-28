import { useContext, useEffect, useState } from "react";
import { updateUserData } from "../Services/Userdata";
import { useFetcher } from "react-router-dom";
import Firstview from "../pages/Savings/Components/Firstview/Firstview";
import Secontview from "../pages/Savings/Components/Secondview/Secondview";
import FormSavings from "../pages/Savings/Components/FormSavings/FormsSavings";
import { IncomesContext } from "../Context/Incomes";
import SavingDash from "../pages/Savings/Components/SavingDash/SavingDash";

interface SavingsArray {
    goalName: string,
    category: string,
    goalAmount: string,
    savingFrequency: string,
    amountPerFrequency: string
}


const UseSavings = () => {



    const context = useContext(IncomesContext);

    

    const Savingindex = context.SavingIndex;
    const setSavingIndex = context.setSavingIndex;

useEffect(() => {
    setSavings(context.savingsdata);
    
    console.log(context.savingsdata);
    
    }, []);
    

const [goalName, setGoalName] = useState('');
const [category, setCategory] = useState('');
const [goalAmount, setGoalAmount] = useState('');
const [savingFrequency, setSavingFrequency] = useState('');
const [amountPerFrequency, setAmountPerFrequency] = useState(''); 

const [savings, setSavings] = useState<SavingsArray[]>([]);




const handlescreens = () => {
    
    if(Savingindex === 0){
      return <Firstview handlenext={() => context.counterindex()}/>
    }else if(Savingindex === 1){
      return <Secontview Handlenext={() => context.counterindex()} />
    }else if(Savingindex === 2){
      return <FormSavings />
    }else if(Savingindex === 3){
      return <SavingDash />

    }
    
  }



  
  const Savingadd = () => {
    console.log(goalName, category, goalAmount, savingFrequency, amountPerFrequency);
    
    const data: SavingsArray = {

        goalName : goalName,
        category: category || "Rent or Housing",
        goalAmount: goalAmount,
        savingFrequency: savingFrequency || "Monthly",
        amountPerFrequency: amountPerFrequency
    }

   
    setSavings(prevSavings => {
        const updatedSavings = [...prevSavings, data];
      
        updateUserData({ Savings: updatedSavings });
        context.counterindex()
        return updatedSavings;

      });
    
    
    
}
return {savings,
     handlescreens, 
    goalName, setGoalName,
    category, setCategory,
    goalAmount, setGoalAmount,
    savingFrequency, setSavingFrequency,
    amountPerFrequency, setAmountPerFrequency,
    Savingadd,setSavingIndex}

}

export default UseSavings;