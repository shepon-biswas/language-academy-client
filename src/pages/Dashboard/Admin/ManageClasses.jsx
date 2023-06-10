import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { FaCheckDouble, FaMarker, FaTimesCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  //   Handle Make Admin Function
  const makeClassApproved = (singleClassData) => {
    fetch(`http://localhost:5000/classes/approved/${singleClassData._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This Class is Approved Now!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //   Handle Make Admin Function
  const makeClassDenied = (singleClassData) => {
    fetch(`http://localhost:5000/classes/denied/${singleClassData._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This Class Denied to Publish",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <h2 className="font-bold text-2xl text-[#066466]">Manage Classes</h2>
      {/* Classes List */}
      <div className="overflow-x-auto w-11/12">
        <table className="table table-zebra">
          {/* head */}
          <thead className="font-bold text-lg">
            <tr className="text-center">
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Current Role</th>
              <th>Action</th>
              <th>Write Feedback</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {classes.map((singleClassData, index) => (
              <tr key={singleClassData._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={singleClassData.classImage} alt="Class Image" />
                    </div>
                  </div>
                </td>
                <td>{singleClassData.className}</td>
                <td>{singleClassData.instructorName}</td>
                <td>{singleClassData.instructorEmail}</td>
                <td>
                  {singleClassData.status === "approved" ? (
                    <span className="bg-green-500 py-1 px-2 rounded-md text-white">
                      Approved
                    </span>
                  ) : singleClassData.status === "denied" ? (
                    <span className="bg-red-500 py-1 px-2 rounded-md text-white">
                      Denied
                    </span>
                  ) : (
                    <span className="bg-yellow-500 py-1 px-2 rounded-md text-white">
                      Pending
                    </span>
                  )}
                </td>
                <td>
                  <button

                    onClick={() => makeClassApproved(singleClassData, 0)}
                    title="Give Approval"
                    className="btn btn-sm text-white bg-green-600 hover:text-orange-500 me-2 "
                  >
                    <FaCheckDouble></FaCheckDouble>
                  </button>
                  <button
                    onClick={() => makeClassDenied(singleClassData, 1)}
                    title="Denied Class"
                    className="btn btn-sm bg-red-600 text-white"
                  >
                    <FaTimesCircle></FaTimesCircle>
                  </button>
                </td>
                <td className="text-center">
                  <button
                    //   onClick={()=>handleMakeInstructor(user)}
                    title="Give Feedback"
                    className="btn btn-sm bg-blue-600 text-white"
                  >
                    <FaMarker></FaMarker>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageClasses;
