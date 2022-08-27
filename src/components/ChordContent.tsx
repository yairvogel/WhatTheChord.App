import { StyleSheet, Text, View } from 'react-native'

import ChordPage from '../model/chordpage'
import React from 'react'
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
        <View style={styles.body}>
            <Text style={styles.title}>{chordPage?.songName || song.name} - {chordPage?.artistName || song.artist.name}</Text>
            <Text style={{ marginHorizontal: 10 }}>{chordPage?.chords || ""}</Text>
        </View>
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
        justifyContent: 'flex-start'
    }
})

export default ChordContent;