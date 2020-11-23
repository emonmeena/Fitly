import React from "react";
import { Image, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import Login from "./src/screens/Authentication/Login";
import Register from "./src/screens/Authentication/Register";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignIn: Login,
    SignUp: Register,
  }),
  mainFlow: HomeScreen,
});

export default createAppContainer(switchNavigator);
