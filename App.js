import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screens/home'
import Bookmark from './screens/bookmark'
import Loading from './screens/loading'
import Routes from './navigation/routes'
import { AuthProvider } from './navigation/authProvider'


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>

  )
}




export default App