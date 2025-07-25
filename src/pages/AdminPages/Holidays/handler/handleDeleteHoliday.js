import toast from "react-hot-toast"
import axiosInstance from "../../../../helper/axiosInterceptor";
const deleteAction = async (holidayId) => {
    const response = await axiosInstance.post(`/api/admin/deleteHoliday`, { holidayId });
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