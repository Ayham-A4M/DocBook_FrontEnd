import axios from "axios";
import toast from "react-hot-toast";
import useGetEnviromentVariable from '../../../../hooks/useGetEnviromentVariable';
const handleCreateHoliday = async (handleCreateHoliday,setLoading) => {
    const { url } = useGetEnviromentVariable();
    try {
        setLoading(true);
        const response = await axios.post(`${url}/api/admin/createHoliday`, handleCreateHoliday, { withCredentials: true });
        if(response.status===200){
            toast.success(response.data.msg);
            return true;
        }
    } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.msg || 'server error');
        return false;
    } finally {
        setLoading(false)
    }
}

export default handleCreateHoliday