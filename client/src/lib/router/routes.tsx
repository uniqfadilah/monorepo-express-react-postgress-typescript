import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('src/lib/pages/home'));
const Popular = React.lazy(() => import('src/lib/pages/popular'));
const NowPlaying = React.lazy(() => import('src/lib/pages/now_playing'));
const Upcoming = React.lazy(() => import('src/lib/pages/upcoming'));
const TopRated = React.lazy(() => import('src/lib/pages/top_rated'));
const Login = React.lazy(() => import('src/lib/pages/login'));
const Favorites = React.lazy(() => import('src/lib/pages/favorites'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/login',
    element: <Login />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/popular',
    element: <Popular />,
  },
  {
    element: <NowPlaying />,
    path: '/now-playing',
  },
  {
    element: <Upcoming />,
    path: '/upcoming',
  },
  {
    element: <TopRated />,
    path: '/top-rated',
  },
  {
    element: <Favorites />,
    path: '/favorites',
  },
];
