import { FaUserInjured, FaCalendarAlt, FaClock, FaNotesMedical } from 'react-icons/fa';
import { MdDone, MdOutlineClose } from "react-icons/md";
import handleCancelAppointment from './handler/handleCancelAppointment';
import {
    Card,

} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Report from './Report';


const AppointmentCard = ({ appointment, appointments, setAppointments, setAppointmentId }) => {
    const submitCancelAppointment = async (status, appointmentId) => {
        const response = await handleCancelAppointment(appointmentId);
        if (response) {
            const newAppointments = appointments.map((e) => (
                e._id === appointmentId ? { ...e, status: status } : e
            ));
            setAppointments(newAppointments);
        }
    };
    return (
        <Card className="hover:translate-y-[-10px]  p-6 hover:shadow-md duration-300">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                    <FaUserInjured className="text-[var(--main-blue)] text-xl mr-3" />
                    <h3 className="text-lg font-semibold  text-popover-foreground">{appointment.patientName}</h3>
                </div>
                <span
                    className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${appointment.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : appointment.status === "canceled"
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                >
                    {appointment.status}
                </span>
            </div>

            <div className="space-y-3 text-gray-600 dark:text-slate-300">
                <div className="flex items-center ">
                    <FaClock className="text-blue-600 mr-3" />
                    <span>{appointment.time}</span>
                </div>
                <div className="flex items-center">
                    <FaNotesMedical className="text-blue-600 mr-3" />
                    <span>{appointment.reason}</span>
                </div>
            </div>

            {appointment.status === "pending" && (
                <div className="mt-3 flex gap-3">

                    <Report setAppointmentId={setAppointmentId} appointmentId={appointment._id} setAppointments={setAppointments}/>
                    <Button className="text-white hover:bg-red-600 py-5 bg-red-500 gap-0"
                        onClick={(e) => {
                            e.preventDefault();
                            submitCancelAppointment('canceled', appointment._id);
                        }}
                    >
                        <MdOutlineClose className="mr-2" /> Cancel
                    </Button>
                    
                </div>
    )
}
         
        </Card >
    )
}

export default AppointmentCard