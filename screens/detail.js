
import React from 'react'
import WebView from 'react-native-webview'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'

const Detail = ({ route, navigation }) => {
    const link = route.params
    console.log(link.link)
    return (
        <WebView source={{ uri: link.link }} />


    )
}

export default Detail;