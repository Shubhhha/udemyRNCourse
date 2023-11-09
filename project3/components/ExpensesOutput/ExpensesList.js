import { Text, View, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = ({ item }) => {
  console.log("item: ", item);
  return <ExpenseItem {...item} />;
};
const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};
export default ExpensesList;
