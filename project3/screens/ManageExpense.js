import React, { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/manageExpense/ExpenseForm";
import { storeExpenses } from "../utils/http";
const ManageExpense = ({ route, navigation }) => {
  const expenseContext = useContext(ExpensesContext);
  console.log("expenseContext: ", expenseContext.expenses);
  const editedExpenseId = route?.params?.expenseId;
  const isEditing = !!editedExpenseId; // convert value into bollean.
  console.log("isEditing: ", isEditing);

  const deleteExpenseHandler = () => {
    expenseContext.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expense) => {
    if (isEditing) {
      expenseContext.updateExpense(editedExpenseId, expense);
    } else {
      storeExpenses(expense);
      expenseContext.addExpense(expense);
    }
    navigation.goBack();
  };

  const selectedExpense = expenseContext.expenses.find(
    (expense) => expense.id === editedExpenseId
  );
  return (
    <View style={styles.container}>
      <ExpenseForm
        cancelHandler={cancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        heading={isEditing ? "Update Your Expense" : "Add Your Expense"}
        onsubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};
export default ManageExpense;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
