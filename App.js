import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import Login from "./src/screens/Authentication/Login";
import Register from "./src/screens/Authentication/Register";
// import { UserDataProvider } from "./src/context/UserDataContext";
import { Provider as AuthProvider } from "./src/context/AuthContext";

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
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
