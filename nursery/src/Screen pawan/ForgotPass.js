import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import Button from '../common/Button';
import axios from 'axios';

class ForgotPass extends Component {
    state = {email: ''}

    resetpassword = () => {
            const {email} = this.state

            axios.post('https://digimonk.co/tinyland/api/Api/forgot_password ', {
            email: email
        }).then((response)=>{
            console.log(response)
            const data = response['data']
            const status = data['status']
            const message = data['message']
            console.log(message);
            if(status==1){
                alert(message);
                this.props.navigation.navigate('SignIn')

            }
            else{
                alert(message);
            }
        })
    }
    render(){
        return(
            <ImageBackground
                source={require('../Images/background_qtr.png')}
                style={{width: "100%", height: "100%"}}
            >
            <View>
            <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Image
            source={require('../Images/back.png')}
            style={{width: 19, height: 33, marginTop: 10, marginLeft: 10}}
            /> 
            </TouchableOpacity>
            </View>
                <View style={{flex: 1, alignItems: 'center',}}>
                    <Text style={{fontSize: 28, color:"white", marginTop: 30,fontFamily: 'Poppins'}}>Forgot Password</Text>
                </View>

                <View style={{ flex: 1 ,justifyContent: "center", alignItems: 'center', marginBottom: 12, }} >
               <View style={Styles.containerStyle}>
                    <TextInput
                        style={{width: '80%'}}
                        placeholder="Email ID"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}

                    />
                    <Image
                        source={require('../Images/mail.png')}
                        style={{width: 36, height: 16, marginLeft: 10}}
                    />
                </View>
                <View style={{top: "15%"}}>
                <Button onPress={this.resetpassword}>
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