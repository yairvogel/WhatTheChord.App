import React, { ReactElement } from 'react'
import {
    Text,
    View
} from 'react-native'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ScreenParameters from '../navigation/ScreenParameters'

type Props = NativeStackScreenProps<ScreenParameters, 'Jam'>

const JamIndexScreen = ({route, navigation}: Props): ReactElement => {
    return (
        <View>
            <Text>Hello Jam!</Text>
        </View>
    )
}

export default JamIndexScreen;