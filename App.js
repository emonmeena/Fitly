import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Login from './src/screens/Login';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: Login,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Fitly"
    }
  }
);

export default createAppContainer(navigator);
