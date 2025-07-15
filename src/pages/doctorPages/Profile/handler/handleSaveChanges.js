import axios from 'axios'
import toast from 'react-hot-toast'
import useGetEnviromentVariable from '../../../../hooks/useGetEnviromentVariable'
const handleSaveChanges = async (newImage, profile,setProfile) => {
    const { url } = useGetEnviromentVariable();
    try {
        const formData = new FormData();
        if (newImage) {
            formData.append('image', newImage);
        }
        formData.append('editInformation', JSON.stringify(profile));
    
        const response = await axios.post(`${url}/api/doctor/updateProfile`, formData, { withCredentials: true });
        if (response.status == 200) {
            setProfile(profile);
            toast.success(response.data.msg);
        }

    } catch (err) {
        toast.error(err?.response?.data?.msg);
    }
}
export default handleSaveChanges