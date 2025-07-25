
import { useState, useEffect } from "react"
import useAxios from "./useAxios"
const useGetMyAppointments = () => {
    // const { url } = useGetEnviromentVariable();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(false);
    const [myAppointments, setMyAppointments] = useState(null);
    const [appointmentStats, setAppointmentStats] = useState(null);
    const [sendingReq, setSendingReq] = useState(false);
    const [appointmentsType, setAppointmentsType] = useState('mixed');
    const { data, err,loading } = useAxios(`/api/user/myappointments/?type=${appointmentsType}&page=${page}`)
    const calculateStats = (appointments) => {
        let canceled = 0
        let confirmed = 0
        let pending = 0
        appointments.map((e) => {
            if (e.status == 'canceled') { canceled++; }
            else if (e.status == 'confirmed') { confirmed++; }
            else {
                pending++;
            }
        })
        setAppointmentStats({ canceled, confirmed, pending, total: appointments.length })
        return null;
    }
    useEffect(() => {
        setSendingReq(true);
        if (data) {
            setMyAppointments(data?.appointments);
            setLimit(data?.limit);
            calculateStats(data?.appointments);
            setSendingReq(false);
        }
    }, [appointmentsType, page, data])



    return { appointments: myAppointments, setAppointments: setMyAppointments, appointmentStats, setAppointmentsType, page, setPage, limit, loading };
}

export default useGetMyAppointments