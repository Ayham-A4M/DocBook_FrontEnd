// Note this process just for normal user because admin is const in db and doctors admin create new doctors :)
import useGetEnviromentVariable from "../../../hooks/useGetEnviromentVariable";
import axios from "axios";
import toast from "react-hot-toast";
const handleSignUpProcess = async (fullName, email, password,phoneNumber,age) => {
    // console.log(fullName, email, password);
    const { url } = useGetEnviromentVariable()
    try {
        const response = await axios.post(`${url}/api/auth/userRegister`, { fullName, email, password,phoneNumber,age }, { withCredentials: true });
        if(response.status<250){
            toast.success(response.data.msg);
        }
    } catch (err) {
        console.log(err);
        toast.error(err.response.data.msg);
    }

}
export default handleSignUpProcess