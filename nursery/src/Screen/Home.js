import React, { Component } from 'react';
import { FlatList,Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import axios from 'axios';
import SchoolTypeScroll from './SchoolTypeScroll';
import _ from 'lodash';
import { StackActions, NavigationActions} from 'react-navigation';
// import Menu, { MenuItem, MenuDivider, Position,stickTo} from "react-native-enhanced-popup-menu";
// import Popup from './Popup';


class Home extends Component {
     
  _menu = null;

  setMenuRef = ref => {
      this._menu = ref;
    };
   
    hideMenu = () => {
      this._menu.hide();
    };
   
    showMenu = () => {
      this._menu.show();
    };
  
        state = {nurseryList: []}
        // basestate = this.state.nurseryList
        url = "https://digimonk.co/tinyland//uploads/cover_images/"

        loadSession = async() => {
          this.setState({
            userid:await AsyncStorage.getItem('userid')
          })

          console.log(this.state.userid)
        }
        
          
        
      
        // componentWillUnmount() {
        //   BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
        // }
      
        // onBackPress = () => {
        //   return true; 
        // }

        componentDidMount=()=>{
          this.loadSession().done();
         
            axios.post('https://digimonk.co/tinyland/api/Api/nurseryList' )
            .then((response) => {
                
                // console.log(response.data)
                const album = response.data
                var newalbum = album.data
                // const registration = newalbum['school_name']
                // console.log(registration);
                
                this.setState({
                    nurseryList:newalbum
                })
                this.setState({
                    data:newalbum
                })
                 
            })
            
        }
      All=()=>{
        this.hideMenu();
          // this.state.nurseryList
          this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' })
          ],
        }))
        
      }
      vacant=(value)=> {
        this.hideMenu();
        var value= _.filter(this.state.nurseryList, { registration_open: "0" })
   this.setState({
    nurseryList:value
   })     
      }
      registration=(value)=> {
        this.hideMenu();
        var value= _.filter(this.state.nurseryList, { registration_open: "1" })
        this.setState({
        nurseryList:value
   }) 
        // this.props.navigation.dispatch(StackActions.reset({
        //   index: 0,
        //   actions: [
        //     NavigationActions.navigate({ routeName: 'Home' })
        //   ],
        // }))
        // this.hideMenu();
  //       var value= _.filter(this.state.data, { registration_open: "1" })
  //       this.setState({
  //       nurseryList:value
  //  }) 
            
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
            // alert(text)
            
            var recipeArray1 = this.getRecipesByRecipeName(text);
            // var recipeArray2 = getRecipesByCategoryName(text);
            // var recipeArray3 = getRecipesByIngredientName(text);
            // alert(recipeArray1)
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

       

        renderList () {
        return this.state.nurseryList.map(nurseryList => 
        <Text key={nurseryList.id}>{nurseryList.address}</Text>
            );
        }

    render() {
        console.log(this.state.nurseryList);
      
        return(
        
        <ImageBackground
        source={require('../Images/plain_background.jpeg')}
                style={{width: '100%', height: '100%'}}
                
        >
        <View style={{flexDirection: 'row', height: "12%" }}>
                    <TouchableOpacity  onPress={() => this.props.navigation.toggleDrawer({
                      params:"20"
                    })}>
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
                    
                    <View style={{height: 40, borderWidth: 1, borderRadius: 10, marginTop: 20, marginLeft: 20,marginRight: 5, flexDirection: 'row'}}>
                        <Image
                            source={require('../Images/Search.png')}
                            style={{width: 24, height: 24, marginTop: 6, marginLeft: 4}}
                        />
                        <TextInput
                            style={{width: "70%",fontSize: 17}}
                            placeholder= "Search"
                            onChangeText={text => this.handleSearch(text)}
                        />
                        
                        </View>
                        
                        
                        <View style={{marginLeft: 10}}>
                        <Menu
            ref={this.setMenuRef}
            button={<TouchableOpacity style={{marginLeft: 10, marginTop: 24}} onPress={this.showMenu}><Image
                source={require('../Images/filter.png')}
                style={{width: 45, height: 30, }}
               
            /></TouchableOpacity>}
          >
            <MenuItem onPress={this.All}>All</MenuItem>
            <MenuItem onPress={this.vacant}>Vacant</MenuItem>
            <MenuItem onPress={this.registration}>Registration Open</MenuItem>
            {/* <MenuItem onPress={this.hideMenu} disabled>
              Menu item 3
            </MenuItem> */}
            <MenuDivider />
            <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
          </Menu>      
                        </View>
                        {/* <Menu
                            ref={this.setMenuRef}
                            // style={{left:0}}
                        > */}
                          {/* <MenuItem>Sort By</MenuItem> */}
                          


                        {/* </Menu> */}
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 22,fontFamily: 'Poppins'}}>Nurseries</Text>
                        
                    </View>
                    
                    <SchoolTypeScroll data={this.state.nurseryList}  />
                    
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