import ChordPage from '../model/chordpage'
import Song from '../model/song';

interface SongApi {
    searchSongs(query: string): Promise<Song[]>
    getChords(songId: string): Promise<ChordPage>
}

export default SongApi