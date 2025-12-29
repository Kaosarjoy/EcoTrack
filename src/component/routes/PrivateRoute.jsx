import React, { use } from 'react';
import { Navigate } from 'react-router';

import { AuthContext } from '../Provider/AuthProvider';
import Loader from '../Loader/Loader';
const PrivateRoute = ({ children }) => {
    // const { user, loading } = use(AuthContext);
    const {user , loading} = use(AuthContext)

    if (loading) {
    return (
        <Loader></Loader>
    );
}


    if (user && user.email) {
        return children;
    }

    return <Navigate to='/auth/login' />;
};

export default PrivateRoute;
