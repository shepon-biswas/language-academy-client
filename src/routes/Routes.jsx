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
import Checkout from '../pages/Payment/Checkout';
import AdminRoute from './AdminRoute';
import InstructorRoute from './InstructorRoute';
import StudentRoute from './StudentRoute';
import TransactionHistory from '../pages/Dashboard/Students/TransactionHistory';

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
          element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
        },
        {
          path: "my-classes",
          element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: "update-classes/:id",
          element:<InstructorRoute><UpdateClasses></UpdateClasses></InstructorRoute>,
          loader: ({params}) => fetch(`https://fluent-language-academy-server.vercel.app/classes/${params.id}`)
        },
        {
          path: "manage-users",
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: "manage-classes",
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path: "selected-classes",
          element:<StudentRoute><SelectedClass></SelectedClass></StudentRoute>
        },
        {
          path: "enrolled-classes",
          element:<StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>
        },
        {
          path: "checkout/:id",
          element: <StudentRoute><Checkout></Checkout></StudentRoute>,
          loader: ({params}) => fetch(`https://fluent-language-academy-server.vercel.app/carts/${params.id}`)
        },
        {
          path: "transaction",
          element: <StudentRoute><TransactionHistory></TransactionHistory></StudentRoute>
        }
      ]
    },
    {
      path:"*",
      element: <ErrorPage></ErrorPage>
    }

  ]);

export default router;