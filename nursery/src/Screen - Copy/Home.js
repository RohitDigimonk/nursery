import React, { Component } from 'react';
import { FlatList,Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import axios from 'axios';
// import NurseryDetail from './NurseryDetail';
import SchoolTypeScroll from './SchoolTypeScroll';

class Home extends Component {
     
    
        // console.log(this.props); // props will get logged.
        state = {nurseryList: []}

        url = "http://203.190.153.20/tinyland//uploads/cover_images/"

        loadSession = async() => {
          this.setState({
            userid:await AsyncStorage.getItem('userid')
          })
        }
      

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
                this.setState({
                    data:newalbum
                })
                 
            })
            
        }


        getSchool=(categoryId)=> {
            const schoolArray = [];
            this.state.nurseryList.map(data => {
              if (data.id == categoryId) {
                schoolArray.push(data);
              }
            });
            return schoolArray;
          }

          getRecipesByRecipeName(schoolName) {
            const nameUpper = schoolName.toUpperCase();
            const schoolArray = [];
            this.state.nurseryList.map(data => {
              if (data.school_name.toUpperCase().includes(nameUpper)) {
                schoolArray.push(data);
              }
            });
            return schoolArray;
          }
        

          handleSearch = text => {
            var recipeArray1 = this.getRecipesByRecipeName(text);
            // var recipeArray2 = getRecipesByCategoryName(text);
            // var recipeArray3 = getRecipesByIngredientName(text);
            var aux = recipeArray1
            var schoolArray = [...new Set(aux)];
            if (text == '') {
              this.setState({
                value: text,
                nurseryList: this.state.data
              });
            } else {
              this.setState({
                value: text,
                nurseryList: schoolArray
              });
            }
          };

       

        // renderList () {
        // return this.state.nurseryList.map(nurseryList => 
        // <Text key={nurseryList.id}>{nurseryList.address}</Text>
        //     );
        // }
    //     renderSchool = ({ item }) => (
    //         <View style={Styles.containerStyle}>
    //         <TouchableOpacity onPress={() => this.props.navigation.navigate('SchoolDashboard', { item })}>
    //         <ImageBackground
    //             source={{uri: this.url+item.cover_image}}
    //             style={{width: "100%", height: 280}}
    //         >

    //             <View style={Styles.detailContainer}>
    //             <Text style={Styles.textContainer}>{item.school_name}
    //             <Image
    //                     source={require('../Images/school_logo.png')}
    //                     style={{width: 10, height: 15, marginLeft: 10}}
    //                 />
                
    //             </Text>
    //             <Text style={Styles.textContainer}>
    //                 {item.address}
    //             <Image
    //                 source={require('../Images/location.png')}
    //                 style={{width: 10, height: 15, marginLeft: 10}}
    //             />
                    
    //             </Text>
    //             </View>
    //             <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 15}}>
    //                 <ImageBackground
    //                     source={require('../Images/registration_button.png')}
    //                     style={{width: 135, height: 32, bottom: 40, alignItems: 'center', justifyContent: 'center'}}
    //                 >
    //                     <Text>
    //                         {item.registration_open==1?'Registation Open':'Vacation'}
    //                     </Text>

    //                 </ImageBackground>
    //             </View>
    //         </ImageBackground>
    //         </TouchableOpacity>
    // </View>
    //       );

    render() {
        // console.log(this.state.nurseryList);
        
        return(
        <ImageBackground
        source={require('../Images/plain_background.jpeg')}
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
                            style={{width: 45, height: 30, marginTop: 7, marginLeft: 10, marginRight: 10}}
                        />
                        <TextInput
                            style={{width:'80%', fontSize: 17,}}
                            placeholder= "Search"
                            onChangeText={text => this.handleSearch(text)}
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
                    
                    <SchoolTypeScroll data={this.state.nurseryList} />
                    
                    {/* <View style={{flexDirection: 'row', justifyContent: 'space-around'}}> 
                        <Text style={{color: '#35c3c4'}}>All</Text>
                        <Text style={{color: '#35c3c4'}}>British</Text>
                        <Text style={{color: '#35c3c4'}}>Three-language nurseried</Text>
                    </View> */}
        {/* <ScrollView>   
        <View style={{marginTop: 10}}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={this.state.nurseryList}
          renderItem={this.renderSchool}
          keyExtractor={item => `${item.id}`}
        />
        </View>
        </ScrollView> */}
        </ImageBackground>
        );
    }
}

// const Styles = {
//     containerStyle: {
//         marginTop: 20, 
//         marginBottom: 20,
//         marginLeft: 5,
//         marginRight: 5,
//         borderWidth: 1,
//         borderRadius: 5,
        
//     },
//     detailContainer: {
//         paddingLeft: 20,
//         height: '100%',
//         justifyContent: 'flex-end',
        
             
        
//     },
//     textContainer: {
//         fontSize: 20,
//         paddingBottom: 2,
        
//     }
// }

export default Home;