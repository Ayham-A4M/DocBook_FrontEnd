
import toast from "react-hot-toast";
import axios from "axios";
import useGetEnviromentVariable from '../../../hooks/useGetEnviromentVariable'
const handleLoginProcess = async (email, password, isDoctor, setUser,setLoading) => {
    const {url}=useGetEnviromentVariable();
    try {
        setLoading(true);
        const response = await axios.post(`${url}/api/auth/login`, { email, password, role: (isDoctor ? 'doctor' : 'user') },{withCredentials:true})
        if (response.status < 250) {
            toast.success(response?.data.msg);
            setUser(response?.data.user);
            return response?.data.user.role;
        }
    } catch (err) {
        toast.error(err?.response?.data?.msg || 'server error');
    }finally{
        setLoading(false);
    }
}
export default handleLoginProcess