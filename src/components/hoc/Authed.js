import React from 'react';
import {useLocation, Navigate} from "react-router-dom";

const RequireAuth = ({children}) => {
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';
    const auth = typeof localStorage.token === 'string';

    if (!auth) {
        return <Navigate to={"/signin"} state={{from: location}}/>
    }

    return children
};

export default RequireAuth;