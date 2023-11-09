import "react-native-gesture-handler";
import { Button, StatusBar, Text, View } from "react-native";
import Main from "./project1/Main";
import CategoryScreen from "./project2/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./project2/screens/MealsOverviewScreen";
import MealDetailScreen from "./project2/screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./project2/screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider, {
  FavouriteContext,
} from "./project2/store/context/favourites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        // options={{ title: "ALl Categories" }}
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
          title: "ALl Categories",
        }}
      />
      <Drawer.Screen
        name="FavouriteScreen"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
        component={FavouriteScreen}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#24160f" }}>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Drawer"
              component={DrawerNavigator}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetailScreen"
              component={MealDetailScreen}
              // options={{
              //   headerRight: () => {
              //     return <Button title="tap me" />;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  );
}
