import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useRole from "../hooks/useRole";
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

const StudentRoute = () => {
    const { user, loading } = useContext(AuthContext);

    const [role, isRoleLoading] = useRole();
  
    const naviagte = useNavigate();
  
    if (loading || isRoleLoading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          ></ThreeCircles>
        </div>
      );
    }
  
    if (user && role==='student') {
      return children;
    }


    return naviagte("/")
};

export default StudentRoute;