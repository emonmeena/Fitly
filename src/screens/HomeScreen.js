import React from "react";
import { Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConsultDoctor from './ConsultDoctor/ConsultDoctor';
import Profile from './Profile/Profile';
import FitnessTracker from './FitnessTracker/FitnessTracker';
import Explore from './Explore/Explore';
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <NavigationContainer>
  <Tab.Navigator>
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Consult" component={ConsultDoctor} />
          <Tab.Screen name="Fitness" component={FitnessTracker} />
          <Tab.Screen name="Profile" component={Profile} />
         </Tab.Navigator>
  </NavigationContainer>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
