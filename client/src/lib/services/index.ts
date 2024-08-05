import axios from 'axios';
import config from 'src/lib/config';
const client = axios.create(config.api);

client.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const loginServices = (payload: any) =>
  client.post('/api/login', payload);

export const getDiscovery = () =>
  client.get('/discover/movie?language=en-US&page=1&sort_by=popularity.desc');
export const getPopular = () =>
  client.get('/movie/popular?language=en-US&page=1');
export const getNowPlaying = () =>
  client.get('movie/now_playing?language=en-US&page=1');
export const getUpComming = () =>
  client.get('movie/upcoming?language=en-US&page=1');
export const getTopRated = () =>
  client.get('movie/top_rated?language=en-US&page=1');
export const getMovieSearch = ({ query }: any) =>
  client.get('/search/movie', {
    params: { query, language: 'en-US', page: 1 },
  });
export const getMovieDetail = (id: any) =>
  client.get(`/movie/${id}?language=en-US`);
