
import { memo } from "react";

const InfoSquare = ({icon,value,title}) => {
    return (
        <div className="bg-white border dark:bg-card hover:scale-102 hover:shadow-xl duration-300 border-blue-100 p-3 rounded-md text-center shadow-sm">
            <p className="text-lg font-extralight text-popover-foreground flex items-center justify-center gap-2 ">
                {icon} {value}
            </p>
            <p className="text-xs text-gray-600 dark:text-slate-300">{title}</p>
        </div>
    )
}

export default memo(InfoSquare)