import React from 'react';
import { Link } from 'react-router';
import errrImg from '../../assets/error-404-D5a2U_1Y.png'; 

const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-5 text-center">
      <img
        src={errrImg}
        alt="404 Error"
        className="w-80 max-w-full mb-6 animate-fadeIn"
      />
      <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! Page Not Found</p>
      <p className="text-gray-500 mb-6">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
