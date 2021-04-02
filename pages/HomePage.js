import React from 'react'
import { StyleSheet,View, Text } from 'react-native'
export default function HomePage() {
    return (
        <View style={styles.home} >
            <Text>
            Hello </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: '#150922',
    },
  });