import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, ActivityIndicator } from "react-native";




export class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username : "",
            password : "",
            showProgress:false
        }
    }

    onLoginPressed = () =>{
        console.log("hello"+this.state.username)
        this.setState({showProgress:true})
    }

    render(){
        return(
            <View style={styles.container}>
              <Image
                style={styles.logo}
                source={require('../image/logo.jpg')}
              />
              <Text style={styles.heading}>Github Browser</Text>
              <TextInput
                style={styles.input}
                placeholder='github username'
                onChangeText={(text) => this.setState({username:text})}
                value={this.state.username}
              />
              <TextInput
                style={styles.input}
                placeholder='password'
                onChangeText={(text) => this.setState({password:text})}
                value={this.state.password}
                secureTextEntry='true'
              />
              <TouchableHighlight   
                style={styles.button}
                onPress={this.onLoginPressed}
                >
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableHighlight>
              <ActivityIndicator
                animating={this.state.showProgress}
                size="large"
                style={styles.loader}
              />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    input:{
        borderWidth : 1,
        borderRadius: 5,
        borderColor:'#48bbec',
        height:50,
        width:200,
        marginTop:10,
        padding:4

    },
    container:{
        flex:1,
        alignItems:'center',
        paddingTop:'15%',
        padding:10
    },
    logo:{
        width:60,
        height:60
    },
    heading:{
        fontSize:20,
        marginTop:10
    },
    button:{
        height:50,
        width:200,
        backgroundColor:'#48bbec',
        alignSelf:"stretch",
        marginTop:10,
        justifyContent:'center'
    },
    buttonText:{
        fontSize:22,
        alignSelf:'center',
        color:'#fff'
    },
    loader:{
        marginTop:20
    }
})