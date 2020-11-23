import React from 'react';
import { Text,TextInput , StyleSheet ,View,Button,Picker} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function Register({ navigation }){
	const [Email, onChangeEmail] = React.useState(' Your Email Id');
	const [Password, onChangePassword] = React.useState('baaaa');
  const [Age, changeAge] = React.useState('10');
  const [Name, onChangeName] = React.useState('Name');
  const [selectedValue, setSelectedValue] = React.useState('Male');

    return (<View style={{alignItems: 'center',justifyContent: 'center',flex:1,backgroundColor:'#ff005a'}}>
    	

        <Text style={styles.textStyle}> Enter your Name</Text>
        <TextInput
         style={{ padding:5,height: 40,color:'white', borderColor: 'black', borderBottomWidth: 2,width:'60%' }}
           onChangeText={text => onChangeName(text)}
            value={Name}
           />

           <Text style={styles.textStyle}>Enter your Age </Text>
        <TextInput
          

         style={{ padding:5,height: 40,color:'white', borderColor: 'black', borderBottomWidth: 2,width:'60%',marginBottom: 10 }}
           onChangeText={text => changeAge(text)}
            value={Age}
           />

      <Text style={styles.textStyle}>Select your gender</Text>
        <Picker
        selectedValue={selectedValue}
        style={{ color:'white',borderColor:'black',borderWidth:2,height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>

    		<Text style={styles.textStyle}>Enter your Email ID </Text>
    		<TextInput
     		 style={{ padding:5,height: 40,color:'white', borderColor: 'black', borderBottomWidth: 2,width:'60%' }}
      		 onChangeText={text => onChangeEmail(text)}
      		  value={Email}
   				 />


   		<Text style={styles.textStyle}>Create Password </Text>
    		<TextInput
    		  secureTextEntry={true}

     		 style={{ padding:5,height: 40,color:'white', borderColor: 'black', borderBottomWidth: 2,width:'60%',marginBottom: 10 }}
      		 onChangeText={text => onChangePassword(text)}
      		  value={Password}
   				 />

   				  <Button 
   				  color='black'

            // onPress={''}
            title="Register"
          />


          <View style={{position:'absolute',bottom:10}} >
        <Text style={styles.LoginStyle}> Already Registered?</Text>
         <Button 
   				  color='black'

            title="Login"
            onPress={()=>{navigation.navigate('Login')}}
          /></View>
    </View>);
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        color:'white',
        marginTop: 20,
    },
    LoginStyle:{
    	marginTop: 30,
    	marginBottom: 10,
    	
    	 fontSize: 15,
    	 color:'white',

    }
});

export default Register;