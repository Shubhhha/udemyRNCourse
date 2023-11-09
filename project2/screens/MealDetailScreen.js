import React, { useContext, useLayoutEffect } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Image } from "react-native";
import IconButton from "../component/IconButton";
import { FavouriteContext } from "../store/context/favourites-context";
const MealDetailScreen = ({ route, navigation }) => {
  const favouriteMealContext = useContext(FavouriteContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log("selectedMeal: ", selectedMeal);

  const mealIsFavourite = favouriteMealContext.ids.includes(mealId);
  const changeFavouriteStatusHandler = () => {
    if (mealIsFavourite) {
      favouriteMealContext.removeFavorite(mealId);
    } else {
      favouriteMealContext.addFavorite(mealId);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeal?.duration}m</Text>
        <Text style={styles.detailItem}>
          {selectedMeal?.complexity?.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal?.affordability?.toUpperCase()}
        </Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {selectedMeal?.ingredients?.map((ingrediant) => (
            <View key={ingrediant} style={styles.listItem}>
              <Text key={ingrediant}>{ingrediant}</Text>
            </View>
          ))}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          {selectedMeal?.steps?.map((step) => (
            <View key={step} style={styles.listItem}>
              <Text key={step}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
export default MealDetailScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
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
    color: "white",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e2b497",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
