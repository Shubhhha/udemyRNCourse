import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
const RecentExpenses = () => {
  //   const [fetchedExpenses, setFetchedExpenses] = useState([]);
  const expensesContext = useContext(ExpensesContext);
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    return expenseDate >= date7daysAgo && expenseDate <= today;
  });

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expensesContext.setExpense(expenses);
    };
    getExpenses();
  }, []);
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" />
  );
};
export default RecentExpenses;
