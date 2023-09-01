import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const UpcomingCourse = () => {
  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto my-[100px]">
        <div className="my-14 uppercase ">
          <h2 className="text-2xl font-bold text-center">
            ---- Why Are You
            <span className="text-[#066466]"> Waiting?</span> ----
          </h2>
        </div>
        {/* Left Info Section */}
        <div data-aos="fade-right"  data-aos-duration="1500" className="grid md:grid-cols-2 gap-10 justify-between">
          <div className="w-full h-96">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/K2CZm92/upcoming.jpg"
              alt="upcoming image"
            />
          </div>
          {/* Right info section */}
          <div data-aos="fade-left"  data-aos-duration="2000" className="w-full h-96 space-y-4">
            <h2 className="font-bold text-5xl uppercase">
              our next course is staring very soon!
            </h2>
            <p className="w-9/12">
              What is the description of language learning? Language learning is
              an active process that begins at birth and continues throughout
              life. Students learn language as they use it to communicate their
              thoughts, feelings, and experiences, establish relationships with family members and friends, and strive to make sense and order of their world.
            </p>
            <Link className=" btn font-bold bg-[#066466] text-white text-xl uppercase">
              register now!!!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingCourse;
