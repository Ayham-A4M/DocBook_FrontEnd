import React from 'react'

const ReportInfoSkeleton = () => {
    return (
        <div className="w-full h-full space-y-6 pt-6 px-2 animate-pulse">
            {/* Doctor and Date Skeleton */}
            <div className="flex justify-between items-center">
                <div className="h-6 w-40 bg-gray-200 dark:bg-slate-500 rounded"></div>
                <div className="h-5 w-24 bg-gray-200 dark:bg-slate-500 rounded"></div>
            </div>

            {/* Patient Information Skeleton */}
            <div className="flex flex-col gap-3">
                <div className="h-4 w-56 bg-gray-200 dark:bg-slate-500 rounded"></div>
                <div className="h-4 w-48 bg-gray-200 dark:bg-slate-500 rounded"></div>
                <div className="h-4 w-52 bg-gray-200 dark:bg-slate-500 rounded"></div>
            </div>

            {/* Symptoms Section Skeleton */}
            <div className="flex flex-col gap-3">
                <div className="h-5 w-24 bg-gray-200 dark:bg-slate-500 rounded"></div>
                <div className="space-y-2">
                    <div className="h-3 w-full bg-gray-200 dark:bg-slate-500 rounded"></div>
                    <div className="h-3 w-full bg-gray-200 dark:bg-slate-500 rounded"></div>
                    <div className="h-3 w-3/4 bg-gray-200 dark:bg-slate-500 rounded"></div>
                </div>
            </div>

            {/* Prescriptions Section Skeleton */}
            <div className="flex flex-col gap-3">
                <div className="h-5 w-28 bg-gray-200 dark:bg-slate-500 rounded"></div>
                <div className="h-4 w-64 bg-gray-200 dark:bg-slate-500 rounded"></div>
            </div>

            {/* Doctor Summary Section Skeleton */}
            <div className="flex flex-col gap-3">
                <div className="h-5 w-32 bg-gray-200 dark:bg-slate-500 rounded"></div>
                <div className="space-y-2">
                    <div className="h-3 w-full bg-gray-200 dark:bg-slate-500 rounded"></div>
                    <div className="h-3 w-full bg-gray-200 dark:bg-slate-500 rounded"></div>
                    <div className="h-3 w-5/6 bg-gray-200 dark:bg-slate-500 rounded"></div>
                    <div className="h-3 w-2/3 bg-gray-200 dark:bg-slate-500 rounded"></div>
                </div>
            </div>

            {/* Footer Skeleton */}
            <div className="flex justify-between items-center pt-4">
                <div className="h-8 w-24 bg-gray-200 dark:bg-slate-500 rounded"></div>
                <div className="h-16 w-16 bg-gray-200 dark:bg-slate-500 rounded-full"></div>
            </div>
        </div>
    )
}

export default ReportInfoSkeleton