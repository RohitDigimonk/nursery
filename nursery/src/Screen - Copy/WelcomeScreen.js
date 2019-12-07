import React, { Component } from 'react';
import { Image, View, ImageBackground } from 'react-native';
import Button from '../common/Button';

class LaunchScreen extends Component {
    render() {
        return(
            <ImageBackground source={require('../Images/background_half.png')} 
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}>
            <View   style={Styles.ImageView}>
                <Image
                    source={require('../Images/logo.png')}
                    style={{width: 300, height:200 }}
                />                
            </View>
            <View style={Styles.ButtonView}>
            <Button onPress={() => this.props.navigation.navigate('SignIn')}>
                Let's Go
            </Button>
            </View>
            </ImageBackground>
        );
    }
}

const Styles = {
    ImageView: {
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        paddingTop: '25%'     
    },
    ButtonView: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: "5%",
        marginRight: "35%",
        justifyContent: 'flex-end'
    }
}

export default LaunchScreen;