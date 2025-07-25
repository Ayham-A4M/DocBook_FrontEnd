
import TakeAppointment from './TakeAppointment';
import { FaUniversity, FaUserMd, FaVenusMars, FaBirthdayCake } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import Section from './Section';
import { useLocation } from 'react-router-dom';
import useGetSpecificDoctor from '../../../hooks/useGetSpecificDoctor';
import LeftCard from './LeftCard';
import RateDoctor from './RateDoctor';
import { IoIosClock } from "react-icons/io";
import Loader2 from '../../../components/Loader2';
const DoctorPage = () => {

    const workingHours = "9:00 AM - 2:00 PM";
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const { doctor, nextHolidays, err, loading } = useGetSpecificDoctor(id);



    return (
        <div className="min-h-screen mb-8 ">
            {
                doctor ?
                    <>


                        {/* Main Content */}
                        <main className="container mx-auto  py-8">
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Left Column - Doctor Image and Quick Info */}
                                <div className="lg:w-1/3 space-y-8">

                                    <LeftCard image={doctor.image} fullName={doctor.fullName} specialization={doctor.specialization} fee={doctor.fee} rate={doctor.rate} treatmentsNumber={doctor.treatmentsNumber} email={doctor.email} phoneNumber={doctor.phoneNumber} />

                                    <Section title={'Take Appointemnt'}>
                                        <TakeAppointment nextHolidays={nextHolidays} workingDays={doctor.workingDays} doctorId={id} fee={doctor.fee} />
                                    </Section>

                                </div>
                                {/* End Left Column */}

                                {/* Right Column - Detailed Information */}
                                <div className="lg:w-2/3 space-y-8">




                                    <Section title={'Experience and Education'}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="text-lg font-medium mb-3 flex items-center">
                                                    <MdWork className="text-[var(--main-blue)] mr-2" />
                                                    Experience
                                                </h3>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <span className="font-medium mr-2">{doctor.experience}+ years:</span>
                                                        <span>{doctor.specialization}</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="font-medium mr-2">Specializations:</span>
                                                        <span>{doctor.specialization}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-3 flex items-center">
                                                    <FaUniversity className="text-[var(--main-blue)] mr-2" />
                                                    Education
                                                </h3>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <span className="font-medium mr-2">Medical Degree:</span>
                                                        <span>{doctor.universityGraduate}</span>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </Section>


                                    <Section title={'Personal Information'}>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="text-lg font-medium mb-3 flex items-center">
                                                    <FaUserMd className="text-[var(--main-blue)] mr-2" />
                                                    Professional Details
                                                </h3>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center">
                                                        <FaVenusMars className="text-gray-500 mr-2" />
                                                        <span><span className="font-medium">Gender:</span> {doctor.gender}</span>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaBirthdayCake className="text-gray-500 mr-2" />
                                                        <span><span className="font-medium">Age:</span> {doctor.age}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium mb-3 flex items-center">
                                                    <IoIosClock className="text-[var(--main-blue)] mr-2" />
                                                    Availability

                                                </h3>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <span className="font-medium mr-2">Working Days:</span>
                                                        <span className='capitalize'>{doctor.workingDays.join(", ")}</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="font-medium mr-2">Hours:</span>
                                                        <span>{workingHours}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Section>
                                    <Section title={"Rate/Comments"}>
                                        <RateDoctor doctorId={id} />
                                    </Section>

                                </div>
                                {/* End Right Column */}
                            </div>
                        </main>
                    </>
                    :
                    <div className='w-full min-h-[95vh] flex items-center justify-center'>
                        <div className='flex flex-col gap-4'>
                            <Loader2 />
                            <span>Loading ...</span>
                        </div>
                    </div>
            }

        </div>
    );
};

export default DoctorPage;




















