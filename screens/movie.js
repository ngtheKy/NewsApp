import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import Instance from '../service/request'
import Tab1 from '../tabs/tab1'
import API_key from '../service/api'
import { createStackNavigator } from '@react-navigation/stack'
import Detail from './detail'



const Stack = createStackNavigator();

const MovieStack = ({ navigation }) => {

    const [news, setNews] = useState([])
    useEffect(() => {
        getNews()

    }, [])

    function getNews() {
        Instance.get(API_key.movieAPI)
            .then(async function (response) {
                setNews(response.data)
            })
            .catch(function (error) {
                console.log(error)
                // alert(error)
            })

    }
    if (!news) {
        return null
    }


    return (
        <View>
            <FlatList data={news.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    return (
                        <Tab1 item={item} navigation={navigation} />
                    )

                }}
            />

        </View>
    )
}

const Movie = () => {

    return (
        <Stack.Navigator initialRouteName="MovieNews" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='MovieNews' component={MovieStack} />
            <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
    )
}

export default Movie