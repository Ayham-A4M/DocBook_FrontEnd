
import { memo } from "react"
const MainTitle = ({ mainTitle, subTitle,titleColor }) => {
    return (
      
        <div className="md:py-4 pt-2 pb-4 flex flex-col items-start ">
            <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-[#4B9CD3] italic">
                {mainTitle}
            </h1>
            <p className="mt-[2px] text-[15px] sm:text-xl font-light text-gray-600 dark:text-slate-200 italic">
                {subTitle}
            </p>
        </div>
        
    )


}

export default memo(MainTitle)