import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';



const Stack = createStackNavigator()
const { width, height } = Dimensions.get('window')
const Tab1 = ({ item, navigation }) => {


    const [icon, setIcon] = useState('bookmark-multiple-outline')
    const [bookmark, setBoomark] = useState()
    const [checked, setChecked] = useState(false)




    const onPress = () => {
        setChecked(checked === false ? true : false)
        setIcon(icon === 'bookmark-multiple-outline' ? 'bookmark-multiple' : 'bookmark-multiple-outline')
        setBoomark(item)
        // console.log(item)

        if (icon === 'bookmark-multiple') {
            RemoveBookmark()
        } else {
            Addbookmark()
        }
    }

    function Addbookmark() {
        firestore().collection('bookmark').doc(`${item.title}`).set({
            author: `${item.author}`,
            content: `${item.content}`,
            description: `${item.content}`,
            publishedAt: `${item.publishedAt}`,
            source: `${item.source.id}, ${item.source.name}`,
            title: `${item.title}`,
            url: `${item.url}`,
            urlToImage: `${item.urlToImage}`,
            checked: true
        })
            .then(() => {
                console.log('Bookmark added!');
            });
    }

    function RemoveBookmark() {
        firestore()
            .collection('bookmark')
            .doc(`${item.title}`)
            .delete()
            .then(() => {
                console.log('Bookmark deleted!');

            });
    }





    return (
        <View style={styles.cardView}>
            <TouchableOpacity
                onPress={() => {

                    navigation.navigate('Detail', {
                        link: item.url
                    })
                    // onPress()
                }}
            >
                <Text style={styles.title}> {item.title}</Text>
            </TouchableOpacity>
            <Text style={styles.author}>{item.author} </Text>
            {/* <Image style={styles.image} source = {{uri: item.urlToImage}}/> */}
            <Image style={styles.image} source={item.urlToImage ? { uri: item.urlToImage } : null} />

            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity
                onPress={onPress
                }
            >
                <MaterialCommunityIcons name={icon}
                    size={30} style={{ marginLeft: width * 0.7 }}
                />
            </TouchableOpacity>

        </View>
    )
}





const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'

    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 18
    },
    image: {
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'

    }

})



export default Tab1