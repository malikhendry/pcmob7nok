import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { LOGIN_SCREEN, CONTACT_INFO, CONTACT_DETAILS, SIGN_UP, ADD_SCREEN } from "./constants";
import LoginScreen  from "./screens/LoginScreen";
import ContactInfo from "./screens/ContactInfo";
import ContactDetails from "./screens/ContactDetails";
import SignUp from "./screens/SignUp";
import AddScreen from "./screens/AddScreen";


const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  async function setToken() {
    const token = await AsyncStorage.getItem("token");
    
    setLoggedIn(token);
    setLoading(false);
  }

  useEffect(() => {
    setToken();
  }, []);

  const LoadingScreen = () => (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
  const AppScreen = () => (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        initialRouteName={loggedIn ? ContactInfo : CONTACT_INFO}
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
        }}
      >
        <Stack.Screen component={LoginScreen} name={LOGIN_SCREEN} />
        <Stack.Screen component={SignUp} name={SIGN_UP} />
        <Stack.Screen component={ContactInfo} name={CONTACT_INFO} />
        <Stack.Screen component={ContactDetails} name={CONTACT_DETAILS} />
        <Stack.Screen component={AddScreen} name={ADD_SCREEN} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return loading ? <LoadingScreen /> : <AppScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});