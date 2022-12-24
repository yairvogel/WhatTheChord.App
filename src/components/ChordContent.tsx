import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'

import ChordPage from '../model/chordpage'
import { Icon } from '@rneui/themed'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Song from '../model/song'
import { SongApiContext } from '../api/contexts'
import SongListItem from './SongListItem'

type Action = () => void;
const ChordContent: React.FC<ChordContentProps> = ({song, navigation}) => {
    const api = React.useContext(SongApiContext);
    const [chordPage, setChords] = React.useState<ChordPage>();
    const [recommendations, setRecommendations] = React.useState<Song[]>([]);

    React.useEffect(() => {
        api.getChords(song.id)
            .then(setChords)
        api.recommendedSongs(song)
            .then(setRecommendations)
    }, [])

    return (
        <View style={styles.body}>
            <Pressable style={styles.backFloating} onPress={navigation.goBack}>
                <Icon name='arrow-back-ios' size={30} color="#505050"/>
            </Pressable>
            <View style={styles.header}>
                <Text style={styles.songName}>{chordPage?.songName || song.name}</Text>
                <Text style={styles.artist}>{chordPage?.artistName || song.artist.name}</Text>
                <View style={{width: '20%', borderBottomColor: '#CCC', borderBottomWidth: 1, marginTop: 20}}></View>
            </View>
            <ScrollView>
                {chordPage 
                ? <View>
                    <Text style={{ marginHorizontal: 10, fontFamily: 'Inter', fontSize: 14, color: '#000' }}>{chordPage!.chords || ""} </Text> 
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.songName}>Play Some More:</Text>
                        {recommendations.slice(0, 5).map((value, index) => <SongListItem key={index} song={value} onPress={_ => {
                            navigation.push('Chord', {song: value});
                            }} />)}
                    </View>
                  </View>
                : <View style={{flexGrow: 1, justifyContent: 'center'}}><ActivityIndicator size='large' /></View> }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    songName: {
        fontSize: 22,
        lineHeight: 40,
        color: '#111',
        fontFamily: 'Inter'
    },
    artist: {
        fontSize: 14,
        color: '#6B6B6B',
        fontFamily: 'Inter'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 20,
        height: '100%',
        flexGrow: 1,
        backgroundColor: '#EEF2F5'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        marginTop: 30,
        marginBottom: 10

    },
    backFloating: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left: 30,
        top: 30
    }
})

type ChordContentProps = {
    song: Song,
    goBack?: () => void,
    openChord?: (song: Song) => void
    navigation: any
}

export default ChordContent;