import React from "react";
import {View, Text, Button, StyleSheet, ScrollView, SafeAreaView, Image, FlatList, TouchableOpacity, ImageBackground} from "react-native";
import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import activitiesData from "../assets/data/activitiesData";
import discoverCategoriesData from "../assets/data/discoverCategoriesData"; 
import discoverData from "../assets/data/discoverData"; 
import learnMoreData from "../assets/data/learnMoreData"; 
import profile from "../assets/images/person.png"
import { size } from "lodash";


Feather.loadFont();
Entypo.loadFont();

const Home =({navigation})=>{
    const renderDiscoverItem = ({item})=>{
        return(
           <TouchableOpacity onPress = {()=> navigation.navigate("Details",{item:item,})}>
               <ImageBackground
                source = {item.image}
                style = {[styles.discoverItem, {marginLeft : item.id === "discover-1" ?20:0},]}
                imageStyle = {styles.discoverItemImage}
               >
                   <Text style = {styles.discoverItemTitle}>{item.title}</Text>
                   <View style = {styles.discoverItemLocationWrapper}>
                      <Image source = {require("../assets/images/pin-icon.png")}  size = {18} color = {colors.white} />
                      <Text style = {styles.discoverItemLocationtext}>{item.location}</Text> 
                   </View>
               </ImageBackground>
           </TouchableOpacity> 
        );
    };

    const renderActivityItem = ({item})=>{
        return(
            <View style = {[styles.activityItemWrapper,{marginLeft : item.id === "activities-1" ?20:0},]}>
                <Image
                    source = {item.image}
                    style = {styles.activityItemImage}
                />
                <Text style = {styles.activityItemtext}>{item.title}</Text>
            </View>
        );   
    };

    const renderLearnMoreItem = ({item})=>{
        return(
            <ImageBackground
            source = {item.image}
            style = {[styles.learnMoreItem, {marginLeft : item.id === "learnMore-1" ?20:0},]}
            imageStyle = {styles.learnMoreItemImage}  
            >
                <Text style = {styles.learnMoreItemtext}>{item.title}</Text>
            </ImageBackground>        
        );
    };

    return(
        <View style = {styles.container}>
            <ScrollView>
                {/* Header */}
                <SafeAreaView>
                    <View style = {styles.menuWrapper}>
                        <Feather name = "menu" size = {32} color = {colors.black} style = {styles.menuIcon}/>
                        <Image source = {profile} style = {styles.profileImage}/>
                    </View>
                </SafeAreaView>
                {/* Discover */}
                <View style = {styles.discoverWrapper}>
                    <Text style = {styles.discoverTitle}>Discover</Text>
                    <View style = {styles.discoverCategoriesWrapper}>
                        <Text style = {[styles.discoverCategoriestext,{color:colors.orange} ]}>All</Text>
                        <Text style = {styles.discoverCategoriestext}>Destinations</Text>
                        <Text style = {styles.discoverCategoriestext}>Cities</Text>
                        <Text style = {styles.discoverCategoriestext}>Experiences</Text>
                    </View>
                    <View style = {styles.discoverItemsWrapper}>
                        <FlatList
                            data = {discoverData}
                            renderItem = {renderDiscoverItem}
                            keyExtractor = {(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator = {false}
                        />

                    </View>
                </View>
                {/* Activities */}
                <View style = {styles.activitiesWrapper}>
                    <Text style = {styles.activitiesTitle}>Activities</Text>
                    <View style = {styles.activitiesItemsWrapper}>
                        <FlatList
                            data = {activitiesData}
                            renderItem = {renderActivityItem}
                            keyExtractor = {(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator = {false}
                        />
                    </View>
                </View>
                {/* Learn More */}
                <View style = {styles.learnMoreWrapper}>
                    <Text style = {styles.learnMoreTitle}>Learn More</Text>
                    <View style = {styles.learnMoreItemsWrapper}>
                        <FlatList
                            data = {learnMoreData}
                            renderItem = {renderLearnMoreItem}
                            keyExtractor = {(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator = {false}
                        />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        color:colors.white,

    },
    menuWrapper:{
        marginHorizontal:20,
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    menuIcon:{
        

    },
    profileImage:{
        width:52,
        height:52,
        borderRadius:10,
    },
    discoverWrapper:{
        // marginHorizontal:20,
        marginTop:20,
    },
    discoverTitle:{
        marginHorizontal:20,
        fontFamily:"Lato_700Bold",
        fontSize:32,
    },
    discoverCategoriesWrapper:{
        marginHorizontal:20,
        flexDirection:"row",
        marginTop:20,

    },
    discoverCategoriestext:{
        marginRight:30,
        fontSize:16,
        color:colors.gray,
        fontFamily:"Lato_400Regular"
    },
    discoverItemsWrapper:{
        paddingVertical:20,
    },
    discoverItem:{
        width:170,
        height:250,
        justifyContent:"flex-end",
        paddingHorizontal:10,
        paddingVertical:15,
        marginRight:20,
    },
    discoverItemImage:{
        borderRadius:20,
    },
    discoverItemTitle:{
        fontSize:18,
        color:colors.white,
        fontFamily:"Lato_700Bold",
    },
    discoverItemLocationWrapper:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:5,
    },
    discoverItemLocationtext:{
        marginLeft:5,
        fontSize:14,
        color:colors.white,
        fontFamily:"Lato_700Bold",

    },
    activitiesWrapper:{
        marginTop:10,

    },
    activitiesTitle:{
        marginHorizontal:20,
        fontSize:24,
        color:colors.black ,
        fontFamily:"Lato_700Bold",
    },
    activitiesItemsWrapper:{
        paddingVertical:20,

    },
    activityItemWrapper:{
        justifyContent:"flex-end",
        alignItems:"center",
        marginRight:20,

    },
    activityItemImage:{
        width:36,

    },
    activityItemtext:{
        marginTop:5,
        fontSize:14,
        color:colors.gray ,
        fontFamily:"Lato_700Bold",
    },
    learnMoreWrapper:{
        marginTop:10,

    },
    learnMoreTitle:{
        marginHorizontal:20,
        fontSize:24,
        color:colors.black ,
        fontFamily:"Lato_700Bold",
    },
    learnMoreItemsWrapper:{
        marginTop:20,
    },
    learnMoreItem:{
        width:170,
        height:180,
        justifyContent:"flex-end",
        marginRight:20,
    },
    learnMoreItemImage:{
        borderRadius:20,  
    },
    learnMoreItemtext:{
        fontSize:18,
        color:colors.white ,
        fontFamily:"Lato_700Bold",
        marginHorizontal:10,
        marginVertical:20,
    },
});

export default Home;