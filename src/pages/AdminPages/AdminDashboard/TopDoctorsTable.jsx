import { FaStar } from 'react-icons/fa'

const TopDoctorsTable = ({ topDoctors }) => {
    return (
        <table className="w-full text-left">
            <thead>
                <tr className="text-gray-500 dark:text-gray-200 text-sm uppercase tracking-wide border-b border-gray-200">
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Specialization</th>
                    <th className="py-3 px-4">Appointments</th>
                    <th className="py-3 px-4">Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    topDoctors && topDoctors.length > 0 ?
                        topDoctors?.map((doctor) => (
                            <tr
                                key={doctor._id}
                                className="border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
                            >
                                <td className="py-4 px-4 text-popover-foreground font-medium">{doctor.fullName}</td>
                                <td className="py-4 px-4 text-gray-600 dark:text-slate-300">{doctor.specialization}</td>
                                <td className="py-4 px-4 text-gray-600 dark:text-slate-300">{doctor.treatmentsNumber}</td>
                                <td className="py-4 px-4 text-yellow-500 flex items-center">
                                    <FaStar className="mr-1" /> {doctor.rate}
                                </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td className='text-slate-500 dark:text-slate-300 text-center py-6' colSpan={4}>
                                No doctors in system
                            </td>   
                        </tr>

                }
            </tbody>
        </table>
    )
}

export default TopDoctorsTable