import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,


} from 'react-native';

export default function Signup({navigation}) {
  return(
    <View style={styles.container}>
      
        <View>
        <Text style={styles.signup}>Signup</Text>
      </View>
      <View style={{margin:30}}>
        <Text  style={styles.highlight}>Name:</Text>
        <TextInput  placeholder='bhumika'  style={styles.box}/>

        <Text style={styles.highlight}>E-mail:</Text>
        <TextInput 
        keyboardType='email-address'
        placeholder='abc@gmail.com' style={styles.box}/>

        <Text style={styles.highlight}>Phone-Number:</Text>
        <TextInput 
        keyboardType='numeric'
        placeholder='5556655555'  style={styles.box}/>

        <Text style={styles.highlight}>Password:</Text>
        <TextInput 
        secureTextEntry={true}
        style={styles.box}/>

        <Text style={styles.highlight}>Confirm-Password:</Text>
        <TextInput 
        secureTextEntry={true}
        style={styles.box}/>

        <View style={styles.but}> 
        <TouchableOpacity  onPress={()=>{navigation.navigate('third')}}>
         <Text style={{textAlign:'center', color: 'white'}}>Login</Text>
        </TouchableOpacity>
       </View>

      
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
      padding:20,
      margin:10,
 },
 signup:{
  color:'darkblue' ,
  fontWeight: 'bold' , 
  fontSize: 40,
  paddingTop:5,
  paddingBottom:5,

 },
  box:{
    borderBottomWidth:0.9,
    borderBottomColor:'darkgrey',
    paddingBottom:5,
    paddingLeft:0,
  },
  highlight: {
    fontSize:20,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingTop:10,
    paddingLeft: 0,
  },
  but: {
    marginTop:20,
    backgroundColor: 'blue',
    height:30,
    justifyContent: 'center',
    borderRadius:40,
  },
});