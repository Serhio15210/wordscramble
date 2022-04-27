import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Scramble from "../Scramble";
import {Text,View} from "react-native";
import Postcard from "../Postcard";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Tab = createBottomTabNavigator();



const Tabs = () => {

    return (
        <Tab.Navigator initialRouteName="Scramble" screenOptions={{
            tabBarShowLabel:false,
            headerStyle:{
                backgroundColor:'#6495ED',

            },
            tabBarStyle: {
                backgroundColor: '#6495ED',
                height: 80,
                borderTopWidth:2,
                borderColor:'grey',

            },

            tabBarItemStyle: {
                borderLeftWidth:2,
                borderColor:'grey',

            }}}


        >

            <Tab.Screen name={"Scramble"} component={Scramble} options={{
                title:'Word Scramble',

                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: 150,
                            marginTop:10
                        }}>
                        <FontAwesome5 name="sort-alpha-up" style={{

                            textAlign: "center",
                            fontSize: 30,
                            color:focused?"white":"black",

                        }} />
                        <Text style={{
                            color:focused?"white":"black",
                            fontSize: 11,
                            textAlign: "center",
                            top:10
                        }}>Word Scramble</Text>
                    </View>
                ),
            }} >

            </Tab.Screen>


            <Tab.Screen name={"PostCard"} component={Postcard} options={{
                title:'Post card',
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: 150,
                            borderColor:'grey',
                            marginTop:10

                        }}>
                        <FontAwesome5 name="image" style={{

                            textAlign: "center",
                            color:focused?"white":"black",
                            fontSize: 30,
                        }} />
                        <Text style={{
                            color:focused?"white":"black",
                            fontSize: 11,
                            textAlign: "center",
                            top:10
                        }}>Post card</Text>
                    </View>
                ),
            }}  />


        </Tab.Navigator>
    );
};

export default Tabs;
