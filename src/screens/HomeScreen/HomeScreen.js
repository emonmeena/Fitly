import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LifeStyle from "../LifeStyle/LifeStyle";
import ProfileStack from "../Profile/Profile";
// import EditProfile from '../Profile/EditProfile';

import FitnessTracker from "../FitnessTracker/FitnessTracker";
import Explore from "../Explore/Explore";
import { NavigationContainer } from "@react-navigation/native";
// import Login from './Login.js';
import { createStackNavigator } from "@react-navigation/stack";
// import Register from './Register/Register';

const Tab = createBottomTabNavigator();

// const HomeStack = createStackNavigator();
// function HomeStackScreen() {

//   return (
//     <HomeStack.Navigator >
//      <HomeStack.Screen name="Login" component={Login}  options={{

//           headerStyle: {

//             backgroundColor: '#ff005a',

//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {

//             fontWeight: '600',
//             fontSize:40
//           },
//         }}/>
//      <HomeStack.Screen name="Register" component={Register} options={{

//           headerStyle: {
//             backgroundColor: '#ff005a',

//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {

//             fontWeight: '600',
//             fontSize:40
//           },
//         }}/>

//     </HomeStack.Navigator>
//   );
// }

// function Profilex() {

//   return (
//     <HomeStack.Navigator >
//      <HomeStack.Screen name="Profile" component={Profile}  options={{

//           headerStyle: {

//             backgroundColor: '#ff005a',

//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {

//             fontWeight: '600',
//             fontSize:40
//           },
//         }}/>
//       <HomeStack.Screen name="EditProfile" component={EditProfile}  options={{

//           headerStyle: {

//             backgroundColor: '#ff005a',

//           },
//           headerTintColor: 'white',
//           headerTitleStyle: {

//             fontWeight: '600',
//             fontSize:40
//           },
//         }}/>

//     </HomeStack.Navigator>
//   );
// }

const HomeScreen = () => {
  // const [isLogin, onLogin] = React.useState(true);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "LifeStyle") {
              iconName = focused ? "md-heart" : "md-heart";
            } else if (route.name === "Profile") {
              iconName = focused ? "md-contact" : "md-contact";
            } else if (route.name === "Fitness") {
              iconName = focused ? "md-pulse" : "md-pulse";
            } else if (route.name === "Explore") {
              iconName = focused ? "md-compass" : "md-compass";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#ff005a",
          inactiveTintColor: "#B8B8B8",
          // activeBackgroundColor:'#1e90ff',
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
