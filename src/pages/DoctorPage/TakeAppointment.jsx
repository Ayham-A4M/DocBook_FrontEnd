
import { nextFriday, nextMonday, nextSaturday, nextWednesday, nextSunday, nextThursday, nextTuesday, isSunday, isTuesday, isMonday, isWednesday, isThursday, isFriday, isSaturday } from "date-fns";
import { FaUserInjured, FaClock, FaCreditCard } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import Title from "./Title";
import { format } from "date-fns";
import { useState } from "react";
import Loader2 from "../../components/Loader2";
import handleCreateNewAppointment from "./handler/handleCreateNewAppointment";
import useGetTakedAppointments from "../../hooks/useGetTakedAppointments";
import { useNavigate } from "react-router-dom";

const TakeAppointment = ({ nextHolidays, workingDays, doctorId, fee }) => {
    const navigate=useNavigate();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');
    const [paymentWay, setPaymentWay] = useState(null);
    const [reason, setReason] = useState('');
    const { takedAppointments, sendReq } = useGetTakedAppointments(date, doctorId);
    const holidays = new Set();
    const times = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 AM'];

    const getDateByDayName = (Day) => {
        const now = new Date();
        switch (Day) {
            case 'sun': return format(isSunday(now) ? now : nextSunday(now), "yyyy-MM-dd");
            case 'mon': return format(isMonday(now) ? now : nextMonday(now), "yyyy-MM-dd");
            case 'tue': return format(isTuesday(now) ? now : nextTuesday(now), "yyyy-MM-dd");
            case 'wed': return format(isWednesday(now) ? now : nextWednesday(now), "yyyy-MM-dd");
            case 'thu': return format(isThursday(now) ? now : nextThursday(now), "yyyy-MM-dd");
            case 'fri': return format(isFriday(now) ? now : nextFriday(now), "yyyy-MM-dd");
            case 'sat': return format(isSaturday(now) ? now : nextSaturday(now), "yyyy-MM-dd");
            default: return null;
        }
    };

    const getDayDate = (event, Day) => {
        event.preventDefault();
        setDate(getDateByDayName(Day));
    };

    const isHoliday = (dayName) => {
        const nextDate = getDateByDayName(dayName);
        if (!nextHolidays) return false;
        const isholiday = nextHolidays.some((e) => e.date === nextDate);
        if (isholiday) holidays.add(dayName);
        return isholiday;
    };

    return (
        <div className="w-full bg-card  p-3  rounded-2xl shadow-lg flex flex-col gap-6">
            {/* Days Section */}
            <Title title="Select Day" icon={<CiCalendarDate className="text-2xl  " />} />
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {workingDays?.map((e, i) => (
                    <button
                        key={i}
                        disabled={isHoliday(e)}
                        onClick={(event) => { getDayDate(event, e); setDay(e);setTime('') }}
                        className={`py-2 px-4 capitalize cursor-pointer rounded-lg font-medium text-sm transition-all duration-300 ${e === day
                            ? 'bg-blue-500 text-white shadow-md'
                            : holidays.has(e)
                                ? 'bg-gray-300 text-gray-800 cursor-not-allowed'
                                : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-sm'
                            }`}
                    >
                        {
                            format(new Date(), 'EEE') == e.slice(0, 1).toUpperCase() + e.slice(1)
                                ?
                                'Today'
                                :
                                e
                        }
                    </button>
                ))}
            </div>

            {/* Time Section */}
            <Title title="Select Time" icon={<FaClock className="text-2xl " />} />
            {sendReq ? (
                <div className="flex justify-center py-10">
                    <Loader2 />
                </div>
            ) : (
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {times.map((e, i) => {
                        const status = takedAppointments?.some((ele) => ele.time === e);
                        return (
                            <button
                                key={i}
                                disabled={status}
                                onClick={(ev) => { ev.preventDefault(); setTime(e); }}
                                className={`py-2 px-3  cursor-pointer rounded-lg text-sm font-medium transition-all duration-300 ${time === e
                                    ? 'bg-blue-500 text-white shadow-md'
                                    : status
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-sm'
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
            <Title title="Reason for Visit" icon={<FaUserInjured className="text-2xl" />} />
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
                onClick={async (e) => { e.preventDefault(); 
                    const response=await handleCreateNewAppointment(doctorId, fee, date, time, reason, paymentWay);
                    if(response){
                        return  navigate(`/successfulOperation`, { replace: true,state:{OKMSG:response} });
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