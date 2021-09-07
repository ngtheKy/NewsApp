import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import Instance from '../service/request'
import Tab1 from '../tabs/tab1'
import API_key from '../service/api'
import { createStackNavigator } from '@react-navigation/stack'
import Detail from './detail'



const Stack = createStackNavigator();

const TrendingStack = ({ navigation }) => {

    const [news, setNews] = useState([])
    useEffect(() => {
        getNews()

    }, [])

    function getNews() {
        Instance.get(API_key.trendingAPi)
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

const Trending = () => {

    return (
        <Stack.Navigator initialRouteName="TrendingNews" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='TrendingNews' component={TrendingStack} />
            <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
    )
}

export default Trending