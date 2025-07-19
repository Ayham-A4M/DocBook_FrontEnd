import { memo } from "react"
const StatsCard = ({ icon, status, borderColor, value }) => {
    return (
        <div className="flex justify-center">
            <div className={`bg-white md:border-l-4 max-[776px]:border-t-4 dark:bg-slate-700 p-6 w-[95%] max-w-[400px] rounded-xl shadow-sm  hover:scale-[1.02] ${borderColor} hover:shadow-md duration-300`}>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-sm text-gray-500 dark:text-popover-foreground">{status}</h3>
                        <p className="text-2xl font-semibold text-gray-800 dark:text-gray-300">{value}</p>
                    </div>
                    {
                        icon
                    }

                </div>
            </div>
        </div>
    )
}

export default memo(StatsCard)