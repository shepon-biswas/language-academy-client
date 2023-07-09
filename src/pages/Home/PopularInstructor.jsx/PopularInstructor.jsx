import React from "react";
import useInstructors from "../../../hooks/useInstructors";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
  const { instructors } = useInstructors();
  const popularInstructors = instructors.slice(0, 6);
  // console.log(popularInstructors)
  return (
    <>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="my-14 uppercase ">
          <h2 className="text-2xl font-bold text-center">
            ---- Meet Our
            <span className="text-[#066466]"> Popular Instructors</span> ----
          </h2>
        </div>
        {/* Card Section */}
        <div className="md:grid grid-cols-3 gap-5">
          {popularInstructors.map((instructorData) => (
            <PopularInstructorCard
              key={instructorData._id}
              instructorData={instructorData}
            ></PopularInstructorCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularInstructor;
