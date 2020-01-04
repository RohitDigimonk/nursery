import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, AsyncStorage, Dimensions} from 'react-native';
import ScrollBar from './ScrollBar';
// import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
// import CustomScrollView from 'custom-scroll-view'




// const AnimatedCustomScrollView = Animated.createAnimatedComponent(CustomScrollView)



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
    

    
    

 

   render(){
    
    
    // console.log(this.other_images);    

        return(
            



            <View style={{flex: 1}}>
            <ImageBackground
            source={require('../Images/background.png')}
            style={{width: "100%", height: "100%"}}
            >
            <ImageBackground
            source={require('../Images/topheader.png')}
            style={{width: 431, height: 70}}
            >
            <View>
            <TouchableOpacity
            // style={{width:19, height: 33, marginTop: 10, marginLeft: 10}}
            onPress={() => this.props.navigation.goBack()}>
            <Image
            source={require('../Images/back.png')}
            style={{width: 19, height: 33, marginTop: 10, marginLeft: 10}}
            /> 
            </TouchableOpacity>
            </View>
            
            </ImageBackground>
            <View style={Styles.container}>   
            <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={0}
          showPagination
        >
        
            {
                this.other_images.map(data=>
                 <View style={[Styles.child]}>
                     
                    
                <Image source={{uri:this.slider+data.otherimage}}
                style={{height:"100%", width:"100%", resizeMode:"stretch"}} />
                
                </View>
                )
            }
        
          
        </SwiperFlatList>
        </View>
         
                
                
                <ScrollBar data={this.nurseryList} />
                
            </ImageBackground>
                </View>
                
      
            
         
            
            
        );
    }
}
export const { width, height } = Dimensions.get('window');
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
    container: {
        height: 200,
        backgroundColor: 'white'
      },
      child: {
        height: height * 0.5,
        width,
        justifyContent: 'center',
        alignItems:"center",
        resizeMode:"contain"
      },
      text: {
        
        textAlign: 'center'
      }
   
}

export default SchoolDashboard;