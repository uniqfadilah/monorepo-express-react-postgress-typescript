import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getDiscovery,
  getMovieDetail,
  getMovieSearch,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpComming,
  loginServices,
} from 'src/lib/services';
export { default as useLikedVideo } from './useLikedVideo';
export const useQuerygetDiscovery = () =>
  useQuery({
    queryKey: ['useQuerygetDiscovery'],
    queryFn: getDiscovery,
  });
export const useQuerygetPopular = () =>
  useQuery({
    queryKey: ['useQuerygetPopular'],
    queryFn: getPopular,
  });
export const useQuerygetNowPlaying = () =>
  useQuery({
    queryKey: ['useQuerygetPopular'],
    queryFn: getNowPlaying,
  });
export const useQuerygetUpComming = () =>
  useQuery({
    queryKey: ['useQuerygetUpComming'],
    queryFn: getUpComming,
  });
export const useQuerygetTopRated = () =>
  useQuery({
    queryKey: ['useQuerygetTopRated'],
    queryFn: getTopRated,
  });
export const useQuerygetMovieSearch = (query: any) =>
  useQuery({
    queryKey: ['useQuerygetMovieSearch', query],
    enabled: !!query,
    queryFn: () => getMovieSearch({ query }),
  });
export const useQueryGetMovieDetail = (id: any) =>
  useQuery({
    queryKey: ['useQueryGetMovieDetail', id],
    enabled: !!id,
    queryFn: () => getMovieDetail(id),
  });

export const useMutationLogin = () =>
  useMutation({
    mutationFn: (payload: any) => loginServices(payload),
  });
