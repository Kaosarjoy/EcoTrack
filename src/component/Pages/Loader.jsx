import React from 'react';
import logoImg from '../../assets/logo.jpg'
const Loader = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-64">
      <span className="loading loading-spinner loading-xl"></span>
      <img className="h-40 w-40 items-center" src={logoImg} alt="" />
    </div>
        </div>
    );
};

export default Loader;