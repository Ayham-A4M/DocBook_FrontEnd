import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaUserMd,
  FaStar,
  FaBriefcaseMedical,
  FaProcedures,
  FaCalendarAlt,
  FaDollarSign
} from 'react-icons/fa';
const Statistic = ({ icon, title, value, color }) => {
  return (
    <div className="flex items-center bg-white dark:bg-slate-700 dark:hover:bg-slate-800 p-2 rounded-lg shadow-sm transition duration-300 hover:bg-blue-50 hover:scale-105">
      <div className={`p-2 ${color} rounded-full mr-3`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-600 dark:text-gray-300">{title}</p>
        <p className="font-semibold text-sm">{value}</p>
      </div>
    </div>
  )
}

const DoctorCard = ({ doctor }) => {

  const getAvailable = (workingDays) => {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const todayIndex = new Date().getDay()
    const today = days[todayIndex];
    if (workingDays.includes(today)) { return 'Today' }
    else if (workingDays.includes(days[(todayIndex != 6 ? todayIndex + 1 : 0)])) { return 'Tomorrow' }
    let i = (todayIndex + 2) <= 6 ? (todayIndex + 2) : 0
    while (days[i] != today) {
      if (i > 6) { i = 0; }
      if (workingDays.includes(days[i])) { return `next ${days[i]}` }
      i++;
    }
  }

  return (
    <div className="w-80 bg-card group/parent   rounded-[8px] shadow-xl  overflow-hidden transform transition duration-500  hover:scale-[1.015] relative">
     
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-[var(--main-blue)] rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2 animate-pulse delay-200"></div>

     
      <div className="relative border-b border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover/parent:bg-blue-700/35 dark:group-hover/parent:bg-blue-500/10  duration-300 bg-transparent ">
        <img
          src={`http://localhost:8000${doctor.image}`}
          alt={doctor.fullName}
          className="w-full aspect-[16/9] object-contain rounded-t-2xl  "
        />

      </div>

      {/* Doctor Information Section */}
      <div className="p-5 flex flex-col gap-y-2.5 ">
        {/* Name and Specialty */}

        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-popover-foreground tracking-tight">Dr. {doctor.fullName}</h3>
          <div className="flex items-center justify-center mt-2">
            <FaUserMd className="text-[var(--main-blue)] mr-2 text-xl animate-bounce" />
            <span className="text-[var(--main-blue)] font-semibold capitalize text-base">{doctor.specialization}</span>
          </div>
        </div>

        {/* Rating Badge */}

        <div className="flex justify-center">
          <div className="flex items-center bg-amber-50 dark:bg-slate-700  px-4 py-1 rounded-full shadow-inner">
            <FaStar className="text-amber-500 dark:text-amber-300 mr-2 text-lg animate-spin-slow" />
            <span className="font-semibold text-sm">{doctor.rate} Rating</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Statistic color={'bg-blue-100'} title={'Experience'} value={doctor.experience} icon={<FaBriefcaseMedical className="text-blue-600 text-lg" />} />
          <Statistic color={'bg-green-100'} title={'Patients'} value={doctor.treatmentsNumber} icon={<FaProcedures className="text-green-600 text-lg" />} />
          <Statistic color={'bg-purple-100'} title={'Available'} value={getAvailable(doctor.workingDays)} icon={<FaCalendarAlt className="text-purple-600 text-lg" />} />
          <Statistic color={'bg-amber-100'} title={'Consultation'} value={`$${doctor.fee}`} icon={<FaDollarSign className="text-amber-600 text-lg" />} />
        </div>

        
        <NavLink
          to={`/doctorpage/?id=${doctor._id}`}
          className="relative submitButton text-center overflow-hidden group shadow-md hover:shadow-lg"
        >
          <span className="relative">Book Appointment</span>
        </NavLink>

      </div>
    </div>
  );
};

export default memo(DoctorCard);