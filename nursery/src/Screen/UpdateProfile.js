import React, {Component} from 'react';
import {Text,View, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, AsyncStorage} from 'react-native';
import { StackActions, NavigationActions} from 'react-navigation';
import Button from '../common/Button';
class UpdateProfile extends Component{

    componentDidMount(){
        this.loadSession().done();
    }

    loadSession = async() => {
        this.setState({
          userid:await AsyncStorage.getItem('userid')
        })
      }

    state = { fname: '', lname: '', phone: '' }

    userupdate = () => {
        const {fname} = this.state;
        const {lname} = this.state;
        const {phone} = this.state;
        const {userid} = this.state;

        fetch('https://digimonk.co/tinyland/api/Api/profileUpdate', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    
    
    
    first_name: fname,
  
    last_name: lname,

    phone: phone,

    id: userid
 
  })

}).then((response) => response.json())
        .then((responseJson)=> {
            console.log(userid)
            this.setState({
                data:responseJson
            })
            // Showing response message coming from server after inserting records.
                if(this.state.data['status']==1){
                    alert(this.state.data['message'])
                    this.props.navigation.dispatch(StackActions.reset({
                        index: 0,
                        actions: [
                          NavigationActions.navigate({ routeName: 'UpdateProfile' })
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
            style={{height: 23, width: 29, marginLeft: 10, marginTop: 20}}
            />
            </TouchableOpacity>
            <ScrollView keyboardShouldPersistTaps='always' style={{marginTop: '5%'}}>
            <View style={{marginTop: 40}}>
            <View style={Styles.containerStyle}>
                <TextInput
                        style={{width: '80%'}}
                        placeholder="First Name"
                        placeholderTextColor="#000000"
                        value = {this.state.fname}
                        onChangeText={fname => this.setState({ fname })}
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
                        placeholderTextColor="#000000"
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
                        placeholderTextColor="#000000"
                        value = {this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                />
                    <Image
                        source={require('../Images/mobile.png')}
                        style={{width: 17, height: 30, marginLeft: 10}}
                    />
            </View>
           
            <View style={{marginTop: "10%"}}>
                    <Button onPress={this.userupdate}>
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
export default UpdateProfile;