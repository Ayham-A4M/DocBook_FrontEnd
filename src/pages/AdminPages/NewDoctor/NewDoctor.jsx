import { Input } from "@/components/ui/input";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"
import WorkingDayCheckBox from "./WorkingDayCheckBox";
import {
    FaUser, FaCalendarAlt, FaUniversity, FaVenusMars,
    FaStethoscope, FaCalendarDay, FaPhone, FaSave,
    FaMapMarkerAlt, FaMailBulk, FaLock,
    FaNotesMedical, FaDollarSign, FaCamera
} from 'react-icons/fa';
import { TiDeleteOutline } from "react-icons/ti";
import Label from './Lable';
import { useRef, useState, useCallback } from 'react';
import handleCreateNewDoctor from './handler/handleCreateNewDoctor';
import MainTitle from "../../../components/MainTitle";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import FormErrorMessage from "../../../components/FormErrorMessage";
const NewDoctor = () => {
    const [doctorInformation, setDoctorInformtaion] = useState({
        fullName: '',
        age: 0,
        gender: 'Male',
        phoneNumber: '',
        universityGraduate: '',
        specialization: '',
        workingDays: [],
        experience: 0,
        address: '',
        email: '',
        fee: 0,
        password: '',
    });
    const [image, setImage] = useState('');
    const [browserImage, setBrowserImage] = useState('');
    const [loading, setLoading] = useState(false);
    const handleOnChange = (e, name) => {
        setDoctorInformtaion({ ...doctorInformation, [name]: e.target.value });
    };
    const ref = useRef();

    const doctorSchema = yup.object().shape({
        fullName: yup.string().required(),
        gender: yup.string().oneOf(['Male', 'Female']),
        age: yup.number().min(25).max(90).typeError("Please enter a valid number").integer().required(),
        phoneNumber: yup.string().min(5).max(20).required(),
        experience: yup.number().integer().typeError("Please enter a valid number").min(1).max(65).required(),
        email: yup.string().email().required(),
        fee: yup.number().typeError("Please enter a valid number").positive().min(1).required(),
        address: yup.string().matches(/^[A-Za-z]+-[A-Za-z]+-[A-Za-z0-9]+$/, "address must be like Country-City-Street").min(10).max(50).required(),
        workingDays: yup.array().of(yup.string().oneOf(["sun", "mon", "tue", "wed", "thu", "fri", "sat"])).min(1).required(),
        specialization: yup.string().required().max(50),
        password: yup.string().min(8).max(20).required(),
        universityGraduate: yup.string().required(),

    });
    const { control, setValue, getValues, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(doctorSchema),
        defaultValues: {
            gender: 'Male',
            age: 25,
            fee: 1,
            experience: 1,
            workingDays: [],
        }
    });
    const changeWorkingDays = useCallback((isChecked, value) => {
        let newWorkingDays = getValues("workingDays");
        if (isChecked) {
            newWorkingDays.push(value);
        } else {
            newWorkingDays = newWorkingDays.filter((e) => (
                e != value
            ))
        }
        setValue("workingDays", newWorkingDays);
    }
        , [])


    const submitCreateNewDoctor = (data) => {
        handleCreateNewDoctor(data, image, setLoading);
    };

    return (
        <div className="w-full md:p-8 p-1">
            <MainTitle mainTitle={'Doctor Registration'} subTitle={'Join our medical team and provide quality care'} />


            <form onSubmit={handleSubmit(submitCreateNewDoctor)} className="space-y-12">
                {/* Personal Information Section */}
                <div >
                    <h2 className="text-xl font-semibold text-popover-foreground mb-6 flex items-center">
                        <FaUser className="mr-2 text-[var(--main-blue)]" />
                        Personal Information
                    </h2>
                    <div className="space-y-6">
                        {/* Image Upload */}
                        <div>
                            <Label icon={<FaCamera className="text-[var(--main-blue)]" />} name="Doctor Photo" />
                            <div className="flex items-center gap-6 mt-2">
                                <label
                                    htmlFor="inputimage"
                                    className="size-24 rounded-xl flex items-center justify-center bg-card  border-2 border-blue-500 cursor-pointer hover:bg-gray-200 transition duration-200"
                                >
                                    <FaCamera className="text-blue-500 text-xl" />
                                </label>
                
                                {browserImage && (
                                    <div className="flex items-center gap-3">
                                        <TiDeleteOutline
                                            className="text-red-500 text-xl cursor-pointer"
                                            onClick={() => {
                                                setBrowserImage('');
                                                setImage('');
                                                ref.current.value = '';
                                            }}
                                        />
                                        <img
                                            src={browserImage}
                                            alt="Doctor Preview"
                                            className="size-24 rounded-xl  object-cover border-2 border-[var(--main-blue)]"
                                        />
                                    </div>
                                )}
                            </div>
                            <input
                                type="file"
                                ref={ref}
                                className="hidden"
                                id="inputimage"
                                onChange={(e) => {
                                    if (e.target.files[0]) {
                                        setImage(e.target.files[0]);
                                        setBrowserImage(URL.createObjectURL(e.target.files[0]));
                                    }
                                }}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <Label icon={<FaUser className="text-[var(--main-blue)]" />} name="Full Name" />
                                <Controller
                                    name="fullName"
                                    control={control}
                                    render={({ field }) => (
                                        <Input type="text" className={`py-6 ${errors.fullName ? 'border-red-500' : ''}`} value={field.value} {...field} />

                                    )}

                                />
                                {
                                    errors.fullName &&
                                    <FormErrorMessage message={errors.fullName.message} />
                                }

                            </div>
                            <div className="flex flex-col gap-2">
                                <Label icon={<FaCalendarAlt className="text-[var(--main-blue)]" />} name="Age" />
                                <Controller
                                    name="age"
                                    control={control}
                                    render={({ field }) => (
                                        <Input type="number" {...field} value={field.value} className={`py-6 ${errors.age ? 'border-red-500' : ''}`} />

                                    )}

                                />
                                {
                                    errors.age &&
                                    <FormErrorMessage message={errors.age.message} />
                                }

                            </div>
                            <div className="flex flex-col gap-2">
                                <Label icon={<FaVenusMars className="text-[var(--main-blue)]" />} name="gender" />

                                <Controller
                                    name="gender"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value} className="focus-visible:-blue-500">
                                            <SelectTrigger className="w-full py-6" >
                                                <SelectValue placeholder="Gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup >
                                                    <SelectLabel>gender</SelectLabel>
                                                    <SelectItem value="Male">Male</SelectItem>
                                                    <SelectItem value="Female">Female</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )}

                                />
                                {
                                    errors.gender &&
                                    <FormErrorMessage message={errors.gender.message} />
                                }






                            </div>
                            <div className="flex flex-col gap-2">

                                <Label icon={<FaPhone className="text-[var(--main-blue)]" />} name="Phone Number" />
                                <Controller
                                    name="phoneNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <PhoneInput
                                            country="sy"
                                            inputStyle={{ width: '100%', paddingTop: '24px', paddingBottom: '24px', color: 'black', borderColor: `${errors.phoneNumber ? 'red' : 'gray'}` }}
                                            {...field}

                                        />
                                    )}
                                />
                                {
                                    errors.phoneNumber &&
                                    <FormErrorMessage message={errors.phoneNumber.message} />
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Professional Information Section */}
                <div>
                    <h2 className="text-xl font-semibold text-popover-foreground mb-6 flex items-center">
                        <FaStethoscope className="mr-2 text-blue-600" />
                        Professional Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <Label icon={<FaUniversity className="text-blue-500" />} name="University Graduate" />
                            <Controller
                                name="universityGraduate"
                                control={control}
                                render={({ field }) => (
                                    <Input type="text" className={`py-6 ${errors.universityGraduate ? 'border-red-500' : ''}`} {...field} value={field.value} />

                                )}
                            />
                            {
                                errors.universityGraduate &&
                                <FormErrorMessage message={errors.universityGraduate.message} />
                            }

                        </div>
                        <div className="flex flex-col gap-2">
                            <Label icon={<FaStethoscope className="text-blue-500" />} name="Specialization" />
                            <Controller
                                name="specialization"
                                control={control}
                                render={({ field }) => (
                                    <Input type="text" className={`py-6 ${errors.specialization ? 'border-red-500' : ''}`} {...field} value={field.value} />

                                )}
                            />
                            {
                                errors.specialization &&
                                <FormErrorMessage message={errors.specialization.message} />
                            }


                        </div>
                        <div className="flex flex-col gap-2">
                            <Label icon={<FaStethoscope className="text-blue-500" />} name="Experience (Years)" />
                            <Controller
                                name="experience"
                                control={control}
                                render={({ field }) => (
                                    <Input type="number" className={`py-6 ${errors.experience ? 'border-red-500' : ''}`} {...field} value={field.value} />
                                )}
                            />
                            {
                                errors.experience &&
                                <FormErrorMessage message={errors.experience.message} />
                            }



                        </div>
                        <div className="flex flex-col gap-2">
                            <Label icon={<FaCalendarDay className="text-blue-500" />} name="Working Days" />

                            <div className="w-full grid grid-cols-4 gap-3">
                                <WorkingDayCheckBox day={'sun'} changeWorkingDays={changeWorkingDays} />
                                <WorkingDayCheckBox day={'mon'} changeWorkingDays={changeWorkingDays} />
                                <WorkingDayCheckBox day={'tue'} changeWorkingDays={changeWorkingDays} />
                                <WorkingDayCheckBox day={'wed'} changeWorkingDays={changeWorkingDays} />
                                <WorkingDayCheckBox day={'thu'} changeWorkingDays={changeWorkingDays} />
                                <WorkingDayCheckBox day={'fri'} changeWorkingDays={changeWorkingDays} />
                                <WorkingDayCheckBox day={'sat'} changeWorkingDays={changeWorkingDays} />

                            </div>
                            {
                                errors.workingDays &&
                                <FormErrorMessage message={errors.workingDays.message} />
                            }


                        </div>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div>
                    <h2 className="text-xl font-semibold text-popover-foreground mb-6 flex items-center">
                        <FaNotesMedical className="mr-2 text-blue-600" />
                        Additional Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <Label icon={<FaMapMarkerAlt className="text-blue-500" />} name="Address" />
                            <Controller
                                name="address"
                                control={control}
                                render={({ field }) => (

                                    <Input type="text" className={`py-6 ${errors.address ? 'border-red-500' : ''}`} {...field} value={field.value} />

                                )}
                            />
                            {
                                errors.address &&
                                <FormErrorMessage message={errors.address.message} />
                            }



                        </div>
                        <div className="flex flex-col gap-2">
                            <Label icon={<FaMailBulk className="text-blue-500" />} name="Email" />
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <Input type="email" className={`py-6 ${errors.email ? 'border-red-500' : ''}`} {...field} value={field.value} />
                                )}
                            />

                            {
                                errors.email &&
                                <FormErrorMessage message={errors.email.message} />
                            }



                        </div>
                        <div className="flex flex-col gap-2">
                            <Label icon={<FaDollarSign className="text-blue-500" />} name="Consultation Fee ($)" />
                            <Controller
                                name="fee"
                                control={control}
                                render={({ field }) => (
                                    <Input type="number" className={`py-6 ${errors.fee ? 'border-red-500' : ''}`} {...field} value={field.value} />
                                )}
                            />
                            {
                                errors.fee &&
                                <FormErrorMessage message={errors.fee.message} />
                            }


                        </div>
                        <div className="flex flex-col gap-2">
                            <Label icon={<FaLock className="text-blue-500" />} name="Password" />
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <Input type="password" className={`py-6 ${errors.password ? 'border-red-500' : ''}`} {...field} value={field.value} />
                                )}
                            />
                            {
                                errors.password &&
                                <FormErrorMessage message={errors.password.message} />
                            }
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                    <Button type="submit" disabled={loading} className={`w-full py-6   bg-[var(--main-blue)] hover:bg-slate-700 text-white  duration-300 gap-1`}>
                        {
                            loading ?
                                '••••'
                                :
                                <>
                                    <FaSave className="mr-2" />
                                    Register Doctor
                                </>
                        }



                    </Button>

                </div>
            </form>
        </div>
    );
};

export default NewDoctor;