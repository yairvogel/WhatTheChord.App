import Api from '../interfaces/song-api'
import ChordPage from '../model/chordpage';
import Song from '../model/song';
import { baseUrl } from './config'

export default class SongApi implements Api {
    async getChords(songId: string): Promise<ChordPage> {
        const url: string = `${baseUrl}/chord/${songId}`
        const res: Response = await fetch(url);
        return await res.json();
    }

    async searchSongs(query: string): Promise<Song[]> {
        const url: string = `${baseUrl}/search/songs?query=${query}`;
        const res: Response = await fetch(url);
        return await res.json();
    }
}