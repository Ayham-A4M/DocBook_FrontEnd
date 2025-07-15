import { Link } from 'react-router-dom'
import { FaUserMd, FaClock, } from 'react-icons/fa';
import handleCancelAppointment from './handler/handleCancelAppointment';
const TableRow = ({ image, fee, dcotorName, specialization, date, time, status, id }) => {

    return (
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                    <img
                        src={`http://localhost:8000${image}`}
                        alt={dcotorName}
                        className="w-10 h-10 rounded-full border-[1px] border-gray-600 dark:border-slate-200 object-cover"
                    />
                    <div>
                        <div className="font-medium">{dcotorName}</div>
                        <div className="text-sm text-gray-500 dark:text-slate-300 flex items-center gap-1">
                            <FaUserMd size={12} /> {specialization}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-gray-600 dark:text-slate-300">{specialization}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium">{date}</div>
                <div className="text-sm text-gray-500 dark:text-slate-400 flex items-center gap-1">
                    <FaClock size={12} /> {time}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span>${fee}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${status === 'confirmed'
                    ? 'bg-green-200 text-green-800'
                    : status === "pending"
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-700'
                    }`}>
                    {status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {
                    status == 'pending' ?
                        <button className="bg-red-500 text-slate-50 hover:translate-x-0.5 hover:shadow-2xl hover:shadow-gray-600 duration-300 rounded-[2px] px-3 py-1 cursor-pointer font-light text-sm" onClick={(e) => { e.preventDefault(); handleCancelAppointment(id) }}>
                            Cancel
                        </button>
                        :
                        status == "confirmed"
                            ?
                            <Link to={`/report/?id=${id}`} className='text-popover-foreground border-b-[2px] border-popover-foreground pb-0.5'>View Report</Link>
                            :
                            <span className='text-red-500 font-medium text-[16px]'>Canceled</span>

                }
            </td>
        </tr>
    )
}

export default TableRow