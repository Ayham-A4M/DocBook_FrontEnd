import axiosInstance from "../../../../helper/axiosInterceptor";
import toast from "react-hot-toast"
import { format } from "date-fns";
// note its svae report update appointment to confirm and increament doctor patientTreatments by 1
const handleSaveReport = async (report, appointmentId) => {
    const date =format(new Date(),'yyyy-MM-dd');
    try {
        const response = await axiosInstance.post(`/api/doctor/confirmAppointment`, { report: { ...report, date: date }, appointmentId })
        if (response.status == 200) {
            toast.success(response.data.msg);
            return true;
        }
    } catch (err) {
        toast.error(err.response.data.msg);
    }
}

export default handleSaveReport