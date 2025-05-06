import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li className="w-20">
        <NavLink
          className={({ isActive }) =>
            `hover:bg-transparent mx-auto text-base ${
              isActive ? "text-[#818CF8] font-bold" : ""
            }`
          }
          to="/">
          Apps
        </NavLink>
      </li>
      <li className="w-20">
        <NavLink
          className={({ isActive }) =>
            `hover:bg-transparent mx-auto text-base ${
              isActive ? "text-[#818CF8] font-bold" : ""
            }`
          }
          to="/installedApps">
          Installed
        </NavLink>
      </li>
      <li className="w-20">
        <NavLink
          className={({ isActive }) =>
            `hover:bg-transparent  mx-auto text-base ${
              isActive ? "text-[#818CF8] font-bold" : ""
            }`
          }
          to="/profile">
          Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-10 backdrop-blur-md shadow-sm shadow-primary">
      <div className="navbar bg-transparent   mb-[50px]  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="size-[50px]" src="/logo.png" alt="" />
            <a className="btn btn-ghost text-xl px-0">AppOcean</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary btn-outline rounded-[5px]">login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
