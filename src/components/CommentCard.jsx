
import { FaUser, FaStar, FaStarHalfAlt, FaHeartbeat } from 'react-icons/fa';
import { FaUserDoctor } from "react-icons/fa6";
import dateFormat from '../helper/dateFormat'
import { memo } from 'react';
const CommentCard = ({ name, feeling, rating, opinion, date, doctorName }) => {
    // Convert rating to an array for rendering stars
    const getStars = () => {
        let halfStarIndex = (parseInt(rating) % rating != 0) ? parseInt(rating) : -1
        const stars = Array(5).fill(0).map((_, i) => (
            i != halfStarIndex ?
                <FaStar
                    key={i}
                    className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
                    size={18}
                />
                :
                <FaStarHalfAlt
                    key={i}
                    className='text-yellow-400'
                    size={18}
                />
        ));

        return stars
    }

    return (
        <div className="relative bg-accent  rounded-xl shadow-lg p-6 m-4 max-w-sm transform transition-all duration-300 hover:scale-102 hover:shadow-2xl">
            {/* Decorative medical-themed corner element */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-blue-100 rounded-br-full opacity-50"></div>
            <div className="absolute top-2 left-2">
                <FaHeartbeat className="text-[var(--main-blue)] dark:text-blue-600 text-2xl opacity-80" />
            </div>
            <i className='absolute bottom-[5px] right-[5px] text-[10px] text-slate-800 dark:text-slate-100'>{dateFormat(date)}</i>

            {/* Card Content */}
            <div className="relative z-10">
                {/* PatientName DoctorName */}
                <div className='flex flex-col'>

                    <div className="flex items-center mb-4">
                        <FaUser className="text-blue-600 mr-2" size={24} />
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-100">{name}</h3>
                    </div>

                    {
                        doctorName &&
                        <div className='flex items-center mb-4'>
                            <FaUserDoctor className="text-gray-600 dark:text-slate-300 mr-2 dark:" size={20} />
                            <i className="text-lg font-semibold text-gray-800 dark:text-slate-100">{'Alex Fernandis'}</i>
                        </div>
                    }
                </div>

                {/* Feeling */}
                <div className="mb-3">
                    <p className="text-sm font-medium text-gray-600 dark:text-slate-300">
                        Feeling: <span className="text-[var(--main-blue)]">{feeling}</span>
                    </p>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                    <div className="flex">{getStars()}</div>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">({rating}/5)</span>
                </div>

                {/* Opinion */}
                <p className="text-gray-700 text-sm italic bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 dark:bg-slate-600 dark:text-slate-200">
                    "{opinion}"
                </p>

                {/* Decorative bottom element */}
                <div className="mt-4 h-1 w-1/2 bg-blue-400 dark:bg-slate-300 rounded-full mx-auto"></div>
            </div>
        </div>
    );
};

export default memo(CommentCard);