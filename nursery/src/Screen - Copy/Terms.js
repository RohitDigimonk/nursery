import React, {Component} from 'react';
import {Text,View, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native';

class Terms extends Component{
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
            <View>
            
                <Text style={Style.TextStyle}>    
                1. ACCEPTANCE THE USE OF LOREM IPSUM TERMS AND CONDITIONS
                Your access to and use of Lorem Ipsum (the app) is subject
                exclusively to these Terms and Conditions. You will not use
                the app for any purpose that is unlawful or prohibited by these
                Terms and Conditions. By using the app you are fully accepting the
                terms, conditions and disclaimers contained in this notice.
                If you do not accept these Terms and Conditions you must immediately stop using the app.
                </Text>
                <Text style={Style.TextStyle}>
                2. CREDIT CARD DETAILS
                All Lorem Ipsum purchases
                are managed by the individual App Stores (Apple, Google Windows) and Lorem Ipsum will never
                store your credit card information or make it available to any third parties. Any purchasing
                information provided will be provided directly from you to the respective App Store and you will be subject to their credit card policies.
                </Text>
                <Text style={Style.TextStyle}>
                3. LEGAL ADVICE
                The contents of Lorem Ipsum app do not constitute advice and should not be relied upon in making or refraining from making, any decision.
                All material contained on Lorem Ipsum is provided without any or warranty of any kind. You use the material on Lorem Ipsum at your own discretion
                </Text>
                <Text style={Style.TextStyle}>
                4. LEGAL ADVICE
                The contents of Lorem Ipsum app do not constitute advice and should not be relied upon in making or refraining from making, any decision.
                All material contained on Lorem Ipsum is provided without any or warranty of any kind. You use the material on Lorem Ipsum at your own discretion
                </Text>
            
            </View>
            </ScrollView>
            </ImageBackground>
                
            
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
    }
}

export default Terms;