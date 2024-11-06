import React, { useState } from "react";

interface ExpenseFormProps {
  onSubmit: (data: { expenseName: string; amount: number; date: string; category: string }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

