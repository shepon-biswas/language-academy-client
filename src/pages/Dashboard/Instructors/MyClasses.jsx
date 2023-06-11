import React from "react";
import { FaPenSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import useClasses from "../../../hooks/useClasses";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const { classes, refetch } = useClasses();
  return (
    <>
    <Helmet>
      <title>My Classes | Fluent Language Acamedy</title>
    </Helmet>
      <h3 className="font-bold text-2xl text-[#066466]">My All Classes</h3>
      <div className="overflow-x-auto w-10/12">
        <table className="table">
          {/* head */}
          <thead className="font-bold text-base">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Total Students Enrolled</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClassData, index) => (
              <tr key={singleClassData._id}>
                <th>
                  <h2>{index + 1}</h2>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={singleClassData.classImage}
                          alt="Classes Image"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{singleClassData.className}</div>
                  </div>
                </td>
                <td>
                  {singleClassData.status === "pending" ? (
                    <span className="bg-yellow-500 p-2 rounded-md text-white">
                      Pending
                    </span>
                  ) : singleClassData.status === "approved" ? (
                    <span className="bg-green-500 p-2 rounded-md text-white">
                      Approved
                    </span>
                  ) : singleClassData.status === "denied" ? (
                    <span className="bg-red-500 p-2 rounded-md text-white">
                      Denied
                    </span>
                  ) : (
                    ""
                  )}
                </td>
                <td>{singleClassData.seats}</td>
                <td>Outstanding</td>
                <td>
                  <button>
                    <Link to={`/dashboard/update-classes/${singleClassData._id}`} className="btn btn-sm bg-[#066466] text-white">
                      <FaPenSquare></FaPenSquare> Update
                    </Link>
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

export default MyClasses;
