import { FiCalendar, FiUser, FiFileText, } from 'react-icons/fi';
import { TiPin } from "react-icons/ti";
import { RiUnpinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import handleChangeReportStatus from './handler/handleChangeReportStatus';
import {
    Card,
} from "@/components/ui/card"
import { memo } from "react";

const ReportCard = ({ report, setReports }) => {

    const changeArchiveStatus = async (status, event) => {
        event.preventDefault();

        const response = await handleChangeReportStatus(report._id, status);
        if (response) {
            setReports(prev => prev.map((e) => (e._id == report._id ? { ...e, status: status } : e)))
        }
    }

    return (
        <Card className="p-5 rounded-lg bg-accent  relative duration-300 hover:shadow-md dark:hover:shadow-gray-400 dark:shadow-sm">
           
            {
                (report.status === "archived")
                &&
                <TiPin className='absolute top-0 right-1 text-[20px]' />
            }
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                    <FiUser className="text-[var(--main-blue)] text-xl mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-100">{report.patientName}</h3>
                </div>
                <span
                    className={`px-3 py-1 capitalize rounded-full text-sm font-medium ${report.status === 'completed'
                        ? 'bg-green-200 text-green-700'
                        : report.status === 'archived'
                            ? 'bg-gray-300 text-gray-700'
                            : ''
                        }`}
                >
                    {report.status}
                </span>
            </div>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                    <FiCalendar className="text-[var(--main-blue)] mr-2" />
                    <span>{report.date}</span>
                </div>
                <div className="flex items-center  ">
                    <FiFileText className="text-[var(--main-blue)] mr-2" />
                    <span>{report.reason}</span>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <Link to={`/reportPage/?id=${report.appointmentId}`} className="text-[var(--main-blue)] cursor-pointer underline hover:text-sky-600  font-medium transition">
                    View Details
                </Link>
                <div className='flex items-center'>
                    {
                        report.status === "completed" ?
                            <button className='rounded-[6px] text-slate-100 bg-gray-700 p-2 cursor-pointer' onClick={(e) => changeArchiveStatus('archived', e)}><TiPin /></button>
                            :
                            <button className='rounded-[6px] text-slate-100 bg-gray-700 p-2 cursor-pointer' onClick={(e) => changeArchiveStatus('completed', e)}><RiUnpinLine /></button>
                    }
                </div>
            </div>
        </Card>
    )
}

export default memo(ReportCard)