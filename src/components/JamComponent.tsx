import { StyleSheet, Text, View, ViewProps } from 'react-native'

import React from 'react'

const styles = StyleSheet.create({
    wrapper: {
        flexGrow: 1,
        justifyContent: 'center'
    }
})

const JamComponent: React.FC<any> = ( { children } ) => {
    return (
        <View>
        <Text>I'm a Jam Bar!</Text>
    </View>)
}

export default JamComponent