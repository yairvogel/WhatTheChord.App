import { SetState } from '../types/types';
import SongApi from '../interfaces/song-api'
import SongApiImplementation from './song-api';
import { createContext } from 'react';

const songApi = new SongApiImplementation();
export const SongApiContext = createContext<SongApi>(songApi)
