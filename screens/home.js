import React, { useState, useEffect } from 'react'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import News from './news'
import Trending from './trending'
import Tech from './tech'
import Business from './business'
import Sport from './sport'
import Movie from './movie'
import Test1 from '../tabs/test1'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Bookmark from './bookmark'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const Home = ({ navigation }) => {

    const [styles, setStyle] = useState('#3b48ff')
    // const onPress = navigation.addListener('tabPress', e => setStyle('#ffffff'))
    // onPress()
    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                tabStyle: { width: 100 },
                style: { backgroundColor: '#3b48ff' },
                labelStyle: { fontSize: 14 },
                activeTintColor: '#478eff',
                inactiveTintColor: '#ffffff',
                indicatorStyle: { backgroundColor: '#ffffff' },
                // keyboardHidesTabBar: true,

            }}
            screenOptions={{
                tabBarScrollEnabled: true,

            }}

        >

            <Tab.Screen name='Home' component={News}

            />
            <Tab.Screen name='Trending' component={Trending}

            />
            <Tab.Screen name='Tech' component={Tech}

            />
            <Tab.Screen name='Business' component={Business}

            />
            <Tab.Screen name='Sport' component={Sport}

            />
            <Tab.Screen name='Movie' component={Movie}

            />
        </Tab.Navigator>

    )

}




export default Home