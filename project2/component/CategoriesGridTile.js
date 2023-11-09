import React from "react";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";

const CategoriesGridTile = ({ item, onPress }) => {
  console.log("item: ", item);
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: item?.color }]}>
          <Text style={styles.title}>{item?.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
export default CategoriesGridTile;
