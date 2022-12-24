import ChordPage from '../model/chordpage'
import Song from '../model/song';

interface SongApi {
    searchSongs(query: string): Promise<Song[]>
    getChords(songId: string): Promise<ChordPage>
    recommendedSongs(song: Song): Promise<Song[]>
}

export default SongApi