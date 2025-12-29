import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

import Loader from '../Pages/Loader';
import { LoaderContext } from '../Provider/LoaderProvider';

const HomeLayout = () => {
    const { loading } = useContext(LoaderContext);

if (loading) {
  return <Loader />;
}

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;