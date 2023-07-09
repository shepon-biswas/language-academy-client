import React from "react";
import { FaBookOpen, FaEnvelope, FaForward } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const PopularInstructorCard = ({ instructorData }) => {
  return (
    <>
      <div>
        <div data-aos="zoom-out-down" className="card md:w-96 bg-base-100 shadow-xl mb-5">
          <figure>
            <img
              className="w-full h-[250px] object-cover"
              src={instructorData.image}
              alt="Class Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{instructorData.name}</h2>
            <span className="inline-flex items-center gap-3 font-bold">
              <FaEnvelope></FaEnvelope> Email: {instructorData.email}
            </span>
            <div>
              <div>
                <span className="inline-flex items-center gap-3 font-bold">
                  <FaBookOpen></FaBookOpen>Number Of Classes:
                </span>
              </div>
            </div>
            <div className="card-actions ">
              <Link to={"/classes"} className="w-full">
                <button className="btn bg-[#066466] hover:bg-[#005758] w-full text-white">
                  See Classes
                  <FaForward className="w-5 h-5"></FaForward>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularInstructorCard;
