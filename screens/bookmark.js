import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import Tab1 from '../tabs/tab1';


const Bookmark = ({ navigation }) => {

    const [bookmark, setBoomark] = useState()

    useEffect(() => {
        firestore().collection('bookmark').onSnapshot(snapshot => (
            setBoomark(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    // const item = JSON.parse(bookmark)
    console.log(typeof (bookmark))

    return (
        <View>
            <FlatList data={bookmark}
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

export default Bookmark