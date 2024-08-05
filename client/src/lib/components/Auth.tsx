import { Navigate } from 'react-router-dom';
import useAuth from 'src/lib/hooks/useAuth';

type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

const Auth = ({ children, redirectTo = '/login' }: PrivateRouteProps) => {
  const { isLoggedIn: isAuthenticated } = useAuth();

  return isAuthenticated ? (
    (children as React.ReactElement)
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default Auth;
