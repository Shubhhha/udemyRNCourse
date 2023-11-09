import React, { useContext } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  console.log("expensesContext: ", expensesContext?.expenses);
  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriod="Total"
    />
  );
};
export default AllExpenses;
