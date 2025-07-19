import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { memo } from 'react';

const PaginationButtons = ({ page, setPage, limit }) => {
    const handleDecreasePage = () => {
        if (page > 1) {
            setPage(prev => prev - 1)
             window.scrollTo(0,0);
        }
    }
    const handleIncreasePage = () => {
        console.log(limit)
        if (page < limit) {
            setPage(prev => prev + 1)
            window.scrollTo(0,0)
        }
    }
    return (
        <>
            {
                limit > 1 ?
                <div className="flex items-center justify-center gap-[15px] py-6">
                    <div className="group px-[5px] duration-300 py-[5px] rounded-[4px] border-[1px] border-slate-400 hover:bg-[var(--main-blue)]">
                        <FaChevronCircleLeft className=" text-[20px] group-hover:text-slate-100 text-[var(--main-blue)] cursor-pointer " onClick={() => { handleDecreasePage() }} />
                    </div>
                    <span className="text-[18px] text-slate-100   bg-[var(--main-blue)] py-[3px] px-[15px] rounded-[4px]">{`${page}/${limit}`}</span>
                    <div className="group px-[5px] duration-300 py-[5px] rounded-[4px] border-[1px] border-slate-400 hover:bg-[var(--main-blue)]">
                        <FaChevronCircleRight className=" text-[20px] group-hover:text-slate-100 text-[var(--main-blue)] cursor-pointer " onClick={() => { handleIncreasePage() }} />
                    </div>
                </div>
                :
                <div className="py-6 w-full">

                </div>
            }
        </>
    )
}

export default memo(PaginationButtons)