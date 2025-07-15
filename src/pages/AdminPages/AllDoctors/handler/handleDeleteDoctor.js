import axios from "axios"
import toast from "react-hot-toast"
import useGetEnviromentVariable from '../../../../hooks/useGetEnviromentVariable'

const deletDoctor = async (doctorId) => {
    const { url } = useGetEnviromentVariable();
    const response = await axios.post(`${url}/api/admin/deleteDoctor`, { doctorId }, { withCredentials: true });
    console.log(response)
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