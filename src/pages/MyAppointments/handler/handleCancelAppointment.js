import axios from "axios"
import toast from "react-hot-toast"
import useGetEnviromentVariable from "../../../hooks/useGetEnviromentVariable";
const handleCancelAppointment =(id) => {
    const { url } = useGetEnviromentVariable();
    if (!id) { toast.error('no specefic appointment'); return }
    const updateStatus = async () => {
        try {
            const response = await axios.post(`${url}/api/user/cancelAppointment`, { appointmentId: id }, { withCredentials: true });
            if (response.status === 200) { return response }
            
        } catch (err) {
             throw err 
        }
    }
    
        toast.promise(
            updateStatus(),
            {
                loading: 'just a moment ...',
                success: 'Appointment canceled',
                error: 'Failed to cancel appointment',
            }
        )

}
export default handleCancelAppointment