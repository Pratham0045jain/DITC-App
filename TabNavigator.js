import React from 'react';
import {
    Animated,
    Dimensions,
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import HomeScreen from '../Screens/HomeScreen';

import Estimate from '../Screens/Estimate';
import TmtBarsScreen from '../Screens/TmtBarsScreen';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp.js';

/* // Font Awesome Icons... */
import { FontAwesome5 } from '@expo/vector-icons';
import { useRef } from 'react';

const Tab = createBottomTabNavigator();

const image = {
    uri: 'https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-plus-icon-png-image_515260.jpg',
};

export default function Tabs() {
    /* // Animated Tab Indicator... */
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    /* // Floating Tab Bar... */
                    style: {
                        backgroundColor: 'white',
                        position: 'absolute',
                        bottom: 20,
                        marginHorizontal: 20,
                        /* // Max Height... */
                        height: 60,
                        borderRadius: 10,
                        /* // Shadow... */
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 15,
                        paddingHorizontal: 20,
                    },
                }}>
                {/* {
                    // Tab Screens....
                    // Tab ICons....
                } */}
                <Tab.Screen
                    name={'Home'}
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    /* // centring Tab Button... */
                                    position: 'absolute',
                                    top: 20,
                                }}>
                                <FontAwesome5
                                    name="home"
                                    size={20} 
                                    color={focused ? 'orange' : 'gray'}></FontAwesome5>
                            </View> 
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        /* // Onpress Update.... */
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: false,
                            }).start();
                        },
                    })}></Tab.Screen>

                <Tab.Screen
                    name={'TmtBarsScreen'}
                    component={TmtBarsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    /* // centring Tab Button... */
                                    position: 'absolute',
                                    top: 20,
                                }}>
                                <FontAwesome5
                                    name="search"
                                    size={20}
                                    color={focused ? 'orange' : 'gray'}></FontAwesome5>
                            </View>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        //* / Onpress Update.... */
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth(),
                                useNativeDriver: true,
                            }).start();
                        },
                    })}></Tab.Screen>

                {/* {
                    // Extra Tab Screen For Action Button..
                } */}



                <Tab.Screen
                    name={'Estimate'}
                    component={Estimate}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                   /*  // centring Tab Button... */
                                    position: 'absolute',
                                    top: 20,
                                }}>
                                <FontAwesome5
                                    name="bell"
                                    size={20}
                                    color={focused ? 'orange' : 'gray'}></FontAwesome5>
                            </View>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                       /*  // Onpress Update.... */
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 3,
                                useNativeDriver: true,
                            }).start();
                        },
                    })}></Tab.Screen>
            </Tab.Navigator>

            <Animated.View
                style={{
                    width: getWidth() - 20,
                    height: 2,
                    backgroundColor: 'orange',
                    position: 'absolute',
                    bottom: 78,
                   /*  // Horizontal Padding = 20... */
                    left: 50,
                    borderRadius: 20,
                    transform: [{ translateX: tabOffsetValue }],
                }}></Animated.View>
        </NavigationContainer>
    );
}

function getWidth() {
    let width = Dimensions.get('window').width;

    /* // Horizontal Padding = 20... */
    width = width - 80;

    /* // Total five Tabs... */
    return width / 5;
}