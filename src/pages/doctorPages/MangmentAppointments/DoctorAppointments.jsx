
import { FaCalendarAlt } from 'react-icons/fa';
import StatusInformation from "./StatusInformation";
import AppointmentCard from "./AppointmentCard";
import Loader2 from '../../../components/Loader2';
import useGetTodayAppointments from '../../../hooks/doctors/useGetTodayAppointments';
import MainTitle from "../../../components/MainTitle";
const DoctorAppointments = () => {
    const { appointments, loading, setAppointments } = useGetTodayAppointments();

    return (
        <div className="mx-auto max-w-7xl p-1 md:p-8">
            <MainTitle mainTitle={'Today\'s Appointments'} subTitle={'manages today appointment with all ease'}  />


            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader2 />
                </div>
            ) : appointments?.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {appointments.map(appointment => (

                        <AppointmentCard key={appointment._id} appointment={appointment} appointments={appointments} setAppointments={setAppointments}   />


                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-card rounded-xl shadow-sm border border-gray-100">
                    <FaCalendarAlt className="mx-auto text-5xl text-[var(--main-blue)]  mb-4" />
                    <p className="text-gray-500 text-lg dark:text-popover-foreground">No appointments scheduled for today</p>
                </div>
            )}

         
            <StatusInformation appointmensLength={appointments?.length} />
        </div>
    );
};

export default DoctorAppointments;
