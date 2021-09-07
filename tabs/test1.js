import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Test1 = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
            >
                <Text>
                    Detail
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Test1