import React from "react";
import { FaChevronCircleRight, FaDollarSign, FaPlusCircle, FaUserTie, FaUsers } from "react-icons/fa";

const ClassesCard = ({singleClassData}) => {
  return (
    <>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
            className="w-full h-[250px] object-cover"
              src={singleClassData.classImage}
              alt="Class Image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{singleClassData.className}</h2>
            <span className="inline-flex items-center gap-3 font-bold"> <FaUserTie></FaUserTie> Instructor: {singleClassData.instructorName} </span>
            <div>
                <div>
                <span className="inline-flex items-center gap-3 font-bold"> <FaUsers></FaUsers>Available Seats: {singleClassData.seats}</span>
                </div>
                <div>
                <span className="inline-flex items-center gap-3 font-bold"> <FaDollarSign></FaDollarSign> Price: {singleClassData.price}  </span>
                </div>
            </div>
            <div className="card-actions ">
              <button className="btn bg-[#066466] hover:bg-[#005758] w-full text-white">Select <FaChevronCircleRight className="w-6 h-6"></FaChevronCircleRight></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesCard;
