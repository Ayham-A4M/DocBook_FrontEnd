import toast from "react-hot-toast"
import axiosInstance from "../../../../helper/axiosInterceptor"
const handleCreateNewDoctor = async (doctorInformation, image,setLoading) => {
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
        setLoading(true);
        const response = await axiosInstance.post(`/api/admin/createdoctor`, formData);
        if (response.status == 200) {
            toast.success(response.data.msg);
        }
    } catch (err) {
        toast.error(err.response.data.msg)
    }finally{
        setLoading(false);
    }
}

export default handleCreateNewDoctor