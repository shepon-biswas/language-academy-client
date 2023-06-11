import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const useInstructors = () => {

    const {data: instructors= [], refetch, isLoading: loading } = useQuery({
        queryKey: ['instructors'],
        queryFn: async()=>{
                const res = await axios.get(`http://localhost:5000/users/instructors`)
                return res.data;
        }
    })
    return { instructors, refetch, loading}
};

export default useInstructors;