import React from "react";
import { Text, View, Pressable, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
const MealItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles?.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => {
          navigation.navigate("MealDetailScreen", {
            mealId: item?.id,
          });
        }}
      >
        <View>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{item?.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{item?.duration}m</Text>
          <Text style={styles.detailItem}>
            {item?.complexity?.toUpperCase()}
          </Text>
          <Text style={styles.detailItem}>
            {item?.affordability?.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});
export default MealItem;
