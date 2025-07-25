import axiosInstance from "../../../../helper/axiosInterceptor";
import toast from "react-hot-toast";

const handleCancelAppointment = async (appointmentId) => {
    try {
        const response = await axiosInstance.post(`/api/doctor/cancelAppointment`, { appointmentId });
        if (response.status === 200) {
            toast.success(response.data.msg);
            return true;
        }
    } catch (err) {
        toast.error(err.response.data.msg);
    }
}

export default handleCancelAppointment