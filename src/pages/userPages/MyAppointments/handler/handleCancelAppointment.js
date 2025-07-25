import axiosInstance from "../../../../helper/axiosInterceptor";
import toast from "react-hot-toast"
const handleCancelAppointment = (id, setDisableCancelButton, setAppointments) => {
    if (!id) { toast.error('no specefic appointment'); return }
    const updateStatus = async () => {
        try {
            setDisableCancelButton(true);
            const response = await axiosInstance.post(`/api/user/cancelAppointment`, { appointmentId: id });
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