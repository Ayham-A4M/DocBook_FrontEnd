import { FaCreditCard } from "react-icons/fa6";
import Title from "./Title";
import { endOfMonth, format } from "date-fns";
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosClock } from "react-icons/io";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { useState, useMemo } from "react";
import Loader2 from "../../../components/Loader2";
import handleCreateNewAppointment from "./handler/handleCreateNewAppointment";
import useGetTakedAppointments from "../../../hooks/useGetTakedAppointments";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const TakeAppointment = ({ nextHolidays, workingDays, doctorId, fee }) => {
    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [time, setTime] = useState(null);
    const [paymentWay, setPaymentWay] = useState(null);
    const [reason, setReason] = useState('');
    const { takedAppointments, sendReq } = useGetTakedAppointments(date, doctorId);
    const times = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 AM'];

    const isNotHoliday = (date) => {
        return nextHolidays?.every((e) => (
            e.date != format(date, 'yyyy-MM-dd')
        ))
    };
    const isValidDay = useMemo(() => {
        return (date) => {
            const isvalid = workingDays?.includes(format(date, 'EEE').toLowerCase()) && isNotHoliday(date) && (
                format(date, 'yyyy-MM-dd') >= format(new Date(), 'yyyy-MM-dd') && format(date, 'yyyy-MM-dd') <= format(endOfMonth(new Date()), 'yyyy-MM-dd')
            )
            return isvalid;
        }
    }
        , [workingDays])

        
    return (
        <div className="w-full bg-card  p-3  rounded-2xl shadow-lg flex flex-col gap-6">
            {/* Days Section */}
            <Title title="Select Day" icon={<IoCalendarOutline className="text-2xl  " />} />
            <div className="w-fit relative">
                <IoCalendarOutline className="text-[var(--main-blue)] absolute top-[50%] left-[10px] translate-y-[-50%]" />
                <DatePicker
                    className='inputStyle w-full pl-0'
                    selected={date}
                    onChange={(date) => { setTime(''); setDate(format(date, 'yyyy-MM-dd')) }}
                    filterDate={isValidDay}
                    placeholderText="Select appointment date"
                />
            </div>

            {/* Time Section */}
            <Title title="Select Time" icon={<IoIosClock className="text-2xl " />} />
            {sendReq ? (
                <div className="flex justify-center py-10">
                    <Loader2 />
                </div>
            ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {times.map((e, i) => {
                        const status = takedAppointments?.some((ele) => ele.time === e);
                        return (
                            <button
                                key={i}
                                disabled={status}
                                onClick={(ev) => { ev.preventDefault(); setTime(e); }}
                                className={`py-2 px-3   rounded-lg text-sm font-medium transition-all duration-300 ${time === e
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : status
                                        ? 'bg-gray-300 cursor-not-allowed text-gray-500 '
                                        : 'bg-blue-50 text-blue-600 cursor-pointer hover:bg-blue-100 hover:shadow-sm'
                                    }`}
                            >
                                {e.split(' ').map((part, j) => (
                                    <span key={j} className="block">{part}</span>
                                ))}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Reason Section */}
            <Title title="Reason for Visit" icon={<BsFillPatchQuestionFill className="text-2xl" />} />
            <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Reason to visit doctor"
                className="inputStyle"
                style={{ paddingLeft: '15px' }}
            />

            {/* Payment Section */}
            <Title title="Payment Method" icon={<FaCreditCard className="text-2xl" />} />
            <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="paymentWay"
                        value="cash"
                        onClick={(e) => setPaymentWay(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 dark:text-gray-400 font-medium">Cash</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="radio"
                        name="paymentWay"
                        value="stripe"
                        onClick={(e) => setPaymentWay(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 dark:text-gray-400 font-medium">Stripe</span>
                </label>
            </div>

            {/* Submit Button */}
            <button
                onClick={async (e) => {
                    e.preventDefault();
                    const response = await handleCreateNewAppointment(doctorId, fee, date, time, reason, paymentWay);
                    if (response) {
                        return navigate(`/successfulOperation`, { replace: true, state: { OKMSG: response } });
                    }
                }}
                className="submitButton"
            >
                Book Appointment
            </button>
        </div>
    );
};

export default TakeAppointment;