import toast from "react-hot-toast";
import axiosInstance from "../../../../helper/axiosInterceptor";
const handleCreateHoliday = async (handleCreateHoliday, setLoading) => {
    try {
        setLoading(true);
        const response = await axiosInstance.post(`/api/admin/createHoliday`, handleCreateHoliday);
        if (response.status === 200) {
            toast.success(response.data.msg);
            return true;
        }
    } catch (err) {
        toast.error(err?.response?.data?.msg || 'server error');
        return false;
    } finally {
        setLoading(false)
    }
}

export default handleCreateHoliday