import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { ThreeCircles } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return (<div className='flex justify-center items-center h-screen'>
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
        </div>);
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to={'/login'} replace></Navigate>;
};

export default PrivateRoute;