
import MainTitle from "../../../components/MainTitle"
import SearchInput from "../../../components/SearchInput"
import useAxios from "../../../hooks/useAxios"
import TableBody from "./TableBody";
import { useEffect, useState } from "react";
import DeletePopUp from "../../../components/DeletePopUp";
import handleDeleteUser from "./handler/handleDeleteUser";
import Loader2 from '../../../components/Loader2';
import { useDebounce } from "use-debounce";
import PaginationButtons from '../../../components/PaginationButtons';
const AllUsers = () => {
    const [showDeletePopUp, setShowDeletePopUp] = useState(false);
    const [searchByName, setSearchByName] = useState('');
    const [searchByNameDebounce] = useDebounce(searchByName, 2000);
    const [finalSearch, setFinalSearch] = useState('');
    const [userId, setUserId] = useState(null);
    const [page, setPage] = useState(1);
    const { data, err, loading } = useAxios(`/api/admin/users/?fullName=${finalSearch}&page=${page}`, true);
    useEffect(() => {
        setFinalSearch(searchByNameDebounce);
        setPage(1);
    }, [searchByNameDebounce])
    return (
        <div className="w-full md:p-8 p-1">
            <MainTitle mainTitle={'Patient Records Dashboard'} subTitle={'Display core info and delete records when required'} />



            <div className="bg-card rounded-lg py-8 shadow-sm mb-12">

                <div className="pb-6 flex justify-between px-8 border-b-[1px] border-gray-100  items-center flex-col gap-2 md:flex-row">
                    <SearchInput searchValue={searchByName} setSearchValue={setSearchByName} />
                </div>
                <div className="overflow-x-auto ">
                    <table className="w-full text-left">
                        <thead className="px-2">
                            <tr className="text-gray-500 dark:text-gray-200 text-sm uppercase tracking-wide border-b border-gray-200">
                                <th className="py-3 px-4 text-center">Name</th>
                                <th className="py-3 px-4 text-center">Email</th>
                                <th className="py-3 px-4 text-center">Age</th>
                                <th className="py-3 px-4 text-center">Phone</th>
                                <th className="py-3 px-4">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ?
                                    <tr >
                                        <td className="py-4 text-center" colSpan={5}>
                                            <Loader2 />
                                        </td>
                                    </tr>

                                    :
                                    <TableBody setShowDeletePopUp={setShowDeletePopUp} setUserId={setUserId} data={data} />
                            }
                        </tbody>

                    </table>
                    <div className="py-6 flex justify-center">
                        <PaginationButtons setPage={setPage} page={page} limit={data?.limit} />
                    </div>
                </div>
                {
                    showDeletePopUp &&
                    <DeletePopUp setShowDeletePopUp={setShowDeletePopUp} deleteFunction={handleDeleteUser} deleteId={userId} />
                }
            </div>
        </div>
    )
}

export default AllUsers