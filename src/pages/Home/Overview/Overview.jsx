import React from "react";
import { FaBookReader, FaCity, FaUserTie, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Overview = () => {
  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div>
        <div className="my-14 uppercase">
          <h2 className="text-2xl font-bold text-center">
            ---- At A Glance
            <span className="text-[#066466]"> About Our Platform</span> ----
          </h2>
        </div>
        <div className="md:grid grid-cols-4 gap-5 justify-between spa">
            <div data-aos="zoom-in-down" data-aos-duration="1000" className="w-full h-52 rounded-md bg-[#066466] bg-opacity-10 flex flex-col items-center justify-center space-y-2">
                <FaUsers className="w-14 h-14 text-[#066466] "></FaUsers>
                <h4 className="uppercase font-semibold text-xl">Total Students</h4>
                <h4 className="font-semibold">30,000</h4>
            </div>
            <div data-aos="zoom-in-down" data-aos-duration="1200" className="w-full h-52 rounded-md bg-[#066466] bg-opacity-10 flex flex-col items-center justify-center space-y-2">
                <FaBookReader className="w-14 h-14 text-[#066466] "></FaBookReader>
                <h4 className="uppercase font-semibold text-xl"> Total Programmes</h4>
                <h4 className="font-semibold">280+</h4>
            </div>
            <div data-aos="zoom-in-down" data-aos-duration="1500" className="w-full h-52 rounded-md bg-[#066466] bg-opacity-10 flex flex-col items-center justify-center space-y-2">
                <FaUserTie className="w-14 h-14 text-[#066466] "></FaUserTie>
                <h4 className="uppercase font-semibold text-xl">Total Instructor</h4>
                <h4 className="font-semibold">55</h4>
            </div>
            <div data-aos="zoom-in-down" data-aos-duration="2000" className="w-full h-52 rounded-md bg-[#066466] bg-opacity-10 flex flex-col items-center justify-center space-y-2">
                <FaCity className="w-14 h-14 text-[#066466] "></FaCity>
                <h4 className="uppercase font-semibold text-xl">Total branches</h4>
                <h4 className="font-semibold">12</h4>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
