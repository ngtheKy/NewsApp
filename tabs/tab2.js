import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Detail from '../screens/detail'
import Test1 from './test1'
import Tab1 from './tab1'
import { NavigationContainer } from '@react-navigation/native'
import News from '../screens/news'


const Stack = createStackNavigator()

const Tab2 = () => {
    return (

        <Stack.Navigator initialRouteName="News">
            <Stack.Screen name='News' component={News} />
            <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
    )
}


export default Tab2