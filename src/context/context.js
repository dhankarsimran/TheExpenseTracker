import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 200000,
    category: "Car",
    type: "Expense",
    date: "2022-07-28",
    id: "70d31c4f-df63-46f8-aa26-8a6eeb3d6961",
  },
  {
    amount: 200000,
    category: "Travel",
    type: "Expense",
    date: "2022-07-28",
    id: "3dc38e4b-9f23-458d-9180-70d36b1c4a2c",
  },
  {
    amount: 900000,
    category: "House",
    type: "Expense",
    date: "2022-07-28",
    id: "b6cfb799-b121-42d7-af0a-771e6cb5c26d",
  },
  {
    amount: 300000,
    category: "Salary",
    type: "Income",
    date: "2022-07-28",
    id: "13f2d533-d802-4c62-8ef0-6c6f142e6975",
  },
  {
    amount: 900000,
    category: "Business",
    type: "Income",
    date: "2022-07-28",
    id: "3b88f2ea-c4a7-4988-af20-9abc5e5512d9",
  },
  {
    amount: 100000,
    category: "Deposits",
    type: "Income",
    date: "2022-07-28",
    id: "2b0fc613-460a-4f0d-96c5-6ba175743e9c",
  },
  {
    amount: 400000,
    category: "Savings",
    type: "Income",
    date: "2022-07-28",
    id: "f83445da-4645-4e51-af6c-a359759106fc",
  },
  {
    amount: 200000,
    category: "Salary",
    type: "Income",
    date: "2022-07-28",
    id: "79457505-9940-40ef-b56e-73c3647a2b77",
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Action Creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);
  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
