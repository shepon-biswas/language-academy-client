import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home/Home';
import Instructors from '../pages/Instructors/Instructors';
import Classes from '../pages/Classes/Classes';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import DashboardLayout from '../layouts/DashboardLayout';
import MyClasses from '../pages/Dashboard/Instructors/MyClasses';
import AddClasses from '../pages/Dashboard/Instructors/AddClasses';
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers';
import ManageClasses from '../pages/Dashboard/Admin/ManageClasses';
import UpdateClasses from '../pages/Dashboard/Instructors/UpdateClasses';
import PrivateRoute from './PrivateRoute';
import SelectedClass from '../pages/Dashboard/Students/SelectedClass';
import EnrolledClasses from '../pages/Dashboard/Students/EnrolledClasses';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/instructors",
            element: <Instructors></Instructors>
        },
        {
            path: "/classes",
            element: <Classes></Classes>
        }
      ]
    },
    {
        path:"/registration",
        element: <Registration></Registration>
    },
    {
        path:"/login",
        element: <Login></Login>
    },
    {
      path:"dashboard",
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children:[
        {
          path:"add-classes",
          element: <AddClasses></AddClasses>
        },
        {
          path: "my-classes",
          element:<MyClasses></MyClasses>
        },
        {
          path: "update-classes/:id",
          element:<UpdateClasses></UpdateClasses>,
          loader: ({params}) => fetch(`http://localhost:5000/classes/${params.id}`)
        },
        {
          path: "manage-users",
          element:<ManageUsers></ManageUsers>
        },
        {
          path: "manage-classes",
          element:<ManageClasses></ManageClasses>
        },
        {
          path: "selected-classes",
          element:<SelectedClass></SelectedClass>
        },
        {
          path: "enrolled-classes",
          element:<EnrolledClasses></EnrolledClasses>
        }
      ]
    },
    {
      path:"*",
      element: <ErrorPage></ErrorPage>
    }

  ]);

export default router;