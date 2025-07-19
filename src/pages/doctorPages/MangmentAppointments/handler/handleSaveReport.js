import useGetEnviromentVariable from "../../../../hooks/useGetEnviromentVariable"
import axios from "axios"
import toast from "react-hot-toast"
import { format } from "date-fns"
// note its svae report update appointment to confirm and increament doctor patientTreatments by 1
const handleSaveReport = async (report, appointmentId) => {
    const { url } = useGetEnviromentVariable()
    const date =new Date();
    try {
        const response = await axios.post(`${url}/api/doctor/confirmAppointment`, { report: { ...report, date: date }, appointmentId }, { withCredentials: true })
        if (response.status == 200) {
            toast.success(response.data.msg);
            return true;
        }
    } catch (err) {
        toast.error(err.response.data.msg);
    }
}

export default handleSaveReport