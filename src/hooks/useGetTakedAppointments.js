import { useEffect, useState } from "react"
import useAxios from "./useAxios";
const useGetTakedAppointments = (date, doctorId) => {
    const [takedAppointments, setTakedAppointments] = useState(null); // its for show user which hours cant take appointments
    const { data, err, loading } = useAxios(`/api/user/takedappointments/?date=${date}&doctorId=${doctorId}`)

    useEffect(() => {
        if (data) {
            console.log('taked appointmnets : ', data)
            setTakedAppointments(data)
        }
    }, [data])
    return { takedAppointments, sendReq: loading };
}
export default useGetTakedAppointments