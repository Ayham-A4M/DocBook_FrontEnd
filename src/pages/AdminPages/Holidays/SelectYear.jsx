import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"
import { memo } from "react"
const SelectYear = ({ setYear }) => {

    const thisYear = new Date().getFullYear();
    return (

        <div className="flex justify-end py-6">
            <Select onValueChange={(e) => { console.log(e);setYear(e) }} className="focus-visible:-blue-500">
                <SelectTrigger className="w-[180px]  ring-1 ring-gray-400 focus:ring-blue-600" >
                    <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup >
                        <SelectLabel>Holidays Year</SelectLabel>
                        {
                            [...Array(5)].map((e, i) => (
                                <SelectItem value={`${thisYear - i}`} key={i}>{thisYear - i}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>


    )
}

export default memo(SelectYear);



