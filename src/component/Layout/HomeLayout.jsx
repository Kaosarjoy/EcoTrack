import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

import Loader from '../Pages/Loader';
import { AuthContext } from '../Provider/AuthProvider';


const HomeLayout = () => {
    const { loading } = useContext(AuthContext);

if (loading) {
  return <Loader />;
}

    return (
       <div className="relative max-w-[1200px] mx-auto">
  {/* Navbar fixed কিন্তু wrapper এর ভিতরে */}
  <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
    <div className="max-w-[1200px] mx-auto">
      <Navbar />
    </div>
  </nav>

  {/* Content: Navbar height অনুযায়ী top padding দেওয়া হলো */}
  <div className="pt-16">  {/* Navbar height অনুযায়ী adjust করো */}
    <Outlet />
    <Footer />
  </div>
</div>

    );
};

export default HomeLayout;