import Song from '../model/song';

interface Api {
    searchSongs(query: string): Promise<Song[]>
    getChords(songId: string): Promise<ChordPage>
}

export default Api