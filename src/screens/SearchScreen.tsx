import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View
} from 'react-native'
import React, { useState } from "react";

import Button from '../components/Button'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ReactElement } from 'react'
import ScreenParameters from '../navigation/ScreenParameters';
import Song from '../model/song'
import { SongApiContext } from '../api/contexts'

type Props = NativeStackScreenProps<ScreenParameters, 'Search'>

const SearchScreen = ({ navigation }: Props): ReactElement => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [query, setQuery] = useState<string>("");

    const api = React.useContext(SongApiContext)
    
    const submitQuery = async () => {
        const data: Song[] = await api.searchSongs(query);
        setSongs(data);
    }
    
    return (
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            padding: 20
          }}>
            <Text style={{
                fontSize: 36,
                fontWeight: 'bold'
            }}>Wanna Chord?</Text>
            <TextInput
                style={{
                    backgroundColor: 'lightgray',
                    minWidth: 300,
                    paddingVertical: 5,
                    paddingHorizontal: 10
                }}
                onChangeText={setQuery}
                value={query}
                placeholder="Search for chords" />
            <Button
                onPress={submitQuery} 
                title="search"
                color='#333' />
            {songs.map((song, idx) => (
                <Pressable key={idx}
                    onPress={_ => navigation.navigate('Chord', { song })}>
                <View style={{marginVertical: 2, paddingVertical: 5, backgroundColor: 'lightgray', paddingHorizontal: 7}}>
                    <Text>{song.name} - {song.artist.name}</Text>
                </View>
                </Pressable>
            ))}
        </ScrollView>
    )   
}

export default SearchScreen