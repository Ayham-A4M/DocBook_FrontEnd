import toast from "react-hot-toast"
import axiosInstance from "../../../../helper/axiosInterceptor"
const changeStatus = async ( reportId, status) => {
    const response = await axiosInstance.put(`/api/doctor/archiveReport`, { reportId, status });
    return response.data.msg;
}
const handleChangeReportStatus = (reportId, status) => {
    
    return new Promise((resolve) => {
        toast.promise(changeStatus(reportId, status), {
            loading: 'just a moment',
            success: (msg) => { resolve(true); return `${msg}` },
            error: (err) => { resolve(false); return `${err?.response?.data?.msg || 'Faild update status '}` }
        }
        );
    }
    )

}

export default handleChangeReportStatus