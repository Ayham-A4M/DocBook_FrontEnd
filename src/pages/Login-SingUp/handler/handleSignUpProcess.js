// Note this process just for normal user because admin is const in db and doctors admin create new doctors :)
import axios from "axios";
import useGetEnviromentVariable from "../../../hooks/useGetEnviromentVariable";
import toast from "react-hot-toast";
const handleSignUpProcess = async (fullName, email, password, phoneNumber, age,setLoading) => {
    const { url } = useGetEnviromentVariable();
    try {
        setLoading(true);
        const response = await axios.post(`${url}/api/auth/userRegister`, { fullName, email, password, phoneNumber, age });
        if (response.status < 250) {
            toast.success(response.data.msg);
        }
    } catch (err) {
        toast.error(err.response.data.msg);
    }finally{
        setLoading(false);
    }

}
export default handleSignUpProcess