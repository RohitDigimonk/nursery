import React, {Component} from 'react';
import {FlatList,Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';


class AllSchool extends Component{

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
        renderSchool = ({ item }) => (
            <View style={Styles.containerStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SchoolDashboard', { item })}>
            <ImageBackground
                source={{uri: this.url+item.cover_image}}
                style={{width: "100%", height: 280}}
            >

                <View style={Styles.detailContainer}>
                <Text style={Styles.textContainer}>{item.school_name}
                <Image
                        source={require('../Images/school_logo.png')}
                        style={{width: 10, height: 15, marginLeft: 10}}
                    />
                
                </Text>
                <Text style={Styles.textContainer}>
                    {item.address}
                <Image
                    source={require('../Images/location.png')}
                    style={{width: 10, height: 15, marginLeft: 10}}
                />
                    
                </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 15}}>
                    <ImageBackground
                        source={require('../Images/registration_button.png')}
                        style={{width: 135, height: 32, bottom: 40, alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Text>
                            {item.registration_open==1?'Registation Open':'Vacation'}
                        </Text>

                    </ImageBackground>
                </View>
            </ImageBackground>
            </TouchableOpacity>
    </View>
          );


    render(){
      // console.log(this.props.data)
        return(
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
export default withNavigation(AllSchool);