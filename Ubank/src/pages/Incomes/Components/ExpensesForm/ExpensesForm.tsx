import React, { useState } from "react";

interface ExpenseFormProps {
  onSubmit: (data: { expenseName: string; amount: number; date: string; category: string }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ expenseName, amount, date, category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="expenseName">Expense Name:</label>
        <input
          type="text"
          id="expenseName"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;