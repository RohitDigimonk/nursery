import React, {Component} from 'react';
import {Image, Text, ScrollView, SafeAreaView, Dimensions, View, ImageBackground} from 'react-native';
import { createAppContainer, withNavigation} from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import WelcomeScreen from './src/Screen/WelcomeScreen';
import SignIn from './src/Screen/SignIn';
import SignUp from './src/Screen/SignUp';
import ForgotPass from './src/Screen/ForgotPass';
import Home from './src/Screen/Home';
import SchoolDashboard from './src/Screen/SchoolDashboard';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Subscribepage from './src/Screen/Subscribepage';
import ContactUs from './src/Screen/ContactUs';
import Why from './src/Screen/Why';
import Services from './src/Screen/Why';
import Terms from './src/Screen/Terms';

// const {height} = Dimensions.get('window')
const AppNavigator = createStackNavigator({

  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      header: null 
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  ForgotPass: {
    screen: ForgotPass,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  SchoolDashboard: {
    screen: SchoolDashboard,
    navigationOptions: {
      header: null
    }
    
  },
  Subscribepage: {
    screen: Subscribepage,
    navigationOptions: {
      header: null
    }
  } 

},
  
{
  initialRouteName: 'Home'
}
)

const CustomDrawerComponent = (props) => (
    <ImageBackground
    source={require('./src//Images/background_full.png')}
    style={{width: "100%", height: "100%"}}
    >
      <SafeAreaView style={{}}>
        <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image
          style={{width: 150, height: 150, resizeMode: 'contain'}}
          source={require('./src//Images/logo.png')}
          />
          
        </View>
        <ScrollView>
          <DrawerItems {...props}
          
          />
        </ScrollView>
      </SafeAreaView>
      </ImageBackground>
)

const DrawerNav = createDrawerNavigator({
  
  Home: AppNavigator,
  // School:{ 
  //   screen: SchoolDashboard,
  //   navigationOptions: ({navigation}) => ({
  //     drawerLabel: 'School Dashboard',
  //     drawerIcon: () => {
  //       <Image
  //         source={require('./src/Images/logo.png')}
  //         style={{width:30,height:30}}
  //       />
  //     }
  //   })
  // },
  Terms: {
    screen: Terms,
    navigationOptions: {
      title: 'Terms & Conditions'
    }
  },
  Services: {
    screen: Services,
    navigationOptions: {
      title: 'Our services to our partners'
    }
  },
  Why: {
    screen: Why,
    navigationOptions: {
      title: 'Why my nursery'
    }

  },
  ContactUs: {
    screen: ContactUs,
    navigationOptions: {
      title: 'Contact us'
    }
  },

//   // Terms & Conditions: Conditions,
//   // Services: SerVices,
//   // Why My Nursery: MyNursery,
//   // Contact Us: Contact,
//   // Direct Conversations: Direct,
  
// },{
//     drawerWidth: 350,
//     drawerPosition: 'left',
//     contentOptions:{
//       activeBackgroundColor: 'grey',
      
      
//     }
    
}, {
  contentComponent: CustomDrawerComponent,
  drawerWidth: "80%",
  // drawerType: 'slide',
  // drawerHeight: height,
  contentOptions:{
    activeTintColor: 'orange'
  }

})




export default createAppContainer(DrawerNav);