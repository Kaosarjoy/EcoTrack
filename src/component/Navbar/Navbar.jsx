import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import logoImg from "../../assets/logo.jpg";
import UserImg from "../../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        navigate("/auth/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold border-b-2 border-primary"
              : "text-secondary font-medium"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/challenges"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold border-b-2 border-primary"
              : "text-secondary font-medium"
          }
        >
          Challenges
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/myActivities"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold border-b-2 border-primary"
              : "text-secondary font-medium"
          }
        >
          My Activities
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            {links}
          </ul>
        </div>

        <img src={logoImg} alt="logo" className="w-10 h-10 rounded-full" />
        <span className="ml-2 text-xl font-bold">
          <span className="text-primary">Eco</span>
          <span className="text-secondary">Track</span>
        </span>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-4 flex items-center">
        {user ? (
          <>
            <div className="relative group cursor-pointer">
              <img
                src={user.photoURL || UserImg}
                className="w-10 h-10 rounded-full border"
              />
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-black text-white text-xs px-3 py-1 rounded">
                {user.displayName || user.email}
              </div>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-outline ml-2"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <img
              src={UserImg}
              className="w-10 h-10 rounded-full border"
            />
            <NavLink
              to="/auth/login"
              className="btn btn-primary btn-sm ml-2"
            >
              Login
            </NavLink>
            <NavLink 
            to="/auth/register"
            className="btn btn-secondary btn-sm ml-2"
            >
              Register
            </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
