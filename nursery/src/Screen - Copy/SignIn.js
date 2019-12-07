import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import Button from '../common/Button';
import axios from 'axios';

class SignIn extends Component {

    state = { email: '', password: ''};
    
    login = () => {
        const {email} = this.state;
        const {password} = this.state;

        axios.post('http://203.190.153.20/tinyland/api/Api/login', {
              
              email: email,
              password: password

        }).then((response)=>{
            console.log(response);
            // const data = response['data']
            // const message = data['message']
            // const status = data['status']
            // const dataa = data['data']
            // const userid = dataa['id']
            
          
            const data = response['data']
            const message = data['message']
            const status = data['status']
            // console.log(dataa['id']);

            // this.setState({
            //     userid:userid
            // })
            if(status==1){
               
                
                const dataa = data['data']
                const userid = dataa['id']
                // console.log(dataa['id']);

            this.setState({
                userid:userid
            })
                this.session()
            }
            else{
                
                alert(message);
                
            }
            
        }).catch(function (error){
            console.log(error);
        })
        
    }
   
    session=()=>{
        AsyncStorage.setItem('userid',this.state.userid)
        this.props.navigation.navigate('Home');
    }

    render(){
        // console.log(this.state.userid);
        return(
            <ScrollView contentContainerStyle={Styles.contentContainer}>
            
            
            <ImageBackground
                source={require('../Images/background_qtr.png')}
                style={{width: "100%", height: "100%"}}
            >
            
            <View style={{ flex: 1 ,justifyContent: "flex-end", alignItems: 'center', marginBottom: 12, }} >
               <View style={Styles.containerStyle}>
                    <TextInput
                        style={{width: '80%', color: "#000000"}}
                        placeholder="Email"
                        placeholderTextColor="#000000"
                        value={this.state.email}                        
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
                        placeholderTextColor="#000000"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}

                    />
                    <Image
                        style={{width: 30, height: 19, marginLeft: 10,}}
                        source={require('../Images/password.png')}
                    />
              </View>
              <View style={{marginLeft: "55%"}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPass')}>
                    <Text style={{color: "#000000"}}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
             </View>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Button onPress={() => this.props.navigation.navigate('SignUp')}>
                        Sign Up
                    </Button>
                        
                    <Button onPress={this.login}>
                        Sign In
                    </Button>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
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
            
            </ImageBackground>
            
            </ScrollView>
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
    },
    contentContainer: {
        justifyContent: 'center',
        height: "100%"
    }
}


export default SignIn;