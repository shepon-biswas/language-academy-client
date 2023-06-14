import React from "react";
import { Helmet } from "react-helmet-async";
import useEnrolledClass from "../../../hooks/useEnrolledClass";

const EnrolledClasses = () => {
  const {enrolledClasses} = useEnrolledClass();
  // console.log(enrolledClasses)
  return (
    <>
      <Helmet>
        <title>My Enrolled Classes | Fluent Language Academy</title>
      </Helmet>
      <h2 className="font-bold text-2xl text-[#066446] mb-10">My All Selected Classes</h2>
      {/* Cart Items */}
      <div className="overflow-x-auto w-11/12 ">
        <table className="table table-zebra">
          {/* head */}
          <thead className="font-bold text-xl">
            <tr className="text-center">
              <th>#</th>
              <th>Class Name</th>
              <th>Class Email</th>
              <th>Enrolled Date</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {enrolledClasses.map((classInfo, index) => (
              <tr key={classInfo._id}>
                <th>{index + 1}</th>
                <td>{classInfo.name}</td>
                <td>{classInfo.email}</td>
                <td>{new Date(classInfo.date).toLocaleTimeString()}, {new Date(classInfo.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EnrolledClasses;
<h2>My Enrolled Classes</h2>;
