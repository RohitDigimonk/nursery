import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import AboutUs from './AboutUs';
import Subscription from './Subscription';
import Event from './Event';
import Download from './Download';
import stringOfLanguage from './stringOfLanguage';

class ScrollBar extends Component{
    render(){
        // console.log(this.props.data)
        return(
    //         <ParallaxScrollView
    //   backgroundColor="blue"
    //   contentBackgroundColor="pink"
    //   parallaxHeaderHeight={300}
    //   renderForeground={() => (
            <ScrollableTabView
            style={{marginTop: 0}}
            tabBarTextStyle={{fontFamily : 'Poppins', fontSize: 14}}
            tabBarActiveTextColor={'#008c99'}
            tabBarUnderlineStyle={{height: 3, backgroundColor: '#008c99'}}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar
                    // style={{backgroundColor: "transparent"}}
                />}
            
          >
            
            <AboutUs tabLabel={stringOfLanguage.about} data={this.props.data} ></AboutUs>
            <Subscription tabLabel={stringOfLanguage.subscription} data={this.props.data} />
            <Event tabLabel={stringOfLanguage.event} data={this.props.data}/>
            <Download tabLabel={stringOfLanguage.Nurseries} data={this.props.data} />
            </ScrollableTabView>
            // )}></ParallaxScrollView>
          
        );
    }
}

export default ScrollBar;