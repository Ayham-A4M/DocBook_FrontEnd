import axios from "axios"
import useGetEnviromentVariable from "../../../hooks/useGetEnviromentVariable"
import toast from "react-hot-toast";

const handleLoginProcess = async (email, password, isDoctor,setUser) => {
    const { url } = useGetEnviromentVariable();

    try {
        const response = await axios.post(`${url}/api/auth/login`, { email, password, role: (isDoctor ? 'doctor' : 'user') }, { withCredentials: true })
        if(response.status<250){
            toast.success(response?.data.msg);
            setUser(response?.data.user);
            console.log(response?.data);
            return response?.data.user.role;
        }
    } catch (err) {
        console.log(err);
       toast.error(err.response.data.msg);
    }
}
export default handleLoginProcess