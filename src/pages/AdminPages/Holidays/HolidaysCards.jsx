import Loader2 from "../../../components/Loader2"
import HolidayCard from "../../../components/HolidayCard"
import handleDeleteHoliday from "./handler/handleDeleteHoliday";
import { useCallback } from "react";
const HolidaysCards = ({ holidays, year, loading, setHolidays }) => {
    const deleteHoliday = useCallback(async (id) => {
        const response = await handleDeleteHoliday(id);
        if (response) {
          
            setHolidays(prev => prev.filter((e)=>(e._id!=id)));
        }
    },[])
    return (
        <>
            {
                loading
                    ?
                    <div className="flex justify-center items-center py-8">
                        <Loader2 />
                    </div>
                    :
                    (holidays?.length === 0)
                        ?
                        year == new Date().getFullYear() ?
                            <div className="text-center text-gray-500 mt-8">
                                No holidays scheduled. Add a new holiday above!
                            </div>
                            :
                            <div className="text-center text-gray-500 mt-8">
                                No holidays scheduled in this year
                            </div>
                        :
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                holidays &&
                                holidays.map((holiday) => (
                                    <HolidayCard key={holiday._id} holiday={holiday} deleteHoliday={deleteHoliday} />
                                ))
                            }
                        </div>
            }




        </>
    )
}

export default HolidaysCards