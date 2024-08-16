import React from 'react'
import { useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';

const RestrictNavigation = (Component) => {
    const AuthComponent = (props) => {
        const cookies = new Cookies();
        const location = useLocation();
        const isAuthenticated = cookies.get('auth-token');
    
        if (isAuthenticated && location.pathname === '/signin' || isAuthenticated && location.pathname === '/signup') {
            return <Navigate to="/" />;
        }

        // Render the protected component if authenticated
        return <Component {...props} />;
      };
      return AuthComponent
}

export default RestrictNavigation
