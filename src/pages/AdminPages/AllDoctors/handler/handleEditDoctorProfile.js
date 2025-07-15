import axios from "axios"
import useGetEnviromentVariable from "../../../../hooks/useGetEnviromentVariable"
import toast from "react-hot-toast"
const editProfile = async (doctorId, docInformation) => {
    // we must use form data
    const { url } = useGetEnviromentVariable()
    const response = await axios.post(`${url}/api/admin/editDoctor/?doctorId=${doctorId}`, {docInformation}, { withCredentials: true });
    return response.data.msg
}

const handleEditDoctorProfile = (formData, doctorId) => {
    const docInformation = {
        fullName: formData?.fullName,
        age: formData?.age ,
        experience: formData?.experience,
        phoneNumber: formData?.phoneNumber,
        specialization: formData?.specialization,
        workingDays: formData?.workingDays,
        email: formData?.email ,
        fee: formData?.fee,
        address: formData?.address 
    }

    return new Promise((resolve) => {
        toast.promise(editProfile(doctorId, docInformation), {
            loading: 'updating profile ... ',
            success: (msg) => { resolve(true); return `${msg}` },
            error: (err) => { resolve(false); return `${err?.response?.data?.msg || 'Faild update profile'}` }
        })
    })
}

export default handleEditDoctorProfile