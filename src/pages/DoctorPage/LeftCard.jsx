import { FaPhone, FaEnvelope, FaMoneyBillWave, FaStar, FaRegStar, FaStarHalfAlt, } from 'react-icons/fa'
import { FaHeartbeat } from "react-icons/fa";
import { FaIdCardAlt } from "react-icons/fa";
const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="text-yellow-500 inline" />);
    }

    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" className="text-yellow-500 inline" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500 inline" />);
    }

    return stars;
};

const LeftCard = ({ image, fullName, specialization, rate, treatmentsNumber, phoneNumber, fee, email }) => {
    return (
        <div className="bg-card rounded-lg shadow-md p-6 ">
            <div className="flex flex-col items-center">
                <img
                    src={`http://localhost:8000${image}`}
                    alt={fullName}
                    className="w-48 h-48 rounded-full object-cover border-4 border-[var(--main-blue)] mb-4"
                />
                <div className="text-center mb-6">
                    <div className="text-2xl mb-1">
                        {renderStars(rate)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{rate.toFixed(1)} ({treatmentsNumber} treatments)</p>
                </div>

                <div className="w-full space-y-4">
                    <div className="flex items-center">
                        <FaIdCardAlt className="text-[var(--main-blue)] mr-3" />
                        <span>{fullName}</span>
                    </div>
                    <div className="flex items-center">
                        <FaHeartbeat className="text-[var(--main-blue)] mr-3" />
                        <span>{specialization}</span>
                    </div>
                    <div className="flex items-center">
                        <FaPhone className="text-[var(--main-blue)] mr-3" />
                        <span>{phoneNumber}</span>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope className="text-[var(--main-blue)] mr-3" />
                        <span>{email}</span>
                    </div>
                    <div className="flex items-center">
                        <FaMoneyBillWave className="text-[var(--main-blue)] mr-3" />
                        <span>${fee} per consultation</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftCard