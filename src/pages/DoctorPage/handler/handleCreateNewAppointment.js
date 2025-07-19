import axios from "axios";
import toast from "react-hot-toast"
import useGetEnviromentVariable from '../../../hooks/useGetEnviromentVariable'
import { format } from "date-fns";
const handleCreateNewAppointment = async (doctorId, fee, date, time, reason, paymentWay) => {
 
    const { url } = useGetEnviromentVariable();
 
    // console.log(doctorId,fee,date,time)
    
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
        const response = await axios.post(`${url}/api/user/takeappointment`, { doctorId, date_time: `${format(date,'yyyy-MM-dd')} ${time?.displayTime}`, date, time:time.isoTime, fee, reason, paymentWay }, { withCredentials: true });
        if (response.data.url) { //for stripe payment
            window.location = response.data.url
        }
        if (response.status === 200) {
            console.log('response');
            return response.data.msg 
           
        }
    } catch (err) {
        toast.error(err.response.data.msg);
    }
}
export default handleCreateNewAppointment