import React from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../Pages/Login';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Login></Login>
        </div>
    );
};

export default AuthLayout;