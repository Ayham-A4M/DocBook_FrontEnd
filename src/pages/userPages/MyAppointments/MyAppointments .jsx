import TableHead from './TableHead';
import TableRow from './TableRow';
import useGetMyAppointments from '../../../hooks/useGetMyAppointments'
import FilterButton from './FilterButton';
import PaginationButtons from '../../../components/PaginationButtons';
import Loader2 from '../../../components/Loader2'
import StatsCard from '../../../components/StatsCard';
import MainTitle from '../../../components/MainTitle'
import { memo, useEffect } from "react"
const MyAppointments = () => {


    const { appointments, setAppointments, appointmentStats, setAppointmentsType, page, setPage, limit, loading } = useGetMyAppointments();
    useEffect(() => {
        console.log('loading',loading)

    }, [loading])
    return (

        <div className="py-3  mb-8  mx-auto">

            {

                <>
                    <MainTitle mainTitle={'Appointment Tracker'} subTitle={'View and manage your medical visits'} />
                    {/* Stats Cards */}
                    <div className="grid  md:grid-cols-4 grid-cols-2 gap-4 mb-6">
                        <StatsCard status={'Appointments'} borderColor={'border-blue-400'} value={appointmentStats?.total || 0} />
                        <StatsCard status={'Confirmed'} borderColor={'border-green-500'} value={appointmentStats?.confirmed || 0} />
                        <StatsCard status={'Pending'} borderColor={'border-yellow-500'} value={appointmentStats?.pending || 0} />
                        <StatsCard status={'Canceled'} borderColor={'border-red-500'} value={appointmentStats?.canceled || 0} />
                    </div>

                    {/* Appointments Table */}
                    <div className="bg-card rounded-xl shadow overflow-hidden">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="font-semibold text-lg">Upcoming Visits</h2>
                            <div className='flex items-center gap-4 max-[600px]:flex-wrap max-[600px]:justify-end cursor-pointer'>
                                <FilterButton name={'mixed'} color={'bg-gray-500'} setAppointmentsType={setAppointmentsType} setPage={setPage} />
                                <FilterButton name={'confirmed'} color={'bg-green-500'} setAppointmentsType={setAppointmentsType} setPage={setPage} />
                                <FilterButton name={'pending'} color={'bg-yellow-400'} setAppointmentsType={setAppointmentsType} setPage={setPage} />
                                <FilterButton name={'canceled'} color={'bg-red-500'} setAppointmentsType={setAppointmentsType} setPage={setPage} />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[650px] divide-y divide-gray-200">
                                <TableHead />
                                <tbody className=" w-full divide-y divide-gray-200">
                                    {
                                        loading ?

                                            <tr>
                                                <td colSpan={7} className="py-6 w-full">
                                                    <div className="flex justify-center items-center h-full">
                                                        <Loader2 />
                                                    </div>
                                                </td>
                                            </tr>

                                            :
                                            appointments && appointments.length > 0 ?

                                                appointments?.map((appointment) => (
                                                    <TableRow dcotorName={appointment.doctorName} fee={appointment.fee} date={appointment.date} time={appointment.time} specialization={appointment.doctorSpecialization} status={appointment.status} image={appointment.doctorImage} id={appointment._id} setAppointments={setAppointments} />
                                                ))
                                                :
                                                <tr >
                                                    <td className='text-slate-500  text-center py-6 dark:text-slate-300' colSpan={7}>
                                                        No appointments
                                                    </td>
                                                </tr>
                                    }
                                </tbody>

                            </table>
                        </div>

                        <PaginationButtons page={page} setPage={setPage} limit={limit} />
                    </div>
                </>
            }



        </div>
    );

};

export default memo(MyAppointments);