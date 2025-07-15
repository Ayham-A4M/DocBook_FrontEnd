import { MdFilter5 } from "react-icons/md";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"
const SelectYear = ({ setYear }) => {

    const thisYear = new Date().getFullYear();
    return (

        <div className="flex justify-end py-6">
            <Select onValueChange={(e) => { setYear(e) }} className="focus-visible:-blue-500">
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

export default SelectYear




{/* <div className=" flex justify-end py-6">
            <div className="w-fit flex items-center gap-4">
                <MdFilter5 className="text-[18px] text-[var(--main-blue)]" />
                <select className="py-1 cursor-pointer px-5 border-[var(--main-blue)] border-2 rounded-[4px]" onChange={(e) => { setYear(e.target.value) }}>
                    {
                        [...Array(5)].map((e, i) => (
                            <option value={`${thisYear - i}`} key={i}>{thisYear - i}</option>
                        ))
                    }

                </select>
            </div>
        </div> */}