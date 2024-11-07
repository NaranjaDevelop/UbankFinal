import React, {  useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../Clients/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import './Dashboard.css'
import { UseContextIncomes } from "../../Hooks/Usecontext";
import CurrencyConverter from "./Components/CardMoney/CurrencyConverter";
import Sidebar from "../../components/Sidebar/Sidebar";
import IncomeExpenseChart from "./Components/IncExpChart/IncomeExpenseChart";
import ProgressCard from "./Components/SavingsProgress/SavingProgress";

const Dashboard: React.FC = () => {

  const {incomesdata} = UseContextIncomes();

  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false); 
  const navigate = useNavigate();

  useEffect(() => {
    console.log(incomesdata);
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true); 
      if (user) {
        
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUsername(userDoc.data()?.username || "");
            
          }
        } catch (error) {
          console.error("Error al obtener los datos del usuario: ", error);
          toast.error("Error al obtener los datos del usuario.");
        } finally {
          setLoading(false); 
        }
      } else {
        
        setLoading(false); 
        if (!isLoggingOut) { 
          toast.error("Debe iniciar sesión para acceder al dashboard.");
        }
        navigate("/login");
      }
    });

    return () => unsubscribe(); 
  }, [navigate, isLoggingOut,incomesdata]);

  
  const handleLogout = async () => {
    setIsLoggingOut(true); 
    try {
      await signOut(auth);
      toast.success("Finalizó su sesión exitosamente.");
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
      toast.error("Error al cerrar sesión.");
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="dash-div">
      <h2
      className="welcome-user">
        Welcome!, {username} 
      </h2>
      <p>Detailed overview of your finantial situation</p>
      <CurrencyConverter totalBalance={310000} savings={100000} minorExpenses={30000} />
      <Sidebar onLogout={handleLogout} />
      <IncomeExpenseChart />
      <ProgressCard 
          title="Your saving goal" 
          description="New pair of shoes 👠👠" 
          currentAmount={100000} 
          goalAmount={200000} 
        />

    </div>
  );
};

export default Dashboard;


