import React, {Component} from 'react';
import {Text,View, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput, Button} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import stringsoflanguages from './stringOfLanguage';
import PayPal from 'react-native-paypal-wrapper';


var radio_props = [
    {label: <Image
        source={require('../Images/more.png')}
        style={{height: 23, width: 29, marginLeft: 10, marginTop: 20}}
    />, value: 0 },
    {label: <Image
        source={require('../Images/more.png')}
        style={{height: 23, width: 29, marginLeft: 10, marginTop: 20}}
    />, value: 1 },
    {label: <Image
        source={require('../Images/more.png')}
        style={{height: 23, width: 29, marginLeft: 10, marginTop: 20}}
    />, value: 2 }
  ];

class Subscribepage extends Component{

    paypal() {
        PayPal.initialize(PayPal.SANDBOX, 'AW8pIdNP7pDnVrEyfIDXtERPt_KaFqsF2n3soujez9olIXhw5Ci2yLcyidF2Sddj8EdStMz4Rfpaem3r'); // 3 enviroments - NO_NETWORK, SANDBOX, PRODUCTION
        PayPal.pay({
          price: '1',
          currency: 'USD',
          description: 'Nursery Plan',
        }).then(confirm => console.log(confirm))
          .catch(error => console.log(error));
      }

    render(){
        return(
            <View>
            <ImageBackground
            source={require('../Images/background.png')}
            style={{width: '100%', height: '100%'}}
            >
             <ImageBackground
            source={require('../Images/topheader.png')}
            style={{width: 431, height: 70}}
            >
            <View>
            <TouchableOpacity
            style={{marginTop: 10, marginLeft: 10}}
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
                    >{stringsoflanguages.subscribeno}</Text>
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
                    >{stringsoflanguages.idnumber}</Text>
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
                    >{stringsoflanguages.phone}</Text>
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
                    >{stringsoflanguages.area}</Text>
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
            
            <View>
            <RadioForm
            radio_props={radio_props}
            initial={0}
            labelStyle={{fontSize:22, paddingTop:5}}
            onPress={(value) => {this.setState({value:value})}}

            />
            </View>

            </View>
            <View style={{alignItems: 'center', marginTop: 50  }}>
                <TouchableOpacity onPress={this.paypal}>
                <ImageBackground
                style={{width: 269, height: 80, justifyContent: 'center', alignItems: 'center'}}
                source={require('../Images/orderButton.png')}
                >
                <Text style={{color: 'white', fontSize: 24}}>{stringsoflanguages.createorder}</Text>
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
        width: '63%',
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