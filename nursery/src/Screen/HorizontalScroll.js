import React, { Component } from 'react';
import { FlatList, Text, View, ScrollView, StyleSheet,ImageBackground,Image, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import stringOfLanguage from './stringOfLanguage';


class HorizontalScroll extends Component {

    data = this.props.data

    state = {nurseryList: []}


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

    
    url = "https://digimonk.co/tinyland//uploads/cover_images/"
   
    
      
    // generatecategories = (categories) => {
    //     categories.map( item => (
    //         <View style={{marginRight: 15}} key= {item}>
    //                 <Text>{item}</Text>
    //         </View>
    //     ))
    // }

    render(){
        // console.log(this.props.nurseryList);
        return(
           <View>
            <View>
            <ScrollView
                horizontal={true}
                decelerationRate={0}
                snapToInterval={200}
                showsHorizontalScrollIndicator={false}
            > 
                {   this.props.categories.map( item => 
                    
                    <View style={Styles.ScrollContainer}>

                        <View style={{borderBottomWidth:this.props.categorySelected == item ? 3 : null, borderColor: this.props.categorySelected == item?"#008c99":null}}>
                        <TouchableOpacity onPress={()=>this.props.updateCategoryHandler(item)}>
                        <Text style={{color:this.props.categorySelected == item?"#008c99":"red"}}>
                            
                            {item}
                            
                        </Text>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                        
                    )
                }
           </ScrollView>
           </View>
        {/* <View>
               <ScrollView>   
            <View style={{marginTop: 10}}>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={1}
              data={this.props.nurseryList}
              renderItem={this.renderSchool}
              keyExtractor={item => `${item.id}`}
            />
            </View>
            </ScrollView>
        </View> */}
           </View>
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

export default HorizontalScroll;