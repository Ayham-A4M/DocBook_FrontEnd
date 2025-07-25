import { FaStethoscope, FaNotesMedical, FaListAlt, FaCalendarCheck, FaChartArea } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import StatsCard from '../../../components/StatsCard';
import TopDoctorsTable from './TopDoctorsTable';
import useAxios from '../../../hooks/useAxios';
import AdminDashboardSkeleton from './AdminDashboardSkeleton';
import MainTitle from '../../../components/MainTitle'
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { MdOutlineStackedLineChart } from "react-icons/md";
import ChartAreaStacked from './stacked-area-chart';
import AppointmentStatusPieChart from './Pie-Chart';
const specColors = {
    "Pulmonologist": 'bg-pink-400',
    "Hematologist": 'bg-red-500',
    "Pediatrician": 'bg-green-500',
    "Dermatologist": 'bg-orange-200',
    "brain": 'bg-purple-500',
    "Cardiologist": 'bg-red-700',
}
const prepareChartData = (chartData) => {
    const defaultData = [
        { day: "Sunday", income: 0 },
        { day: "Monday", income: 0 },
        { day: "Tuesday", income: 0 },
        { day: "Wednesday", income: 0 },
        { day: "Thursday", income: 0 },
        { day: "Friday", income: 0 },
        { day: "Saturday", income: 0 },
    ]
    chartData?.map((e) => {
        if (e.cash > 0) {
            for (let i = 0; i < 7; i++) {

                if (e.date == defaultData[i].day) {
                    defaultData[i].income = e.cash;
                    break;
                }

            }
        }
    })
    return defaultData;
}

const preparePieChartData = (chartData) => {
    const defaultData = [

        { status: "Confirmed", count: 0, fill: "var(--color-chrome)" },
        { status: "Pending", count: 0, fill: "var(--color-safari)" },
        { status: "Canceled", count: 0, fill: "var(--color-firefox)" },
    ]
    chartData?.map((e) => {
        if (e.count > 0) {
            for (let i = 0; i < 3; i++) {
                if (e.status.toLowerCase() == defaultData[i].status.toLowerCase()) {
                    defaultData[i].count = e.count;
                    break;
                }
            }
        }
    })
    defaultData.map((e) => { console.log(e) })
    return defaultData;
}


const AdminDashboard = () => {
    const { data, err, loading } = useAxios('/api/admin/dashboard');
    const getPercentage = (percent) => (
        <span className='flex items-center justify-between w-full'>
            {`${percent}%`}
            {
                percent > 0
                    ?
                    <IoIosTrendingUp className='text-[25px] text-green-400' />
                    :
                    percent == 0
                        ?
                        <MdOutlineStackedLineChart className='text-[20px] text-slate-800 dark:text-slate-200' />
                        :
                        <IoIosTrendingDown className='text-[25px] text-red-500' />
            }


        </span>
    )

    return (
        <>
            {
                loading ?
                    <AdminDashboardSkeleton />
                    :
                    <div className="w-full  min-h-screen p-1 md:p-8">
                        <div className="w-full">
                            {/* Header */}
                            <MainTitle mainTitle={'CareTrack Statistics Hub'} subTitle={'Monitor Analyze and Optimize Healthcare Operations'} />

                            {/* Quick Statistics */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                <StatsCard icon={<FaUsers className="text-blue-400 text-2xl" />} status={'Total Patients'} value={data?.usersNumber || 0} borderColor={'border-blue-500'} />
                                <StatsCard icon={<FaStethoscope className="text-emerald-500 text-2xl" />} status={'Total Doctors'} value={data?.doctorsNumber || 0} borderColor={'border-emerald-500'} />
                                <StatsCard icon={<FaNotesMedical className="text-rose-700 text-2xl" />} status={'Total Reports'} value={data?.reportsNumber || 0} borderColor={'border-rose-700'} />
                                <StatsCard icon={<FaCalendarCheck className="text-gray-600 dark:text-slate-200 text-2xl " />} status={'Appointments Today'} value={data?.todayAppointmentsNumber || 0} borderColor={'border-gray-600 dark:border-slate-200'} />
                                <StatsCard icon={<GiMoneyStack className="text-green-500 text-2xl" />} status={'This Month Income'} value={`${data?.thisMonthIncome || 0}$`} borderColor={'border-green-500'} />
                                <StatsCard icon={<FaChartArea className="text-orange-500 text-2xl" />} status={'Monthly Growth'} value={getPercentage(data?.monthlyGrowthPercentage || 0)} borderColor={'border-orange-500'} />
                            </div>
                            {

                                <div className='grid grid-cols-2 gap-4 max-[991px]:grid-cols-1 py-6'>
                                    <div className="">
                                        <ChartAreaStacked chartData={prepareChartData(data?.weeklyIncome)} />
                                    </div>
                                    <div>
                                        <AppointmentStatusPieChart chartData={preparePieChartData(data?.monthlyAppointmentsStatus)} />
                                    </div>
                                </div>
                            }

                            {/* Top 5 Doctors */}
                            <div className="bg-card rounded-lg p-8 shadow-sm mb-12">
                                <h2 className="text-2xl font-semibold text-popover-foreground mb-6 flex items-center">
                                    <FaUserDoctor className="mr-2 text-[var(--main-blue)]" />
                                    Top 5 Doctors
                                </h2>
                                <div className="overflow-x-auto">
                                    <TopDoctorsTable topDoctors={data?.topDoctors} />
                                </div>
                            </div>

                            {/* Specializations */}
                            <div className="bg-card rounded-lg p-8 shadow-sm mb-12">
                                <h2 className="text-2xl font-semibold text-popover-foreground mb-6 flex items-center">
                                    <FaListAlt className="mr-2 text-[var(--main-blue)]" />
                                    Specializations
                                </h2>
                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                    {data?.specializationNumbers.map((spec, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center max-[500px]:flex-col justify-between p-4 bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 transition duration-200"
                                        >
                                            <div className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full ${specColors[spec.name]} mr-3`} style={{ backgroundColor: ` ${specColors[spec.name] || `hsl(${parseInt(Math.random() * 360)} 100% 50%)`}` }} />
                                                <span className="text-gray-800 max-[500px]:text-[12px] dark:text-slate-200 font-medium">{spec.name}</span>
                                            </div>
                                            <span className="text-gray-600 dark:text-slate-300 font-semibold">{spec.count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>




                        </div>
                    </div>
            }
        </>

    );
};

export default AdminDashboard;