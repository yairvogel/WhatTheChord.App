import Api from '../interfaces/song-api'
import ChordPage from '../model/chordpage';
import Song from '../model/song';
import { baseUrl } from './config'

export default class SongApi implements Api {
    private cache = {};
    async getChords(songId: string): Promise<ChordPage> {
        if (songId in this.cache)
            return this.cache[songId];

        const url: string = `${baseUrl}/chord/${songId}`
        const res: Response = await fetch(url);
        const value: ChordPage = await res.json();
        this.cache[songId] = value;
        return value;
    }

    async searchSongs(query: string): Promise<Song[]> {
        const url: string = `${baseUrl}/search/songs?query=${query}`;
        const res: Response = await fetch(url);
        return await res.json();
    }
}