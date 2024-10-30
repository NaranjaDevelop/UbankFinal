import React, { useState } from "react";
import { updateUserData } from "../../../../Services/Userdata";

interface IncomeFormProps {
  onSubmit: (data: IncomeFormData) => void;
}

interface IncomeFormData {
  incomeName: string;
  amount: number;
  date: string;
}

const IncomeForm: React.FC<IncomeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<IncomeFormData>({
    incomeName: "",
    amount: 0,
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "amount" ? parseFloat(value) : value, // Convertimos 'amount' a número
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    const newincome = [formData]

    console.log(newincome);
    updateUserData(newincome)
    setFormData({
      incomeName: "",
      amount: 0,
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="incomeName">Nombre del Ingreso:</label>
        <input
          type="text"
          id="incomeName"
          name="incomeName"
          value={formData.incomeName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="amount">Cantidad:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Registrar</button>
    </form>
  );
};

export default IncomeForm;