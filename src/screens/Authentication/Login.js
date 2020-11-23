import React from "react";
import { Text, TextInput, StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Register from "./Register";

function Login({ navigation }) {
  const [Email, onChangeEmail] = React.useState(" Your Email Id");
  const [Password, onChangePassword] = React.useState();

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#ff005a",
      }}
    >
      <Text style={styles.textStyle}> Email ID </Text>
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
      <Text style={styles.textStyle}> Password </Text>
      <TextInput
        secureTextEntry={true}
        style={{
          padding: 5,
          height: 40,
          color: "white",
          borderColor: "black",
          borderBottomWidth: 2,
          width: "60%",
          marginBottom: 10,
        }}
        onChangeText={(text) => onChangePassword(text)}
        value={Password}
      />
      <Button
        color="black"
        // onPress={''}
        title="Login"
      />
      <Text></Text>
      <Button
        color="black"
        onPress={() => navigation.navigate("mainFlow")}
        title="Skip For Now"
      />
      <View style={{ position: "absolute", bottom: 10 }}>
        <Text style={styles.newregisterStyle}> New user? </Text>
        <Button
          color="black"
          title="Register"
          onPress={() => {
            navigation.navigate("SignUp");
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
    marginTop: 10,
  },
  newregisterStyle: {
    marginTop: 30,
    marginBottom: 10,

    fontSize: 15,
    color: "white",
  },
});

export default Login;
