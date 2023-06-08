import React from "react";
import { FaPenSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyClasses = () => {
    return (
        <>
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
            {/* row 1 */}
            <tr>
              <th>
                <h2>1</h2>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </td>
              <td>Pending</td>
              <td>200</td>
              <td>Outstanding</td>
              <td>
                <Link className="btn btn-sm bg-[#066466] text-white"><FaPenSquare></FaPenSquare> Update</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
    );
};

export default MyClasses;