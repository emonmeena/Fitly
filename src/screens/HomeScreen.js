import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConsultDoctor from './ConsultDoctor/ConsultDoctor';
import Profile from './Profile/Profile';
import FitnessTracker from './FitnessTracker/FitnessTracker';
import Explore from './Explore/index';
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <NavigationContainer>
  <Tab.Navigator
     screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'LifeStyle') {
              iconName = focused ? 'md-medkit' : 'md-medkit';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-contact' : 'md-contact';
            }
               else if (route.name === 'Fitness') {
              iconName = focused ? 'md-analytics' : 'md-analytics';
            }
               else if (route.name === 'Explore') {
              iconName = focused ? 'md-paper' : 'md-paper';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
         },
       })
       }
        tabBarOptions={{
          activeTintColor: 'yellow',
          inactiveTintColor: 'gray',
          activeBackgroundColor:'darkblue',
          inactiveBackgroundColor:'white',
          tabStyle:{alignItems:'center',
          justifyContent:'center',
          fontWeight:1000,
          }
        }}>
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="LifeStyle" component={ConsultDoctor} />
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
