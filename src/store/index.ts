import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import data from './slices/dataSlice';
import dialog from './slices/dialogSlice';
import bestFilm from './slices/bestFilmSlice';

const rootReducer = combineReducers({ filter, data, dialog, bestFilm });

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
