import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select"
import { memo } from 'react';

const SelectSpec = ({setValue}) => {

    return (
        <Select onValueChange={(e)=>{setValue(e)}} className="focus-visible:-blue-500">
            <SelectTrigger className="w-[180px]  ring-1 ring-gray-400 focus:ring-blue-600" >
                <SelectValue placeholder="Specilization" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup >
                    <SelectLabel>specialization</SelectLabel>
                    <SelectItem value="default">Mix</SelectItem>
                    <SelectItem value="Pulmonologist">Pulmonologist</SelectItem>
                    <SelectItem value="Hematologist">Hematologist</SelectItem>
                    <SelectItem value="Pediatrician">Pediatrician</SelectItem>
                    <SelectItem value="Dermatologist">Dermatologist</SelectItem>
                    <SelectItem value="Cardiologist">Cardiologist</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default memo(SelectSpec);