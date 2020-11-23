import React ,{ Component } from 'react';
import { Text, View,StyleSheet,Image,Button,Picker ,TextInput } from 'react-native'



function EditProfile ({ navigation}) {
	       const [Name, onChangeName] = React.useState('Name');
          const [Age, changeAge] = React.useState('10');
          const [Email, onChangeEmail] = React.useState(' Your Email Id');
          const [Password, onChangePassword] = React.useState('baaaa');
 return (

   <View style={{alignItems: 'center',justifyContent: 'center',flex:1,position:'relative',backgroundColor:'#ff005a'}}>
      

        <Text style={{ fontSize: 25,
        color:'white',
        marginTop: 20,}}> Edit your Name</Text>
       
        <TextInput
         style={{ padding:5,height: 40,color:'white', borderColor: 'black', borderBottomWidth: 2,width:'60%' }}
           onChangeText={text => onChangeName(text)}
            value={Name}
           />

           <Text style={{ fontSize: 25,
        color:'white',
        marginTop: 20,}}> Edit your Age</Text>
       
        <TextInput
         style={{ padding:5,height: 40,color:'white', borderColor: 'black', borderBottomWidth: 2,width:'60%' ,marginBottom: 10}}
           onChangeText={text => changeAge(text)}
            value={Age}
           />
            <Text style={{ fontSize: 25,
        color:'white',
        marginTop: 20,}}> Edit your Email ID</Text>
       
        <TextInput
         style={{ padding:5,height: 40,color:'white', borderColor: 'black', borderBottomWidth: 2,width:'60%' }}
           onChangeText={text => onChangeEmail(text)}
            value={Email}
           />


            <Text style={{ fontSize: 25,
        color:'white',
        marginTop: 20,}}> Edit your Password</Text>
       
        <TextInput
         style={{ padding:5,height: 40,color:'white', borderColor: 'black', borderBottomWidth: 2,width:'60%' ,marginBottom: 10 }}
           onChangeText={text => onChangePassword(text)}
            value={Password}
           />
             <Button 
            color='black'

            // onPress={''}
            title="Save"
          />

              </View>
    
 );

}


const styles = StyleSheet.create({
   
});


export default EditProfile;