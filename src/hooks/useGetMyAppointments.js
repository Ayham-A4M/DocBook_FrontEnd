import useGetEnviromentVariable from "./useGetEnviromentVariable"
import axios from "axios"
import toast from "react-hot-toast"
import { useState, useEffect } from "react"
const useGetMyAppointments = () => {
    const { url } = useGetEnviromentVariable();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(false);
    const [myAppointments, setMyAppointments] = useState(null);
    const [appointmentStats, setAppointmentStats] = useState(null);
    const [sendingReq,setSendingReq]=useState(false);
    const [appointmentsType, setAppointmentsType] = useState('mixed');
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
        const getAppointments = async () => {
            try {
                setSendingReq(true);
                const response = await axios.get(`${url}/api/user/myappointments/?type=${appointmentsType}&page=${page}`, { withCredentials: true });
                if (response.status === 200) {
                    setMyAppointments(response.data.appointments);
                    setLimit(response.data.limit);
                    calculateStats(response.data.appointments);
                }
            } catch (err) {
                
                toast.error(err.response?.data?.msg);
            }finally{
                setSendingReq(false);
            }
        }
        getAppointments();
    }, [appointmentsType, page])
    return { appointments: myAppointments, appointmentStats, setAppointmentsType, page, setPage,limit,sendingReq };
}

export default useGetMyAppointments