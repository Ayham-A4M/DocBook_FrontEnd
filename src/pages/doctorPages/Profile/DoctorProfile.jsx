import MainTitle from "../../../components/MainTitle"
import Loader2 from '../../../components/Loader2'
import InfoSquare from "./InfoSquare";
import { useEffect, useState } from 'react';
import { CiDollar } from "react-icons/ci";
import { GiStethoscope } from "react-icons/gi";
import ImageSection from "./ImageSection";
import { FaFileMedicalAlt, FaPhone, FaMapMarkerAlt, FaCalendar, FaUniversity, FaEnvelope, FaHeart, FaStar, FaBriefcaseMedical } from 'react-icons/fa';
import InfoCard from './InfoCard'
import useAxios from '../../../hooks/useAxios';
import handleSaveChanges from './handler/handleSaveChanges'
import { Button } from '@/components/ui/button'

import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';


const DoctorProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editInformation, setEditInformation] = useState(null);
    const [profile, setProfile] = useState(null);
    const { data, err, loading } = useAxios('/api/doctor/myProfile', true);
    const [newImage, setNewImage] = useState(null)
    useEffect(() => {
        setProfile(data);
        setValue("fullName", data?.fullName);
        setValue("age", data?.age);
        setValue("phoneNumber", data?.phoneNumber);
        setValue("email", data?.email);
        setValue("address", data?.address);
        setValue("universityGraduate", data?.universityGraduate);

    }, [data])

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        age: yup.number().min(25).max(90).typeError("Please enter a valid number").integer().required(),
        phoneNumber: yup.string().min(5).max(20).required(),
        email: yup.string().email().required(),
        address: yup.string().matches(/^[A-Za-z]+-[A-Za-z]+-[A-Za-z0-9]+$/, "address must be like Country-City-Street").min(10).max(50).required(),
        universityGraduate: yup.string().required(),
    });
    const { control, setValue, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };
    const submitEdit = (data) => {
        console.log(data);
        toggleEdit();
        handleSaveChanges(newImage, data,setProfile)
    }

    return (
        <div className="overflow-x-hidden w-full p-1 md:p-8">

            <MainTitle mainTitle={'manage your profile'} subTitle={'edit and let patient talk about you'} />


            {
                loading
                    ?
                    <div className="flex justify-center items-center py-6">
                        <Loader2 />
                    </div>
                    :
                    <>


                        {/* Photo and Stats */}
                        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center">

                            <ImageSection image={data?.image} setNewImage={setNewImage} newImage={newImage} isEditing={isEditing} />
                            {
                                profile &&
                                <div className=" grid md:grid-cols-6 grid-cols-2 gap-3">
                                    <InfoSquare icon={<FaHeart className="text-red-500" />} value={profile.treatmentsNumber} title={'Treatments'} />
                                    <InfoSquare icon={<FaFileMedicalAlt className="text-gray-700" />} value={profile.treatmentsNumber} title={'Reports'} />
                                    <InfoSquare icon={<FaStar className="text-yellow-500" />} value={`${profile.rate}`} title={'Rating'} />
                                    <InfoSquare icon={<FaBriefcaseMedical className="text-pink-600" />} value={profile.experience} title={'Experince Years'} />
                                    <InfoSquare icon={<CiDollar className="text-yellow-600" />} value={profile.fee} title={'Price'} />
                                    <InfoSquare icon={<GiStethoscope className="text-purple-600" />} value={profile.specialization} title={'Specialization'} />

                                </div>
                            }
                        </div>

                        {/* Info Cards */}
                        <form onSubmit={handleSubmit(submitEdit)}>
                            {
                                profile &&

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InfoCard errors={errors} register={register} name={'address'} icon={<FaMapMarkerAlt className="text-blue-500" />} infoName={'Address'} isEditing={isEditing} value={profile.address}  />
                                    <InfoCard errors={errors} register={register} control={control} name={'phoneNumber'} icon={<FaPhone className="text-blue-500" />} infoName={'Phone Number'} isEditing={isEditing} value={profile.phoneNumber}  />
                                    <InfoCard errors={errors} register={register} name={'fullName'} icon={<FaCalendar className="text-blue-500" />} infoName={'Full Name'} isEditing={isEditing} value={profile.fullName}  />
                                    <InfoCard errors={errors} register={register} name={'email'} icon={<FaEnvelope className="text-blue-500" />} infoName={'Email'} isEditing={isEditing} value={profile.email}  />
                                    <InfoCard errors={errors} register={register} name={'universityGraduate'} icon={<FaUniversity className="text-blue-500" />} infoName={'Graduated'} isEditing={isEditing} value={profile.universityGraduate}  />
                                    <InfoCard errors={errors} register={register} isNumber={true} name={'age'} icon={<FaUniversity className="text-blue-500" />} infoName={'Age'} isEditing={isEditing} value={profile.age}  />

                                </div>

                            }
                            {
                                !isEditing &&
                                <div className="mt-6 w-full">
                                    <Button className="py-1 px-7 rounded-[4px] hover:bg-gray-700 duration-300  text-slate-200 bg-gray-600" onClick={toggleEdit}>
                                        Edit
                                    </Button>

                                </div>
                            }

                            {/* Save Button */}
                            {isEditing && (
                                <div className="flex items-center mt-6 gap-6">
                                    <Button className="px-7 rounded-[4px] bg-red-600 text-slate-200 hover:bg-red-700 duration-300" type="button" onClick={(e) => { e.preventDefault(); toggleEdit(); setNewImage(null); setProfile(data) }}>
                                        Cancel
                                    </Button>
                                    <Button className="px-7 rounded-[4px] bg-blue-500 text-slate-200 hover:bg-blue-700 duration-300">
                                        Save Changes
                                    </Button>
                                    {/* <Button className="px-7 rounded-[4px] bg-blue-500 text-slate-200 hover:bg-blue-700 duration-300" onClick={(e) => { e.preventDefault(); toggleEdit(); handleSaveChanges(editInformation, newImage, profile) }}>
                                        Save Changes
                                    </Button> */}


                                </div>
                            )}


                        </form>

                    </>
            }

        </div >

    );
};

export default DoctorProfile;