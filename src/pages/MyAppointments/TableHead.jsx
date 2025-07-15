

const TableHead = () => {
    return (
        <thead className="bg-gray-50 dark:bg-slate-800">
            <tr className="text-left text-xs font-medium text-gray-500 dark:text-slate-300 capitalize">
                <th className="px-6 py-3">Doctor</th>
                <th className="px-6 py-3">Specialty</th>
                <th className="px-6 py-3">Date & Time</th>
                <th className="px-6 py-3">Fee</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
            </tr>
        </thead>
    )
}

export default TableHead