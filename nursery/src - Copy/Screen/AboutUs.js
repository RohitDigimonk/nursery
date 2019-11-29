import React, {Component} from 'react';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';


class AboutUs extends Component {
    //     state = {AboutUs: []}
    // componentDidMount=()=>{
    //     Axios.post('http://203.190.153.20/tinyland/api/Api/aboutusByID/',{
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
            <View style={{marginTop: 10, marginBottom: 10}}>
              <Text style={{textAlign: 'justify'}}>  {this.props.data['about_school']} </Text>
            </View>
            <View>
               {
                   this.instagram.map(value =>
                    <Text>{value=='0'?"":value}</Text>
                   )
               }
            </View>
            <View style={Styles.containerstyle}>
                <ImageBackground
                    source={require('../Images/blue.png')}
                    style={{width: 200, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Image
                    source={require('../Images/members.png')}
                    style={{width: 13, height: 16}}
                    />
                    <Text style={Styles.textstyle}>
                        Management
                    </Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../Images/black.png')}
                    style={{width: 200, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    
                    <Text style={Styles.textstyle}>
                        {this.management_name}
                    </Text>
                </ImageBackground>

            </View>
            <View style={Styles.containerstyle}>
                <ImageBackground
                    source={require('../Images/blue.png')}
                    style={{width: 200, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Image
                    source={require('../Images/members.png')}
                    style={{width: 13, height: 16}}
                    />
                    <Text style={Styles.textstyle}>
                        Number Of
                    </Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../Images/black.png')}
                    style={{width: 200, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    
                    <Text style={Styles.textstyle}>
                        {this.superviser} Supervisers
                    </Text>
                </ImageBackground>

            </View>
            <View style={Styles.containerstyle}>
                <ImageBackground
                    source={require('../Images/blue.png')}
                    style={{width: 200, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Image
                    source={require('../Images/members.png')}
                    style={{width: 13, height: 16}}
                    />
                    <Text style={Styles.textstyle}>
                        Number of 
                    </Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../Images/black.png')}
                    style={{width: 200, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    
                    <Text style={Styles.textstyle}>
                        {this.Teacher} Teachers
                    </Text>
                </ImageBackground>

            </View>
            <View style={Styles.containerstyle}>
                <ImageBackground
                    source={require('../Images/blue.png')}
                    style={{width: 200, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Image
                    source={require('../Images/members.png')}
                    style={{width: 13, height: 16}}
                    />
                    <Text style={Styles.textstyle}>
                        Methodology
                    </Text>
                </ImageBackground>
                <ImageBackground
                    source={require('../Images/black.png')}
                    style={{width: 200, height: 55, justifyContent: 'center', alignItems: 'center'}}
                >
                    
                    <Text style={Styles.textstyle}>
                        {this.methodology}
                    </Text>
                </ImageBackground>
                </View>
                <View style={{marginTop: 10}}>
                    <Image
                    source={{uri: this.mapUrl }}
                    style = {{width: "100%", height: 300 }}
                    />
                </View>
            </ScrollView>
        );
    }
}

const Styles = {
    textstyle : {
        color: '#ffffff',
        fontSize: 18


    },
    containerstyle : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5
    }
}

export default AboutUs;