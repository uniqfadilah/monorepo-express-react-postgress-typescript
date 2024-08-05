import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const useAuth = () => {
  const token = localStorage.getItem('authToken');
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const navigateTo = searchParams.get('navigateTo') || '/';
  const githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);
  const login = (authData: { token: string; user: string }) => {
    localStorage.setItem('authToken', authData.token);
    localStorage.setItem('authUser', authData.user);
    setIsLoggedIn(true);
    navigate(navigateTo || '/');
  };
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    localStorage.removeItem('likedVideos');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const loginWithGitHub = () => {
    window?.location?.assign(
      `https://github.com/login/oauth/authorize?client_id=${githubClientID}`
    );
  };
  return { isLoggedIn, login, logout, loginWithGitHub };
};

export default useAuth;
