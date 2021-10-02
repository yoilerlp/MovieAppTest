import {ActorCardProp} from '../model/Actor';
import {Movie, MovieDetails} from '../model/Movie';
import {API_BASE, API_KEY, getImgUrl} from '../util/API';

export interface MovieResponse {
  results: Array<Movie>;
}

async function fetchData<T>(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data as T;
}
export async function getTopRatedMovies(): Promise<Movie[]> {
  const data = await fetchData<MovieResponse>(
    `${API_BASE}/movie/top_rated${API_KEY}`,
  );
  // Building IMG url
  const traformedData = data.results.map(movie => {
    return {
      ...movie,
      poster_path: getImgUrl(movie.poster_path),
    };
  });
  return traformedData as Movie[];
}

export async function getPopularMovies(): Promise<Movie[]> {
  const data = await fetchData<MovieResponse>(
    `${API_BASE}/movie/popular${API_KEY}`,
  );
  const traformedData = data.results.map(movie => {
    return {
      ...movie,
      poster_path: getImgUrl(movie.poster_path),
    };
  });
  return traformedData as Movie[];
}

export async function getMovieDetails(id: number): Promise<MovieDetails> {
  const data = await fetchData<MovieDetails>(
    `${API_BASE}/movie/${id}${API_KEY}`,
  );
  const traformedData = {
    ...data,
    backdrop_path: getImgUrl(data.backdrop_path),
  };
  return traformedData as MovieDetails;
}

export async function getActorsMovie(id: number): Promise<ActorCardProp[]> {
  const data = await fetchData<{
    cast: {
      original_name: string;
      profile_path: string;
      id: number;
    }[];
  }>(`${API_BASE}/movie/${id}/credits${API_KEY}`);

  const traformedData = data.cast.map(actor => {
    const {0: firsName, 1: lastName} = actor.original_name.split(' ');
    console.log(data);
    return {
      id: actor.id,
      firsName,
      lastName,
      profile_path: getImgUrl(actor.profile_path),
    };
  });

  return traformedData;
}
