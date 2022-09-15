import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const Static_Expenses = [
  {
    id: "1",
    title: "Oil",
    amount: 200,
    date: new Date(2020, 1, 25),
  },
  { id: "2", title: "Rice", amount: 300, date: new Date(2021, 2, 31) },
  {
    id: "3",
    title: "Chocolates",
    amount: 500,
    date: new Date(2021, 3, 27),
  },
  {
    id: "4",
    title: "Cake",
    amount: 250,
    date: new Date(2022, 10, 7),
  },
  {
    id: "5",
    title: "Vegetables",
    amount: 150,
    date: new Date(2020, 11, 24),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Static_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
