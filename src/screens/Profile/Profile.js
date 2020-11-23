import React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "./EditProfile";

const HomeStack = createStackNavigator();

function ProfileStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: "#ff005a",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 40,
          },
        }}
      />
      <HomeStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerStyle: {
            backgroundColor: "#ff005a",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 40,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

function Profile({ navigation }) {
  const [isedit, onChangeedit] = React.useState(false);
  console.log(navigation);
  return (
    <View style={styles.textStyle}>
      <Image
        source={{
          uri:
            "https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75-s800-c85.jpg",
        }}
        style={styles.Coverpic}
      />

      <Image
        source={{
          uri:
            "https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75-s800-c85.jpg",
        }}
        style={styles.Profilpic}
      />
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
  },
});

export default ProfileStack;
