import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import ChordPage from '../model/chordpage'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Song from '../model/song'
import { SongApiContext } from '../api/contexts'

const ChordContent = (song: Song) => {
    const api = React.useContext(SongApiContext)
    const [chordPage, setChords] = React.useState<ChordPage>()

    React.useEffect(() => {
        api.getChords(song.id)
            .then(setChords)
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.body}>
            <Text style={styles.title}>{chordPage?.songName || song.name} - {chordPage?.artistName || song.artist.name}</Text>
            {chordPage ? <Text style={{ marginHorizontal: 10 }}>{chordPage!.chords || ""} </Text> : <View style={{flexGrow: 1, justifyContent: 'center'}}><ActivityIndicator size='large' /></View> }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        color: '#111'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexGrow: 1
    }
})

export default ChordContent;