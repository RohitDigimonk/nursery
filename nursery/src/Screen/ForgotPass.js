import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, Image } from 'react-native';
import Button from '../common/Button';

class ForgotPass extends Component {
    render(){
        return(
            <ImageBackground
                source={require('../Images/background_qtr.png')}
                style={{width: "100%", height: "100%"}}
            >
                <View style={{flex: 1, alignItems: 'center',}}>
                    <Text style={{fontSize: 28, color:"white", top: 30}}>Forgot Password</Text>
                </View>

                <View style={{ flex: 1 ,justifyContent: "center", alignItems: 'center', marginBottom: 12, }} >
               <View style={Styles.containerStyle}>
                    <TextInput
                        style={{width: '80%'}}
                        placeholder="Email ID"

                    />
                    <Image
                        source={require('../Images/mail.png')}
                        style={{width: 36, height: 16, marginLeft: 10}}
                    />
                </View>
                <View style={{top: "15%"}}>
                <Button onPress={() => this.props.navigation.navigate('SignIn')}>
                        Reset
                    </Button>
                </View>
                </View>
            </ImageBackground>
        );
    }
}

const Styles = {
    containerStyle: {
        width: "85%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative', 
        borderWidth: 1,
        borderColor: '#008C99',
        marginTop: 10,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        borderRadius: 10,
    }
}

export default ForgotPass;