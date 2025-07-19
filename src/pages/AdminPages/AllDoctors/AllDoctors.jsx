import MainTitle from "../../../components/MainTitle"
import useAxios from "../../../hooks/useAxios"
import Loader2 from "../../../components/Loader2";
import { FaStar } from "react-icons/fa";
import PaginationButtons from '../../../components/PaginationButtons'
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import DeleteDoctorPopup from './DeleteDoctorPopup'
import SearchInput from '../../../components/SearchInput'
import SelectSpec from "../../../components/SelectSpec";
import EditButton from "./EditButton";
import DeletePopUp from "../../../components/DeletePopUp";
import handleDeleteDoctor from "./handler/handleDeleteDoctor";
const AllDoctors = () => {
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [page, setPage] = useState(1);
    const [searchName, setSearchName] = useState('');
    const [spec, setSpec] = useState('');
    const [searchDebounce] = useDebounce(searchName, 2000);
    const [finalSearch, setFinalSearch] = useState('');
    const [doctorId, setDoctorId] = useState(null);
    const { data, err, loading } = useAxios(`/api/admin/doctors/?page=${page}&fullName=${finalSearch}&specialization=${spec}`, true);
    useEffect(() => {
        setFinalSearch(searchDebounce);
        setPage(1);
    }, [searchDebounce])
    return (
        <div className="w-full md:p-8 p-1">
            <MainTitle mainTitle={'Medical Staff Dashboard'} subTitle={'Access Doctor Profiles Availability and Key Metrics'} />
            <div className="bg-card rounded-lg py-8 shadow-sm mb-12">
                <div className="pb-6 flex md:justify-between md:px-8 px-2 border-b-[1px] border-gray-100  md:items-center flex-col gap-2 md:flex-row">
                    <div className="flex w-fit gap-1 flex-col">
                        <span className="font-light italic">Search by name :</span>
                        <SearchInput searchValue={searchName} setSearchValue={setSearchName} />
                    </div>
                    <div className="flex w-fit gap-1 flex-col">
                        <span className="font-light italic">Filter by specialization :</span>
                        <SelectSpec setValue={setSpec} />
                    </div>


                </div>
                <div className="overflow-x-auto ">
                    <table className="w-full text-left min-w-[800px] md:min-w-[700px]">
                        <thead className="px-2">
                            <tr className="text-gray-500 dark:text-gray-200 text-sm uppercase tracking-wide border-b border-gray-200">
                                <th className="py-3 px-4">Image</th>
                                <th className="py-3 px-4 text-center">Name</th>
                                <th className="py-3 px-4 text-center">Specialization</th>
                                <th className="py-3 px-4 text-center">Expericnce</th>
                                <th className="py-3 px-4 text-center">Age</th>
                                <th className="py-3 px-4">Rating</th>
                                <th className="py-3 px-4">Edit</th>
                                <th className="py-3 px-4">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ?
                                    <td colSpan={6} className="py-6">
                                        <Loader2 />
                                    </td>


                                    :
                                    data?.doctors && data?.doctors?.length > 0
                                        ?
                                        data?.doctors?.map((doctor) => (
                                            <tr
                                                key={doctor._id}
                                                className="border-b px-2 border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-200"
                                            >
                                                <td className=" text-gray-900 px-3  font-medium">
                                                    <div className="w-fit aspect-square rounded-full border-gray-500 border-[2px]">
                                                        <img src={`http://localhost:8000${doctor.image}`} className="rounded-full w-8 aspect-square object-cover " />
                                                    </div>
                                                </td>
                                                <td className="text-center text-popover-foreground font-medium">{doctor.fullName}</td>
                                                <td className=" text-center text-gray-600 dark:text-gray-300">{doctor.specialization}</td>
                                                <td className=" text-center text-gray-600 dark:text-gray-300">{doctor.experience}</td>
                                                <td className=" text-center text-gray-600 dark:text-gray-300">{doctor.age}</td>
                                                <td className="p-9 text-yellow-500 flex items-center"><FaStar className="mr-1" /> {doctor.rate}  </td>
                                                <td className="">
                                                    <EditButton setDoctorId={setDoctorId} doctorId={doctor._id} />
                                                </td>
                                                <td className="">
                                                    <button className="px-4 rounded-[4px] text-slate-100 cursor-pointer bg-red-500 font-light py-1" onClick={(e) => { e.preventDefault(); setDoctorId(doctor._id); setShowDeletePopUp(true) }}>
                                                        Delete
                                                    </button>
                                                </td>

                                            </tr>
                                        ))
                                        :
                                        <tr>
                                            <td className="py-6 text-slate-500 dark:text-slate-300 text-center" colSpan={8}>
                                                No doctors in system
                                            </td>
                                        </tr>

                            }


                        </tbody>
                    </table>
                </div>
                <PaginationButtons page={page} setPage={setPage} limit={data?.limit} />
            </div>

            {
                showDeletePopUp &&

                <DeletePopUp setShowDeletePopUp={setShowDeletePopUp} deleteFunction={handleDeleteDoctor} deleteId={doctorId} />

            }

        </div>


    )
}

export default AllDoctors