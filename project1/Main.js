import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";
import { StatusBar } from "expo-status-bar";
export default function Main() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal "
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          addGoalFn={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData?.item?.text}
                  id={itemData?.item?.id}
                  onPressDelete={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 4,
    marginTop: 20,
  },
});
