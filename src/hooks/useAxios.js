import axios from "axios"
import useGetEnviromentVariable from "./useGetEnviromentVariable"
import { useEffect, useState, useRef } from "react"
const useAxios = (api, withCredentials = true) => {
    const { url } = useGetEnviromentVariable();
    const [data, setData] = useState(null);
    const [err, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const abortControllerRef = useRef(new AbortController());

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const fullUrl = `${url}${api}`
            try {
                const response = await axios.get(fullUrl, { withCredentials: withCredentials, signal: abortControllerRef.current.signal });
                if (response.status == 200) {
                    console.log(response)
                    setData(response.data);
                }
            } catch (err) {
            
                setError(err);
                
            } finally {
                setLoading(false)
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
