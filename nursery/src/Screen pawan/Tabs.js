import React from 'react';  
import {createAppContainer} from 'react-navigation';
import {Text, View, ScrollView} from 'react-native';
import{createMaterialTopTabNavigator} from 'react-navigation-tabs'  
import AboutUs from './AboutUs';
import Subscription from './Subscription';
import Event from './Event';
import Download from './Download';
// import { renderers } from 'react-native-popup-menu';


const About =(nurserylist)=>{

    // data = nurserylist
    console.log(nurserylist)
    // management_name = nurserylist['management_name']
    // superviser = nurserylist['superviser'] 
    // Teacher = nurserylist['teacher']
    // methodology = nurserylist['methodology']
    // mapUrl = nurserylist['mapUrl']
    // social = nurserylist['social']
    // mapLink = nurserylist['mapLink']
    // instagram=""
    // instagram = this.social.split(',')
    return(
        <Text>About</Text>
        // <ScrollView>
        //     <View style={{marginTop: 10, marginBottom: 10, paddingLeft: 5, paddingRight: 5}}>
        //       <Text style={{textAlign: 'justify',fontFamily : 'Poppins',marginRight:5}}>  {this.props.data['about_school']} </Text>
        //     </View>
        //     <View>
        //        {
        //            this.instagram.map(value =>
        //             <Text style={{textAlign: 'justify', marginLeft: 10,fontFamily : 'Poppins'}}>{value=='0'?"":value}</Text>
        //            )
        //        }
        //     </View>
        //     <View style={Styles.containerstyle}>
        //         <ImageBackground
        //             source={require('../Images/blue.png')}
        //             style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
        //         >
        //             <Image
        //             source={require('../Images/members.png')}
        //             style={{width: 13, height: 16}}
        //             />
        //             <Text style={Styles.textstyle}>
        //                 {stringOfLanguage.management}
        //             </Text>
        //         </ImageBackground>
        //         <ImageBackground
        //             source={require('../Images/black.png')}
        //             style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
        //         >
                    
        //             <Text style={Styles.textstyle}>
        //                 {this.management_name}
        //             </Text>
        //         </ImageBackground>

        //     </View>
        //     <View style={Styles.containerstyle}>
        //         <ImageBackground
        //             source={require('../Images/blue.png')}
        //             style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
        //         >
        //             <Image
        //             source={require('../Images/members.png')}
        //             style={{width: 13, height: 16}}
        //             />
        //             <Text style={Styles.textstyle}>
        //                 {stringOfLanguage.number}
        //             </Text>
        //         </ImageBackground>
        //         <ImageBackground
        //             source={require('../Images/black.png')}
        //             style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
        //         >
                    
        //             <Text style={Styles.textstyle}>
        //                 {this.superviser} {stringOfLanguage.supervisers}
        //             </Text>
        //         </ImageBackground>

        //     </View>
        //     <View style={Styles.containerstyle}>
        //         <ImageBackground
        //             source={require('../Images/blue.png')}
        //             style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
        //         >
        //             <Image
        //             source={require('../Images/members.png')}
        //             style={{width: 13, height: 16}}
        //             />
        //             <Text style={Styles.textstyle}>
        //                 {stringOfLanguage.number} 
        //             </Text>
        //         </ImageBackground>
        //         <ImageBackground
        //             source={require('../Images/black.png')}
        //             style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
        //         >
                    
        //             <Text style={Styles.textstyle}>
        //                 {this.Teacher} {stringOfLanguage.teachers}
        //             </Text>
        //         </ImageBackground>

        //     </View>
        //     <View style={Styles.containerstyle}>
        //         <ImageBackground
        //             source={require('../Images/blue.png')}
        //             style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
        //         >
        //             <Image
        //             source={require('../Images/members.png')}
        //             style={{width: 13, height: 16}}
        //             />
        //             <Text style={Styles.textstyle}>
        //                 {stringOfLanguage.methodology}
        //             </Text>
        //         </ImageBackground>
        //         <ImageBackground
        //             source={require('../Images/black.png')}
        //             style={{width: 175, height: 55, justifyContent: 'center', alignItems: 'center'}}
        //         >
        //             <ScrollView>
        //             <Text style={Styles.textstyle}>
        //                 {this.methodology}
        //             </Text>
        //             </ScrollView>
        //         </ImageBackground>
        //         </View>
        //         <TouchableOpacity onPress={()=> Linking.openURL(this.mapLink)}>
        //         <View style={{marginTop: 10}}>
        //             <Image
        //             source={{uri: this.mapUrl }}
        //             style = {{width: "100%", height: 300 }}
        //             />
        //         </View>
        //         </TouchableOpacity>
        //     </ScrollView>
    )
}

const App=(nurserylist)=>{
    console.log(nurserylist.nurserylist)

    const nursery= nurserylist.nurserylist
    // console.log(nursery)
    return(
     <>
     <AppNav data={nursery} />
      {/* <AppNavigator/> */}
     </>
    )
}

  
const AppNavigator= createMaterialTopTabNavigator(
    
    {
          
        AboutUs:{
           screen:About,
           params:{data:this.data}
        } , 
        Subscription: Subscription, 
        Events: Event,  
        Download: Download,  
        // Settings: SettingScreen,  
    },  
    {  
        tabBarOptions: {  
            activeTintColor: 'white',  
            showIcon: false,  
            showLabel:true,
              scrollEnabled:true,
            style: {  
                backgroundColor:'#27c4fb'  ,
                marginTop:0
                
            }  
        },  
    }  
)  
export default App;
const AppNav= createAppContainer(AppNavigator) 

