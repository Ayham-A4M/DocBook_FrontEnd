
import axios from "axios"
import toast from "react-hot-toast"
import useGetEnviromentVariable from '../../../../hooks/useGetEnviromentVariable'

const deleteUser = async (userId) => {
    const { url } = useGetEnviromentVariable();
    const response = await axios.post(`${url}/api/admin/deleteUser`, { userId }, { withCredentials: true });
    console.log(response)
    return response.data.msg;
}

const handleDeleteUser = (userId) => {
    return new Promise((resolve) => {
        toast.promise(deleteUser(userId), {
            loading: 'deleting user ... ',
            success: (msg) => { resolve(true); return `${msg}` },
            error: (err) => { resolve(false); return `${err?.response?.data?.msg || 'Faild deleted user '}` }
        })

    })
}

export default handleDeleteUser