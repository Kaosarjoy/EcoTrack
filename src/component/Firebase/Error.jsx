import React from 'react';

import PageErrorImg from '../../assets/error-404-D5a2U_1Y.png'
import {  useNavigate } from 'react-router';

const PageError = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col min-h-screen bg-base-100">
      
      {/* Main Content */}
      <div className=" flex flex-col items-center justify-center text-center p-4">
        <img src={PageErrorImg} alt="PageErrorImg" className="mb-6" />
        <h1 className='text-4xl font-bold mb-2'>OOPS!! APP NOT FOUND</h1>
        <p className='mt-2 text-gray-400 font-semibold mb-6'>
          The page you are looking for is not available.
        </p>
        <button onClick={() => navigate(-1)} className='btn btn-gradient'>
          Go Back
        </button>
      </div>

     
      
    </div>
    );
};

export default PageError;