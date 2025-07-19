
import { memo } from 'react';

const StatusInformation = ({appointmensLength}) => {
    return (
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex space-x-6 text-gray-600 dark:text-slate-400">
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm ">Confirmed</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm ">Canceled</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm ">Pending</span>
                </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-slate-300">
                Total appointments: {appointmensLength || 0}
            </div>
        </div>
    )
}

export default memo(StatusInformation)