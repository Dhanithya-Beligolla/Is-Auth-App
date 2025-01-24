import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Is-Auth</Link>
        <div>
          {user ? (
            <>
              <Link to="/profile" className="mx-2">Profile</Link>
              <Link to="/" onClick={logout} className="mx-2">Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="mx-2">Login</Link>
              <Link to="/register" className="mx-2">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
