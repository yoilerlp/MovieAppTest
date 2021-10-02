import {configureStore} from '@reduxjs/toolkit';
import movieDetailsSlice from './slices/movieDetails';
import moviesSlice from './slices/moviesSlice';
export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    movieDetails: movieDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
