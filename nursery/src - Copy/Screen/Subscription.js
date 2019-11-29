import React, { Component } from 'react';
import { Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';


class Subscription extends Component{

    data = this.props.data
    subscription = this.data['subscription']
    
    // subscription_name = this.subscription['subscription_name']
   
    url = "http://203.190.153.20/tinyland/uploads/subscription_images/"



    render(){
        // console.log(this.subscription_name);
       
        

        return(
    <ScrollView>
        {
            this.subscription.map( value=>
                <ImageBackground
                    source={{uri: this.url+value.subscription_image}}
                    style={Styles.subbanner}
                >
                <View style={Styles.container}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>{value.subscription_name}
                </Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#ffffff'}}>{value.subscription_description}
                </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>{value.subscription_price}
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Subscribepage')}>
                <ImageBackground
                    source={require('../Images/registration_button.png')}
                    style={{width: 135, height: 32, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Text style={{color: '#ffffff', fontSize: 18}}>Subscribe</Text>
                </ImageBackground>
                </TouchableOpacity>
                </View>
                </ImageBackground>

            )
        }
    </ScrollView>
        );
    }
}

const Styles = {
    subbanner: {
        width: 380,
        height: 200,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 15
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'grey',
        shadowOpacity: 20

    }
}


export default withNavigation(Subscription);