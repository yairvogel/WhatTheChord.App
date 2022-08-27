import Api from '../interfaces/jam-api'
import Jam from '../model/jam';
import JamInfo from '../model/jaminfo';
import { baseUrl } from './config'

export default class JamApi implements Api {
    
    async deleteJam(id: string): Promise<void> {
        const url = `${baseUrl}/jam/${id}`
        const res: Response = await fetch(url, {
            method: 'DELETE'
        });

        if (res.status != 200) {
            throw new Error(`delete jam returned status code ${res.status}`)
        }
    }

    async createJam(name: string): Promise<JamInfo> {
        const url: string = `${baseUrl}/jam?name=${name}`
        const res: Response = await fetch(url, {
            method: 'POST'
        });
        
        return await res.json();
    }
    async getJam(id: string): Promise<Jam> {
        const url = `${baseUrl}/jam/${id}`;
        const res: Response = await fetch(url);
        return await res.json();
    }
    async listJams(): Promise<JamInfo[]> {
        const url = `${baseUrl}/jam`;
        const res: Response = await fetch(url);
        return await res.json()
    }

}