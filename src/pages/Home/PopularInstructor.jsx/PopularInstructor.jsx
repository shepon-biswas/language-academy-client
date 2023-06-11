import React from "react";
import useInstructors from "../../../hooks/useInstructors";
import PopularInstructorCard from "./PopularInstructorCard";

const PopularInstructor = () => {
  const { instructors } = useInstructors();
  const popularInstructors = instructors.slice(0, 6);
  // console.log(popularInstructors)
  return (
    <>
      <div className="my-14">
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
    </>
  );
};

export default PopularInstructor;
