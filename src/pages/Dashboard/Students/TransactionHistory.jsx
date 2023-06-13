import React from "react";
import useEnrolledClass from "../../../hooks/useEnrolledClass";
import { Helmet } from "react-helmet-async";

const TransactionHistory = () => {
    const {enrolledClasses} = useEnrolledClass();
  return (
    <>
      <Helmet>
        <title>Payment Transaction History | Fluent Language Academy</title>
      </Helmet>
      <h2 className="font-bold text-2xl text-[#066446] mb-10">
      Payment Transaction History
      </h2>
      {/* Cart Items */}
      <div className="overflow-x-auto w-11/12 ">
        <table className="table table-zebra">
          {/* head */}
          <thead className="font-bold text-xl">
            <tr className="text-center">
              <th>#</th>
              <th>Transaction ID</th>
              <th>Amount Paid</th>
              <th>Class Name</th>
              <th>Class Email</th>
              <th>Enrolled Date</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {enrolledClasses.map((classInfo, index) => (
              <tr key={classInfo._id}>
                <th>{index + 1}</th>
                <td><span className="bg-[#066466] text-white px-3 py-1 rounded">{classInfo.tranjectionId}</span></td>
                <td><span className="bg-green-600 text-white px-3 py-1 rounded">{classInfo.price}</span></td>
                <td>{classInfo.name}</td>
                <td>{classInfo.email}</td>
                <td>{classInfo.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionHistory;
