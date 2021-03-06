import React, {Component} from 'react';
import { StackActions, NavigationActions} from 'react-navigation';
import {Text,View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, AsyncStorage} from 'react-native';
import Button from '../common/Button';
import stringsoflanguages from './stringOfLanguage';

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
        // console.log(JSON.stringify({
           
        //     id: this.state.userid,
         
        //     current_password: opassword,
         
        //     new_password: password,
        
            
                       
        //   })
        //  )
        if(password==''){
            alert('password is required');
        }
        else if(password!=cpassword){
            alert('confirm password is not matched');
        }
       else{
       
        fetch('https://digimonk.co/tinyland/api/Api/updatePassword', {
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
        if(this.state.data['status']==1){
            alert(this.state.data['message'])
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'ChangePassword' })
                ],
              }))
        }
                else{
                    alert(this.state.data['message'])
                }
                
                }).catch((error) => {
                  console.error(error);
                });
       }                     
    }
    
    componentDidMount(){
        this.loadSession().done();
    }
    render(){
        return(
            <ImageBackground
            source={require('../Images/background.png')}
            style={{width: '100%', height: '100%'}}
            >
            <ImageBackground
                  source={require('../Images/topheader.png')}
                  style={{height:70,width:431}}
                  >
                    <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.toggleDrawer({
                      // params:"20"
                    })}>
                    <Image
                        source={require('../Images/more.png')}
                        style={{height: 23, width: 29, marginLeft: 10, marginTop: 20}}
                    />
                    </TouchableOpacity>
                    </View>
                  </ImageBackground>
                  <View style={{marginTop: "5%", alignItems: 'center'}}>
            <Text style={{fontSize: 28, color:"black",fontFamily: 'Poppins'}}>{stringsoflanguages.changepass}</Text>
                </View>
            <ScrollView keyboardShouldPersistTaps='always' style={{marginTop: 5}}>
            <View style={{marginTop: 40}}>
            <View style={Styles.containerStyle}>
                <TextInput
                        style={{width: '80%'}}
                        placeholder={stringsoflanguages.opass}
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
                        placeholder={stringsoflanguages.npass}
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
                        placeholder={stringsoflanguages.confirm}
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
                        {stringsoflanguages.submit}
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