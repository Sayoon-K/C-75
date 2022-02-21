import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  
  KeyboardAvoidingView
} from "react-native";
import firebase from "firebase";
const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");
export default class LoginScreen  extends React.Component{
constructor(props){
    super(props)
    this.state={
        email:"",
        password:""
    }
}
handlelogin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        this.props.navigation.navigate("BottomTab")
    })
    .catch(error=>{
        alert(error.message)
    })
}
render(){
    return(
        <KeyboardAvoidingView>
            <ImageBackground source={bgImage} >
                <View>
                    <Image source={appIcon}/>
                    <Image source={appName}/>
                    
                </View>
                <View>
                  <TextInput
                  onChangeText={t=>this.setState({email:text})}
                  placeholder={"Enter Email"}
                  placeholderTextColor={"white"}
                  autoFocus
                  >

                  </TextInput>
                  <TextInput
                  onChangeText={t=>this.setState({password:text})}
                  placeholder={"Enter Password"}
                  placeholderTextColor={"white"}
                  secureTextEntry
                  >

                  </TextInput>
                  <TouchableOpacity
                  onPress={()=>this.handlelogin(this.state.email,this.state.password)}
                  >
                      <Text>
                          Login
                      </Text>
                  </TouchableOpacity>
                </View>

            </ImageBackground>
        </KeyboardAvoidingView>
    )

}
}