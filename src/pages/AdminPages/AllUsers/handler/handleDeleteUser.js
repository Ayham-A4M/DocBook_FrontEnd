
import toast from "react-hot-toast"
import axiosInstance from "../../../../helper/axiosInterceptor"
const deleteUser = async (userId) => {
    const response = await axiosInstance.post(`/api/admin/deleteUser`, { userId }, );
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