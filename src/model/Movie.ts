export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

export interface MovieDetails {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  backdrop_path: string;
  genres: {id: number; name: string}[];
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
}
