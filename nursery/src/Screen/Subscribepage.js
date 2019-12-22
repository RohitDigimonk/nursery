import React, {Component} from 'react';
import {Text,View, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

class Subscribepage extends Component{
    render(){
        return(
            <View>
            <ImageBackground
            source={require('../Images/background.png')}
            style={{width: '100%', height: '100%'}}
            >
             <ImageBackground
            source={require('../Images/topheader.png')}
            style={{width: 429, height: 47}}
            >
            <View>
            <TouchableOpacity
            style={{width: 19, height: 33}}
            onPress={() => this.props.navigation.goBack()}>
            <Image
            source={require('../Images/back.png')}
            style={{width: 19, height: 33, marginTop: 10, marginLeft: 10}}
            /> 
            </TouchableOpacity>
            </View>
            
            </ImageBackground>
            <ScrollView>
            <View style={{marginTop: 20}}>
            <View style={Style.containerStyle}>
                <View style={{flexDirection: 'row'}}>
                <ImageBackground
                      source={require('../Images/subscribenumber.png')}
                      style={Style.ButtonStyle}
                >
                    <Text
                    style={Style.textStyle}
                    >Subscriber Number</Text>
                    </ImageBackground>

                    <TextInput
                    style={Style.inputStyle}
                    >

                    </TextInput>
                </View>
            </View>
            <View style={Style.containerStyle}>
                <View style={{flexDirection: 'row'}}>
                <ImageBackground
                      source={require('../Images/idnumber.png')}
                      style={Style.ButtonStyle}
                >
                    <Text
                    style={Style.textStyle}
                    >ID Number</Text>
                    </ImageBackground>
                    <TextInput
                    style={Style.inputStyle}
                    >

                    </TextInput>
                </View>
            </View>
            <View style={Style.containerStyle}>
                <View style={{flexDirection: 'row'}}>
                <ImageBackground
                      source={require('../Images/phonenumber.png')}
                      style={Style.ButtonStyle}
                >
                    <Text
                    style={Style.textStyle}
                    >Phone Number</Text>
                    </ImageBackground>
                    <TextInput
                    style={Style.inputStyle}
                    >

                    </TextInput>
                </View>
            </View>
            <View style={Style.containerStyle}>
                <View style={{flexDirection: 'row'}}>
                <ImageBackground
                      source={require('../Images/area.png')}
                      style={Style.ButtonStyle}
                >
                    <Text
                    style={{color: 'white', textAlign: 'center'}}
                    >Area</Text>
                    </ImageBackground>
                    <TextInput
                    style={Style.inputStyle}
                    >

                    </TextInput>
                </View>
            </View>
                <TextInput
                style={{width: '95%',
                height: 70,
                borderWidth: 0.5,
                borderRadius: 7,
                shadowOpacity: 10,
                shadowRadius: 7,
                marginLeft: 6,
                marginRight: 20,
                marginTop: 20,
                backgroundColor: 'white'}}
                />
            </View>
            <View style={{marginTop: 35, marginLeft: 10, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
            <CheckBox
                value={false}
                disabled={false}
            />
                <Text style={{fontSize: 30, marginBottom: 10}}>
                    Paypal
                </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
            <CheckBox
                value={false}
                disabled={false}
            />
                <Text style={{fontSize: 30, marginBottom: 10}}>
                    Stripe
                </Text>
                </View>
            </View>
            <View style={{alignItems: 'center', marginTop: 50  }}>
                <TouchableOpacity>
                <ImageBackground
                style={{width: 269, height: 80, justifyContent: 'center', alignItems: 'center'}}
                source={require('../Images/orderButton.png')}
                >
                    <Text style={{color: 'white', fontSize: 24}}>CREATE ORDER</Text>
                </ImageBackground>
                </TouchableOpacity>
            </View>
            </ScrollView>
            </ImageBackground>
            </View>
            
        );
    }
}

const Style= {
    TextStyle: {paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    textAlign: 'justify',
    paddingLeft: 5,
    paddingRight: 5
    },
    ButtonStyle: {
        width: 131,
        height: 43,
        justifyContent: 'space-around'
    },
    inputStyle: {
        width: '66%',
        height: 43,
        borderWidth: 0.5,
        borderRadius: 7,
        shadowOpacity: 10,
        shadowRadius: 7,
        marginLeft: 6,
        backgroundColor: 'white',
        paddingRight: 10,
        paddignLeft: 10

    },

    textStyle: {
        color: 'white',
        textStyle: 'center',
        paddingLeft: 50,
        paddingRight: 5
    },

    containerStyle: {
        margintop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5
    }
}

export default Subscribepage;