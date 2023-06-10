import React, { useContext } from "react";
import { FaUserTie, FaUsersCog } from "react-icons/fa";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user} = useContext(AuthContext);
  const token =localStorage.getItem('access-token')
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  //   Handle Make Admin Function
  const handleMakeAdmin = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
            title: `${user.name} is an Admin Now!!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //   Handle Make Instructor Function
const handleMakeInstructor = user =>{
  console.log(user)
  fetch(`http://localhost:5000/users/instructors/${user._id}`, {
      method: "PATCH"
  })
  .then(res => res.json())
  .then(data =>{
      console.log(data);
      if(data.modifiedCount){
          refetch();
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is a Instructor Now!!!`,
              showConfirmButton: false,
              timer: 1500
            })
      }
  })
}

  return (
    <>
      <h2 className="font-bold text-2xl text-[#066466]">All Users</h2>
      {/* User Table */}
      <div className="overflow-x-auto w-11/12">
        <table className="table table-zebra">
          {/* head */}
          <thead className="font-bold text-xl">
            <tr className="text-center">
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Current Role</th>
              <th>Admin/Instructor</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>

                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.image} alt="User Image" />
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin"
                    ? "Admin"
                    : user.role === "instructor"
                    ? "Instructor"
                    : " Student"}
                </td>
                <td>
                  <button
                  onClick={()=>handleMakeAdmin(user)}
                    title="Make Admin"
                    className="btn btn-sm text-white bg-[#066466] hover:text-orange-500 me-2 "
                  >
                    <FaUsersCog></FaUsersCog>
                  </button>
                  <button
                  onClick={()=>handleMakeInstructor(user)}
                    title="Make Instructor"
                    className="btn btn-sm bg-orange-400"
                  >
                    <FaUserTie></FaUserTie>
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

export default ManageUsers;
