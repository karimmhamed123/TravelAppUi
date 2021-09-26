import React from "react";
import {View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image} from "react-native";
import colors from "../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";
import Color from "color";
import { Colors } from "react-native/Libraries/NewAppScreen";

const height = Dimensions.get("window").height;

Entypo.loadFont();

const Details =({route, navigation})=>{
    
    const {item} = route.params
    return(
        <View style = {styles.container}>
            <ImageBackground
              source = {item.imageBig}  
              style =  {styles.backgroundImage}
            >
                <TouchableOpacity style = {styles.backIcon} onPress = {()=> navigation.goBack()}>
                   <Image source = {require("../assets/images/ios-back-icon-10.jpg")} style = {{height:32,width:32}} color = {colors.white}/> 
                </TouchableOpacity>
                <View style = {styles.titleWrapper}>
                      <Text style = {styles.itemTitle}>{item.title}</Text>
                      <View style = {styles.locationWrapper}>
                        <Image source = {require("../assets/images/pin-icon.png")}  size = {24} color = {colors.white} />
                        <Text style = {styles.locationtext}>{item.location}</Text>
                      </View> 
                </View>
            </ImageBackground>
            <View style = {styles.descriptionWrapper}>
                <View style = {styles.heartWrapper}>
                    <Entypo name = "heart" size = {32} color = {colors.orange}/>
                </View>
                <View style = {styles.descriptionTextWrapper}>
                    <Text style = {styles.descriptionTitle}>Description</Text>
                    <Text style = {styles.descriptionText}>{item.description}</Text>
                </View>
                <View style = {styles.infoWrapper}>
                    <View style = {styles.infoItem}>
                        <Text style = {styles.infoTitle}>PRICE</Text>
                        <View style = {styles.infoTextwrapper}>
                            <Text style = {styles.infoText}>${item.price}</Text>
                            <Text style = {styles.infoSubText}>/person</Text>
                        </View>
                    </View>

                    <View style = {styles.infoItem}>
                        <Text style = {styles.infoTitle}>RATING</Text>
                        <View style = {styles.infoTextwrapper}>
                            <Text style = {styles.infoText}>{item.rating}</Text>
                            <Text style = {styles.infoSubText}>/5</Text>
                        </View>
                    </View>

                    <View style = {styles.infoItem}>
                        <Text style = {styles.infoTitle}>DURATION</Text>
                        <View style = {styles.infoTextwrapper}>
                            <Text style = {styles.infoText}>{item.duration}</Text>
                            <Text style = {styles.infoSubText}> hours</Text>
                        </View>
                    </View>
                    
                </View>
                <TouchableOpacity style = {styles.buttonWrapper} onPress = {()=> alert("You booked a trip")}>
                    <Text style = {styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,

    },
    backgroundImage:{
        height: height * 0.52 ,
        justifyContent:"space-between"

    },
    descriptionWrapper:{
        flex:1,
        // borderTopLeftRadius:25,
        // borderTopRightRadius:25,
        borderRadius:25,
        backgroundColor:colors.white,
        marginTop:-20,

    },
    backIcon:{
      marginLeft:20,
      marginTop:40,  
    },
    titleWrapper:{
        marginHorizontal:20,
        marginBottom:40,
    },
    itemTitle:{
        fontSize:26,
        color:colors.white,
        fontFamily:"Lato_700Bold",
    },
    locationWrapper:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:5,
    },
    locationtext:{
        marginLeft:5,
        fontSize:16,
        color:colors.white,
        fontFamily:"Lato_700Bold",
    },
    heartWrapper:{
        position:"absolute",
        right:40,
        top:-30,
        backgroundColor:colors.white,
        width:64,
        height:64,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:64,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:5,
    },
    descriptionTextWrapper:{
        marginTop:30,
        marginHorizontal:20,

    },
    descriptionTitle:{
        fontSize:24,
        color:colors.black,
        fontFamily:"Lato_700Bold",
    },
    descriptionText:{
        marginTop:20,
        fontSize:16,
        color:colors.darkGray,
        fontFamily:"Lato_400Regular",
        height:95,
    },
    infoWrapper:{
        flexDirection:"row",
        marginHorizontal:20,
        justifyContent:"space-between",
        marginTop:20,
    },
    infoItem:{

    },
    infoTitle:{
        fontSize:12,
        color:colors.gray,
        fontFamily:"Lato_700Bold",
    },
    infoTextwrapper:{
        flexDirection:"row",
        alignItems:"flex-end",
        marginTop:5,
    },
    infoText:{
        fontSize:24,
        color:colors.orange,
        fontFamily:"Lato_700Bold",
    },
    infoSubText:{
        fontSize:14,
        color:colors.gray,
        fontFamily:"Lato_700Bold",
    },
    buttonWrapper:{
        marginHorizontal:20,
        marginTop:30,
        backgroundColor:colors.orange,
        alignItems:"center",
        paddingVertical:15,
        borderRadius:10,
    },
    buttonText:{
        fontSize:18,
        color:colors.white,
        fontFamily:"Lato_700Bold",
    },
});

export default Details;