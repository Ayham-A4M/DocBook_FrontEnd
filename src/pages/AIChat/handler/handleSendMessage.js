import axios from "axios"
import useGetEnviromentVariable from "../../../hooks/useGetEnviromentVariable";
const handleSendMessage = async (message,setLoading) => {
    const { url } = useGetEnviromentVariable()
    try {
        const response = await axios.post(`${url}/api/user/sendMessage`, { message }, { withCredentials: true });
        if (response.status < 300) {
            return response
        }
    } catch (err) {
        return err
    }finally{
        setLoading(false)
    }
}

export default handleSendMessage