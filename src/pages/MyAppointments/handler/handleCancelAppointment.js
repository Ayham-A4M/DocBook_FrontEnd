import axios from "axios"
import toast from "react-hot-toast"
import useGetEnviromentVariable from "../../../hooks/useGetEnviromentVariable";
const handleCancelAppointment = (id, setDisableCancelButton, setAppointments) => {
    const { url } = useGetEnviromentVariable();
    if (!id) { toast.error('no specefic appointment'); return }
    const updateStatus = async () => {
        try {
            setDisableCancelButton(true);
            const response = await axios.post(`${url}/api/user/cancelAppointment`, { appointmentId: id }, { withCredentials: true });
            if (response.status === 200) {
                setAppointments(prev => (
                    prev?.map((e) => {
                        if (e._id == id) {
                            e.status = "canceled"
                            return e;
                        }
                        return e;
                    })
                ))
                return response
            }

        } catch (err) {
            throw err
        } finally {
            setDisableCancelButton(false);
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