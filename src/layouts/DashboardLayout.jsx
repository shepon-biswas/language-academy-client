import React from "react";
import {
  FaCheckDouble,
  FaClipboardList,
  FaEdit,
  FaFolderPlus,
  FaHome,
  FaIndent,
  FaListAlt,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";

const DashboardLayout = () => {
  const [role] = useRole();

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#06646620] text-base-content">
            {/* Sidebar content here */}
            <h2 className="text-xl font-bold text-[#066466]">
              Fluent Language Academy
            </h2>
            <div className="divider"></div>
            <div>
              {role==='admin' ? (
                <>
                  <li className="font-semibold">
                    <NavLink to={"/dashboard/manage-classes"}>
                      <FaEdit></FaEdit> Manage Classes
                    </NavLink>
                  </li>
                  <li className="font-semibold">
                    <NavLink to={"/dashboard/manage-users"}>
                      <FaUsers></FaUsers> Manage Users
                    </NavLink>
                  </li>
                </>
              ) : role==='instructor' ? (
                <>
                  <li className="font-semibold">
                    <NavLink to={"/dashboard/add-classes"}>
                      <FaFolderPlus></FaFolderPlus> Add A Class
                    </NavLink>
                  </li>
                  <li className="font-semibold">
                    <NavLink to={"/dashboard/my-classes"}>
                      <FaClipboardList></FaClipboardList> My Classes
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="font-semibold">
                    <NavLink to={"/dashboard/selected-classes"}>
                      <FaListAlt></FaListAlt> Selected Classes
                    </NavLink>
                  </li>
                  <li className="font-semibold">
                    <NavLink to={"/dashboard/enrolled-classes"}>
                      <FaCheckDouble></FaCheckDouble> Enrolled Classes
                    </NavLink>
                  </li>
                  <li className="font-semibold">
                    <NavLink to={"/dashboard/transaction"}>
                      <FaClipboardList></FaClipboardList> Payment History
                    </NavLink>
                  </li>
                </>
              )}
            </div>

            <div className="mt-20">
              <div className="divider"></div>
              <li className="font-semibold">
                <NavLink to={"/"}>
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
              <li className="font-semibold">
                <NavLink to={"/instructors"}>
                  <FaUserTie></FaUserTie>Instructors
                </NavLink>
              </li>
              <li className="font-semibold">
                <NavLink to={"/classes"}>
                  <FaIndent></FaIndent>Classes
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
