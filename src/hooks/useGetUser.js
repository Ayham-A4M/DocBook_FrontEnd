import { useState, useLayoutEffect } from "react"
import axios from "axios";
import useGetEnviromentVariable from "./useGetEnviromentVariable";
const useGetUser = () => {
    const [user, setUser] = useState(null);
    const [loadingUser,setLoadingUser]=useState(true);
    const { url } = useGetEnviromentVariable();
    useLayoutEffect(() => {
        const getUser = async () => {
            try{
                const response=await axios.get(`${url}/api/auth/getuser`,{withCredentials:true});
                if(response.status===200){
                    setUser(response.data.user);
                }
            }catch(err){
                console.log(err);
            }finally{
                setLoadingUser(false);
            }
        }
        getUser();
    },[])

    return { user, setUser,loadingUser }
}

export default useGetUser