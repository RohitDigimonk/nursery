import React, {Component} from 'react';
import {Text,View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, AsyncStorage} from 'react-native';
import Button from '../common/Button';

class ChangePassword extends Component{

    loadSession = async () => {
        this.setState({
            userid:await AsyncStorage.getItem('userid')
        })
    }

    state = {opassword: '', password: '', cpassword: ''}

    updatePassword =() => {
        const {opassword} = this.state;
        const {password} = this.state;
        const {cpassword} = this.state;

       
        fetch('http://203.190.153.20/tinyland/api/Api/updatePassword', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
           
              id: this.state.userid,
           
              current_password: opassword,
           
              new_password: password,
          
              
                         
            })
           
          }).then((response) => response.json())
                .then((responseJson) => {
                 console.log(responseJson)
                 this.setState({
                     data:responseJson
                 })

        //   Showing response message coming from server after inserting records.
                  alert(this.state.data['message'])
           
                }).catch((error) => {
                  console.error(error);
                });
                                 
    }
    
    componentDidMount(){
        this.loadSession().done();
    }
    render(){
        return(
            <ImageBackground
            source={require('../Images/plain_background.jpeg')}
            style={{width: '100%', height: '100%'}}
            >
            <TouchableOpacity  onPress={() => this.props.navigation.toggleDrawer()}>
            <Image
            source={require('../Images/more.png')}
            style={{height: 23, width: 29, marginLeft: 10, top: 20}}
            />
            </TouchableOpacity>
            <ScrollView style={{marginTop: '10%'}}>
            <View style={{marginTop: 40}}>
            <View style={Styles.containerStyle}>
                <TextInput
                        style={{width: '80%'}}
                        placeholder="Old password"
                        placeholderTextColor="#000000"
                        secureTextEntry
                        value = {this.state.opassword}
                        onChangeText={opassword => this.setState({ opassword })}
                />
                    <Image
                        source={require('../Images/password.png')}
                        style={{width: 30, height: 19, marginLeft: 10}}
                    />
            </View>
        
            <View style={Styles.containerStyle}>
                <TextInput
                        style={{width: '80%'}}
                        placeholder="New Password"
                        placeholderTextColor="#000000"
                        secureTextEntry
                        value = {this.state.password}
                        onChangeText={password => this.setState({password})}
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
                        placeholderTextColor="#000000"
                        secureTextEntry
                        value = {this.state.cpassword}
                        onChangeText={cpassword => this.setState({ cpassword })}
                />
                    <Image
                        source={require('../Images/password.png')}
                        style={{width: 30, height: 19, marginLeft: 10}}
                    />
            </View>
           
            <View style={{marginTop: "10%"}}>
                    <Button onPress={this.updatePassword}>
                        Submit
                    {/* <View style={Styles.buttonStyle}>
                        <Text style={Styles.textStyle}>Submit</Text>
                    </View> */}
                    </Button>
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
export default ChangePassword;