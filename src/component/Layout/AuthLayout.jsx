import React from 'react';
import Navbar from '../Navbar/Navbar';
import Login from '../Pages/Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Login></Login>
        </div>
    );
};

export default AuthLayout;