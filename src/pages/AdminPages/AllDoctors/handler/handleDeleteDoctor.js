import toast from "react-hot-toast"
import axiosInstance from "../../../../helper/axiosInterceptor"
const deletDoctor = async (doctorId) => {
    const response = await axiosInstance.post(`/api/admin/deleteDoctor`, { doctorId });
    return response.data.msg;
}

const handleDeleteDoctor = (doctorId) => {
    return new Promise((resolve) => {
        toast.promise(deletDoctor(doctorId), {
            loading: 'deleting doctor ... ',
            success: (msg) => { resolve(true); return `${msg}` },
            error: (err) => { resolve(false); return `${err?.response?.data?.msg || 'Faild deleted doctor '}` }
        })

    })
}

export default handleDeleteDoctor