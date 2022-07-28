import {
    Button,
    ScrollView,
    Text,
    TextInput,
    View
} from 'react-native'
import React, { useState } from "react";

import type { ReactElement } from 'react'
import Song from '../model/song'

const aSong: Song = {
    id: 'id',
    name: 'name',
    popularity: 77,
    artist: {
        id: 'artistid',
        name: 'artist name'
    }
}

const SearchScreen: () => ReactElement = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [query, setQuery] = useState<string>("");

    const submitQuery = async () => {
        const url: string = `http://10.0.0.6:5000/search/songs?query=${query}`
        const res: Response = await fetch(url)
        const data: Song[] = await res.json()
        setSongs(data);
    }
    
    return (
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
                <View key={idx} style={{marginVertical: 10, borderColor: 'black', borderWidth: 1, paddingVertical: 3, paddingHorizontal: 7}}>
                    <Text>{song.name} - {song.artist.name}</Text>
                </View>
            ))}
        </ScrollView>
    )   
}

export default SearchScreen