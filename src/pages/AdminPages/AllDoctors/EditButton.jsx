import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import useAxios from "../../../hooks/useAxios";
import { useState, useEffect, useCallback } from "react";
import DayCheckBox from "./DayCheckBox";
import handleEditDoctorProfile from "./handler/handleEditDoctorProfile";
import isThereChangeInProfile from "./handler/isThereChangeInProfile";
import toast from "react-hot-toast";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import FormErrorMessage from "../../../components/FormErrorMessage";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
const EditButton = ({ doctorId, setDoctorId }) => {
    const { data, err, loading } = useAxios(`/api/admin/getDoctorProfile/?_id=${doctorId}`);
    const [open, setOpen] = useState(false);

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        age: yup.number().min(25).max(90).typeError("Please enter a valid number").integer().required(),
        experience: yup.number().integer().typeError("Please enter a valid number").min(1).max(65).required(),
        phoneNumber: yup.string().min(5).max(20).required(),
        email: yup.string().email().required(),
        fee: yup.number().typeError("Please enter a valid number").positive().min(1).required(),
        address: yup.string().matches(/^[A-Za-z]+-[A-Za-z]+-[A-Za-z0-9]+$/, "address must be like Country-City-Street").min(10).max(50).required(),
        workingDays: yup.array().of(yup.string().oneOf(["sun", "mon", "tue", "wed", "thu", "fri", "sat"])).min(1).required(),
        specialization: yup.string().required().max(50),

    });
    const { control, setValue, watch, getValues, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    watch("workingDays");

    useEffect(() => {
        setValue("fullName", data?.fullName);
        setValue("age", data?.age);
        setValue("experience", data?.experience);
        setValue("specialization", data?.specialization);
        setValue("phoneNumber", data?.phoneNumber);
        setValue("email", data?.email);
        setValue("fee", data?.fee);
        setValue("address", data?.address);
        setValue("workingDays", data?.workingDays || []);


    }, [data])




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


    const editSubmit = async (Data) => {
        if (isThereChangeInProfile(Data, data)) {

            const response = await handleEditDoctorProfile(Data, doctorId)
            if (response) {
                setOpen(false)
            }
        } else {
            toast.error("no thing change for update!")

        }
    };
    return (
        <Dialog open={open} setOpenChange={setOpen}    >
            <DialogTrigger asChild>
                <Button className="bg-gray-500 hover:bg-gray-600  text-white py-5" onClick={(e) => { setDoctorId(doctorId); setOpen(true) }}>
                    Edit
                </Button>
            </DialogTrigger>

            <DialogContent className=" max-h-[90vh] overflow-auto">
                <form onSubmit={handleSubmit(editSubmit)} className="flex flex-col gap-3 ">
                    <DialogHeader>
                        <DialogTitle>Update Doctor Information</DialogTitle>
                        <DialogDescription>
                            update specific information for doctors

                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex justify-center items-center py-2">
                        <div className="size-40 rounded-full border-2 border-popover-foreground overflow-hidden">
                            <img src={data?.image} className="object-cover w-full h-full" alt="" />

                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2.5">
                            <Label htmlFor="fullName">Doctor Name</Label>

                            <Controller
                                name="fullName"
                                control={control}
                                render={({ field }) => (
                                    <Input type="text" name="fullName" {...field} className="py-6" placeholder="fullName" id="fullName" />

                                )}
                            />
                            {
                                errors.fullName &&
                                <FormErrorMessage message={errors.fullName.message} />
                            }
                        </div>
                        <div className="space-y-2.5">

                            <Label htmlFor="age">Age</Label>


                            <Controller
                                name="age"
                                control={control}
                                render={({ field }) => (
                                    <Input type="number"  {...field} className="py-6" placeholder="Doctor's age" id="age" />

                                )}
                            />
                            {
                                errors.age &&
                                <FormErrorMessage message={errors.age.message} />
                            }



                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2.5">

                            <Label htmlFor="experience">Experience Years</Label>
                            {
                                errors.experience &&
                                <FormErrorMessage message={errors.experience.message} />
                            }
                            <Controller
                                name="experience"
                                control={control}
                                render={({ field }) => (
                                    <Input type="number" {...field} className="py-6" placeholder="experience" id="experience" />

                                )}
                            />



                        </div>
                        <div className="space-y-2.5">

                            <Label htmlFor="phoneNumber">Phone Number</Label>
                            {
                                errors.phoneNumber &&
                                <FormErrorMessage message={errors.phoneNumber.message} />
                            }
                            <Controller
                                name='phoneNumber'
                                control={control}

                                render={({ field }) => (
                                    <PhoneInput
                                        className="dark:text-black"
                                        {...field}
                                        inputStyle={{ width: '100%', borderColor: `${errors.phoneNumber ? 'red' : 'gray'}`, paddingTop: '24px', paddingBottom: '24px' }}
                                        country={'sy'}

                                    />
                                )}
                            />
                        </div>

                    </div>

                    <div className="space-y-2.5">
                        <Label htmlFor="specialization">Specialization</Label>
                        {
                            errors.specialization &&
                            <FormErrorMessage message={errors.specialization.message} />
                        }
                        <Controller
                            name="specialization"
                            control={control}
                            render={({ field }) => (
                                <Input type="text" {...field} className="py-6" placeholder="specialization" id="specialization" />

                            )}
                        />


                    </div>

                    <div className='grid md:grid-cols-4 grid-cols-3 gap-4 justify-around py-3'>

                        <DayCheckBox value={'sun'} workingDays={getValues("workingDays")} changeWorkingDays={changeWorkingDays} />
                        <DayCheckBox value={'mon'} workingDays={getValues("workingDays")} changeWorkingDays={changeWorkingDays} />
                        <DayCheckBox value={'tue'} workingDays={getValues("workingDays")} changeWorkingDays={changeWorkingDays} />
                        <DayCheckBox value={'wed'} workingDays={getValues("workingDays")} changeWorkingDays={changeWorkingDays} />
                        <DayCheckBox value={'thu'} workingDays={getValues("workingDays")} changeWorkingDays={changeWorkingDays} />
                        <DayCheckBox value={'fri'} workingDays={getValues("workingDays")} changeWorkingDays={changeWorkingDays} />
                        <DayCheckBox value={'sat'} workingDays={getValues("workingDays")} changeWorkingDays={changeWorkingDays} />

                    </div>
                    <div className="space-y-2.5">

                        <Label htmlFor="email">Email</Label>
                        {
                            errors.email &&
                            <FormErrorMessage message={errors.email.message} />
                        }
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input type="email" {...field} name="email" className="py-6" placeholder="hello@gmail.com" id="email" />

                            )}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Label htmlFor="fee">Fee $</Label>

                        {
                            errors.fee &&
                            <FormErrorMessage message={errors.fee.message} />
                        }
                        <Controller
                            name="fee"
                            control={control}
                            render={({ field }) => (
                                <Input type="number" {...field} className="py-6" placeholder="Fee in $" id="fee" />

                            )}
                        />
                    </div>
                    <div className="space-y-2.5">

                        <Label htmlFor="address">Address</Label>
                        {
                            errors.address &&
                            <FormErrorMessage message={errors.address.message} />
                        }
                        <Controller
                            name="address"
                            control={control}
                            render={({ field }) => (
                                <Input type="text" {...field} className="py-6" placeholder="Country-City-Street" id="address" />

                            )}
                        />
                    </div>



                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" onClick={() => { setOpen(false) }}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" >Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>



        </Dialog >
    )
}

export default EditButton