import React, { ReactElement } from 'react'

import ChordContent from '../components/ChordContent'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ScreenParameters from '../navigation/ScreenParameters'
import Song from '../model/song'

type Props = NativeStackScreenProps<ScreenParameters, 'Chord'>

const ChordScreen = ({ route, navigation }: Props): ReactElement => {
    const { song } = route.params;
    return <ChordContent 
        song={song} 
        goBack={() => navigation.goBack()} 
        openChord={(aSong: Song) => navigation.push("Chord", {song: aSong})} navigation={navigation} />
}

export default ChordScreen;