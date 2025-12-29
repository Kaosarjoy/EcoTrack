import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink } from 'react-router';
import Marquee from 'react-fast-marquee';

const MyActivities = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className='items-center'>
        <Marquee className='bg-blue-200 p-4 m-4 max-w-1200 mx-auto rounded-xl' speed={50} pauseOnHover={true}>
      <h2 className='text-center m-10 text-2xl text-green-400'>
          Please <NavLink to='/auth/login' className='text-red-500 underline'> Login </NavLink> 
          or <NavLink to='/auth/register' className='underline text-black'> Register </NavLink>
          to view your profile
        </h2>
        </Marquee>
        
      </div> 
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-base-100 shadow-md rounded-lg text-center">
      <img
        src={user.photoURL || "https://i.ibb.co/default-user.png"}
        alt={user.displayName || "User"}
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h2 className="text-2xl font-bold mt-4">{user.displayName || "No Name"}</h2>
     
      <p className="text-gray-600 mt-1">{user.email}</p>

      <button className="btn btn-info mt-4 w-full">
        Update Profile
      </button>
    </div>
  );
};

export default MyActivities;
