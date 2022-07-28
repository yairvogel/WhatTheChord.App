import React, { ReactElement } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import { ApiContext } from '../api/contexts'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ScreenParameters from '../navigation/ScreenParameters'
import Song from '../model/song'

type Props = NativeStackScreenProps<ScreenParameters, 'Chord'>

const ChordScreen = ({ route }: Props): ReactElement => {
    const { song } = route.params;
    const api = React.useContext(ApiContext);
    const [chordPage, setChords] = React.useState<ChordPage>();

    React.useEffect(() => {
        api.getChords(song.id)
            .then(setChords)
    }, [])

    return (
        <View style={styles.body}>
            <Text style={styles.title}>{chordPage?.songName || song.name} - {chordPage?.artistName || song.artist.name}</Text>
            <Text>{chordPage?.chords || ""}</Text>
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

export default ChordScreen