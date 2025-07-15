import axios from "axios"
import toast from "react-hot-toast"
import useGetEnviromentVariable from "../../../../hooks/useGetEnviromentVariable";
const deleteAction = async (holidayId) => {
    const { url } = useGetEnviromentVariable();
    const response = await axios.post(`${url}/api/admin/deleteHoliday`, { holidayId }, { withCredentials: true });
    return response.data.msg;
}
const handleDeleteHoliday = (holidayId) => {
    return new Promise((resolve) => {
        toast.promise(deleteAction(holidayId), {
            loading: 'just a moment',
            success: (msg) => { resolve(true); return `${msg}` },
            error: (err) => { resolve(false); return `${err?.response?.data?.msg || 'Faild deleted holiday '}` }
        }
        );
    }
    )
}

export default handleDeleteHoliday