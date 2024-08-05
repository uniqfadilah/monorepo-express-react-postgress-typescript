import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { GoPeople } from 'react-icons/go';
import useAuth from 'src/lib/hooks/useAuth';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const routes = [
    {
      name: 'Popular Movies',
      url: '/popular',
    },
    {
      name: 'Now Playing',
      url: '/now-playing',
    },
    {
      name: 'Upcoming Movies',
      url: '/upcoming',
    },
    {
      name: 'Top Rated Movies',
      url: '/top-rated',
    },
  ];
  const { isLoggedIn: isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="flex h-screen w-screen">
      <div className="w-[340px] bg-white-700 border-r border-lime-200 p-6">
        <h1 className="font-bold text-lime-700 text-lg mb-8">INVOOICEE</h1>

        <nav className="space-y-4">
          <button className="bg-lime-700 text-white rounded w-full py-2 mb-4">
            Create Invoice
          </button>
          <ul className="text-lime-700">
            <li className="bg-lime-50 rounded p-3 flex space-x-4 items-center ">
              <GoPeople size={20} />
              <span>Client</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1  mx-auto  bg-gray-100 flex flex-col">
        <div className="w-full bg-white h-16 flex items-center px-8 ">
          <div className="container mx-auto">Title page</div>
        </div>
        <div className="container mx-auto px-8 py-6">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
