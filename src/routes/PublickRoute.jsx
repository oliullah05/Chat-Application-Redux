import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PublickRoute = ({children}) => {
    const isLoggedIn = useAuth()
    return !isLoggedIn?children:<Navigate to={"/inbox"}></Navigate>
};

export default PublickRoute;