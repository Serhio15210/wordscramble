import React from 'react';
import {View,ImageBackground,Image,Text} from "react-native";
import postcard from './assets/postcard.jpg'
const Postcard = () => {
    return (
        <View style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <ImageBackground source={postcard} style={{width:'100%',height:'100%'}}  >

            </ImageBackground>
        </View>
    );
};

export default Postcard;
