import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import tinygarden from '../assets/tinygarden.jpg'

const DetailBook = () => {
    return (
        <View>
            <Text> Detail book</Text>
            <Image source={tinygarden} style={styles.image_main} />
        </View>
    )
}

export default DetailBook

const styles = StyleSheet.create({
    image_main: {
        width: '100px'
    }
})
