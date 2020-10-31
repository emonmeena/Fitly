import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Fitly v0.1"
    }
  }
);

export default createAppContainer(navigator);
