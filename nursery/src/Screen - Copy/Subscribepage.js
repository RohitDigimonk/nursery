import React, {Component} from 'react';
import {Text,View, ImageBackground} from 'react-native';

class Subscribepage extends Component{
    render(){
        return(
            <View>
                <View>
                    <ImageBackground 
                    source={require('../Images/blue.png')}
                    style={{width: 200, height: 55, justifyContent: 'center', alignItems: 'center'}}

                    >

                    </ImageBackground>
                </View>
            </View>
        );
    }
}

export default Subscribepage;