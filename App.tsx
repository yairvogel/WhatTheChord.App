import { CurrentJamContext, JamApiContext, SetCurrentJamContext } from './src/api/contexts';
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import Jam from './src/model/jam';
import JamApi from './src/interfaces/jam-api';
import JamInfo from './src/model/jaminfo';
import React from 'react';
import { SetState } from './src/types/types';

const window = Dimensions.get('window');
const barHeight = 150;
const offsets = [0, window.height - barHeight]

const App: React.FC = () => {
    const [jamInfo, setJamInfo] = React.useState<JamInfo | undefined>(undefined)
    return (
        <CurrentJamContext.Provider value={jamInfo!}>
            <SetCurrentJamContext.Provider value={setJamInfo!}>
                <ScrollView contentContainerStyle={{flexGrow: 1}} snapToOffsets={offsets} decelerationRate='normal'>
                    <View style={{flexGrow: 15}}>
                        <NavigationComponent />
                    </View>
                </ScrollView>
            </SetCurrentJamContext.Provider>
        </CurrentJamContext.Provider>
    )
}

type JamModalProps = {jamInfo: JamInfo, setJamInfo: SetState<JamInfo | undefined>}

const JamContent: React.FC<JamModalProps> = ({jamInfo, setJamInfo}) => {
    const jamApi = React.useContext<JamApi>(JamApiContext);
    const [jam, setJam] = React.useState<Jam | undefined>(undefined)
    React.useEffect(() => {
        jamApi.getJam(jamInfo.id).then(setJam);
    })
    return (
        <View style={{padding: 20}}>
            <Text style={{fontSize: 24}}>Jam: {jamInfo.name}</Text>
            <Text style={{fontSize: 18}}>Songs:</Text>
            {jam?.currentSong ? <Text>currentSong: {jamInfo.currentSong!.name}</Text> : <Text>No current songs</Text>}
            {jam?.playlist ?
            <ScrollView>
                {jam.playlist!.map(song => <View><Text>{song.name}</Text></View>)}
            </ScrollView>
            : null}
        </View>
    )
}

export default App;