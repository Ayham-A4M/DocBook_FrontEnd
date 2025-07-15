import React from 'react'
import Logo from '../../../components/Logo'
import healthCareSymbol from '../../../assets/healthCare-symbol.svg'
const ReportInformation = ({ ReportInformation }) => {
    return (
        <>
            {
                ReportInformation &&
                <div className="w-full h-full space-y-6 pt-6 px-2">
                    <div className="flex justify-between items-center">
                        <h1>Dr.{ReportInformation.doctorName}</h1>
                        <i className="font-light ">{ReportInformation.date}</i>
                    </div>
                    <div className="flex flex-col gap-3 font-light">
                        <span>Patient Name : {ReportInformation.patientName}</span>
                        <span>Patient Age : {ReportInformation.age} (years old)</span>
                        <span>Visit Reason : {ReportInformation.reason}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1>Symptoms : </h1>
                        <p className="font-light">{ReportInformation.symptoms}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1>Prescriptions : </h1>
                        <div className="flex flex-wrap gap-2">
                            {Array.isArray(ReportInformation.prescriptions)&& ReportInformation.prescriptions.map((e) => (
                                <div key={e.id} className='flex font-light items-baseline gap-1 dark:text-blue-400 text-[var(--main-blue)]'>
                                    <span className='size-1 dark:bg-blue-400 bg-[var(--mian-blue)] rounded-full'></span>
                                    <span  className=''>
                                        {e.medicine}
                                    </span>
                                </div>

                            )
                            )}
                        </div>

                    </div>
                    <div className="flex flex-col gap-3">
                        <h1>Doctor Summary : </h1>
                        <p className="font-light dark:text-blue-400 text-[var(--main-blue)]">{ReportInformation.doctorSummary}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <Logo size={'text-[14px]'} />
                        <img src={healthCareSymbol} className="size-16" />
                    </div>


                </div>
            }
        </>
    )
}

export default ReportInformation