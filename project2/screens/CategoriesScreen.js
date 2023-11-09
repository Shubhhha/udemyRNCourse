import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";
import CategoriesGridTile from "../component/CategoriesGridTile";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = () => {
  const navigation = useNavigation();

  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        cgid: item?.id,
      });
    };
    return <CategoriesGridTile item={item} onPress={pressHandler} />;
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
export default CategoryScreen;
