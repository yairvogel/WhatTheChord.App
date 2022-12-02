import ChordScreen from '../screens/ChordScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import ScreenParameters from '../navigation/ScreenParameters'
import SearchScreen from '../screens/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<ScreenParameters>();


const NavigationComponent = (): React.ReactElement<any, React.JSXElementConstructor<any>> => {
    return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Search'
                component={SearchScreen} />
            <Stack.Screen
                name='Chord'
                component={ChordScreen} />
        </Stack.Navigator>
    </NavigationContainer>)
}

export default NavigationComponent