
import { memo } from "react"
const TableHead = () => {
    return (
        <thead className="w-full">
            <tr className="text-left text-[16px] font-medium text-gray-500 dark:text-slate-300 capitalize">
                <th className="px-6 py-3">Doctor</th>
                <th className="px-6 py-3">Specialty</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Time</th>
                <th className="px-6 py-3">Fee</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
            </tr>
        </thead>
    )
}

export default memo(TableHead);