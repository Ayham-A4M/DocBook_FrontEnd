import dateFormat from "../../../helper/dateFormat"
import timeFormat from "../../../helper/timeFormat"


const AppointmentsData = ({ appointments }) => {
    return (
        <>
            {
                (appointments && appointments?.length > 0) ?



                    appointments?.map((appointment,i) => (
                        <tr className="font-light text-popover-foreground hover:bg-slate-100 dark:hover:bg-slate-800" key={i}>
                            <td className="py-4 text-center">{appointment?.userName}</td>
                            <td className="py-4 text-center">{appointment?.phoneNumber}</td>
                            <td className="py-4 text-center">{appointment?.reason}</td>
                            <td className="py-4 text-center">{dateFormat(appointment?.date)}</td>
                            <td className="py-4 text-center">{timeFormat(appointment?.time)}</td>
                            <td className="py-4 text-center">{appointment?.paymentWay}</td>
                            <td className={`py-4 text-center font-medium ${appointment?.status=="pending"?'text-yellow-400':appointment?.status=="canceled"?"text-red-400":"text-green-400"}`}>{appointment?.status}</td>
                        </tr>
                    ))



                    :
                    <tr>
                        <td colSpan={7} className='py-12 gap-3 text-center'>
                            <span className='text-gray-500 dark:text-slate-300'>No appointmetns for this day</span>
                        </td>
                    </tr>
            }
        </>
    )
}

export default AppointmentsData