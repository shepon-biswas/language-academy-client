import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const WhyUs = () => {
  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto my-[100px]">
        <div className="my-14 uppercase ">
          <h2 className="text-2xl font-bold text-center">
            ---- Why To
            <span className="text-[#066466]"> Choose Us?</span> ----
          </h2>
        </div>
        {/* Why to choose us section start */}
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="grid md:grid-cols-2 gap-10 justify-between"
        >
          {/* Left Info Section */}
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="w-full h-96 space-y-4"
          >
            <h2 className="font-bold text-5xl uppercase mb-10">
              3 key points to start your journey with us
            </h2>
            <div className="space-y-4">
              <p className="bg-[#066466] bg-opacity-10 px-7 py-4 rounded-md  w-2/3 text-center font-bold text-2xl inline-flex items-center gap-4">
              <FaCheckCircle className="w-10 h-10 text-[#066466] "></FaCheckCircle> Interactive Classes
              </p>
              <p className="bg-[#066466] bg-opacity-10 px-7 py-4 rounded-md  w-2/3 text-center font-bold text-2xl inline-flex items-center gap-4">
              <FaCheckCircle className="w-10 h-10 text-[#066466] "></FaCheckCircle> Experienced Instructors
              </p>
              <p className="bg-[#066466] bg-opacity-10 px-7 py-4 rounded-md  w-2/3 text-center font-bold text-2xl inline-flex items-center gap-4">
              <FaCheckCircle className="w-10 h-10 text-[#066466] "></FaCheckCircle> Intensive Student Care
              </p>
            </div>
            <Link className=" btn font-bold bg-[#066466] text-white text-xl uppercase">
              register now!!!
            </Link>
          </div>
          {/* Right info section */}
          <div className="w-full h-96">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/kBvswy9/whyus.jpg"
              alt="Why to choose us image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
