import { Checkbox } from "@/components/ui/checkbox"
import { memo } from 'react';


const WorkingDayCheckBox = ({ day, changeWorkingDays }) => {

    return (
        <div className="flex items-center w-[70px] justify-between">
            <label className="text-[16px] pb-0.5 capitalize font-medium text-popover-foreground">
                {day}
            </label>
            <Checkbox className="size-[20px] cursor-pointer border-popover-foreground" value={day} onCheckedChange={(e) => { changeWorkingDays(e, day) }} />
        </div>

    )
}

export default memo(WorkingDayCheckBox)