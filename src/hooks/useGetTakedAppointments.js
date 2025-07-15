import { useEffect, useState } from "react"
import axios from "axios";
import useGetEnviromentVariable from "./useGetEnviromentVariable";
const useGetTakedAppointments = (date, doctorId) => {
    const { url } = useGetEnviromentVariable();
    const [takedAppointments, setTakedAppointments] = useState(null); // its for show user which hours cant take appointments
    const [sendReq,setSendReq]=useState(false);
    useEffect(() => {
        const getTakedTimes = async () => {
            try {
                const response = await axios.get(`${url}/api/user/takedappointments/?date=${date}&doctorId=${doctorId}`, { withCredentials: true });
                if(response.status===200){
                    setTakedAppointments(response.data);
                }
            } catch (err) {
                console.log(err);
            }finally{
                setSendReq(false);
            }

        }
        if (date && doctorId) { setSendReq(true);getTakedTimes(); }
    }, [date])
    return {takedAppointments,sendReq};
}
export default useGetTakedAppointments