import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ImagePicker from "expo-image-picker";
import EditProfile from "./EditProfile";

const HomeStack = createStackNavigator();

function ProfileStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        // options={{
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
        name="EditProfile"
        component={EditProfile}
        // options={{
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

function Profile({ navigation }) {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [isedit, onChangeedit] = React.useState(false);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <View style={styles.textStyle}>
      <Image
        source={{
          uri:
            "https://thumbs.dreamstime.com/b/young-woman-practicing-yoga-nature-female-happiness-silhouette-young-woman-practicing-yoga-beach-sunset-young-121316506.jpg",
        }}
        style={styles.Coverpic}
      />

      {selectedImage !== null ? (
        <View>
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.Profilpic}
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.Profilpic}
        >
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
      )}

      <View
        style={{
          height: "45%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            borderBottomColor: "red",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        >
          Tom Cruise
        </Text>

        <Text
          style={{
            fontSize: 13,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "red",
          }}
        >
          devansh_j@cs.iitr.ac.in
        </Text>

        <Text
          style={{
            fontSize: 15,

            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "red",
          }}
        >
          AGE:10
        </Text>

        <Text
          style={{
            fontSize: 15,

            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "red",
          }}
        >
          Gender: Male
        </Text>

        <Text
          style={{
            fontSize: 20,
            borderRadius: 20,
            borderColor: "black",
            borderWidth: 4,
            padding: 5,
          }}
        >
          Fitly Score:10
        </Text>
        <View>
          <Button
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
            title="Edit Profile"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,

    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    color: "white",

    backgroundColor: "white",
    // height:'100%'
  },
  buttonText: {
    fontSize: 20,
    position: "relative",
    marginLeft: "30%",
    marginTop: "30%",

    color: "#fff",
  },
  Profilpic: {
    backgroundColor: "gray",
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: "black",
    borderWidth: 4,
    borderColor: "white",
    marginTop: 100,
  },
  Coverpic: {
    backgroundColor: "gray",
    height: "35%",
    width: "100%",
    position: "absolute",
    top: 0,

    //  marginBottom:200
  },
});

export default ProfileStack;
