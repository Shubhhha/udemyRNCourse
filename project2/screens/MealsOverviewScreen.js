import React, { useEffect, useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../component/MealItem";
import { CATEGORIES } from "../data/dummy-data";
const MealsOverviewScreen = ({ route, navigation }) => {
  const cgid = route.params?.cgid;
  const componentRoute = useRoute();
  console.log("route: ", componentRoute?.params?.cgid);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem?.categoryIds.indexOf(cgid) >= 0;
  });
  console.log("displayedMeals: ", displayedMeals);

  const renderMeals = ({ item }) => {
    return <MealItem item={item} />;
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === cgid
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cgid]);
  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} renderItem={renderMeals} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default MealsOverviewScreen;
