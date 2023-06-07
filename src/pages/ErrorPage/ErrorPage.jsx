import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="w-full min-h-screen p-10  flex flex-col justify-center items-center">
        <img className="w-[500px] mx-auto rounded-lg" src="https://i.ibb.co/XYRy9NK/404-error.jpg" alt="error image" />
        <Link to={"/"} className="btn bg-[#066466] text-white text-center md:w-1/3">Go Back To HomePage</Link>
      </div>
    </>
  );
};

export default ErrorPage;
