import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { ReactElement } from 'react'
import {
    Text,
    View
} from 'react-native'

import Button from '../components/Button'
import Jam from '../model/jam'
import { JamApiContext } from '../api/contexts'
import ScreenParameters from '../navigation/ScreenParameters'

type Props = NativeStackScreenProps<ScreenParameters, 'Jam'>

type JamScreenParameters = {
    Index: undefined,
    Create: undefined,
    Join: undefined
}

const Stack = createNativeStackNavigator<JamScreenParameters>()

const JamScreen = ({ route, navigation }: Props): ReactElement => {
    return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen
              name='Index'
              component={JamIndexScreen}
              />
            <Stack.Screen
              name='Create'
              component={CreateJamScreen}
              />
            <Stack.Screen
              name='Join'
              component={JoinJamScreen}
              />
        </Stack.Navigator>
    )
}

type IndexProps = NativeStackScreenProps<JamScreenParameters, 'Index'>

const JamIndexScreen = ({route, navigation}: IndexProps): ReactElement => {
    const [message, setMessage] = React.useState<string>("")
    
    return (
        <View>
            <Button
              onPress={_ => navigation.navigate('Create')}
              title="create jam" />
            <Button
              onPress={_ => navigation.navigate('Join')}
              title="join jam" />
            <Text style={{margin: 20}}>{message}</Text>
        </View>
    )
}

type CreateProps = NativeStackScreenProps<JamScreenParameters, 'Create'>

const CreateJamScreen = ({route, navigation}: CreateProps): ReactElement => {
    const [jam, setJam] = React.useState<Jam>();
    const jamApi = React.useContext(JamApiContext);

    const createJam = async event => {
        const jam = await jamApi.createJam();
        setJam(jam);
    }

    const NoJam = () => {
        return (
            <Button 
              title='Create A Jam'
              onPress={createJam} />
        )
    }

    const Jam = () => {
        return (
            <Text>Jam created! id is {jam?.id}</Text>
        )
    }

    return (
        <View>
            {jam ? <Jam /> : <NoJam />}
        </View>
    )
}

type JoinProps = NativeStackScreenProps<JamScreenParameters, 'Join'>

const JoinJamScreen = ({route, navigation}: JoinProps): ReactElement => {
    return (
        <View>
            <Text>join jam screen</Text>
        </View>
    )
}

export default JamScreen;