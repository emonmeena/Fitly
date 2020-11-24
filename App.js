import React from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import Login from "./src/screens/Authentication/Login";
import Register from "./src/screens/Authentication/Register";
// import { UserDataProvider } from './src/context/DataContext'
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvZAiKdg4NJOqxyMqdbyS8jWdCABEoS5o",
  authDomain: "fitly-is-awesome.firebaseapp.com",
  databaseURL: "https://fitly-is-awesome.firebaseio.com",
  projectId: "fitly-is-awesome",
  storageBucket: "fitly-is-awesome.appspot.com",
  messagingSenderId: "716509400246",
  appId: "1:716509400246:web:a5e976a2e13ce7e75eaa17",
  measurementId: "G-B35LEB5T6Y",
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);

export const userDataRef = db.collection("UsersData");

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignIn: Login,
    SignUp: Register,
  }),
  mainFlow: HomeScreen,
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    // <UserDataProvider>
      <App />
    /* </UserDataProvider> */
  );
};
