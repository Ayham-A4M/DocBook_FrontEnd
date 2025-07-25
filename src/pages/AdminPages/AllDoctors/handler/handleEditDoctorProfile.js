import toast from "react-hot-toast"
import axiosInstance from "../../../../helper/axiosInterceptor"
const editProfile = async (doctorId, docInformation) => {
    // we must use form data
    const response = await axiosInstance.post(`api/admin/editDoctor/?doctorId=${doctorId}`, {docInformation});
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