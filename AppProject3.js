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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./project3/screens/ManageExpense";
import RecentExpenses from "./project3/screens/RecentExpenses";
import AllExpenses from "./project3/screens/AllExpenses";
import { GlobalStyles } from "./project3/constants/styles";
import IconButton from "./project3/components/UI/IconButton";
import { createStackNavigator } from "@react-navigation/stack";
import ExpensesContextProvider from "./project3/store/expenses-context";

const BottomTabs = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
