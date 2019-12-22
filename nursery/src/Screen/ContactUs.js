import React, {Component} from 'react';
import {Text,View, ImageBackground, Image, ScrollView, AsyncStorage,TouchableOpacity, text, TextInput} from 'react-native';
import { StackActions, NavigationActions} from 'react-navigation';
import Button from '../common/Button';
import axios from 'axios';


class ContactUs extends Component{
    state = {message: ''}


    

    loadSession = async() => {
        this.setState({
          userid:await AsyncStorage.getItem('userid')
        })
      }

      componentDidMount(){
        this.loadSession().done();
    }

    sendmessage=()=>{
        
        const {message} = this.state;
        const {userid} = this.state;
        axios.post('https://digimonk.co/tinyland/api/Api/sendContactEmail',{
            user_id: userid,
            description: message

        }).then((response)=> {
            // console.log(response);
            const data = response['data']
            const status = data['status']
            const message = data['message']
            if(status==1){
                alert(message);
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'ContactUs' })
                    ],
                  }))
            }
            else{
                alert(message);
            }
        })
    }

    render(){
        // console.log(this.state.message);
        return(
            <ImageBackground
            source={require('../Images/plain_background.jpeg')}
            style={{width: '100%', height: '100%'}}
            >
            <TouchableOpacity  onPress={() => this.props.navigation.toggleDrawer()}>
            <Image
            source={require('../Images/more.png')}
            style={{height: 23, width: 29, marginLeft: 10, marginTop: 20}}
            />
            </TouchableOpacity>
            <ScrollView keyboardShouldPersistTaps='always' style={{marginTop: '5%'}}>
            <View style={{marginTop: 40}}>
            
            <View style={Styles.containerStyle2}>
                <TextInput
                        style={{width: '96%',alignSelf: 'flex-start', textAlign: 'justify',fontFamily : 'Poppins' }}
                        multiline={true}
                        placeholder="Type your message here"
                        placeholderTextColor="#000000"
                        // secureTextEntry
                        value = {this.state.message}
                        onChangeText={message => this.setState({ message })}
                />
                    
            </View>
            <View style={{marginTop: 40}}>
            <TouchableOpacity onPress={this.sendmessage}>
            {/* <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <ImageBackground
                style={{marginTop: 20, width: 135, height: 32, justifyContent: 'center', alignItems: 'center' }}
                source={require('../Images/registration_button.png')}
                >
                <Text style={{fontFamily : 'Poppins', color:'white'}}>Send</Text>
                </ImageBackground>
            </View> */}
            <Button>Send</Button>
            </TouchableOpacity>
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
    containerStyle2: {
        width: "85%",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative', 
        borderWidth: 1,
        borderColor: '#008C99',
        marginTop: 15,
        height: 100,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: "white",
        marginBottom: 10,
        
    },
}

                
    
export default ContactUs;