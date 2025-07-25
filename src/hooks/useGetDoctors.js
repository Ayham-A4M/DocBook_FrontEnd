
import { useEffect, useState } from "react"
import useAxios from "./useAxios";
import { useDebounce } from "use-debounce";
const useGetDoctors = () => {
    const [searchByName, setSearchByName] = useState('');
    const [searchDebounce] = useDebounce(searchByName, 2000);
    const [finalSearchByName, setFinalSearchByName] = useState('');
    const [specialize, setSpecialize] = useState(null);
    const [page,setPage]=useState(1);
    const { data, err, loading } = useAxios(`/api/user/getdoctors/?fullName=${finalSearchByName}&page=${page || 1}&specialization=${specialize?specialize:'default'}`);
    useEffect(() => {
        setFinalSearchByName(searchDebounce);
    }, [searchDebounce])
    return { doctors:data?.doctors,limit:data?.limit, loading, setSpecialize, setSearchByName,searchByName,page,setPage }
}
export default useGetDoctors