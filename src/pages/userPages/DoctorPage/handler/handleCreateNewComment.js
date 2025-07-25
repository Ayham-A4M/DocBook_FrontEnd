import { format } from 'date-fns';
import axiosInstance from '../../../../helper/axiosInterceptor';
import toast from 'react-hot-toast';
const handleCreateNewComment = async (stars, halfStar, opinion, feeling, doctorId, setSendingReq, setIsUserRateDoctor) => {

    if (!(stars + halfStar) || !opinion || !feeling || !doctorId) {
        toast.error('please set complete information');
        return false;
    }
    // calculating rate ex: 4.5 , 5  , 3.5 ...
    const rate = stars + (halfStar * 0.5);
    const date = format(new Date(),'yyyy-MM-dd');

    try {
        setSendingReq(true);
        const response = await axiosInstance.post(`/api/user/rateDoctor`, { rate, opinion, feeling, doctorId, date });
        if (response.status == 200) {
            toast.success(response.data.msg);
            setIsUserRateDoctor(true);
        }
    } catch (err) {
        toast.error(err.response.data.msg);
    } finally {
        setSendingReq(false);
    }
}

export default handleCreateNewComment