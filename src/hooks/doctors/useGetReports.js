import { useState, useEffect } from "react"
import toast from "react-hot-toast";
import { useDebounce } from "use-debounce";
import useAxios from "../useAxios";
const useGetReports = () => {

    const [reports, setReports] = useState(null);

    const [name, setName] = useState('');
    const [nameDebounce] = useDebounce(name, 2000);
    const [filterStatus, setFilterStatus] = useState('');
    const [statusDebounce] = useDebounce(filterStatus, 2000);
    const [page, setPage] = useState(1);
    const [reportStats, setReportStats] = useState(null)
    const [finalSearch,setFinalSearch]=useState('');
    useEffect(()=>{
        setFinalSearch(nameDebounce);
        setPage(1);
    },[nameDebounce])
    const calculateStats = (array) => {
        let completed = 0;
        let archived = 0;
        array.map((rep) => {
            if (rep.status == "archived") {
                archived++;
            } else {
                completed++;
            }
        })
        setReportStats({ completed, archived })
        return null;
    }
    const { data, err, loading } = useAxios(`/api/doctor/getReports/?patientName=${finalSearch}&page=${page}&status=${statusDebounce}`, true);

    useEffect(() => {
        if (data) {
            setReports(data.reports);
            calculateStats(data.reports);
            
        }
        if (err?.response) {
            toast.error(err?.response?.data.msg || 'something went wrong')
        }
    }, [data])



    return { reports, setReports, limit: data?.limit, loading, name, setName,page ,setPage, reportStats, setFilterStatus }
}

export default useGetReports