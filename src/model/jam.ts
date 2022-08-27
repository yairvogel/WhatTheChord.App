import JamInfo from "./jaminfo";
import Song from "./song";

type Jam = {
    info: JamInfo
    currentSong?: Song
    playlist?: Song[]
}

export default Jam;