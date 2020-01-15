import React, {Component} from 'react';
import { Text, View, ImageBackground, Image, ScrollView, Linking, TouchableOpacity, Dimensions } from 'react-native';
import stringOfLanguage from './stringOfLanguage';
import SwiperFlatList from 'react-native-swiper-flatlist';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class AboutUs extends Component {

    slider = "https://digimonk.co/tinyland/uploads/other_images/"
    
    
    //     state = {AboutUs: []}
    // componentDidMount=()=>{
    //     Axios.post('https://digimonk.co/tinyland/api/Api/aboutusByID/',{
    //         id: 77
    //     })
    //     .then((response) =>{
    //         const AboutUs = response.data
    //         const About = AboutUs.data
    //         const Abou = About.about_school
    //         // const About = AboutUs.About
    //         this.setState({
    //             AboutUs: Abou
    data = this.props.data
    management_name = this.data['management_name']
    superviser = this.data['superviser'] 
    Teacher = this.data['teacher']
    methodology = this.data['methodology']
    mapUrl = this.data['mapUrl']
    social = this.data['social']
    mapLink = this.data['mapLink']
    other_images = this.data['otherImage']
    instagram=""
    // instagram = this.social.split(',')

    render() {
        if(!this.social==""){
           this.instagram = this.social.split(',')
        }
        else{
            this.instagram=[]
        }
        

        // console.log(this.instagram);
        // console.log(this.props.children);
        return(
            
            <ScrollView>
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

        

            <View style={{marginTop: 10, marginBottom: 10, paddingLeft: 5, paddingRight: 5}}>
              <Text style={{textAlign: 'justify',fontFamily : 'Poppins',marginRight:5}}>{this.props.data['about_school']}</Text>
            </View>
            <View>
               {
                   this.instagram.map(value =>
                    <Text style={{textAlign: 'justify', marginLeft: 10,fontFamily : 'Poppins'}}>{value=='0'?"":value}</Text>
                   )
               }
            </View>
            <View style={Styles.containerstyle}>
                <ImageBackground
                    source={require('../Images/blue.png')}
                    style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Image
                    source={require('../Images/members.png')}
                    style={{width: 13, height: 16}}
                    />
                    <Text style={Styles.textstyle}>
                        {stringOfLanguage.management}
                    </Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../Images/black.png')}
                    style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    
                    <Text style={Styles.textstyle}>
                        {this.management_name}
                    </Text>
                </ImageBackground>

            </View>
            <View style={Styles.containerstyle}>
                <ImageBackground
                    source={require('../Images/blue.png')}
                    style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Image
                    source={require('../Images/members.png')}
                    style={{width: 13, height: 16}}
                    />
                    <Text style={Styles.textstyle}>
                        {stringOfLanguage.number}
                    </Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../Images/black.png')}
                    style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    
                    <Text style={Styles.textstyle}>
                        {this.superviser} {stringOfLanguage.supervisers}
                    </Text>
                </ImageBackground>

            </View>
            <View style={Styles.containerstyle}>
                <ImageBackground
                    source={require('../Images/blue.png')}
                    style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Image
                    source={require('../Images/members.png')}
                    style={{width: 13, height: 16}}
                    />
                    <Text style={Styles.textstyle}>
                        {stringOfLanguage.number} 
                    </Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../Images/black.png')}
                    style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    
                    <Text style={Styles.textstyle}>
                        {this.Teacher} {stringOfLanguage.teachers}
                    </Text>
                </ImageBackground>

            </View>
            <View style={Styles.containerstyle}>
                <ImageBackground
                    source={require('../Images/blue.png')}
                    style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Image
                    source={require('../Images/members.png')}
                    style={{width: 13, height: 16}}
                    />
                    <Text style={Styles.textstyle}>
                        {stringOfLanguage.methodology}
                    </Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../Images/black.png')}
                    style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    <ScrollView>
                    <Text style={Styles.textstyle}>
                        {this.methodology}
                    </Text>
                    </ScrollView>
                </ImageBackground>
                </View>
                <TouchableOpacity onPress={()=> Linking.openURL(this.mapLink)}>
                <View style={{marginTop: 10}}>
                    <Image
                    source={{uri: this.mapUrl }}
                    style = {{width: "100%", height: 300 }}
                    />
                </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
export const { width, height } = Dimensions.get('window');
const Styles = {
    textstyle : {
        color: '#ffffff',
        fontSize: 18,
        marginLeft: 2,
        fontFamily : 'Poppins'


    },
    containerstyle : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 3,
        marginBottom: 3,

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
}

export default AboutUs;