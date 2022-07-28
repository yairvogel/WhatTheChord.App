import ChordScreen from './src/screens/ChordScreen';
import JamIndexScreen from './src/screens/JamIndexScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ReactElement } from 'react'
import ScreenParameters from './src/navigation/ScreenParameters'
import SearchScreen from './src/screens/SearchScreen';
import SongApi from './src/api/SongApi'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<ScreenParameters>();
const api = new SongApi();

const App: () => ReactElement = () => {
    const api = new SongApi();
    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                    component={JamIndexScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;