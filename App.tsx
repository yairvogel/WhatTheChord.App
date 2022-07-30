import ChordScreen from './src/screens/ChordScreen';
import JamScreen from './src/screens/JamScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ReactElement } from 'react'
import ScreenParameters from './src/navigation/ScreenParameters'
import SearchScreen from './src/screens/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<ScreenParameters>();

const App: () => ReactElement = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
              screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name='Search'
                    component={SearchScreen}
                />
                <Stack.Screen
                    name='Chord'
                    component={ChordScreen}
                />
                <Stack.Screen
                    name='Jam'
                    component={JamScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;