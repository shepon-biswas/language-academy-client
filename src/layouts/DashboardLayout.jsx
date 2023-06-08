import React from "react";
import { FaBookOpen, FaClipboardList, FaFolderPlus } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
            <h2 className="text-xl font-bold text-[#066466]">Fluent Language Academy</h2>
            <div className="divider"></div>
            <li className="font-semibold">
              <NavLink to={"/dashboard/add-classes"}> <FaFolderPlus></FaFolderPlus> Add A Class</NavLink>
            </li>
            <li className="font-semibold">
              <NavLink to={"/dashboard/my-classes"}><FaClipboardList></FaClipboardList> My Classes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
