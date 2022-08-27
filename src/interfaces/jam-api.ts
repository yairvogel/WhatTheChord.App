import Jam from '../model/jam'
import JamInfo from '../model/jaminfo'

interface JamApi {
    createJam(name: string): Promise<JamInfo>,
    getJam(id: string): Promise<Jam>,
    listJams(): Promise<JamInfo[]>
    deleteJam(id: string): Promise<void>
}

export default JamApi