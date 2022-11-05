import ChordScreen from '../screens/ChordScreen';
import JamMenuScreen from '../screens/JamMenuScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import ScreenParameters from '../navigation/ScreenParameters'
import SearchScreen from '../screens/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurrentJamContext } from '../api/contexts';
import { Pressable, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator<ScreenParameters>();


const NavigationComponent = (): React.ReactElement<any, React.JSXElementConstructor<any>> => {
    const jamInfo = React.useContext(CurrentJamContext);
    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Search'
                component={SearchScreen} />
            <Stack.Screen
                name='Chord'
                component={ChordScreen} />
            <Stack.Screen
                name='JamMenu'
                component={JamMenuScreen} />
            <Stack.Screen
                name='JamPage'
                component={}

                
        </Stack.Navigator>
    </NavigationContainer>
}

function JamBar() {
    return (
        <Pressable style={styles.jamBar} onPress={onOpen}>
            <Text style={styles.jamBarText}>{jamInfo.name}</Text>
        </Pressable>
    )
}
    

const styles = StyleSheet.create({
    jamBar: {
        flexGrow: 1,
        paddingHorizontal: 10, 
        justifyContent: 'center',
        backgroundColor: 'teal',
        fontColor: '#FFF'
    },
    jamBarText: {
        color: 'white',
        fontSize: 30
    }
})