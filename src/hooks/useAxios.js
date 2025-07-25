import axiosInstance from "../helper/axiosInterceptor";
import { useEffect, useState, useRef } from "react"
const useAxios = (api, withCredentials = true) => {
    const [data, setData] = useState(null);
    const [err, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const abortControllerRef = useRef(new AbortController());
    useEffect(() => {
        const getData = async () => {

            try {
                setLoading(prev => !prev);
                const response = await axiosInstance.get(`${api}`, { signal: abortControllerRef.current.signal });
                if (response.status == 200) {
                    setData(response.data);
                }
            } catch (err) {

                setError(err);

            } finally {
                setLoading(prev => !prev)
            }
        }
        getData();

        return () => {
            abortControllerRef.current.abort();
            abortControllerRef.current = new AbortController();
        };
    }, [api])

    return { data, err, loading }
}

export default useAxios
