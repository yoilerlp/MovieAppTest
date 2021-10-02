import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {ActorCardProp} from '../../model/Actor';
import {MovieDetails} from '../../model/Movie';
import {getActorsMovie, getMovieDetails} from '../../services/movieServices';

export const getActorsMovieAction = createAsyncThunk(
  'movieDetails/getActorsMovie',
  async (id: number) => {
    return await getActorsMovie(id);
  },
);

export const getMovieDetailsAction = createAsyncThunk(
  'movieDetails/getMovieDetails',
  async (id: number) => {
    return await getMovieDetails(id);
  },
);

export interface MovieDetailsState {
  movieDetails: {
    error: string | undefined;
    loading: boolean;
    data: MovieDetails;
  };
  cast: {
    loading: boolean;
    error: undefined | string;
    actorsList: ActorCardProp[];
  };
}

const initialState: MovieDetailsState = {
  movieDetails: {
    error: undefined,
    loading: false,
    data: {
      vote_average: 1,
      release_date: '2021-10-1',
      backdrop_path: '',
      genres: [],
      id: 1,
      overview: '',
      poster_path: '',
      title: '',
      production_companies: [],
    },
  },
  cast: {
    loading: false,
    error: undefined,
    actorsList: [],
  },
};

export const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getActorsMovieAction.pending, state => {
      state.cast.loading = true;
    });
    builder.addCase(getActorsMovieAction.fulfilled, (state, action) => {
      state.cast.loading = false;
      state.cast.actorsList = action.payload;
    });
    builder.addCase(getActorsMovieAction.rejected, (state, action) => {
      state.cast.loading = false;
      state.cast.error = action.error.message?.toString();
    });

    // movie details
    builder.addCase(getMovieDetailsAction.pending, state => {
      state.movieDetails.loading = true;
    });
    builder.addCase(getMovieDetailsAction.fulfilled, (state, action) => {
      state.movieDetails.loading = false;
      state.movieDetails.data = action.payload;
    });
    builder.addCase(getMovieDetailsAction.rejected, (state, action) => {
      state.movieDetails.loading = false;
      state.movieDetails.error = action.error.message?.toString();
    });
  },
});

export default movieDetailsSlice.reducer;
