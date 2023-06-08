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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
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
      element: <DashboardLayout></DashboardLayout>,
      children:[
        {
          path:"add-classes",
          element: <AddClasses></AddClasses>
        },
        {
          path: "my-classes",
          element:<MyClasses></MyClasses>
        }
      ]
    }

  ]);

export default router;