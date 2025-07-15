import TableHead from './TableHead';
import TableRow from './TableRow';
import useGetMyAppointments from '../../hooks/useGetMyAppointments';
import FilterButton from './FilterButton';
import PaginationButtons from '../../components/PaginationButtons';
import Loader2 from '../../components/Loader2'
import Header from './Header';
import StatsCard from '../../components/StatsCard';
import MainTitle from '../../components/MainTitle'

const MyAppointments = () => {

    const { appointments, appointmentStats, setAppointmentsType, page, setPage, limit, sendingReq } = useGetMyAppointments();

    return (

        <div className="py-3  mb-8  mx-auto">

            {
                (appointments && appointmentStats) &&
                <>
                    <MainTitle mainTitle={'Appointment Tracker'} subTitle={'View and manage your medical visits'}/>
                    {/* Stats Cards */}
                    <div className="grid  md:grid-cols-4 grid-cols-2 gap-4 mb-6">
                        <StatsCard status={'Appointments'} borderColor={'border-blue-400'} value={appointmentStats.total}/>
                        <StatsCard status={'Confirmed'} borderColor={'border-green-500'} value={appointmentStats.confirmed}/>
                        <StatsCard status={'Pending'} borderColor={'border-yellow-500'} value={appointmentStats.pending}/>
                        <StatsCard status={'Canceled'} borderColor={'border-red-500'} value={appointmentStats.canceled}/>
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
                            <table className="min-w-full divide-y divide-gray-200">
                                <TableHead />
                                {
                                    sendingReq ?
                                        <tbody className="w-full">

                                            <tr>
                                                <td colSpan={6} className="py-6 w-full">
                                                    <div className="flex justify-center items-center h-full">
                                                        <Loader2 />
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>
                                        :
                                        <tbody className=" divide-y divide-gray-200">
                                            {

                                                appointments.map((appointment) => (
                                                    <TableRow dcotorName={appointment.doctorName} fee={appointment.fee} date={appointment.date} time={appointment.time} specialization={appointment.doctorSpecialization} status={appointment.status} image={appointment.doctorImage} id={appointment._id} key={appointment._id} />
                                                ))
                                            }
                                        </tbody>
                                }

                            </table>
                        </div>

                        <PaginationButtons page={page} setPage={setPage} limit={limit} />
                    </div>
                </>
            }



        </div>
    );
};

export default MyAppointments;