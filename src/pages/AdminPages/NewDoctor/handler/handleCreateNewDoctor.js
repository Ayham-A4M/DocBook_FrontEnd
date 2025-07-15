import axios from "axios"
import toast from "react-hot-toast"
import useGetEnviromentVariable from "../../../../hooks/useGetEnviromentVariable"
const handleCreateNewDoctor = async (doctorInformation, image) => {
    const { url } = useGetEnviromentVariable();

    // second wen need to create form data and append doctor information (JSON stringify) and image 
    const formData = new FormData();
    formData.append('docInformation', JSON.stringify(doctorInformation))
    if (!image) {
        toast.error('no image selected');
        return;
    } else {
        formData.append('image', image);
    }
    // start calling with backend
    try {
        const response = await axios.post(`${url}/api/admin/createdoctor`, formData, { withCredentials: true });
        if (response.status == 200) {
            toast.success(response.data.msg);
        }
    } catch (err) {
        toast.error(err.response.data.msg)
    }
}

export default handleCreateNewDoctor