import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';

class Logout extends Component{

    // logout=async()=>{
       
    // }
    async componentDidMount(){
        var value = await AsyncStorage.removeItem('userid')
        if(value == null){
            this.props.navigation.navigate('SignIn')
        }
    }

    render(){
        return(
        null
        );
    }
}

export default Logout;