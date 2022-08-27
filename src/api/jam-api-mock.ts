import Jam from "../model/jam";
import JamApi from "../interfaces/jam-api";
import JamInfo from "../model/jaminfo";

export default class JamApiMock implements JamApi
{
    jamDict: { [id: string]: Jam } = {}

    async createJam(name: string): Promise<JamInfo> {
        const jam: Jam = {
            info: {
                name: name,
                id: this.randomId()
            }
        }
        this.jamDict[jam.info.id] = jam;
        return jam.info;
    }

    async getJam(id: string): Promise<Jam> {
        return this.jamDict[id]
    }

    async listJams(): Promise<JamInfo[]> {
        return Object.values(this.jamDict).map(jam => jam.info)
    }

    async deleteJam(id: string): Promise<void> {
        delete this.jamDict[id]
    }

    randomId(): string {
        const num = Math.round(Math.random() * 100);
        return num.toString();
    }
    
}