import {useState } from "react"
import useUser from "./useUser";
import { useLayoutEffect } from "react"
const useGetRole = () => {
    const [role,setRole]=useState(false);
    const {user,setUser}=useUser();
    useLayoutEffect(() => {
        user?setRole(user?.role):setRole(false);
    }, [user])
    return role
}
export default useGetRole