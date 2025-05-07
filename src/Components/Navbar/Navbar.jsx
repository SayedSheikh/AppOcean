import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        // console.log(res);
        toast.success("Logged Out !!");
      })
      .catch(() => {
        // console.log(err);
        toast.error("Network Issue !!");
      });
  };
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
            `hover:bg-transparent  mx-auto text-base ${
              isActive ? "text-[#818CF8] font-bold" : ""
            }`
          }
          to="/profile">
          Profile
        </NavLink>
      </li>
      <li className="w-20">
        <NavLink
          className={({ isActive }) =>
            `hover:bg-transparent  mx-auto text-base ${
              isActive ? "text-[#818CF8] font-bold" : ""
            }`
          }
          to="/aboutUs">
          AboutUs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-10 backdrop-blur-md shadow-sm shadow-primary">
      <div className="navbar justify-between bg-transparent  max-w-[1200px]  mb-[50px]  w-11/12 mx-auto px-0">
        <div className="flex items-center">
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
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="flex gap-3 items-center">
          {user && (
            <div className="relative">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-7 h-7 rounded-full mx-auto cursor-pointer peer hover:border"
              />
              <div className="text-[12px] text-white p-2 rounded-[8px] absolute top-[35px] -left-[135px] bg-[#44577f] opacity-0 peer-hover:opacity-100 transition-opacity duration-200">
                <p>{user?.displayName}</p>
                <p>{user?.email}</p>
              </div>
            </div>
          )}

          {user ? (
            <a
              onClick={handleLogout}
              className="btn btn-primary btn-outline rounded-[5px]">
              logout
            </a>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-outline rounded-[5px]">
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
