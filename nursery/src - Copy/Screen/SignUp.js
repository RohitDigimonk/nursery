import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, Image, ScrollView } from 'react-native';
import axios from 'axios';
import Button from '../common/Button';


class SignUp extends Component {

    state = { name: '', lname: '',phone: '', email: '', password: '' }

    userRegistration = () => {
        const {name} = this.state;
        const {lname} = this.state;
        const {phone} = this.state;
        const {email} = this.state;
        const {password} = this.state;

        axios.post('http://203.190.153.20/tinyland/api/Api/register', {
            
                first_name: name, 
	            last_name:lname,
	            phone:phone,
	            email:email,
	            password:password,

            }).then(function (response){
                // console.log(response)
                const data = response['data']
                const message = data['message']
                alert(message);
            }).catch(function (error){
                console.log(error);
            })
        }
    
    render(){
        return(
            
            <ImageBackground
                source={require('../Images/background_full.png')}
                style={{width: '100%', height: '100%'}}
            >
            <ScrollView>
            <View style={{flex: 1, alignItems: 'center', top: "10%"}}>
                <View style={{bottom: "5%"}}>
                    <Text style={{fontSize: 28, color:"white"}}>Sign Up</Text>
                </View>
            <View style={Styles.containerStyle}>
                <TextInput
                        style={{width: '80%'}}
                        placeholder="First Name"
                        value = {this.state.name}
                        onChangeText={name => this.setState({ name })}
                />
                    <Image
                        source={require('../Images/name.png')}
                        style={{width: 20, height: 20, marginLeft: 10}}
                    />
            </View>
            <View style={Styles.containerStyle}>
                <TextInput
                        style={{width: '80%'}}
                        placeholder="Last Name"
                        value = {this.state.lname}
                        onChangeText={lname => this.setState({lname})}
                />
                    <Image
                        source={require('../Images/name.png')}
                        style={{width: 20, height: 20, marginLeft: 10}}
                    />
            </View>
            <View style={Styles.containerStyle}>
                <TextInput
                        style={{width: '80%'}}
                        placeholder="Phone No."
                        value = {this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                />
                    <Image
                        source={require('../Images/name.png')}
                        style={{width: 20, height: 20, marginLeft: 10}}
                    />
            </View>
            <View style={Styles.containerStyle}>
                <TextInput
                        style={{width: '80%'}}
                        placeholder="Email ID"
                        value = {this.state.email}
                        onChangeText={email => this.setState({ email })}
                />
                    <Image
                        source={require('../Images/mail.png')}
                        style={{width: 36, height: 16, marginLeft: 10}}
                    />
            </View>
            <View style={Styles.containerStyle}>
                <TextInput
                        style={{width: '80%'}}
                        placeholder="Password"
                        value = {this.state.password}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry
                />
                    <Image
                        source={require('../Images/password.png')}
                        style={{width: 30, height: 19, marginLeft: 10}}
                    />
            </View>
            <View style={Styles.containerStyle}>
                <TextInput
                        style={{width: '80%'}}
                        placeholder="Confirm Password"
                        secureTextEntry
                />
                    <Image
                        source={require('../Images/password.png')}
                        style={{width: 30, height: 19, marginLeft: 10}}
                    />
            </View>

            <View style={{marginTop: "15%"}}>
                    <Button onPress={this.userRegistration}>
                        Submit
                    {/* <View style={Styles.buttonStyle}>
                        <Text style={Styles.textStyle}>Submit</Text>
                    </View> */}
                    </Button>
            </View>
            
            <View style={{flexDirection: 'row', marginTop: "10%"}}>
                    <Image
                        style={{margin: 10}}
                        source={require('../Images/facebook.png')}
                    />
                    <Image
                        style={{margin: 10}}
                        source={require('../Images/twitter.png')}
                    />
                    <Image
                        style={{margin: 10}}
                        source={require('../Images/google.png')}
                    />

                </View>
            </View>
            </ScrollView>
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
        marginTop: 15,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: "white",
        marginBottom: 10,

    },

    buttonStyle: {
        width: 180,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'white',
        // backgroundColor: '#008C99',
        borderRadius: 25,
        height:50,
        alignItems:"center",
        marginLeft: 5,
        marginRight: 5,
        
    },
    textStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
}
export default SignUp;