import toast from "react-hot-toast"
import axiosInstance from "../../../../helper/axiosInterceptor";
const handleCreateNewAppointment = async (doctorId, fee, date, time, reason, paymentWay) => {
    try {
        if (!time || !date) {
            toast.error('date or time not selected !')
            return null;
        }
        if (!reason) {
            toast.error('you must type the reason !')
            return null;
        }
        if (!paymentWay) {
            toast.error('you must choose payment way Stripe or Cash');
            return null;
        }
        const response = await axiosInstance.post(`/api/user/takeappointment`, { doctorId, date_time: `${date} ${time}`, date, time, fee, reason, paymentWay });
        if (response.data.url) { //for stripe payment
            window.location = response.data.url
        }
        if (response.status === 200) {
            return response.data.msg

        }
    } catch (err) {
        toast.error(err.response.data.msg);
    }
}
export default handleCreateNewAppointment