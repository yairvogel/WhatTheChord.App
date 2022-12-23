import React, { ReactElement } from 'react'

import ChordContent from '../components/ChordContent'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ScreenParameters from '../navigation/ScreenParameters'

type Props = NativeStackScreenProps<ScreenParameters, 'Chord'>

const ChordScreen = ({ route, navigation }: Props): ReactElement => {
    const { song } = route.params;
    return <ChordContent song={song} onBack={() => navigation.goBack()} />
}

export default ChordScreen;