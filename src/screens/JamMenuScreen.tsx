import { JamApiContext, SetCurrentJamContext } from '../api/contexts'
import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View
} from 'react-native'
import React, { ReactElement } from 'react'

import Button from '../components/Button'
import JamApi from '../interfaces/jam-api'
import JamInfo from '../model/jaminfo'
import { Modalize } from 'react-native-modalize'
import ScreenParameters from '../navigation/ScreenParameters'
import { SetState } from '../types/types'

type Props = NativeStackScreenProps<ScreenParameters, 'JamMenu'>

enum Command {
    Undefined,
    Create,
    Join
}

const JamIndexScreen = ({route, navigation}: Props): ReactElement => {
    const [command, setCommand] = React.useState<Command>(Command.Undefined)
    const modal = React.useRef<Modalize>(null);

    const openModal = (command: Command) => {
        setCommand(command);
        modal.current?.open();
    }

    const tryCloseModal = () => {
        modal.current?.close();
    }
    
    return (
        <View>
            <Button
              onPress={_ => openModal(Command.Create)}
              title="create jam" />
            <Button
              onPress={_ => openModal(Command.Join)}
              title="join jam" />
            <Modalize ref={modal}>
                {command == Command.Create ? <CreateJamScreen close={tryCloseModal} /> : <JoinJamScreen close={tryCloseModal} />}
            </Modalize>
        </View>
    )
}

type ModalProps = {close: () => void}

const CreateJamScreen: React.FC<ModalProps> = ({close}): ReactElement => {
    const jamApi = React.useContext(JamApiContext);
    const setCurrentJam = React.useContext(SetCurrentJamContext);
    const [name, setName] = React.useState<string>("");

    const createJam = async event => {
        const jam = await jamApi.createJam(name);
        setCurrentJam(jam);
        close();
    }
    
    return (
        <View>
            <TextInput 
                value={name}
                onChangeText={setName}
            />
            <Button
                title='Create A Jam'
                onPress={createJam} />
        </View>
        )
}

const JoinJamScreen: React.FC<ModalProps> = ({close}) => {
    const jamApi = React.useContext<JamApi>(JamApiContext);
    const [jams, setJams] = React.useState<JamInfo[] | undefined>(undefined);
    const setCurrentJam = React.useContext(SetCurrentJamContext);
    React.useEffect(() => { jamApi.listJams().then(setJams) }, [])
    if (!jams) return <View><Text>No Jams available</Text></View>
    return (
        <View>
            <Text>Jams</Text>
            <ScrollView>
                {jams!.map(jam => 
                <Pressable key={jam.id} onPress={() => setCurrentJam(jam)}>
                    <Text>{jam.name}</Text>
                </Pressable>
                )}
            </ScrollView>
        </View>
    )
}

export default JamIndexScreen;