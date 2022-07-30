import Jam from '../model/jam'

interface JamApi {
    createJam(): Promise<Jam>,
    getJam(id: string): Promise<Jam>,
    listJams(): Promise<Jam[]>
    deleteJam(id: string): Promise<void>
}

export default JamApi