import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import Input from "./Input";
import { StyleSheet } from "react-native";
import Button from "../UI/Button";
import { getFormattedDate } from "../../utils/date";
import { GlobalStyles } from "../../constants/styles";
const ExpenseForm = ({
  cancelHandler,
  submitButtonLabel,
  heading,
  onsubmit,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      amount: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      date: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      description: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs((curInput) => {
      return {
        ...curInput,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value, // + sign converts
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData?.description?.trim()?.length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      //   Alert.alert("Invalid input", "Please check your input values");
      setInputs((curInput) => {
        return {
          amount: { value: curInput.amount.value, isValid: amountIsValid },
          date: { value: curInput.date.value, isValid: dateIsValid },
          description: {
            value: curInput.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onsubmit(expenseData);
  };

  const formIsValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  return (
    <View style={styles.formView}>
      <Text style={styles.title}>{heading}</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          invalid={!inputs.amount.isValid}
          style={styles.rowInput}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          //   autoCorrect: false, // default is true
          value: inputs.description.value,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
      {formIsValid && (
        <Text style={styles.errorText}>
          Invalid Input values -Please check your entered data!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  formView: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});

export default ExpenseForm;
