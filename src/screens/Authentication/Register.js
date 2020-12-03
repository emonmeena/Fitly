import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  // Picker,
} from "react-native";
import * as firebase from "firebase";
import { db } from "../../context/UserDataContext";

function Register({ navigation }) {
  const [Name, onChangeName] = React.useState();
  const [Email, onChangeEmail] = React.useState();
  const [Password, onChangePassword] = React.useState("");
  const [Age, changeAge] = React.useState();
  const [Height, changeHeight] = React.useState();
  const [Weight, changeWeight] = React.useState();
  const [selectedValue, setSelectedValue] = React.useState("Male");

  const registerUser = () => {
    try {
      firebase.auth().createUserWithEmailAndPassword(Email, Password);
      db.collection("UsersData")
        .doc(Email)
        .set({
          username: Name,
          email: Email,
          age: Age,
          height: Height,
          weight: Weight,
        })
        .then(() => {
          navigation.navigate("SignIn");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#ff005a",
      }}
    >
      <Text style={styles.textStyle}> Enter your Name</Text>
      <TextInput
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
        }}
        onChangeText={(text) => onChangeName(text)}
        value={Name}
        placeholder="Username"
      />

      <Text style={styles.textStyle}>Enter your Age </Text>
      <TextInput
        placeholder="16"
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
          marginBottom: 0,
        }}
        onChangeText={(text) => changeAge(text)}
        value={Age}
      />
      <Text style={styles.textStyle}>Enter your Height </Text>
      <TextInput
        placeholder="in meters"
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
          marginBottom: 0,
        }}
        onChangeText={(text) => changeHeight(text)}
        value={Height}
      />
      <Text style={styles.textStyle}>Enter your Wieght </Text>
      <TextInput
        placeholder="in KG"
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
          marginBottom: 0,
        }}
        onChangeText={(text) => changeWeight(text)}
        value={Weight}
      />

      {/* <Text style={styles.textStyle}>Select your gender</Text>
      <Picker
        selectedValue={selectedValue}
        style={{
          color: "white",
          borderColor: "black",
          borderWidth: 2,
          height: 50,
          width: 150,
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker> */}

      <Text style={styles.textStyle}>Enter your Email ID </Text>
      <TextInput
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
        }}
        onChangeText={(text) => onChangeEmail(text)}
        value={Email}
      />

      <Text style={styles.textStyle}>Create Password </Text>
      <TextInput
        secureTextEntry={true}
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
          // marginBottom: 10,
        }}
        onChangeText={(text) => onChangePassword(text)}
        value={Password}
      />
      <View>
        <Button color="black" onPress={() => registerUser()} title="Register" />
      </View>

      <View>
        <Text style={styles.LoginStyle}> Already Registered?</Text>
        <Button
          color="black"
          title="Login"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: "white",
    marginTop: 0,
  },
  LoginStyle: {
    marginTop: 0,
    marginBottom: 0,

    fontSize: 15,
    color: "white",
  },
});

export default Register;
