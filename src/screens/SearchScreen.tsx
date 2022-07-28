import {
    Button,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View
} from 'react-native'
import React, { useState } from "react";

import { ApiContext } from '../api/contexts'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ReactElement } from 'react'
import ScreenParameters from '../navigation/ScreenParameters';
import Song from '../model/song'

type Props = NativeStackScreenProps<ScreenParameters, 'Search'>

const SearchScreen = ({ navigation }: Props): ReactElement => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [query, setQuery] = useState<string>("");

    const api = React.useContext(ApiContext)
    
    const submitQuery = async () => {
        const data: Song[] = await api.searchSongs(query);
        setSongs(data);
    }
    
    return (
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View style={{margin: 10}}>
            <Button
                onPress={() => navigation.navigate('Jam')}
                title='Jam'
            />
            </View>
            <TextInput
                style={{
                    backgroundColor: 'lightgray',
                    minWidth: 300,
                    paddingVertical: 5,
                    paddingHorizontal: 10
                }}
                onChangeText={setQuery}
                value={query} />
            <View style={{
                marginVertical: 20
            }}>
            <Button
                onPress={submitQuery} 
                title="click me!"
                color='#333' />
            </View>
            {songs.map((song, idx) => (
                <Pressable key={idx}
                    onPress={_ => navigation.navigate('Chord', { song })}>
                <View style={{marginVertical: 10, borderColor: 'black', borderWidth: 1, paddingVertical: 3, paddingHorizontal: 7}}>
                    <Text>{song.name} - {song.artist.name}</Text>
                </View>
                </Pressable>
            ))}
        </ScrollView>
    )   
}

export default SearchScreen