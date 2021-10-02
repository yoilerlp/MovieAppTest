export const API_KEY: string = '?api_key=23816d172fe61988b9e11d2f6ea48cd1';
export const IMG_BASE: string = 'https://image.tmdb.org/t/p';
export const API_BASE: string = 'https://api.themoviedb.org/3';

export function getImgUrl(id: string, quality: string = 'original'): string {
  return `${IMG_BASE}/${quality}${id}`;
}
