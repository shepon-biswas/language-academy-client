import axios from 'axios';
import { useQuery } from 'react-query';

const useClasses = (status) => {
    const {data: classes= [], refetch, isLoading: loading } = useQuery({
        queryKey: ['classes', status],
        queryFn: async()=>{
            if(!status){
                const res = await axios.get(`https://fluent-language-academy-server.vercel.app/classes`)
                return res.data
            }else{
                const res = await axios.get(`https://fluent-language-academy-server.vercel.app/classes?status=${status}`)
                return res.data;
            }
        }
    })
    return { classes, refetch, loading}
};

export default useClasses;