import axios from "axios";
const baseURL = "https://react-native-course-23290-default-rtdb.firebaseio.com";
export const storeExpenses = (expenseData) => {
  axios.post(`${baseURL}/expenses.json`, expenseData);
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${baseURL}/expenses.json`);
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
