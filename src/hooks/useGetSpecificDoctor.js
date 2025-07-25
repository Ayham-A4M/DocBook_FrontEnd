
import useAxios from './useAxios'
const useGetSpecificDoctor = (id) => {
    const { data, err, loading } = useAxios(`/api/user/getdoctor/?_id=${id}`);
    return { doctor: data?.doctorInformation, nextHolidays: data?.nextHolidays, err, loading }
}
export default useGetSpecificDoctor