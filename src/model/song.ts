import Artist from './artist'
import ChordPage from './chordpage'

type Song = {
    id: string,
    name: string,
    popularity?: number,
    artist: Artist,
    releaseYear?: number,
    starred?: boolean,
    chords?: ChordPage
  }

export default Song