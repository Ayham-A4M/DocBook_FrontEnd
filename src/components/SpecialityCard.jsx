
import { memo } from 'react';
const SpecialityCard = ({pic,title}) => {
  return (
    <div className="flex flex-col duration-300 hover:translate-y-[-5px] hover:scale-[1.04] items-center justify-center gap-1.5 p-2.5 w-fit">
        <div className="p-4 bg-slate-200 dark:bg-gray-300 rounded-full flex items-center justify-center">
            <img src={pic} alt="SpecialityPhoto" className="w-16 aspect-square"  />
        </div>
        <span className="text-center">{title}</span>
    </div>
  )
}

export default memo(SpecialityCard);