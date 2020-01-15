import React, { Component } from 'react';
import { FlatList,Text, View,StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import axios from 'axios';
import SchoolTypeScroll from './SchoolTypeScroll';
import _ from 'lodash';
import { StackActions, NavigationActions} from 'react-navigation';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Bilingual from './Bilingual';
import Islamic from './Islamic';
import AllSchool from './AllSchool';
import Trilingual from './Trilingual';
import Special from './Special';
import Sevenpetal from './Sevenpetal';
import Montessori from './Montessori';
import stringOfLanguage from './stringOfLanguage';
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import Menu, { MenuItem, MenuDivider, Position,stickTo} from "react-native-enhanced-popup-menu";
// import Popup from './Popup';
import HorizontalScroll from './HorizontalScroll';

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

    nearBy = () => {
      this.hideMenu();
      const {longitude} = this.state;
      const {latitude} = this.state;

      axios.post('https://digimonk.co/tinyland/api/Api/getNearMeSchool',{
          latitude : latitude,
          longtitude: longitude
      }).then((response) => {
        // console.log(response);
        const data2 = response['data']
        const data = data2['data']
        // console.log(data);
        this.setState({
          nurseryList:data
        })
      })
    }

    renderSchool = ({ item }) => (
      <View style={Styles.containerStyle}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('SchoolDashboard', { item })}>
     <View>
      <ImageBackground
          source={{uri: this.url+item.cover_image}}
          style={{width: "100%", height: 220}}
          resizeMode= 'contain'
      >
        </ImageBackground>
        </View>
        <View style={Styles.detailContainer}>
          
          <View style={{marginTop:5, width: "60%"}}>
          <View style={{flexDirection:'row'}}>
          
          <Image
                  source={require('../Images/school_logo.png')}
                  style={{width: 10, height: 15,marginRight:5,marginTop:2}}
              />
          
          <Text style = {Styles.textContainer}>{item.school_name}</Text>
          </View>
          <View style={{flexDirection:'row',width:180}}>
          
          <Image
              source={require('../Images/location.png')}
              style={{width: 10, height: 15, marginRight:5,marginTop:5}}
          />
          <Text style={Styles.textContainer}>{item.city}</Text>
          </View>  
          
          </View>
          <View style={{width:"40%",position: 'relative'}}>
          {item.registration_open==1?
                   <ImageBackground
                       source={require('../Images/registration_button.png')}
                       style={{width: 135, height: 32, alignItems: 'center', justifyContent: 'center'}}
                   >
                       <Text style={{fontFamily : 'Poppins',color:'#ffffff'}}>
                           {stringOfLanguage.registrationOpen}
                       </Text>

                   </ImageBackground>:<ImageBackground
                       source={require('../Images/vacation_button.png')}
                       style={{width: 141, height: 36, alignItems: 'center', justifyContent: 'center'}}
                   >
                       <Text style={{fontFamily : 'Poppins',color:'#ffffff'}}>
                       {stringOfLanguage.vacant}
                       </Text>

                   </ImageBackground>
                  }
              </View>
          
          </View>
      </TouchableOpacity>
</View>
    );

        state = {nurseryList: []}
        // basestate = this.state.nurseryList
        url = "https://digimonk.co/tinyland//uploads/cover_images/"

        loadSession = async() => {
          this.setState({
            userid:await AsyncStorage.getItem('userid')
          })

          // console.log(this.state.userid)
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
                var vacantdata = album.data
                var registrationdata = album.data
                const school_type = album['school_type']
                // console.log(registration);
                
                this.setState({
                    nurseryList:newalbum
                })
                this.setState({
                    data:newalbum
                })
                this.setState({
                  vacantData: vacantdata
                })
                this.setState({
                  registrationData:registrationdata
                })
            })

            Geolocation.getCurrentPosition((position) => {
                  // console.log(position);
                  var cord = position['coords']
                  this.setState({
                    longitude:cord['longitude'],
                    latitude:cord['latitude']
                  })
            })

          //   Geolocation.getCurrentPosition(
          //     (position) => {
          //         console.log(position);
          //         var cord= position['coords']
          //         this.setState({
          //           longitude:cord['longitude'],
          //           latitude:cord['latitude']
  
          //         })
                  
          //     },
          //     (error) => {
          //         // See error code charts below.
          //         console.log(error.code, error.message);
          //     },
          //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          // );
      
  
        }
        // setDefaultNurseryList = () => {
        //   this.hideMenu();
        //   var value= _.filter(this.state.nurseryList, { registration_open: "0" })
        //   this.setState({
        //    nurseryList:value
        //   })  
        // }


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
        
        var value= _.filter(this.state.vacantData, { registration_open: "0" })
   this.setState({
    nurseryList:value
   })     
      }
      registration=(value)=> {
        this.hideMenu();
        var value= _.filter(this.state.registrationData, { registration_open: "1" })
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


        state = { categories: [ "All", "Bilingual","Islamic", "Tringual", "Special","Seven Petals", "Montessori" ],
                  categorySelected: "All",
                }

        updateCategoryHandler = (value) => {
              // alert(value);
              this.setState({
                categorySelected:value,
               
                
              })
        }

    render() {
        console.log(this.state.nurseryList);
      
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
                    <TouchableOpacity  onPress={() => this.props.navigation.toggleDrawer({
                      // params:"20"
                    })}>
                    <Image
                        source={require('../Images/more.png')}
                        style={{height: 23, width: 29, marginLeft: 10, marginTop: 20}}
                    />
                    </TouchableOpacity>
                    <Image
                        source={require('../Images/logo.png')}
                        style={{height: 57, width: 85, marginLeft: '24%', marginTop: 5}}
                    />
                    </View>
                  </ImageBackground>  
                    <View style={{flexDirection: 'row'}}>
                    
                    <View style={{height: 40, borderWidth: 1, borderRadius: 10, marginTop: 20, marginLeft: 20,marginRight: 5, flexDirection: 'row'}}>
                        <Image
                            source={require('../Images/Search.png')}
                            style={{width: 24, height: 24, marginTop: 6, marginLeft: 4}}
                        />
                        <TextInput
                            style={{width: "70%",fontSize: 17}}
                            placeholder= {stringOfLanguage.searchnurseries}
                            onChangeText={text => this.handleSearch(text)}
                            // onKeyPress={keyPress => console.log(keyPress)}
                            // onFocus={() =>alert("hi")}
                        />
                        
                        </View>
                        
                        
                        <View style={{marginLeft: 20, marginTop: 24}}>
                        <Menu
            ref={this.setMenuRef}
            button={<TouchableOpacity onPress={this.showMenu}><Image
                source={require('../Images/filter.png')}
                style={{width: 45, height: 30, }}
               
            /></TouchableOpacity>}
          >
            <MenuItem onPress={this.All}>{stringOfLanguage.all}</MenuItem>
            <MenuDivider />
            <MenuItem onPress={this.vacant}>{stringOfLanguage.vacant}</MenuItem>
            <MenuDivider />
            <MenuDivider />
            <MenuItem onPress={this.registration}>{stringOfLanguage.registrationOpen}</MenuItem>
            {/* <MenuItem onPress={this.hideMenu} disabled>
              Menu item 3
            </MenuItem> */}
            <MenuDivider />
            <MenuItem onPress={this.nearBy}>{stringOfLanguage.near}</MenuItem>
          </Menu>      
                        </View>
                        {/* <Menu
                            ref={this.setMenuRef}
                            // style={{left:0}}
                        > */}
                          {/* <MenuItem>Sort By</MenuItem> */}
                          


                        {/* </Menu> */}
                    </View>
                    {/* <View style={{alignItems: 'center'}}>
                      <Text style={{fontSize: 22,fontFamily: 'Poppins'}}>{stringOfLanguage.Nurseries}</Text>
                        
                    </View> */}
                    {/* <ScrollableTabView
            style={{marginTop: 5}}
            tabBarTextStyle={{fontFamily : 'Poppins', fontSize: 14}}
            tabBarActiveTextColor={'#008c99'}
            tabBarUnderlineStyle={{height: 3, backgroundColor: '#008c99'}}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar
                    // style={{backgroundColor: "transparent"}}
                />}
            
          >
              
            <AllSchool tabLabel={stringOfLanguage.all} data={this.state.nurseryList} />
            
            <Bilingual tabLabel={stringOfLanguage.bilingual} data={this.state.nurseryList} />
            <Islamic tabLabel={stringOfLanguage.islamic} data={this.state.nurseryList}/>
            <Trilingual tabLabel={stringOfLanguage.trilingual} data={this.state.nurseryList} />
            <Special tabLabel={stringOfLanguage.Special} data={this.state.nurseryList} />
            <Sevenpetal tabLabel={stringOfLanguage.seven} data={this.state.nurseryList} />
            <Montessori tabLabel={stringOfLanguage.montessori} data={this.state.nurseryList}/>

            
            </ScrollableTabView> */}
                    {/* <SchoolTypeScroll data={this.state.nurseryList}  /> */}
            <HorizontalScroll
            categories = {this.state.categories}
            categorySelected = {this.state.categorySelected}
            updateCategoryHandler = {this.updateCategoryHandler}
            // nurseryList = {this.state.nurseryList}
            />     
              <View>
               <ScrollView>   
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
            </ScrollView>
        </View>   
        </ImageBackground>
       
        );
    }
}

const Styles = StyleSheet.create({
  ScrollContainer: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 20,
      paddingLeft:30,
      paddingRight:30,
      width: '100%',
      height:45

  },
  containerStyle: {
      marginTop: 20, 
      marginBottom: 20,
      marginLeft: 5,
      marginRight: 5,
      borderWidth: 0.5,
      borderRadius: 5,
      height: 'auto',
      backgroundColor: 'white',
      
  },
  detailContainer: {
    alignItems:'center',
    width: "100%",
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
      
      
  },
  textContainer: {
      fontSize: 16,
      fontFamily : 'Poppins',
      maxWidth:'90%',
      // Height:'auto'
  },
})

export default Home;