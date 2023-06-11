import React from "react";
import useClasses from "../../../hooks/useClasses";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const { classes } = useClasses("approved");
  // console.log(classes);
  return (
    <>
      <div className="my-14">
        <h2 className="text-2xl font-bold text-center">
          ---- Explore Most{" "}
          <span className="text-[#066466]">Popular Classes</span> ----
        </h2>
      </div>
      {/* Classes Information */}
      <div className="md:grid grid-cols-3 gap-5">
        {
          classes.map(classData=><PopularClassesCard key={classData._id} classData={classData}></PopularClassesCard>)
        }
      </div>
    </>
  );
};

export default PopularClasses;
