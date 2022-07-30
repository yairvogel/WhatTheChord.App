import JamApi from '../interfaces/jam-api';
import JamApiImplementation from './jam-api'
import SongApi from '../interfaces/song-api'
import SongApiImplementation from './song-api';
import { createContext } from 'react';

const songApi = new SongApiImplementation();
export const SongApiContext = createContext<SongApi>(songApi)

const jamApi = new JamApiImplementation();
export const JamApiContext = createContext<JamApi>(jamApi);