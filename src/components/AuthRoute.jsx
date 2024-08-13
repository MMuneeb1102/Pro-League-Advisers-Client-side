import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie'

const AuthRoute = (Component) => {
    const AuthenticatedComponent = (props) =>{
        const cookies = new Cookies();
        const isAuthenticated = cookies.get('auth-token');
        const location = useLocation();

        if(isAuthenticated && location.pathname === '/signin' || isAuthenticated && location.pathname === '/signup'){
            return <Navigate to={'/'}/>
        }

        if(!isAuthenticated && !location.pathname === '/signin'){
            return <Navigate to="/signin" />;
        }

        return <Component {...props}/>

    }

  return AuthenticatedComponent
}

export default AuthRoute
