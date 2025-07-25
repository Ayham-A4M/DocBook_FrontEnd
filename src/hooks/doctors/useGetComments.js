
import { useState } from 'react';
import useAxios from '../useAxios';
const useGetComments = () => {
    const [page, setPage] = useState(1);
    const { data, err, loading } = useAxios(`/api/doctor/getComments/?page=${page}`);

    return { comments: data?.comments, rate: data?.rate, limit: data?.limit, totlaComments: data?.totlaComments, page, setPage, err, loading }

}

export default useGetComments