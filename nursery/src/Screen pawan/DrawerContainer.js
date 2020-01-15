import React from 'react';
import { View, StyleSheet,ImageBackground,SafeAreaView,Image, ScrollView, AsyncStorage, } from 'react-native';
import { StackActions, NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
// import styles from './styles';
import {RNRestart} from "react-native-restart"
import {I18nManager} from 'react-native'; 
import stringsoflanguages from './stringOfLanguage';
import MenuButton from '../common/MenuButton/MenuButton';

// console.log(AsyncStorage.getItem('userid'))

export default class DrawerContainer extends React.Component {

  state={
    userid:"",
    langi:"en"
  }

  constructor(props) {
    super(props);
    const lang = [
      { shortform: 'en', longform: 'English' },
      { shortform: 'hi', longform: 'Hindi' },
      { shortform: 'ma', longform: 'Marathi' },
      { shortform: 'ar', longform: 'Arabic' },
    ];
    global.lang = lang; 
  }

    async componentDidMount(){

        this.loadSession().done();
        
        this.setState({
          langi:await AsyncStorage.getItem('language')
        })
    }

    settext=async(value)=>{
      // alert(value)
      AsyncStorage.setItem('language',value)
      this.setState({
        langi:await AsyncStorage.getItem('language')
      })
      // console.log(await AsyncStorage.getItem('language'))
      stringsoflanguages.setLanguage(value);
      
      this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'WelcomeScreen' })
        ],
      }))
    
      // I18nManager.forceRTL(true);
      // // RNRestart.Restart();
      // this.props.navigation.closeDrawer();
    }

    
   
      loadSession = async() => {
        this.setState({
          userid:await AsyncStorage.getItem('userid')
        })
        // console.log(this.state.userid)
      }

    logout=async()=>{
        var value = await AsyncStorage.removeItem('userid')
        // alert(value)
        if(value == null){
             
          this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'WelcomeScreen' })
            ],
          }))
            // this.props.navigation.navigate('WelcomeScreen')
            // navigation.navigate('SignIn');
            // navigation.closeDrawer();
            // alert(value)
        }
        
    }

  render() {
    this.loadSession().done();
// console.log(this.state.lang)
    // console.log(this.props.navigation.state)
    const { navigation } = this.props;
    return (
        <ImageBackground
            source={require('../Images/background_full.png')}
            style={{width: "100%", height: "100%"}}
            >
              <SafeAreaView style={{}}>
                <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                  style={{width: 150, height: 150, resizeMode: 'contain'}}
                  source={require('../Images/logo.png')}
                  />
                  
                </View>
                <ScrollView>
               
                <MenuButton
  title={stringsoflanguages.home}
  // source={require('../../../assets/icons/home.png')}
  onPress={() => {
    navigation.navigate('Home');
    navigation.closeDrawer();
  }}
/>
{this.state.userid==null?
<MenuButton
  title={stringsoflanguages.sign}
  
  // source={require('../../../assets/icons/category.png')}
  onPress={() => {
    navigation.navigate('SignIn');
    navigation.closeDrawer();
  }}
/>:null
}
{this.state.userid!=null?
 <MenuButton
  title={stringsoflanguages.mypro}
  // source={require('../../../assets/icons/home.png')}
  onPress={() => {
    navigation.navigate('UpdateProfile');
    navigation.closeDrawer();
  }}
/>:null
  }
{this.state.userid!=null?
 <MenuButton
  title={stringsoflanguages.changepass}
  // source={require('../../../assets/icons/home.png')}
  onPress={() => {
    navigation.navigate('ChangePassword');
    navigation.closeDrawer();
  }}
/>:null
  }


 <MenuButton
  title={stringsoflanguages.our}
  // source={require('../../../assets/icons/home.png')}
  onPress={() => {
    navigation.navigate('Services');
    navigation.closeDrawer();
  }}
/>
<MenuButton
  title={stringsoflanguages.why}
  // source={require('../../../assets/icons/category.png')}
  onPress={() => {
    navigation.navigate('Why');
    navigation.closeDrawer();
  }}
/>
{this.state.userid!=null?
<MenuButton
  title={stringsoflanguages.Contact}
  // source={require('../../../assets/icons/search.png')}
  onPress={() => {
    navigation.navigate('ContactUs');
    navigation.closeDrawer();
  }}
/>:null
}


  <MenuButton
  title={stringsoflanguages.term}
  // source={require('../../../assets/icons/search.png')}
  onPress={() => {
    navigation.navigate('Terms');
    navigation.closeDrawer();
  }}
/>
  {this.state.langi=="en"?<MenuButton
  title="تمويل"
  // source={require('../../../assets/icons/home.png')}
  onPress={()=>{this.settext("ar")}}
/>:<MenuButton
  title="English"
  // source={require('../../../assets/icons/home.png')}
  onPress={()=>{this.settext("en")}}
/>}
{this.state.userid!=null?
<MenuButton
  title={stringsoflanguages.logout}
  // source={require('../../../assets/icons/search.png')}
  onPress={this.logout}
/>:null
}  
                 
                </ScrollView>
                <View style={{flexDirection: 'row', marginTop: "5%", paddingLeft: 30}}>
                    <Image
                        style={{margin: 10}}
                        source={require('../Images/facebook.png')}
                    />
                    <Image
                        style={{margin: 10}}
                        source={require('../Images/twitter.png')}
                    />
                    <Image
                        style={{margin: 10}}
                        source={require('../Images/google.png')}
                    />

              </View>     
              </SafeAreaView>
              </ImageBackground>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};

const styles = StyleSheet.create({
    content: {
      flex: 1,
      flexDirection: 'row',
      // alignItems: 'center',
      marginTop:20
      // justifyContent: 'center'
    },
    container: {
      flex: 1,
      alignItems: 'flex-start',
      paddingHorizontal: 10
    },
    // drawerHeader:{
    //   width:"100%",
    //   height:60,
    //   backgroundColor:"#e22034"
      
    // },
    DrawerContainer:{
      flex: 1,
    }
  });
  

 