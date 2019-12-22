import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import ScrollBar from './ScrollBar';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

class SchoolDashboard extends Component {
    state = {nurseryList: [], renderData: [], nurseryid: ''}

    
    loadSession = async() => {
        this.setState({
          userid:await AsyncStorage.getItem('userid')
        })
        this.setState({
            nurseryList:this.props.navigation.state.params.item
            
        }) 
        this.setState({
            nurseryid:this.state.nurseryList['id']
        })
        // console.log({ user_id : this.state.userid,
        //     nursery_id : this.state.nurseryid})

        axios.post('https://digimonk.co/tinyland/api/Api/getVisitorInfo',{
           
            user_id : this.state.userid,
            nursery_id : this.state.nurseryid
        }).then((response)=>{
            console.log(response);
        })
      }
    
    

    componentDidMount=()=>{
        this.loadSession().done();
           
    }
    
    

    nurseryList= this.props.navigation.state.params.item
    url = "https://digimonk.co/tinyland//uploads/cover_images/"

    slider = "https://digimonk.co/tinyland/uploads/other_images/"
   
    
    //  rendernurseryid=()=> {
    //     // console.log(this.nurseryList)
    //     return <AboutUs data={this.nurseryList} />
    //     }

    
  
    other_images = this.nurseryList['otherImage']
    

    
    renderData () {
        return this.other_images.map(data => 
        <Text key={data.nursery_master_id}>{data}</Text>
            );
        }
        renderitem = ({ item }) => (
            <View style={{justifyContent: 'center', alignItems: 'center', flex:1, height: 300, paddingRight: 5, }}>
                
        <ImageBackground
        style={{height: 300, width: 400}}
        source={{uri:this.slider+item.otherimage}}
        resizeMode= 'contain'
        >
        
        </ImageBackground>
        {/* // >{this.slider+item.otherimage}</image> */}
        </View>
        );

    // renderItem ({item, index}) {
    //     return (
    //         <View style={{justifyContent: 'center', alignItems: 'center', widht: 200, backgroundColor:"#000", height: 200}}>
                
    //             <Text>HI test data</Text>
    //         </View>
    //     );
    // }

   render(){
    
    
    // console.log(this.state.nurseryid);    

        return(
            <View style={{flex: 1}}>
            <ImageBackground
            source={require('../Images/background.png')}
            style={{width: "100%", height: "100%"}}
            >
            <ImageBackground
            source={require('../Images/topheader.png')}
            style={{width: 429, height: 47}}
            >
            <View>
            <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Image
            source={require('../Images/back.png')}
            style={{width: 19, height: 33, marginTop: 10, marginLeft: 10}}
            /> 
            </TouchableOpacity>
            </View>
            
            </ImageBackground>
                
            
            <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.other_images}
          renderItem={this.renderitem}
          sliderWidth={390}
          itemWidth={410}
          
        />
                
                
                <ScrollBar data={this.nurseryList} />
                
                </ImageBackground>
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