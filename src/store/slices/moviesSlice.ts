import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Movie} from '../../model/Movie';

import {
  getTopRatedMovies,
  getPopularMovies,
} from '../../services/movieServices';

export const getTopRatedMoviesAction = createAsyncThunk(
  'movies/getTopRatedMovies',
  async () => {
    return await getTopRatedMovies();
  },
);

export const getPopularMoviesAction = createAsyncThunk(
  'movies/getPopularMovies',
  async () => {
    return await getPopularMovies();
  },
);

export interface MoviesState {
  popularMovies: {
    loading: boolean;
    error: undefined | string;
    movies: Movie[];
  };
  topRatedMovies: {
    loading: boolean;
    error: undefined | string;
    movies: Movie[];
  };
}

const initialState: MoviesState = {
  popularMovies: {
    loading: false,
    error: '',
    movies: [],
  },
  topRatedMovies: {
    loading: false,
    error: '',
    movies: [],
  },
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTopRatedMoviesAction.pending, state => {
      state.topRatedMovies.loading = true;
    });
    builder.addCase(getTopRatedMoviesAction.fulfilled, (state, action) => {
      state.topRatedMovies.loading = false;
      state.topRatedMovies.movies = action.payload;
    });
    builder.addCase(getTopRatedMoviesAction.rejected, (state, action) => {
      state.topRatedMovies.loading = false;
      state.topRatedMovies.error = action.error.message?.toString();
    });

    // PopularMovies
    builder.addCase(getPopularMoviesAction.pending, state => {
      state.popularMovies.loading = true;
    });
    builder.addCase(getPopularMoviesAction.fulfilled, (state, action) => {
      state.popularMovies.loading = false;
      state.popularMovies.movies = action.payload;
    });
    builder.addCase(getPopularMoviesAction.rejected, (state, action) => {
      state.popularMovies.loading = false;
      state.popularMovies.error = action.error.message?.toString();
    });
  },
});

export default moviesSlice.reducer;
