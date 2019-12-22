import React from 'react';
import { View, StyleSheet,ImageBackground,SafeAreaView,Image, ScrollView, AsyncStorage } from 'react-native';
import { StackActions, NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
// import styles from './styles';
import MenuButton from '../common/MenuButton/MenuButton';

// console.log(AsyncStorage.getItem('userid'))

export default class DrawerContainer extends React.Component {

  state={
    userid:""
  }

    componentDidMount(){

        this.loadSession().done();
       
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
  title="Home"
  // source={require('../../../assets/icons/home.png')}
  onPress={() => {
    navigation.navigate('Home');
    navigation.closeDrawer();
  }}
/>
{this.state.userid==null?
<MenuButton
  title="Sign In"
  
  // source={require('../../../assets/icons/category.png')}
  onPress={() => {
    navigation.navigate('SignIn');
    navigation.closeDrawer();
  }}
/>:null
}
<MenuButton
  title="Terms & Conditions"
  // source={require('../../../assets/icons/search.png')}
  onPress={() => {
    navigation.navigate('Terms');
    navigation.closeDrawer();
  }}
/>
 <MenuButton
  title="Our Services to Our Partners"
  // source={require('../../../assets/icons/home.png')}
  onPress={() => {
    navigation.navigate('Services');
    navigation.closeDrawer();
  }}
/>
<MenuButton
  title="Why My Nursery"
  // source={require('../../../assets/icons/category.png')}
  onPress={() => {
    navigation.navigate('Why');
    navigation.closeDrawer();
  }}
/>
<MenuButton
  title="Contact Us"
  // source={require('../../../assets/icons/search.png')}
  onPress={() => {
    navigation.navigate('ContactUs');
    navigation.closeDrawer();
  }}
/>
{this.state.userid!=null?
 <MenuButton
  title="Update Profile"
  // source={require('../../../assets/icons/home.png')}
  onPress={() => {
    navigation.navigate('UpdateProfile');
    navigation.closeDrawer();
  }}
/>:null
  }
{this.state.userid!=null?
 <MenuButton
  title="Change password"
  // source={require('../../../assets/icons/home.png')}
  onPress={() => {
    navigation.navigate('ChangePassword');
    navigation.closeDrawer();
  }}
/>:null
  }
{this.state.userid!=null?
<MenuButton
  title="Logout"
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
  

 