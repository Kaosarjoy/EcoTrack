import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink } from 'react-router';
import Marquee from 'react-fast-marquee';

const MyActivities = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className='items-center'>
        <Marquee className='bg-color-primary p-4 m-4 max-w-1200 mx-auto rounded-xl' speed={50} pauseOnHover={true}>
      <h2 className='text-center m-10 text-2xl text-green-400'>
          Please <NavLink to='/auth/login' className='text-primary underline'> Login </NavLink> 
          or <NavLink to='/auth/register' className='underline text-secondary'> Register </NavLink>
          to view your profile
        </h2>
        </Marquee>
        
      </div> 
    );
  }

  return (
    <div className="max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 shadow-xl rounded-2xl text-center mt-6 mb-6 border border-gray-100 dark:border-gray-700 transition-transform hover:scale-105 duration-300">
  {/* User Image */}
  <div className="relative w-32 h-32 mx-auto -mt-16">
    <img
      src={user.photoURL || "https://i.ibb.co/default-user.png"}
      alt={user.displayName || "User"}
      className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
    />
  </div>

  {/* User Name */}
  <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-gray-100">
    {user.displayName || "No Name"}
  </h2>

  {/* Email */}
  <p className="text-gray-500 dark:text-gray-400 mt-1">{user.email}</p>

  {/* Update Button */}
  <button className="btn btn-info mt-6 w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg transition-all duration-300">
    Update Profile
  </button>
</div>

  );
};

export default MyActivities;
