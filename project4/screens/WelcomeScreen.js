import axios from "axios";
import { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    const getMessage = async () => {
      const response = await axios.get(
        `https://react-native-course-23290-default-rtdb.firebaseio.com/message.json?auth=${authContext.token}`
      );
      console.log("response: ", response.data);
    };
    getMessage();
  }, [authContext.token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
