import React from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  Picker,
} from "react-native";
import * as firebase from 'firebase'


function Register({ navigation }) {
  const [Name, onChangeName] = React.useState();
  const [Email, onChangeEmail] = React.useState();
  const [Password, onChangePassword] = React.useState('');
  const [Age, changeAge] = React.useState();
  const [selectedValue, setSelectedValue] = React.useState("Male");


  const registerUser=()=>{
    try {
      firebase.auth().createUserWithEmailAndPassword(Email, Password);
      navigation.navigate('SignIn')      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
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
          marginBottom: 10,
        }}
        onChangeText={(text) => changeAge(text)}
        value={Age}
      />

      <Text style={styles.textStyle}>Select your gender</Text>
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
      </Picker>

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
          marginBottom: 10,
        }}
        onChangeText={(text) => onChangePassword(text)}
        value={Password}
      />

      <Button
        color="black"
        onPress={()=>registerUser()}
        title="Register"
      />

      <View style={{ position: "absolute", bottom: 10 }}>
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
    </>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: "white",
    marginTop: 20,
  },
  LoginStyle: {
    marginTop: 30,
    marginBottom: 10,

    fontSize: 15,
    color: "white",
  },
});

export default Register;
