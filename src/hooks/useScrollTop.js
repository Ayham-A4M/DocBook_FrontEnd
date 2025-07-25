import { useEffect } from "react";
import { useLocation } from "react-router-dom"
const useScrollToUp=()=>{
    const path=useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[path])
}
export default useScrollToUp