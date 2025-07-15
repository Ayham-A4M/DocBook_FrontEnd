import useGetEnviromentVariable from '../../../hooks/useGetEnviromentVariable'
import axios from 'axios';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
const handleCreateNewComment = async (stars, halfStar, opinion, feeling, doctorId, setSendingReq,setIsUserRateDoctor) => {
    const { url } = useGetEnviromentVariable();
    if (!(stars + halfStar) || !opinion || !feeling || !doctorId) {
        toast.error('please set complete information');
        return false;
    }
    // calculating rate ex: 4.5 , 5  , 3.5 ...
    const rate = stars + (halfStar * 0.5);
    const date = format(new Date(), "yyyy-MM-dd");

    try {
        setSendingReq(true);
        const response = await axios.post(`${url}/api/user/rateDoctor`, { rate, opinion, feeling, doctorId, date }, { withCredentials: true });
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