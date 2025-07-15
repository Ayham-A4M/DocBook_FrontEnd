import MainTitle from "../../../components/MainTitle"
import StatsCard from "../../../components/StatsCard";
import { FaRankingStar, FaCommentDots } from "react-icons/fa6";
import CommentCard from "../../../components/CommentCard";
import useGetComments from '../../../hooks/doctors/useGetComments'
import PaginationButtons from '../../../components/PaginationButtons'
import LevelCard from "./LevelCard";
import NoComments from "./NoComments";
const Comments = () => {

    const { comments, rate, limit, totlaComments, page, setPage, err, loading } = useGetComments();
    return (
        <div className="overflow-x-hidden w-full p-1 md:p-8">
            <MainTitle mainTitle={'Comments and opinion about you'} subTitle={'whats other talk about you ??'} />
            <div className="space-y-8">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">

                    <StatsCard icon={<FaCommentDots className="text-[25px] text-blue-500" />} status={'Total Comments'} value={totlaComments} borderColor={'border-blue-500'} />


                    <StatsCard icon={<FaRankingStar className="text-[25px] text-yellow-300" />} status={'Your Rate'} value={rate || 0} borderColor={'border-yellow-300'} />

                    <LevelCard doctorRate={rate || 0} />

                </div>
                <div className="py-5 px-2 rounded-lg bg-card shadow-xl">
                    {
                        comments?.length > 0 ?

                            <>
                                <div className="grid w-full  max-[1100px]:grid-cols-2 min-[1100px]:grid-cols-3   max-[776px]:grid-cols-1 gap-6 ">
                                    {

                                        comments.map((e) => (
                                            <CommentCard key={e._id} name={e.patientName} rating={e.rate} opinion={e.content} feeling={e.feeling} date={e.date} />
                                        ))



                                    }
                                </div>
                                <div className="flex items-center justify-center">
                                    <PaginationButtons page={page} setPage={setPage} limit={limit} />
                                </div>
                            </>

                            :
                           <NoComments/>
                    }

                </div>
            </div>
        </div>
    )
}

export default Comments