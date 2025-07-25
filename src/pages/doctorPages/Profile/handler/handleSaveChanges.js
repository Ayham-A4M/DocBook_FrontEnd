
// import toast from 'react-hot-toast'
// import axiosInstance from '../../../../helper/axiosInterceptor'
// const handleSaveChanges = async (newImage, profile, setProfile) => {
//     try {
//         const formData = new FormData();
//         if (newImage) {
//             formData.append('image', newImage);
//         }
//         formData.append('editInformation', JSON.stringify(profile));

//         const response = await axiosInstance.post(`/api/doctor/updateProfile`, formData);
//         if (response.status == 200) {
//             setProfile(prev => ({ ...prev, ...profile })); //note profile here mean new profile 
//             toast.success(response.data.msg);
//         }

//     } catch (err) {
//         toast.error(err?.response?.data?.msg);
//     }
// }
// export default handleSaveChanges
import toast from 'react-hot-toast';
import axiosInstance from '../../../../helper/axiosInterceptor';

const handleSaveChanges = async (newImage, profile, setProfile) => {
    const saveChangesPromise = new Promise(async (resolve, reject) => {
        try {
            const formData = new FormData();
            if (newImage) {
                formData.append('image', newImage);
            }
            formData.append('editInformation', JSON.stringify(profile));

            const response = await axiosInstance.post(`/api/doctor/updateProfile`, formData);

            if (response.status === 200) {
                setProfile(prev => ({ ...prev, ...profile }));
                resolve(response.data.msg);
            } else {
                reject(new Error(response.data.msg || 'Update failed'));
            }
        } catch (err) {
            reject(err?.response?.data?.msg || err.message || 'An error occurred');
        }
    });

    await toast.promise(saveChangesPromise, {
        loading: 'Saving changes...',
        success: (msg) => msg,
        error: (err) => err.toString(),
    });
};

export default handleSaveChanges;