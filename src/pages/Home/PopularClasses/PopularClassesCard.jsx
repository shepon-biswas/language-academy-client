import React from "react";
import { FaDollarSign, FaPlusCircle, FaUserTie, FaUsers } from "react-icons/fa";

const PopularClassesCard = ({classData}) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-[250px] object-cover"
            src={classData.classImage}
            alt="Class Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{classData.className}</h2>
          <span className="inline-flex items-center gap-3 font-bold">
            <FaUserTie></FaUserTie> Instructor: {classData.instructorName}
          </span>
          <div>
            <div>
              <span className="inline-flex items-center gap-3 font-bold">
                <FaUsers></FaUsers>Available Seats:
              </span>
            </div>
            <div>
              <span className="inline-flex items-center gap-3 font-bold">
                <FaDollarSign></FaDollarSign> Price: {classData.price}
              </span>
            </div>
          </div>
          <div className="card-actions ">
            <button className="btn bg-[#066466] hover:bg-[#005758] w-full text-white">
              Select
              <FaPlusCircle className="w-5 h-5"></FaPlusCircle>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularClassesCard;
