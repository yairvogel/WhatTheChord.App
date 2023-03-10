import {
    ActivityIndicator,
    ScrollView,
    TextInput,
    View
} from 'react-native'
import React, { useState } from "react";

import { Icon } from '@rneui/themed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ReactElement } from 'react'
import ScreenParameters from '../navigation/ScreenParameters';
import Song from '../model/song'
import { SongApiContext } from '../api/contexts'
import SongListItem from '../components/SongListItem';

type Props = NativeStackScreenProps<ScreenParameters, 'Search'>

const SearchScreen = ({ navigation }: Props): ReactElement => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [loadingSongs, setLoadingSongs] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("");

    const api = React.useContext(SongApiContext)
    
    const submitQuery = async (query: string) => {
        setLoadingSongs(true);
        const data: Song[] = await api.searchSongs(query);
        setLoadingSongs(false);
        setSongs(data);
    }
    
    return (
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 20,
            backgroundColor: '#EEF2F5',
            flexGrow: 1,
          }}>
            <View style={{
                marginTop: 50
            }}>
                <Icon name='search' size={50} color="#505050" />
                <TextInput
                style={{
                    minWidth: 300,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    fontSize: 30,
                    textAlign: 'center',
                    fontFamily: 'Gruppo',
                    color: '#505050',
                    letterSpacing: .1
                }}
                returnKeyType='search'
                //multiline={true}
                numberOfLines={3}
                onChangeText={setQuery}
                onFocus={() => setQuery('')} 
                onEndEditing={() => submitQuery(query)}
                clearTextOnFocus={true}
                onSubmitEditing={() => submitQuery(query)}
                value={query}
                autoCapitalize='words'
                placeholder="Search for chords" />
            </View>

            {loadingSongs ? <ActivityIndicator size='large' /> : <></>}
            
            {songs.map(
                (song, idx) => 
                    <SongListItem 
                        song={song} 
                        key={idx} 
                        onPress={_ => navigation.navigate('Chord', { song })} />)}
        </ScrollView>
    )   
}

export default SearchScreen