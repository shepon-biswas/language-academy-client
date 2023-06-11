import React from "react";
import useClasses from "../../hooks/useClasses";
import ClassesCard from "./ClassesCard";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const { classes } = useClasses("approved");
  // console.log(classes)
  return (
    <>
    <Helmet>
      <title>All Classes | Fluent Language Academy</title>
    </Helmet>
      <div className="md:grid grid-cols-3 my-14">
        {classes.map((singleClassData) => (
          <ClassesCard 
          key={singleClassData._id}
          singleClassData={singleClassData}
          ></ClassesCard>
        ))}
      </div>
    </>
  );
};

export default Classes;
