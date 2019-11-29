import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import AboutUs from './AboutUs';
import Subscription from './Subscription';
import Event from './Event';
import Download from './Download';
class ScrollBar extends Component{
    render(){
        // console.log(this.props.data)
        return(
            
            <ScrollableTabView
            style={{marginTop: 20}}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar
                    style={{backgroundColor: "lightgrey"}}
                />}
          >
            
            <AboutUs tabLabel='About Us' data={this.props.data} />
            <Subscription tabLabel='Subscription' data={this.props.data} />
            <Event tabLabel='Event & Activities' data={this.props.data}/>
            <Download tabLabel='Nurseries' data={this.props.data} />
            </ScrollableTabView>
        
          
        );
    }
}

export default ScrollBar;