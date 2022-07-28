import ChordScreen from './src/screens/ChordScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ReactElement } from 'react'
import SearchScreen from './src/screens/SearchScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: () => ReactElement = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Search'
                    component={SearchScreen}
                />
                <Stack.Screen
                    name='Song'
                    component={ChordScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;