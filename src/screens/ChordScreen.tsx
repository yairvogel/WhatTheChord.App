import React, { ReactElement } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

const ChordScreen: () => ReactElement = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>SongTitle</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#111'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
})

export default ChordScreen