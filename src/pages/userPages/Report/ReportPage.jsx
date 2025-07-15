import { useSearchParams } from "react-router-dom"
import Header from "../../MyAppointments/Header";
import { TbReport } from "react-icons/tb";
import ReportInfoSkeleton from "./ReportInfoSkeleton";

import useAxios from '../../../hooks/useAxios';
import ReportInformation from "./ReportInformation";
const ReportPage = () => {
    const [searchParams] = useSearchParams();
    const appointmentId = searchParams.get('id');
    const { data, err, loading } = useAxios(`/api/public/report/?id=${appointmentId}`, true)
    return (
        <div className=" pb-5">
            <div className="space-y-3">
                <Header title={'Patient Medical Report'} icon={<TbReport className="text-2xl" />} subTitle={'Confidential Medical Documentation'} />
                <div className="grid grid-cols-2 max-[991px]:grid-cols-1  gap-6">
                    <div className="flex max-[991px]:justify-center">
                        <div className="w-full relative max-w-[450px] min-h-[700px] border-2 border-slate-500 dark:border-slate-400 rounded-[6px]">
                            <div className="absolute flex justify-evenly items-center -top-3.5 w-[30%] h-[30px] left-[50%] translate-x-[-50%] rounded-[6px] bg-slate-200 dark:bg-slate-200">
                                <div className=" size-3.5 rounded-full bg-[var(--main-blue)]   "></div>
                                <div className=" size-3.5 rounded-full bg-[var(--main-blue)]   "></div>
                            </div>

                            {
                                (loading && data) ?
                                    <ReportInfoSkeleton />
                                    :
                                    <ReportInformation ReportInformation={data} />
                            }

                        </div>
                    </div>
                    <div className="border-l-2 border-[var(--main-blue)] rounded-[6px] py-2 pl-5 space-y-6">
                        <div>
                            <h1 className="text-2xl font-medium text-[var(--main-blue)]">Doctor Notes</h1>
                            <div>
                                {
                                     Array.isArray(data?.notesForPatient)&&data?.notesForPatient?.map((e) => (
                                        <div className="flex items-center gap-1">
                                            <span className="size-1 dark:bg-slate-300 bg-[var(--main-blue)] rounded-full"></span>
                                            <span key={e.id} className="dark:text-slate-300 text-[var(--main-blue)]">{e.note}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-medium text-[var(--main-blue)]">Patient Status</h1>
                            <div className="flex  items-center gap-2">
                                <span className={`capitalize font-medium text-xl  ${data?.patientStatus === "normal" ? "text-green-500" : data?.patientStatus === "stable" ? "text-yellow-500" : "text-red-500"}`}>{data?.patientStatus || 'status not found'}</span>
                                <span className={`bg-${data?.patientStatus == "stable" ? 'yellow' : data?.patientStatus == "normal" ? "green" : "red"}-500 rounded-full size-2.5`}></span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-medium text-[var(--main-blue)]">Read about medicines</h1>
                            <div className="flex flex-col gap-2">
                                {
                                    Array.isArray(data?.prescriptions)&&data?.prescriptions?.map((e) => (
                                        <a key={e.id} href={`https://www.drugs.com/search.php?searchterm=${e.medicine}`} target="_blank" className="underline" >{e.medicine}</a>
                                    ))
                                }
                            </div>
                        </div>

                    </div>




                </div>

            </div>
        </div>
    )
}

export default ReportPage