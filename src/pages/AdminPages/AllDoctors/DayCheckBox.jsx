
import { Checkbox } from "@/components/ui/checkbox"
import { memo } from 'react';

const DayCheckBox = ({ value, workingDays,changeWorkingDays }) => {

    return (
        <div className="flex items-center justify-between gap-2 w-[82px]">
            <label className="text-[16px] capitalize font-medium text-popover-foreground">
                {value}
            </label>
            <Checkbox className="size-[20px] cursor-pointer border-popover-foreground" checked={workingDays.includes(value)} value={value} onCheckedChange={(e) => { changeWorkingDays(e, value) }} />
        </div>
    )
}

export default memo(DayCheckBox)