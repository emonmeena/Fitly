import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Button, Text, SocialIcon } from "react-native-elements";
import * as firebase from "firebase";
import { db } from "../../context/UserDataContext";

function Login({ navigation }) {
  const [Email, onChangeEmail] = React.useState();
  const [Password, onChangePassword] = React.useState();

  const SignInUser = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .then((user) => {
        if (user) navigation.navigate("mainFlow");
      });
    // console.log(Email)
  };

  return (
    <>
      <View style={styles.loginScreen}>
        <Text h3>Get the Fitness experience Now Fitly!!</Text>
        <View style={styles.fieldsContainer}>
          <Input
            label="Email"
            onChangeText={(text) => onChangeEmail(text)}
            value={Email}
            placeholder="Enter Your Email"
          />
          <Input
            label="Password"
            secureTextEntry={true}
            onChangeText={(text) => onChangePassword(text)}
            value={Password}
            placeholder="Enter Your Password"
          />
          <Button
            title="SignIn Now"
            buttonStyle={styles.signinButton}
            onPress={() => SignInUser()}
          />
          <Button
            title="SignIn with Google"
            type="outline"
            icon={<SocialIcon type="google" light={true} />}
            iconLeft
          />
        </View>
        <View>
          <Text style={styles.newregisterStyle}> New to Fitly? </Text>
          <Button
            title="SignUp"
            type="outline"
            buttonStyle={styles.signupButton}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
          {/* <Button
            title="Skip For Now"
            type="solid"
            // buttonStyle={styles.signupButton}
            onPress={() => {
              navigation.navigate("mainFlow");
            }}
          /> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  fieldsContainer: {
    marginTop: 50,
  },
  signinButton: {
    backgroundColor: "#ff005a",
    marginVertical: 10,
    borderRadius: 7,
  },
  signupButton: {
    borderRadius: 7,
  },
  newregisterStyle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 15,
    color: "#1e90ff",
  },
});

export default Login;
