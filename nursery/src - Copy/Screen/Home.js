import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
// import NurseryDetail from './NurseryDetail';


class Home extends Component {
     
    
        // console.log(this.props); // props will get logged.
        state = {nurseryList: []}

        url = "http://203.190.153.20/tinyland//uploads/cover_images/"
      

        componentDidMount=()=>{
           
            axios.post('http://203.190.153.20/tinyland/api/Api/nurseryList' )
            .then((response) => {
                
                // console.log(response.data)
                const album = response.data
                var newalbum = album.data
                //const data = response.data
                // console.log(newalbum.length);
                
                this.setState({
                    nurseryList:newalbum
                })
                 
            })
            
        }

       

        // renderList () {
        // return this.state.nurseryList.map(nurseryList => 
        // <Text key={nurseryList.id}>{nurseryList.address}</Text>
        //     );
        // }

    render() {
        // console.log(this.state.nurseryList);
        return(
        <ImageBackground
        source={require('../Images/homebackground.png')}
                style={{width: '100%', height: '100%'}}
        >
        <View style={{flexDirection: 'row', height: "12%"}}>
                    <TouchableOpacity  onPress={() => this.props.navigation.toggleDrawer()}>
                    <Image
                        source={require('../Images/more.png')}
                        style={{height: 23, width: 29, marginLeft: 10, top: 20}}
                    />
                    </TouchableOpacity>
                    <Image
                        source={require('../Images/logo.png')}
                        style={{height: 57, width: 85, marginLeft: '30%'}}
                    />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <View style={{width: '80%', height: 40, borderWidth: 1, borderRadius: 10, marginLeft: 10, flexDirection: 'row'}}>
                        <Image
                            source={require('../Images/Search.png')}
                            style={{width: 30, height: 19, marginTop: 7, marginLeft: 10, marginRight: 10}}
                        />
                        <TextInput
                            style={{width:'80%', fontSize: 17,}}
                            placeholder= "Search"
                            
                        />
                        
                        </View>
                        <View style={{width: '15%', marginLeft: 10, top: 4}}>
                        <Image
                            source={require('../Images/filter.png')}
                            style={{width: 45, height: 30, }}
                        />
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 22}}>Nurseries</Text>
                        
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
                        <Text style={{color: '#35c3c4'}}>All</Text>
                        <Text style={{color: '#35c3c4'}}>British</Text>
                        <Text style={{color: '#35c3c4'}}>Three-language nurseried</Text>
                    </View>
        <ScrollView
        
        >   
        <View style={{marginTop: 10}}>
            {this.state.nurseryList.map(nurseryList =>
                        <View style={Styles.containerStyle}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SchoolDashboard', { nurseryList })}>
                            <ImageBackground
                                source={{uri: this.url+nurseryList.cover_image}}
                                style={{width: 400, height: 300}}
                            >

                                <View style={Styles.detailContainer}>
                                <Text style={Styles.textContainer}>{nurseryList.school_name}
                                <Image
                                        source={require('../Images/school_logo.png')}
                                        style={{width: 10, height: 15, marginLeft: 10}}
                                    />
                                
                                </Text>
                                <Text style={Styles.textContainer}>
                                    {nurseryList.address}
                                <Image
                                    source={require('../Images/location.png')}
                                    style={{width: 10, height: 15, marginLeft: 10}}
                                />
                                    
                                </Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10}}>
                                    <ImageBackground
                                        source={require('../Images/registration_button.png')}
                                        style={{width: 135, height: 32, bottom: 40, alignItems: 'center', justifyContent: 'center'}}
                                    >
                                        <Text>
                                            {nurseryList.registration_open==1?'Registation Open':'Vacation'}
                                        </Text>

                                    </ImageBackground>
                                </View>
                            </ImageBackground>
                            </TouchableOpacity>
                    </View>
                )}
        </View>
        </ScrollView>
        </ImageBackground>
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

export default Home;