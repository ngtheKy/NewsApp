import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import Instance from '../service/request'
import Tab1 from '../tabs/tab1'
import API_key from '../service/api'
import { createStackNavigator } from '@react-navigation/stack'
import Detail from './detail'



const Stack = createStackNavigator();

const NewsStack = ({ navigation }) => {

    const [news, setNews] = useState([])
    useEffect(() => {
        getNews()

    }, [])

    function getNews() {
        Instance.get(API_key.newsAPI)
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
    console.log(news.articles)

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

const News = () => {

    return (
        <Stack.Navigator initialRouteName="News" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='News' component={NewsStack} />
            <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
    )
}

export default News