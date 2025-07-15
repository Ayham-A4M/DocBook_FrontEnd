
import {
    FiFileText,
    FiPieChart,
    FiActivity,
} from 'react-icons/fi';
import Filters from './Filters';
import Loader2 from '../../../components/Loader2'
import StatsCard from '../../../components/StatsCard';
import ReportCard from './ReportCard';
import useGetReports from '../../../hooks/doctors/useGetReports';
import PaginationButtons from '../../../components/PaginationButtons';
import MainTitle from '../../../components/MainTitle';
const Reports = () => {



    const { reports, setReports, limit, loading, name, setName, page, setPage, reportStats, setFilterStatus } = useGetReports();

    return (
        <div className="flex-1 p-1 md:p-8 max-w-7xl mx-auto">
            {/* Header */}
            <MainTitle mainTitle={'Medical Reports Dashboard'} subTitle={'Monitor and manage patient reports with ease'}/>
            

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <StatsCard icon={<FiFileText className=" text-[var(--main-blue)] text-3xl" />} borderColor={'border-[var(--main-blue)]'} status={'Total Reports'} value={reports?.length} />
                <StatsCard icon={<FiActivity className="text-green-600 dark:text-green-400 text-3xl" />} borderColor={'border-green-600 dark:border-green-400'} status={'Completed'} value={reportStats?.completed} />
                <StatsCard icon={<FiPieChart className="text-gray-700 dark:text-gray-200 text-3xl" />} borderColor={'border-gray-700 dark:border-gray-300'} status={'Archived'} value={reportStats?.archived} />
            </div>

            {/* Reports Section */}
            <div className="bg-card  rounded-xl shadow-lg dark:shadow-sm overflow-hidden">

                <Filters setName={setName}   name={name}  setFilterStatus={setFilterStatus} />

                {/* Reports List (Card-Based) */}
                {
                    loading
                        ?
                        <div className='w-full flex justify-center py-6 items-center'>
                            <Loader2 />
                        </div>
                        :
                        reports?.length>0?
                        <div className="grid gap-6 px-1 py-6 md:p-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                reports.map(report => (
                                    <ReportCard key={report._id} report={report} setReports={setReports} />
                                ))
                            }
                        </div>
                        :
                        <div className='text-slate-500 dark:text-slate-300 text-xl py-6 text-center'>
                                No Reports
                        </div>
                }
                <div className='flex justify-center items-center my-3'>
                    <PaginationButtons page={page} setPage={setPage} limit={limit} />
                </div>
            </div>
        </div>
    );
};

export default Reports;