import Artist from './artist'

type Song = {
    id: string,
    name: string,
    popularity: number | undefined,
    artist: Artist,
    releaseYear?: number,
    starred?: boolean,
    chords?: ChordPage
  }

export default Song