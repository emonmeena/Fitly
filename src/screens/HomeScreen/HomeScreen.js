import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LifeStyle from "../LifeStyle/LifeStyle";
import ProfileStack from "../Profile/Profile";
import FitnessTracker from "../FitnessTracker/FitnessTracker";
import Explore from "../Explore/Explore";
import { NavigationContainer } from "@react-navigation/native";
import ConsultDoctor from "../ConsultDoctor/ConsultDoctor";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  // console.log(props);
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={'Fitness'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "LifeStyle") {
              iconName = focused ? "md-hand" : "md-hand";
            } else if (route.name === "Profile") {
              iconName = focused ? "md-contact" : "md-contact";
            } else if (route.name === "Fitness") {
              iconName = focused ? "md-pulse" : "md-pulse";
            } else if (route.name === "Explore") {
              iconName = focused ? "md-compass" : "md-compass";
            } else if (route.name === "Consult") {
              iconName = focused ? "md-paper-plane" : "md-paper-plane";
            }

            return <Ionicons name={iconName} size={size} color={color} />;  
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ff005a",
          inactiveTintColor: "#B8B8B8",
          inactiveBackgroundColor: "white",
          tabStyle: {
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 1000,
          },
        }}
      >
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="LifeStyle" component={LifeStyle} />
        <Tab.Screen name="Fitness" component={FitnessTracker} />
        <Tab.Screen name="Consult" component={ConsultDoctor} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
