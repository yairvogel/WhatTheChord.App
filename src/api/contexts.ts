import Api from '../interfaces/api'
import SongApi from './SongApi';
import { createContext } from 'react';

const songApi = new SongApi();
export const ApiContext = createContext<Api>(songApi)