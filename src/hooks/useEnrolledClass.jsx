import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useEnrolledClass = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: enrolledClasses =[], refetch, isLoading: enrolledClassesLoading} = useQuery({
        queryKey: ['enrollClasses', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async()=>{
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            return res.data;
        }

    })
    return {enrolledClasses, refetch, enrolledClassesLoading};
};

export default useEnrolledClass;