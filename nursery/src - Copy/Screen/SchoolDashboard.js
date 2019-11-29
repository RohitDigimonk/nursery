import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import ScrollBar from './ScrollBar';
import AboutUs from './AboutUs';


class SchoolDashboard extends Component {
    state = {nurseryList: []}

    componentDidMount=()=>{
        this.setState({
            nurseryList:this.props.navigation.state.params.nurseryList
        })
        
    }


    nurseryList= this.props.navigation.state.params.nurseryList
    url = "http://203.190.153.20/tinyland//uploads/cover_images/"

   

    //  rendernurseryid=()=> {
    //     // console.log(this.nurseryList)
    //     return <AboutUs data={this.nurseryList} />
    //     }

   render(){
    
    
    console.log(this.nurseryList);    

        return(
            <View style={{flex: 1}}>
            <ImageBackground
                source={{uri: this.url+this.nurseryList.cover_image}}
                style={{width: "100%", height: 300}}
            >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <Image
                    source={require('../Images/back.png')}
                    style={{width: 19, height: 33, top: 5, left: 10}}
                />
                </TouchableOpacity>
                </ImageBackground>
                
                
                <ScrollBar data={this.nurseryList} />
                
                {/* <AboutUs>
                {this.rendernurseryid()}
                </AboutUs> */}
                </View>
            
      
            
         
            
            
        );
    }
}

const Styles= {

    ImageContainer: {
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
  
    },
   
}

export default SchoolDashboard;