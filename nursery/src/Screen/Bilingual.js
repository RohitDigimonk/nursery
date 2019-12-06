import React, {Component} from 'react';
import {Text,View, TouchableOpacity, ImageBackground, Image, ScrollView} from 'react-native';
import { withNagivation, withNavigation } from 'react-navigation';
class Bilingual extends Component{

    url = "http://203.190.153.20/tinyland//uploads/cover_images/"

    data = this.props.data
    



    render(){
        // console.log(this.data)
        return(
            <ScrollView>{
            this.data.map(item=>
                 {
                     if(item.school_type == "Bilingual nursery")
                 return <View style={Styles.containerStyle}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('SchoolDashboard', { item })}>
               <ImageBackground
                source={{uri: this.url+item.cover_image}}
                style={{width: "100%", height: 280}}
            >

                <View style={Styles.detailContainer}>
                <Text style={Styles.textContainer}>{item.school_name}
                <Image
                        source={require('../Images/school_logo.png')}
                        style={{width: 10, height: 15, marginLeft: 10}}
                    />
                
                </Text>
                <Text style={Styles.textContainer}>
                    {item.address}
                <Image
                    source={require('../Images/location.png')}
                    style={{width: 10, height: 15, marginLeft: 10}}
                />
                    
                </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 15}}>
                    <ImageBackground
                        source={require('../Images/registration_button.png')}
                        style={{width: 135, height: 32, bottom: 40, alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Text>
                            {item.registration_open==1?'Registation Open':'Vacation'}
                        </Text>

                    </ImageBackground>
                </View>
            </ImageBackground>
            </TouchableOpacity>
        </View>
                 }
    
            )
    }
    </ScrollView>      
          );

        
    }
} 
const Styles = {
    containerStyle: {
        marginTop: 20, 
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 5,
        
    },
    detailContainer: {
        paddingLeft: 20,
        height: '100%',
        justifyContent: 'flex-end',
        
             
        
    },
    textContainer: {
        fontSize: 20,
        paddingBottom: 2,
        
    }
}
export default withNavigation(Bilingual);