import axios from "axios"
import toast from "react-hot-toast"
import useGetEnviromentVariable from "../../../../hooks/useGetEnviromentVariable"

const changeStatus = async (url, reportId, status) => {
    const response = await axios.put(`${url}/api/doctor/archiveReport`, { reportId, status }, { withCredentials: true });
    return response.data.msg;
}
const handleChangeReportStatus = (reportId, status) => {
    const { url } = useGetEnviromentVariable();
    return new Promise((resolve) => {
        toast.promise(changeStatus(url, reportId, status), {
            loading: 'just a moment',
            success: (msg) => { resolve(true); return `${msg}` },
            error: (err) => { resolve(false); return `${err?.response?.data?.msg || 'Faild update status '}` }
        }
        );
    }
    )

}

export default handleChangeReportStatus