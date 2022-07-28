import Api from '../interfaces/api'
import Song from '../model/song';

const baseUrl: string = 'http://10.0.0.6:5000';

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