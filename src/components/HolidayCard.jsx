import { FaCalendarAlt } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"
import { Button } from '@/components/ui/button';
const HolidayCard = ({ holiday, deleteHoliday }) => {

    return (
        <div
            className="bg-card  shadow-md rounded-lg p-6 transform hover:scale-[1.02] transition-transform duration-200 relative"
        >
            <Button
                onClick={() => deleteHoliday(holiday._id)}
                className="text-red-500 z-10  duration-300 cursor-pointer hover:text-red-700 absolute top-[10px] right-[5px]"
                size="icon"
                variant="outline"
            >
                <FaTrash />
            </Button>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200">
                        {holiday.reason}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-300 mt-1 flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        {new Date(holiday.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default HolidayCard