import React from "react";
import { Image, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Login,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "",
      headerTransparent: true,
      // headerRight: () => (
      //   <Ionicons name="md-notifications" size={30} color="#ff005a" />
      // ),
      // headerLeft: () => (
      //   <Text style={{color: '#ff005a', fontSize: 24}}>Fitly</Text>
      // ),
    },
  }
);

export default createAppContainer(navigator);
