import { Dispatch, SetStateAction, createContext } from 'react';

import JamApi from '../interfaces/jam-api';
import JamApiImplementation from './jam-api'
import JamApiMock from './jam-api-mock';
import JamInfo from '../model/jaminfo';
import { SetState } from '../types/types';
import SongApi from '../interfaces/song-api'
import SongApiImplementation from './song-api';

const songApi = new SongApiImplementation();
export const SongApiContext = createContext<SongApi>(songApi)

const jamApi = new JamApiImplementation();
//const jamApi = new JamApiMock();
export const JamApiContext = createContext<JamApi>(jamApi);

export const CurrentJamContext = createContext<JamInfo | undefined>(undefined)
export const SetCurrentJamContext = createContext<SetState<JamInfo | undefined>>(() => {});