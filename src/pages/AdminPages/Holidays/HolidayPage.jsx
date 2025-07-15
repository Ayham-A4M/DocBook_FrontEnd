
import { TbCalendarQuestion } from "react-icons/tb";
import { FaCalendarAlt, FaPlus, FaTrash } from 'react-icons/fa';
import MainTitle from '../../../components/MainTitle'
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarDays } from "react-icons/fa6";

import { format } from "date-fns";
import toast from "react-hot-toast";
import handleCreateHoliday from "./handler/handleCreateHoliday";
import useAxios from '../../../hooks/useAxios';
import SelectYear from "./SelectYear";
import HolidaysCards from "./HolidaysCards";
const HolidayPage = () => {

  const [newHoliday, setNewHoliday] = useState({ date: '', reason: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState('2025');
  const [holidays, setHolidays] = useState(null);

  const { data, err, loading } = useAxios(`/api/public/holidays/?year=${year}`, false);
  useEffect(() => {
    setHolidays(data);
  }, [data])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday({ ...newHoliday, [name]: value });
  };

  const addHoliday = async (e) => {
    e.preventDefault();
    if (format(newHoliday.date, 'yyyy-MM-dd') < format(new Date(), "yyyy-MM-dd")) {
      return toast.error('the date you picked in past');
    } else if (format(newHoliday.date, 'yyyy-MM-dd') === format(new Date(), "yyyy-MM-dd")) {
      return toast.error('you can just picked date in future')
    }
    const newholiday = {
      date: format(newHoliday.date, "yyyy-MM-dd"),
      reason: newHoliday.reason
    }
    const response = await handleCreateHoliday(newholiday, setIsLoading);
    if (response) {
      setHolidays(prev => [...prev, { ...newholiday, _id: `${150 * Math.random()}` }])
    }
  };



  return (
    <div className="min-h-screen w-full  md:p-8 p-1">

      {/* Header */}

      <MainTitle mainTitle={'System Holiday Settings'} subTitle={'Define non-working days to prevent bookings.'} />

      <div className="bg-card shadow-lg rounded-lg md:p-6 py-3 px-2 mb-8">
        {/* Add Holiday Form */}
        <h2 className="text-xl font-semibold text-popover-foreground mb-4 flex items-center">
          <FaCalendarAlt className="mr-2 text-[var(--main-blue)]" /> Add New Holiday
        </h2>
        <form onSubmit={addHoliday} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm mb-2 font-medium text-gray-700 dark:text-gray-400">
              Holiday Date
            </label>

            <div className='w-fit relative'>
              <FaCalendarDays className='top-[50%] text-[15px] absolute translate-y-[-50%] left-[10px] text-[var(--main-blue)]' />
              <DatePicker
                className='inputStyle'
                selected={newHoliday.date}
                onChange={(date) => setNewHoliday(prev => ({ ...prev, date: date }))}
                placeholderText="Select a holiday date"
              />
            </div>

          </div>




          <div className="sm:col-span-2">
            <label htmlFor="reason" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-400">
              Reason
            </label>
            <div className=' w-fit relative'>
              <TbCalendarQuestion className="absolute top-[50%] text-[15px] translate-y-[-50%] left-[10px] text-[var(--main-blue)]" />
              <input
                type="text"
                id="reason"
                name="reason"
                value={newHoliday.reason}
                onChange={handleInputChange}
                placeholder="Enter holiday reason"
                className="inputStyle"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {
                isLoading ?

                  <span>•••••••••••••••</span>
                  :
                  <>
                    <FaPlus className="mr-2" /> Add Holiday
                  </>
              }
            </button>
          </div>
        </form>
        {/* filter Cards with year */}
        <SelectYear setYear={setYear} />
      </div>

      <HolidaysCards holidays={holidays} year={year} loading={loading} setHolidays={setHolidays} />

    </div>

  );
};

export default HolidayPage;