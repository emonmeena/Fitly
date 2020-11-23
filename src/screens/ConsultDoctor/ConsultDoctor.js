import React from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MapListScreen from "./MapListScreen";

const { width, height } = Dimensions.get("window");

const HomeStack = createStackNavigator();

function ConsultDoctor() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="ConsultDoctor"
        component={ConsultDoctorScreen}
        // options={{
        //   headerShown: false,
        //   headerStyle: {
        //     backgroundColor: "#ff005a",
        //   },
        //   headerTintColor: "white",
        //   headerTitleStyle: {
        //     fontWeight: "600",
        //     fontSize: 40,
        //   },
        // }}
      />
      <HomeStack.Screen
        name="Map"
        component={MapListScreen}
        // options={{
        //   headerShown: false,
        //   headerStyle: {
        //     backgroundColor: "#ff005a",
        //   },
        //   headerTintColor: "white",
        //   headerTitleStyle: {
        //     fontWeight: "600",
        //     fontSize: 40,
        //   },
        // }}
      />
    </HomeStack.Navigator>
  );
}

class ConsultDoctorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      isLoading: true,
      DataSource: null,
      region: null,
    };
    this._getList();
  }

  _getAPI = () => {
    let { load, isLoading, DataSource, region } = this.state;
    if (load) {
      fetch(
        "https://api.tomtom.com/search/2/categorySearch/hospitals.json?lat=" +
          region.latitude +
          "&lon=" +
          region.longitude +
          "&radius=5000&categories=general&key=vB88eiAS58RJuYOx2w2yUbElYFdsCS12"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            DataSource: responseJson.results,
          });
        })

        .catch((error) => {
          console.log(error);
        });
    }
  };

  _getList = async () => {
    let location = null;
    const { status: granted } = await Permissions.askAsync(
      Permissions.LOCATION
    );
    if (granted === "granted") {
      location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045,
      };
      this.setState({ region: region, load: true });
      return;
    }

    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045,
      };
      this.setState({ region: region, load: true });
      return;
    }
  };

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("Map", {
            lat: item.position.lat,
            lon: item.position.lon,
            name: item.poi.name,
            des: item.poi.categories,
          })
        }
      >
        <View
          style={{
            height: 180,
            marginBottom: 50,
            marginHorizontal: 10,
            backgroundColor: "green",
            borderRadius: 5,
          }}
        >
          <Text style={styles.name}>{item.poi.name}</Text>
          <Text style={styles.cat}>Speciality: {item.poi.categories}</Text>
          <Text style={styles.add}>
            Address: {item.address.freeformAddress}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    let { load, isLoading, DataSource, region } = this.state;
    if (!isLoading && load) {
      return (
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>Hospitals Near You</Text>

          <FlatList
            style={styles.list}
            data={DataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Button title="Get Nearby Hospitals" onPress={this._getAPI} />
          <Text style={styles.loading}>Loading Contents...</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    bottom: 0,
    height: 100,
    justifyContent: "center",
    paddingBottom: 50,
  },
  map: {
    flex: 1,
  },
  pos: {
    backgroundColor: "red",
    fontSize: 20,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 22,
  },
  loading: {
    flex: 1,
    textAlign: "center",
    fontSize: 40,
  },
  item: {
    padding: 7,
    fontSize: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  list: {
    borderColor: "red",
  },
  name: {
    padding: 7,
    fontSize: 25,
  },
  cat: {
    padding: 7,
    fontSize: 20,
  },
  add: {
    padding: 7,
    fontSize: 18,
  },
});

export default ConsultDoctor;
