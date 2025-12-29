import React from "react";
import { NavLink } from "react-router";
import logoImg from "../../assets/logo.jpg";

const Navbar = () => {
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

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
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
      <div className="navbar-end gap-2">
        <NavLink to="/auth/login">
          <button className="btn btn-primary btn-sm">Login</button>
        </NavLink>
        <NavLink to="/auth/register">
          <button className="btn bg-base-200 text-secondary hover:bg-base-100 btn-sm">
            Register
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
