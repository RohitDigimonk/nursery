import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

class Event extends Component{

    data = this.props.data
    event = this.data['event']
   
    url = "http://203.190.153.20/tinyland//uploads/event_images/"

    render(){
        //  console.log(this.event);
       
        

        return(
    <ScrollView>
        {
            this.event.map( value=>

                <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 10}}>
                    <Image
                        source={{uri:this.url+value.event_image}}
                        style={{height:120, width: 150, borderRadius: 6}}
                    />
                    <View style={{paddingLeft: 15, width: 230, }}>
                    <View style={{flexDirection: 'row'}}>
                    <Image
                        source={require('../Images/calendar.png')}
                        style={{height: 17, width: 16}}
                    />
                    <Text style={{paddingLeft: 10}}>{value.event_date}</Text>
                    </View>
                    <Text style={{fontSize: 16, paddingBottom: 10}}>{value.event_name}</Text>
                    <Text style={{textAlign: 'justify'}}>{value.event_description}</Text>
                    </View>
                </View>

            )
        }
    </ScrollView>
        );
    }
}



export default Event;