import axiosInstance from "../../../../helper/axiosInterceptor";
const handleSendMessage = async (message,setLoading) => {
    try {
        const response = await axiosInstance.post(`/api/user/sendMessage`, { message });
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