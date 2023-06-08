import React from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../logo.png"

const Header = () => {
  return (
    <>
      <div className="navbar w-full bg-[#066466] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
            </ul>
          </div>
          <NavLink className="font-bold md:text-2xl inline-flex items-center gap-2"> <img className="rounded-full w-16 h-16" src="/logo.png" alt="logo" />Fluent Language Academy</NavLink>
        </div>
        {/* Mobile Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex items-center space-x-5 font-semibold">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/instructors"}>Instructors</NavLink>
            </li>
            <li>
              <NavLink to={"/classes"}>Classes</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"} className="btn text-[#066466] bg-white">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
