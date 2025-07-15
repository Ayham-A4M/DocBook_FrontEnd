import { useEffect, useState } from "react"
import { format } from 'date-fns';
import useAxios from "../useAxios";

const useGetTodayAppointments = () => {

    const date = format(new Date(), 'yyyy-MM-dd');
    const [appointments, setAppointments] = useState(null);
    
    const { data, err, loading } = useAxios(`/api/doctor/doctorAppointments/?date=${date}`, true);
    useEffect(()=>{
        if(data){
            setAppointments(data)
        }
    },[data])

    return { appointments, loading,setAppointments };
}

export default useGetTodayAppointments