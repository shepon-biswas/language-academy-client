import React from "react";
import {
  FaGlobeAmericas,
  FaLanguage,
  FaLaptop,
  FaWpforms,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ForGrowth = () => {
  return (
    <>
      
        <div className="">
          <div className="my-14 uppercase">
            <h2 className="text-2xl font-bold text-center">
              ---- What We Offer
              <span className="text-[#066466]"> For Growth</span> ----
            </h2>
          </div>
          <div className="bg-gradient-to-r from-[#066466] to-[#03dee2]">
          <div className=" w-11/12 md:w-10/12 mx-auto md:grid grid-cols-4 gap-5 px-5 py-14 my-14 text-white rounded-md ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex items-start justify-between gap-5"
            >
              <div className="p-2 bg-[#066466] rounded-lg">
                <FaLanguage className="w-16 h-16"></FaLanguage>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Learn The Popular Languages
                </h3>
                <p className="text-gray-300">
                  From The U.S.A to China, wherever you go, you must know a
                  language.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="flex items-start justify-between gap-5"
            >
              <div className="p-2 bg-[#066466] rounded-lg">
                <FaLaptop className="w-16 h-16"></FaLaptop>
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  100+ Online Language Classes
                </h3>
                <p className="text-gray-300">
                  We have ready to learn full organised online courses, so that
                  you can start learning right now.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex items-start justify-between gap-5"
            >
              <div className="p-2 bg-[#066466] rounded-lg">
                <FaWpforms className="w-16 h-16"></FaWpforms>
              </div>
              <div>
                <h3 className="font-bold text-lg">Earn A Certificate</h3>
                <p className="text-gray-300">
                  Everthing has a value. We do value your effort, after
                  successfully finished a course you get a digital certificate.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex items-start justify-between gap-5"
            >
              <div className="p-2 bg-[#066466] rounded-lg">
                <FaGlobeAmericas className="w-16 h-16"></FaGlobeAmericas>
              </div>
              <div>
                <h3 className="font-bold text-lg">Explore The World</h3>
                <p className="text-gray-300">
                  Now you are ready to go, to explore the tradition and culture
                  of the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForGrowth;
