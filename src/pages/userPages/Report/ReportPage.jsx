



import { useSearchParams } from "react-router-dom";
import ReportInfoSkeleton from "./ReportInfoSkeleton";
import MainTitle from "../../../components/MainTitle";
import useAxios from '../../../hooks/useAxios';
import ReportInformation from "./ReportInformation";

const ReportPage = () => {
    const [searchParams] = useSearchParams();
    const appointmentId = searchParams.get('id');
    const { data, err, loading } = useAxios(`/api/public/report/?id=${appointmentId}`);

    return (
        <div className="min-h-screen py-8  sm:px-4 lg:px-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <MainTitle
                    mainTitle="Healthcare Diagnostic Report"
                    subTitle="Condition, Recommendations, Recap"
                    className="text-center"
                />

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Report Information Card */}
                    <div className="bg-card dark:bg-gray-800 rounded-xl shadow-lg ">
                        <div className="relative p-6">
                            {/* Decorative Header */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-28 h-8 bg-blue-100 dark:bg-gray-400 rounded-lg">
                                <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-600 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-600"></div>
                            </div>
                            {loading && !data ? (
                                <ReportInfoSkeleton />
                            ) : (
                                <ReportInformation ReportInformation={data} />
                            )}
                        </div>
                    </div>

                    {/* Sidebar with Doctor Notes, Status, and Medicines */}
                    <div className="space-y-6">
                        {/* Doctor Notes */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-[var(--main-blue)] mb-4 italic">
                                Doctor Notes
                            </h2>
                            <div className="space-y-2">
                                {Array.isArray(data?.notesForPatient) && data.notesForPatient.length > 0 ? (
                                    data.notesForPatient.map((note) => (
                                        <div key={note.id} className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-300"></span>
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {note.note}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 dark:text-gray-400">No notes available</p>
                                )}
                            </div>
                        </div>

                        {/* Patient Status */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-[var(--main-blue)] mb-4 italic">
                                Patient Status
                            </h2>
                            <div className="flex items-center gap-3">
                                <div
                                    className={`flex items-center justify-center w-8 h-8 rounded-full animate-pulse ${data?.patientStatus === "normal"
                                        ? "bg-green-100 dark:bg-green-900/50"
                                        : data?.patientStatus === "stable"
                                            ? "bg-yellow-100 dark:bg-yellow-900/50"
                                            : "bg-red-100 dark:bg-red-900/50"
                                        }`}
                                >
                                    <span
                                        className={`w-4 h-4 rounded-full ${data?.patientStatus === "normal"
                                            ? "bg-green-500"
                                            : data?.patientStatus === "stable"
                                                ? "bg-yellow-500"
                                                : "bg-red-500"
                                            }`}
                                    ></span>
                                </div>
                                <span
                                    className={`text-lg font-semibold capitalize ${data?.patientStatus === "normal"
                                        ? "text-green-600 dark:text-green-400"
                                        : data?.patientStatus === "stable"
                                            ? "text-yellow-600 dark:text-yellow-400"
                                            : "text-red-600 dark:text-red-400"
                                        }`}
                                >
                                    {data?.patientStatus || "Status not found"}
                                </span>
                            </div>
                        </div>


                        {/* Medicines */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-[var(--main-blue)] mb-4 italic">
                                Read About Medicines
                            </h2>
                            <div className="space-y-2">
                                {Array.isArray(data?.prescriptions) && data.prescriptions.length > 0 ? (
                                    data.prescriptions.map((prescription) => (
                                        <a
                                            key={prescription.id}
                                            href={`https://www.drugs.com/search.php?searchterm=${prescription.medicine}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-blue-500 dark:text-blue-300 hover:underline"
                                        >
                                            {prescription.medicine}
                                        </a>
                                    ))
                                ) : (
                                    <p className="text-gray-500 dark:text-gray-400">No prescriptions available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportPage;