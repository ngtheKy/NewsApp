import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/home'
import Bookmark from '../screens/bookmark'



const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='CNN FakeNews' component={Home} />
            <Drawer.Screen name='Bookmark' component={Bookmark} />
        </Drawer.Navigator>


    )
}
export default AppStack