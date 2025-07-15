import axios from "axios"
import useGetEnviromentVariable from "../../../../hooks/useGetEnviromentVariable"
import toast from "react-hot-toast";

const handleCancelAppointment = async (appointmentId) => {
    const { url } = useGetEnviromentVariable();
    try {
        const response = await axios.post(`${url}/api/doctor/cancelAppointment`, { appointmentId }, { withCredentials: true });
        if (response.status === 200) {
            toast.success(response.data.msg);
            return true;
        }
    } catch (err) {
        toast.error(err.response.data.msg);
    }
}

export default handleCancelAppointment