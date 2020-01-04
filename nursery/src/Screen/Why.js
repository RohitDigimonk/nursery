import React, {Component} from 'react';
import {Text,View, ImageBackground, Image, TouchableOpacity, ScrollView} from 'react-native';
import Axios from 'axios';

class Why extends Component{

    state = {
        whyMyNursery:""
    }

    componentDidMount = () => {
        Axios.post('https://digimonk.co/tinyland/api/Api/informativePageList')
        .then((response) => {
            // console.log(response);
            const data = response['data']
            const alldata = data['data']
            // console.log(alldata);
            const whyMyNursery = alldata[0]

            this.setState({
                whyMyNursery:whyMyNursery
            })
        })
    }

    render(){
        return(
            <ImageBackground
            source={require('../Images/background.png')}
            style={{width: '100%', height: '100%'}}
            >
            <ImageBackground
                  source={require('../Images/topheader.png')}
                  style={{height:70,width:431}}
                  >
                    <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.toggleDrawer({
                      // params:"20"
                    })}>
                    <Image
                        source={require('../Images/more.png')}
                        style={{height: 23, width: 29, marginLeft: 10, marginTop: 20}}
                    />
                    </TouchableOpacity>
                    {/* <Image
                        source={require('../Images/logo.png')}
                        style={{height: 57, width: 85, marginLeft: '24%', marginTop: 5}}
                    /> */}
                    </View>
                  </ImageBackground>
            
            
            <ScrollView style={{marginTop: 5}}>
            <View>
            
                <Text style={Style.TextStyle}>    
                    {this.state.whyMyNursery['description']}
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
    paddingRight: 5,
    fontFamily : 'Poppins'
    }
}

export default Why;