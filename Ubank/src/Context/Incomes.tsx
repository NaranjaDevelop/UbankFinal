import { createContext, useEffect, useState } from "react";
import { getUserData } from "../Services/Userdata";

export const IncomesContext = createContext({
    incomesdata: [],
    ExpenseData: []
    
});



export const IncomesProvider = ({ children }: { children: any }) => {
    const [incomesdata, setIncomes] = useState([]);
    const [ExpenseData, setExpense] = useState([]);
    

    useEffect(() => {
        const userData = async () => {
            try {
                const data = await getUserData() as any;
                setIncomes(data.Incomes);
                setExpense(data.Expenses);
                console.log(data.Incomes);
                console.log(data.Expenses);
                
            } catch (error) {
                console.log(error);
            }
        };
        userData();
        
    }, []);

    const value = {
        incomesdata,
        ExpenseData
        };

    return <IncomesContext.Provider value={value}>{children}</IncomesContext.Provider>;
};