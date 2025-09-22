import { useState, useLayoutEffect } from "react"
import axiosInstance from "../helper/axiosInterceptor";
const useGetUser = () => {
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);
    useLayoutEffect(() => {
        const getUser = async () => {
            try {
                const response = await axiosInstance.get(`/api/auth/getuser`);
                if (response.status <400) {
                    setUser(response.data.user);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoadingUser(false);
            }
        }
        getUser();
    }, [])

    return { user, setUser, loadingUser }
}

export default useGetUser