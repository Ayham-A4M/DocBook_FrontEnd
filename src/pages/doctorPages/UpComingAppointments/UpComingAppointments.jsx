import { useMemo, useState } from "react"
import MainTitle from "../../../components/MainTitle"
import useAxios from '../../../hooks/useAxios'
import { useDebounce } from "use-debounce";
import Loader2 from "../../../components/Loader2";
import AppointmentsData from "./AppointmentsData";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarDays } from "react-icons/fa6";
import { format } from "date-fns";
const UpComingAppointments = () => {
    const [date, setDate] = useState(new Date());
    const [dateDebounce] = useDebounce(date, 2000);
    const { data, loading, err } = useAxios(`/api/doctor/bookings/?date=${dateDebounce}`, true);
    const isValidDay = (date) => (
        data?.workingDays?.includes(format(date, 'EEE').toLowerCase())
    )

    return (
        <div className="flex-1 p-1 md:p-8 w-full">
            <MainTitle mainTitle={'Your schedule this month'} subTitle={'View your upcoming appointments for current month'} />
            <div className="bg-card rounded-lg py-8 shadow-sm mb-12">
                <div className="pb-6  px-2 md:px-8 border-b-[1px] border-gray-100 flex flex-col md:flex-row md:justify-between ">
                    <div className="flex w-fit flex-col gap-2">
                        <span className="italic font-light">Filter by Date :</span>
                        <div className="w-fit relative">
                            <FaCalendarDays className="text-[var(--main-blue)] absolute top-[50%] left-[10px] translate-y-[-50%]" />
                            <DatePicker
                                className='inputStyle'
                                selected={date}
                                filterDate={isValidDay}
                                onChange={(date) => setDate(date)}
                                placeholderText="select date"
                            />
                        </div>
                    </div>
                    <div className="flex w-fit flex-col gap-2">
                        <span className="font-light italic">Working Days</span>
                        {
                            data?.workingDays?.length > 0 && data.workingDays ?
                                <div className="flex gap-1 items-center">
                                    {
                                        data?.workingDays.map((e, index) => (
                                            <span key={index} className="font-light italic capitalize text-[var(--main-blue)]">• {e}</span>
                                        ))
                                    }
                                </div>
                                :
                                <span>No Working Days</span>

                        }
                    </div>
                </div>
                <div className="overflow-x-auto ">

                    <table className="w-full text-left md:min-w-[700px] min-w-[950px]">
                        <thead className="px-2">
                            <tr className="text-gray-500 dark:text-gray-200 text-sm uppercase tracking-wide border-b border-gray-200">
                                <th className="py-3 px-4 text-center">Name</th>
                                <th className="py-3 px-4 text-center">Phone</th>
                                <th className="py-3 px-4 text-center">Reason</th>
                                <th className="py-3 px-4 text-center">Date</th>
                                <th className="py-3 px-4 text-center">Time</th>
                                <th className="py-3 px-4 text-center">PaymentWay</th>
                                <th className="py-3 px-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading
                                    ?
                                    <tr >
                                        <td className="py-4 text-center" colSpan={7}>
                                            <Loader2 />
                                        </td>
                                    </tr>
                                    :
                                    <AppointmentsData appointments={data?.appointments} />

                            }
                        </tbody>
                    </table>


                </div>
                <div className="flex justify-end py-3 px-3 w-full">
                    <span className="italic font-light">Appointments for this Month : <span className="text-[var(--main-blue)]">{data?.countOfAppointmentsThisMonth}</span></span>
                </div>

            </div>

        </div>

    )
}

export default UpComingAppointments