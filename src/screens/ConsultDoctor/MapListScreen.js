import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, FlatList, Text, TouchableOpacity, Dimensions, View } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import ConsultDoctor from './ConsultDoctor'

const { width, height } = Dimensions.get("window");

class MapListScreen  extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      load: false,
      region: null,
    }
    this._getUserLocation();
  }

  _getUserLocation = async () => {
    let location=null
      const { status: granted } = await Permissions.askAsync(Permissions.LOCATION);
      if(granted === 'granted'){
      location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Balanced});
      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045,
      }
      this.setState({region: region, load: true})
      return
    }

    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if(status === 'granted'){
      location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Balanced});
      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045,
      }
      this.setState({region: region, load: true})
      return
    }

  }

  render () {
    let {load, region} = this.state;
    if(load) {
    return (
      <View style={styles.container}>
        
    <Text style={styles.pos}>Current Location: {region.latitude}, {region.longitude}</Text>
    
        <MapView
          style={styles.map}
          initialRegion={region}
          showsCompass={true}
          showsUserLocation={true}
          rotateEnabled={true}
        >
          <MapView.Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title={"Current Location"}
          />
          
        </MapView>
      </View>
    )
    } else {
      return (
        <Text style={styles.loading}>Loading Contents...</Text>
      );
    }
  }
} 

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
      bottom: 0,
      height: 100,
      justifyContent: 'center',
      paddingBottom: 50
  },
  map: {
      flex: 1
  },
  pos: {
    backgroundColor: 'red',
    fontSize: 16
  },
  loading: {
    marginTop: 50,
    flex: 1,
    textAlign: 'center',
    fontSize: 40
  },
})

export default MapListScreen