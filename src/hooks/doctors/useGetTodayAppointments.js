import { useEffect, useState, useMemo } from "react"
import useAxios from "../useAxios";
import { format } from "date-fns";

const useGetTodayAppointments = () => {
    const date = format(new Date(), 'yyyy-MM-dd');
    const [appointments, setAppointments] = useState(null);
    const { data, err, loading } = useAxios(`/api/doctor/doctorAppointments/?date=${date}`);
    useEffect(() => {
        if (data) {
            setAppointments(data)
        }
    }, [data])

    return { appointments, loading, setAppointments };
}

export default useGetTodayAppointments